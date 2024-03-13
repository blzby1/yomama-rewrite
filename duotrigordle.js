import express from 'express';

export const app = express();

app.use("/", express.static("./games/web/duotrigordle"));

app.get("/", (req, res) => {
    res.sendFile("./games/web/duotrigordle");
})

app.use(function(req, res, next) {
    res.status(404);
    res.send("404 Error: Page not found");
});

app.listen(6969);