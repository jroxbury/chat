"use strict";

var http = require("http"),
	express = require("express");

const app = express();
app.set("view engine", "jade");

app.use(express.static("./public"));

app.use( (request,response,next) => {
	console.log("IN");
	next();
	console.log("OUT");
});

app.get("/", (request,response) => {
	response.render("index", {title: "TITLE!"});
});

const server = new http.Server(app);

const port = 3000;

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

