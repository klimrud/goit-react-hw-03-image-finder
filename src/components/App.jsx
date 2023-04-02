import React, { Component } from 'react';
// import axios from "axios";
import { Searchbar } from './Searchbar.jsx';
import { ImageGallery } from './ImageGallery.jsx';
import {ImageGalleryItem } from './ImageGalleryItem.jsx';
import { Loader } from './Loader.jsx';
import { Button } from './Button.jsx';
import { Modal } from './Modal.jsx';
import css from './App.module.css';

export class App extends Component {
state = {
 searchTextImages: '',
 loading: false,
 showModal: false,
};

// componentDidMount(){
//   const KEY = `33583832-ef5cd451b2a0e1292cdfe78fd`
//   fetch(`https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(res => console.log('first', res.json())).then(console.log());
// }



handleFormSubmit = (value)=>{
  console.log(value);
};

toggleModal = () => {
  this.setState(({showModal}) =>({
    showModal: !showModal,
  }));
};

createSearchTextImage = (searchTextImages) => {
  this.setState({searchTextImages})
}

onClickLoad = () => {
  console.log('loader')
}

  render() {
    const {showModal,location} = this.state;
    return (
      <div className={css.app}>
        2 - Пошук зображень
        {showModal && <Modal onClose={this.toggleModal}><h2>Hooo</h2></Modal>}
        <Searchbar onSubmit={this.handleFormSubmit} createSearchTextImage={this.createSearchTextImage}/>
        {this.state.loading &&  (<><Loader loading={location}/><h1>Loading...</h1></>)}
        {this.state.icon && <div>{this.state.icon.name}</div>}
        <ImageGallery searchTextImages={this.state.searchTextImages}/>
        <ImageGalleryItem />
        {/* <Loader loading={location}/> */}
        <Button onClickLoader={this.onClickLoad}/>
        <button type='button' onClick={this.toggleModal}>open modal</button>
      </div>
    );
  }
}
