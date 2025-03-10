"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
// Home
pageRouter.get("/", (req, res) => {
    res.status(200).render('index', {
        title: 'Homepage',
    });
});
// About
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: "About Us",
    });
});
// Contact
pageRouter.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        title: "contact me",
        contact: "My email: coolemail@hotmail.com",
    });
});
exports.default = pageRouter;
