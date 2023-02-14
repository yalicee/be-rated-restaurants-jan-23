const db = require("../db/connection");

const insertRestaurant = (newRestaurant) => {
  const { restaurant_name, area_id, cuisine, website } = newRestaurant;
  return db
    .query(
      `INSERT INTO restaurants (restaurant_name, area_id, cuisine, website) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [restaurant_name, area_id, cuisine, website]
    )
    .then((result) => {
      console.log(result);
      return result.rows[0];
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

module.exports = insertRestaurant;
