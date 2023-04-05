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
    images: [],
    error: '',
    isLoading: false,
    disabled: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const searchTextImages = this.props.searchTextImages.trim();

    if (
      prevProps.searchTextImages !== searchTextImages &&
      searchTextImages &&
      prevState.page !== this.state.page &&
      this.state.page === 1
    ) {
      this.onFetchImages(); //новый запрос
    }

    if (
      (searchTextImages !== prevProps.searchTextImages &&
        searchTextImages &&
        this.state.page !== 1) ||
      (prevProps.searchTextImages !== searchTextImages && this.state.page === 1)
    ) {
      this.setState({
        page: 1,
        images: [],
        isLoading: true,
      }); //сброс
    }
    if (
      searchTextImages !== prevProps.searchTextImages &&
      this.props.searchTextImages &&
      this.state.page === 1
    ) {
      this.onFetchImages(); //запрос 1
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.onFetchImages(); //новая стр
    }
  }

  onFetchImages = () => {
    this.setState({ error: false, isLoading: true });
    getImages(this.props.searchTextImages, this.state.page)
      .then(data => {
        if (data.hits.length === 0) {
          this.setState(prev => ({
            images: [],
            page: 1,
            error: true,
            isLoading: false,
            disabled: false,
          }));
          throw new Error(
            '!!! Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (data.hits.length >= 12) {
          this.setState({ disabled: true });
        }
        this.setState({ disabled: false });

        this.setState(prev => ({
          images: [...prev.images, ...data.hits],
          isLoading: false,
        }));
      })
      .catch(error => {
        console.log('error', error);
        this.setState({
          error: true,
          images: [],
          disabled: false,
          page: 1,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  onClickLoader = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, error, isLoading, disabled } = this.state;

    return (
      <>
        {isLoading && (
          <>
            <Loader loading={isLoading} />
            <h1>Loading...</h1>
          </>
        )}
        {error && (
          <ErrorCard>
            Whoops, something went wrong: !!!Sorry, there are no images matching
            your search query. Please try again.
          </ErrorCard>
        )}
        {images && (
          <>
            <ul className={css.gallery}>
              {images.map(el => (
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
            {!disabled && <Button onClickLoader={this.onClickLoader} />}
          </>
        )}
      </>
    );
  }
}

ImageGallery.propType = {
  state: PropTypes.exact({
    images: PropTypes.array,
  }),
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  id: PropTypes.string,
  onClickLoader: PropTypes.func,
};
