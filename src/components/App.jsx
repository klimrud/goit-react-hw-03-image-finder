import React, { Component } from 'react';
// import axios from "axios";
import { Searchbar } from './Searchbar.jsx';
import { ImageGallery } from './ImageGallery.jsx';
import {ImageGalleryItem } from './ImageGalleryItem.jsx';
import { Loader } from './Loader.jsx';
import { Button } from './Button.jsx';
import { Modal } from './Modal.jsx';
// import './styles.css';

export class App extends Component {
state = {
 images: '',
 loading: false,
};

// componentDidMount(){
//   const KEY = `33583832-ef5cd451b2a0e1292cdfe78fd`
//   fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(res => console.log('first', res.json())).then(console.log());
// }

handleFormSubmit = (value)=>{
  console.log(value);
};

  render() {
    return (
      <div>
        2 - Пошук зображень
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.icon && <div>{this.state.icon.name}</div>}
        <ImageGallery />
        <ImageGalleryItem />
        <Loader/>
        <Button />
        <Modal />
      </div>
    );
  }
}
