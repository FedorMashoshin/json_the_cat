const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; // Reading our val from Node

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});