const request = require('request');
const breed = process.argv[2]; // Reading our val from Node
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) { // If we have an error --> show it
    console.log('Ooops, it seems like an error: \n ', error);
  }
  const data = JSON.parse(body); // transform to obj via JSON
  console.log(`${data[0].name}: ${data[0].description}`); // Console exact what we want
});