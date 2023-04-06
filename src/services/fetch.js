const URL = `https://pixabay.com/api/`;
const API_KEY = `33583832-ef5cd451b2a0e1292cdfe78fd`;

export function getImages(searchTextImages, page) {
  return fetch(
    `${URL}?q=${searchTextImages}&key=${API_KEY}&page=${page}&orientation=horizontal&image_type=photo&per_page=12`
  ).then(res => res.json());
}
