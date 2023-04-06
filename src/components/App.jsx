import React, { Component } from 'react';

import { PropTypes } from 'prop-types';
import { Searchbar } from '../components/searchbar/Searchbar';
import { ImageGallery } from '../components/imageGallery/ImageGallery.jsx';

import css from './App.module.css';

export class App extends Component {
  state = {
    searchTextImages: '',
  };

  createSearchTextImage = searchTextImages => {
    this.setState({ searchTextImages });
  };

  render() {
    return (
      <div className={css.app}>
        2 - Пошук зображень
        <Searchbar createSearchTextImage={this.createSearchTextImage} />
        <ImageGallery searchTextImages={this.state.searchTextImages} />
      </div>
    );
  }
}

App.propTypes = {
  createSearchTextImage: PropTypes.func,
  earchTextImages: PropTypes.string,
};
