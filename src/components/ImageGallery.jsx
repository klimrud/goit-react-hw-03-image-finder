//  import React from 'react';
import { Component } from 'react';
import { getImages } from 'services/fetch';
import { ErrorCard } from './ErrorCard';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const searchTextImages = this.props.searchTextImages.trim();

    if (prevProps.searchTextImages !== searchTextImages && searchTextImages) {
      console.log('fetch', searchTextImages);
      this.setState({isLoading: true})
      getImages(searchTextImages)
        .then(data => {
          if (data.status === 'error') return Promise.reject(data.message);
          this.setState({ images: data.hits });
        })
        .catch((error) => {
          console.log('error', error);
          this.setState({ error });
        }).finally(()=>{
          this.setState({isLoading: false})
        })
    }
  }

  render() {
    const { images, error, isLoading } = this.state;

    return (
      <>
      {isLoading&&<h2>Loadins...</h2>}
        {error && <ErrorCard>{error}</ErrorCard>}
        {images && (
          <ul className={css.gallery}>
            {images.map(el => (
              <li key={el.id} className={css['image-gallery-item']}>
                {el.user}
                <img
                  className={css['gallery-item']}
                  src={el.largeImageURL}
                  alt={el.user}
                />
              </li>
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
