const express = require("express");
const app = express();
app.use(express.json());

const postRestaurant = require("./controllers/controllers");

app.post("/api/restaurants", postRestaurant);

module.exports = app;
