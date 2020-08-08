const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const userRouter = require("./users/users-router");

const server = express();

const sessionConfig = {
    name: "mySession",
    secret: "non yo bid ness",
    cookie: {
        maxAge: 1000 * 30,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use("/api", userRouter);

server.get("/", (req, res) => {
    res.json({ api: "up"});
});

module.exports = server;