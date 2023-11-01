import { getPage } from "./index.js";
import { app } from './index.js';
import express from 'express';
import fs from 'fs';
import gamelist from './gamelist.json' assert { type: "json" };

// stinky workaround
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export function routeGames() {

    // games page
    app.use('/games', express.static('./src/css/basic'))

    app.route('/games').get((req, res) => {
        var page = getPage("Games", ["/html/_topbar.html", "/md/games.md", "/html/_credits.html"]);
        res.send(page);
    });

    // handle flash games

    
    app.use('/games/flash/:game', express.static("./games/flash"));

    app.route('/games/flash/:game').get((req, res) => {
        if (gamelist['flash-games'].includes(req.params.game.toString()) == true) {
            var page = getPage("flash game!!!", ["/html/_topbar.html", "/html/flash.html", "/html/_credits.html"]);
            var newpage = page.toString().replace(/placeholder/g, "player.load(\"" + req.params.game.toString() + ".swf\") // inserted line");

            res.send(newpage);
        } else {
            var page = getPage("sussy!!!", ["/html/_topbar.html", "/md/errors/game.md"])
            res.send(page)
        }
    });

    // send the css file to the client because i am lazy
    app.get('/games/flash/:game/style.css', (req, res) => {
        res.sendFile(__dirname + '/src/css/basic/style.css')
    })

    // start of code spaghetti!!!

    app.use('/games/a-dance-of-fire-and-ice', express.static('./games/web/a-dance-of-fire-and-ice'))

    app.route('/games/a-dance-of-fire-and-ice').get((req, res) => {
        var page = fs.readFileSync('./games/web/a-dance-of-fire-and-ice/index.html')
        res.send(page);
    });

    app.use('/games/basket-random', express.static('./games/web/basket-random'))

    app.route('/games/basket-random').get((req, res) => {
        var page = fs.readFileSync('./games/web/basket-random/index.html')
        res.send(page);
    });

    app.use('/games/basketball-stars', express.static('./games/web/basketball-stars'))

    app.route('/games/basketball-stars').get((req, res) => {
        var page = fs.readFileSync('./games/web/basketball-stars/index.html')
        res.send(page);
    });

    app.use('/games/bb', express.static('./games/web/bb'))

    app.route('/games/bb').get((req, res) => {
        var page = fs.readFileSync('./games/web/bb/index.html')
        res.send(page);
    });

    app.use('/games/celeste', express.static('./games/web/celeste'))

    app.route('/games/celeste').get((req, res) => {
        var page = fs.readFileSync('./games/web/celeste/index.html')
        res.send(page);
    });

    app.use('/games/ducklife', express.static('./games/web/ducklife'))

    app.route('/games/ducklife').get((req, res) => {
        var page = fs.readFileSync('./games/web/ducklife/index.html')
        res.send(page);
    });

    app.use('/games/ducklife2', express.static('./games/web/ducklife2'))

    app.route('/games/ducklife2').get((req, res) => {
        var page = fs.readFileSync('./games/web/ducklife2/index.html')
        res.send(page);
    });

    app.use('/games/ducklife3', express.static('./games/web/ducklife3'))

    app.route('/games/ducklife3').get((req, res) => {
        var page = fs.readFileSync('./games/web/ducklife3/index.html')
        res.send(page);
    });

    app.use('/games/ducklife4', express.static('./games/web/ducklife4'))

    app.route('/games/ducklife4').get((req, res) => {
        var page = fs.readFileSync('./games/web/ducklife4/index.html')
        res.send(page);
    });

    app.use('/games/friendlyfire', express.static('./games/web/friendlyfire'))

    app.route('/games/friendlyfire').get((req, res) => {
        var page = fs.readFileSync('./games/web/friendlyfire/index.html')
        res.send(page);
    });

    app.use('/games/madalin-cars-multiplayer', express.static('./games/web/madalin-cars-multiplayer'))

    app.route('/games/madalin-cars-multiplayer').get((req, res) => {
        var page = fs.readFileSync('./games/web/madalin-cars-multiplayer/index.html')
        res.send(page);
    });

    app.use('/games/moto-x3m', express.static('./games/web/moto-x3m'))

    app.route('/games/moto-x3m').get((req, res) => {
        var page = fs.readFileSync('./games/web/moto-x3m/index.html')
        res.send(page);
    });

    app.use('/games/moto-x3m-pool-party', express.static('./games/web/moto-x3m-pool-party'))

    app.route('/games/moto-x3m-pool-party').get((req, res) => {
        var page = fs.readFileSync('./games/web/moto-x3m-pool-party/index.html')
        res.send(page);
    });

    app.use('/games/moto-x3m-spooky-land', express.static('./games/web/moto-x3m-spooky-land'))

    app.route('/games/moto-x3m-spooky-land').get((req, res) => {
        var page = fs.readFileSync('./games/web/moto-x3m-spooky-land/index.html')
        res.send(page);
    });

    app.use('/games/moto-x3m-winter', express.static('./games/web/moto-x3m-winter'))

    app.route('/games/moto-x3m-winter').get((req, res) => {
        var page = fs.readFileSync('./games/web/moto-x3m-winter/index.html')
        res.send(page);
    });

    app.use('/games/paperclips', express.static('./games/web/paperclips'))

    app.route('/games/paperclips').get((req, res) => {
        var page = fs.readFileSync('./games/web/paperclips/index.html')
        res.send(page);
    });

    app.use('/games/retro-bowl', express.static('./games/web/retro-bowl'))

    app.route('/games/retro-bowl').get((req, res) => {
        var page = fs.readFileSync('./games/web/retro-bowl/index.html')
        res.send(page);
    });

    app.use('/games/rooftop-snipers', express.static('./games/web/rooftop-snipers'))

    app.route('/games/rooftop-snipers').get((req, res) => {
        var page = fs.readFileSync('./games/web/rooftop-snipers/index.html')
        res.send(page);
    });

    app.use('/games/sans-fight', express.static('./games/web/sans-fight'))

    app.route('/games/sans-fight').get((req, res) => {
        var page = fs.readFileSync('./games/web/sans-fight/index.html')
        res.send(page);
    });

    app.use('/games/slope', express.static('./games/web/slope'))

    app.route('/games/slope').get((req, res) => {
        var page = fs.readFileSync('./games/web/slope/index.html')
        res.send(page);
    });

    app.use('/games/slope-2', express.static('./games/web/slope-2'))

    app.route('/games/slope-2').get((req, res) => {
        var page = fs.readFileSync('./games/web/slope-2/index.html')
        res.send(page);
    });

    app.use('/games/sm64', express.static('./games/web/sm64'))

    app.route('/games/sm64').get((req, res) => {
        var page = fs.readFileSync('./games/web/sm64/index.html')
        res.send(page);
    });

    app.use('/games/SpaceCompany', express.static('./games/web/SpaceCompany'))

    app.route('/games/SpaceCompany').get((req, res) => {
        var page = fs.readFileSync('./games/web/SpaceCompany/index.html')
        res.send(page);
    });

    app.use('/games/tetris', express.static('./games/web/tetris'))

    app.route('/games/tetris').get((req, res) => {
        var page = fs.readFileSync('./games/web/tetris/index.html')
        res.send(page);
    });

    app.use('/games/volleygosh', express.static('./games/web/volleygosh'))

    app.route('/games/volleygosh').get((req, res) => {
        var page = fs.readFileSync('./games/web/volleygosh/index.html')
        res.send(page);
    });
}

