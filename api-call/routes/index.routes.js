const router = require("express").Router();
const axios = require('axios')

/* GET home page */
router.get("/", (req, res, next) => {
  // make the request to the star wars api
  axios.get('https://swapi.py4e.com/api/films/')
    .then(response => {
      const movies = response.data.results
      console.log(response.data.results)
      res.render("index", { movies });
    })
    .catch(err => {
      next(err)
    })
});

module.exports = router;
