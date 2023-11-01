import express from 'express';
import fs from 'fs';
import markdownit from 'markdown-it';
import emoji from 'markdown-it-emoji';
import { routeGames } from './games.js';

export const app = express();

var md = new markdownit({linkify: true, typographer: true})
    .use(emoji)

const stdHeader = './src/html/core/_header.html'
const stdFooter = './src/html/core/_footer.html'

export function getPage(title, objs) {
    var data = fs.readFileSync(stdHeader);
    var edited = data.toString().replace(/<title>placeholder<\/title>/g, "<title>" + title.toString() + "</title>");

    const mdRegex = /^.*\.(md|MD)$/

    for (let i = 0; i < objs.length; i++) {
        var nextFile = './src/' + objs[i]
        if (mdRegex.test(nextFile) == true) {
            var mdFile = fs.readFileSync(nextFile);
            edited += md.render(mdFile.toString())
        } else {
            edited += fs.readFileSync(nextFile);
        }
    }
    edited += fs.readFileSync(stdFooter);
    return edited;
}


app.use('/', express.static("./src/css/basic"));

app.route('/').get((req, res) => {
    var page = getPage("Home Page", ["/html/_topbar.html", "/md/home.md", "/html/_credits.html"]);
    res.send(page);
});

// biggest function you'll ever see
routeGames();

app.use('/docs', express.static("./src/css/basic"));

app.route('/docs').get((req, res) => {
    var page = getPage("Docs", ["/html/_topbar.html", "/md/docs/docs.md", "/html/_credits.html"]);
    res.send(page);
})

app.route('/docs/todo').get((req, res) => {
    var page = md.render("# TODO (top means coming first): \n - put minecraft on the site \n - make the web games not be fullscreen anymore \n - add to the docs");
    var unblockers = fs.readFileSync('./src/md/docs/unblockers.md');
    page += md.render(unblockers.toString())
    res.send(page)
});

// 404 error handler
app.use(function(req, res, next) {
    res.status(404);
    var page = getPage("404 Error", ["/html/_topbar.html", "/md/errors/404.md", "/html/_credits.html"])
    res.send(page);
});

app.listen(8080);