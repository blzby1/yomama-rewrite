import express from 'express';
import fs from 'fs';

export const app = express();

app.use("/", express.static("./cellsalive"));

app.get("/", (req, res) => {
    res.redirect("/index.htm");
})

app.use(function(req, res, next) {
    res.status(404);
    res.send("404 Error: Page not found");
});

app.listen(8673);