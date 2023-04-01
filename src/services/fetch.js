const URL = `https://pixabay.com/api/`;
const API_KEY = `33583832-ef5cd451b2a0e1292cdfe78fd`;
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export function getImages(searchTextImages) {
//  return fetch(`${URL}?q=${searchTextImages}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
return fetch(`${URL}?q=${searchTextImages}&key=${API_KEY}`)
    .then(res => res.json())
      // {if (res.ok) res.json()})
      // return Promise.reject()
    // .then(console.log);
}
