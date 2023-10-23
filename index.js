const express = require('express');
const fs = require('fs');
const markdownit = require('markdown-it');
const emoji = require('markdown-it-emoji');

const app = express();
var md = new markdownit({linkify: true, typographer: true})
    .use(emoji)

const stdHeader = __dirname + '/src/html/core/_header.html'
const stdFooter = __dirname + '/src/html/core/_footer.html'

function getPage(title, objs) {
    var data = fs.readFileSync(stdHeader);
    var edited = data.toString().replace(/<title>placeholder<\/title>/g, "<title>" + title.toString() + "</title>");

    const mdRegex = /^.*\.(md|MD)$/

    for (let i = 0; i < objs.length; i++) {
        var nextFile = __dirname + '/src/' + objs[i]
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


app.use('/', express.static(__dirname + "/src/css"))

app.route('/').get((req, res) => {
    var page = getPage("Home Page", ["/html/_topbar.html", "/md/home.md"]);
    res.send(page);
});

// 404 error handler
app.use(function(req, res, next) {
  res.status(404);
  res.type('txt').send('404 Error: Page not found');
});

app.listen(8080);
