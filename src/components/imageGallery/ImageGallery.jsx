//  import React from 'react';
import { Component } from 'react';

import { getImages } from 'services/fetch';
import { ErrorCard } from '../error/ErrorCard.jsx';
import { Loader } from '../loader/Loader.jsx';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem.jsx';
import { Button } from '../button/Button.jsx';
import { PropTypes } from 'prop-types';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    imagesArr: [],
    error: null,
    isLoading: false,
    page: 1,
    // per_page: 12,
    disabled: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const searchTextImages = this.props.searchTextImages.trim();

    if (
      prevProps.searchTextImages === searchTextImages &&
      prevState.page !== this.state.page &&
      this.state.page === 1
    ) {
      console.log('новый запрос');
      this.getFetchImages();
    }

    if (
      prevProps.searchTextImages !== searchTextImages &&
      this.state.page !== 1
    ) {
      console.log('сброс');
      this.setState({ page: 1, imagesArr: [] });
    }
    if (
      prevProps.searchTextImages !== searchTextImages &&
      this.state.page === 1
    ) {
      console.log('запрос 1');
      this.getFetchImages();
    }
    if (this.state.page !== 1 && prevState.page !== this.state.page) {
      console.log('новая стр');
      this.getFetchImages();
    }
  }
    async getFetchImages() {
    try {
      this.setState({ error: false });
      this.setState({ isLoading: true });
      const getImagesArr = await getImages(
        this.props.searchTextImages,
        this.state.page
      );
      if (getImagesArr.length === 0)
        throw new Error(
          ' Sorry, there are no images matching your search query. Please try again.'
        );
      this.setState({
        imagesArr: [],
        loading: false,
        page: 1,
        disabled: false,
      });
      return;

      //     .then(data => {
      //       if (data.status === 'error') return Promise.reject(data.message);
      //       else if (data.hits.length === 0)
      //         throw new Error(
      //           '!!! Sorry, there are no images matching your search query. Please try again.'
      //         );
      //       this.setState(prev => ({
      //         //  imagesArr: data.hits, error: null, page: data.page +1
      //         imagesArr: [...prev.imagesArr, ...data.hits],
      //         error: false,
      //         // page: data.page,
      //         disabled: true,
      //       }));
      //       console.log('data', data);

      //   if (getImagesArr.length === 12) {this.setState({ disabled: true });}
      //  else {this.setState({ disabled: false });}
      //   this.setState(({imagesArr}) => ({
      //       imagesArr: [...imagesArr, ...getImagesArr],
      //       isLoading: false ,
      // }));
    } catch (error) {
      console.log('error', error);
      this.setState({
        error: true,
        disabled: false,
        page: 1,
        imagesArr: [],
      });
    }
    //     .finally(() => {
    //       this.setState({ isLoading: false });
    //     });
  };

  // nextPage(){
  //   this.setState({ page:this.page + 1})
  // }

  onClickLoader = () => {
    console.log('loader', this.state.page);

    this.setState(({ page }) => ({ page: page + 1 }));
    console.log('page', this.state.page);
  };

  render() {
    const { imagesArr, error, isLoading, disabled } = this.state;

    return (
      <>
        {isLoading && (
          <>
            <Loader loading={isLoading} />
            <h1>Loading...</h1>
          </>
        )}
        {error && (
          <ErrorCard>Whoops, something went wrong: {error.message}</ErrorCard>
        )}
        {imagesArr && (
          <>
            <ul className={css.gallery}>
              {imagesArr.map(el => (
                <ImageGalleryItem
                  key={el.largeImageURL}
                  webformatURL={el.webformatURL}
                  largeImageURL={el.largeImageURL}
                  tags={el.tags}
                  id={el.id}
                  onClick={this.props.onClick}
                />
              ))}
            </ul>
            {disabled && <Button onClickLoader={this.onClickLoader} />}
          </>
        )}
      </>
    );
  }
}

ImageGallery.propType = {
  state: PropTypes.exact({
    imagesArr: PropTypes.array,
  }),
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  id: PropTypes.string,
  onClickLoader: PropTypes.func,
};
