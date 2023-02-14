const app = require("../app");
const insertRestaurant = require("../models/models");

const postRestaurant = (req, res) => {
  const body = req.body;
  insertRestaurant(body)
    .then((restaurant) => {
      res.status(201).send({ restaurant });
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

module.exports = postRestaurant;
