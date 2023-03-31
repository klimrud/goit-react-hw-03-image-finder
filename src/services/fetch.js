const URL = `https://pixabay.com/api/`;
const API_KEY = `33583832-ef5cd451b2a0e1292cdfe78fd`;

export function getImages(searchTextImages) {
 return fetch(`${URL}?key=${API_KEY}&q=${searchTextImages}`)
    .then(res => res.json())
    // .then(console.log);
}
