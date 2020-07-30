const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const desc = JSON.parse(body); // transform to obj via JSON

    /*
   Our callback has 2 param //!callback(error, desc)
   All possible cases are down here
   */

    if (error) { // Checking if there is YES ERROR
      callback(error, null);
    } else {
      if (desc.length === 0) { // If there is NO ERROR but NO DESCRIPTION
        callback('There is no description for this.', null);
      } else { // If there is NO ERROR anf YES DESCRIPTION
        callback(null, desc[0].description);
      }
    }
  });
};


module.exports = { fetchBreedDescription };