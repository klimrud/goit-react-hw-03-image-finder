//  import React from 'react';
import { Component } from 'react';
import { getImages } from 'services/fetch';
import { ErrorCard } from './ErrorCard';
import { ImageGalleryItem } from './ImageGalleryItem';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: '',
    isLoading: false,
    page: 1,
    per_page: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const searchTextImages = this.props.searchTextImages.trim();

    if (prevProps.searchTextImages !== searchTextImages && searchTextImages) {
      console.log('fetch', searchTextImages);
      this.setState({ isLoading: true });
      getImages(searchTextImages)
        .then(data => {
          if (data.status === 'error') return Promise.reject(data.message);
          this.setState({ images: data.hits, error: '', page: data.page + 1 });
        })
        .catch(error => {
          console.log('error', error);
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { images, error, isLoading } = this.state;

    return (
      <>
        {isLoading && <h2>Loadins...</h2>}
        {error && (
          <ErrorCard>Whoops, something went wrong: {error.message}</ErrorCard>
        )}
        {images && (
          <ul className={css.gallery}>
            {images.map(el => (
              <ImageGalleryItem
                clargeImageURL={el.largeImageURL}
                user={el.user}
                id={el.id}
              />
              // <li key={el.id} className={css['image-gallery-item']}>
              //   {el.user}
              //   <img
              //     className={css['gallery-item']}
              //     src={el.largeImageURL}
              //     alt={el.user}
              //   />
              // </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

// id, webformatURL, largeImageURL
// page: 1,
// per_page: 12
