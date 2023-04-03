import React, { Component } from 'react';
// import axios from "axios";
import { PropTypes } from 'prop-types';
import { Searchbar } from '../components/searchbar/Searchbar';
import { ImageGallery } from '../components/imageGallery/ImageGallery.jsx';

import css from './App.module.css';

export class App extends Component {
  state = {
    searchTextImages: '',
   
  };

  handleFormSubmit = searchTextImages => {
    console.log(searchTextImages);              //было value
  };

  createSearchTextImage = searchTextImages => {
    this.setState({ searchTextImages });
  };

  render() {
    return (
      <div className={css.app}>
        2 - Пошук зображень
        <Searchbar
          onSubmit={this.handleFormSubmit}
          createSearchTextImage={this.createSearchTextImage}
        />
        {this.state.searchTextImages &&(
        <ImageGallery
          searchTextImages={this.state.searchTextImages}/> 
          )}
      </div>
    );
  }
}

App.propTypes={
  handleFormSubmit: PropTypes.func,
  createSearchTextImage: PropTypes.func, 
  earchTextImages: PropTypes.string,
}
