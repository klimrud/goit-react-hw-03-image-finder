import axios from "axios";

const URL = `https://pixabay.com/api/`;
const API_KEY = `33583832-ef5cd451b2a0e1292cdfe78fd`;
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export class getImages{

constructor(){
  this.page=1;
  this.searchTextImages= '';
}

async getImagesApi(){
  try {
    const res = await axios.get(`${URL}?q=${this.searchTextImages}&key=${API_KEY}&page=${this.page}&orientation=horizontal&image_type=photo&per_page=12`);
  const data =await res.data;
  if (data.status === 'error') return Promise.reject(data.message);
  // this.nextPage();
return data;
  }catch(error){
    console.log('error.message', error.message);
  }
}

}



// export  function getImages(searchTextImages, page) {
//   //  return fetch(`${URL}?q=${searchTextImages}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//   return fetch(
//     `${URL}?q=${searchTextImages}&key=${API_KEY}&page=${page}&orientation=horizontal&image_type=photo&per_page=12`
//   ).then(res => res.json());
//   // {if (res.ok) res.json()})
//   // return Promise.reject()
//   // .then(console.log);
// }
