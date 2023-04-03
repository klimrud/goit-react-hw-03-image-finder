//  import React from 'react';
import { Component } from 'react';
import { getImages } from 'services/fetch';
import { ErrorCard } from './ErrorCard';
import { Loader } from './Loader.jsx';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button.jsx';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
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
          else  if(data.hits.length === 0)throw new Error('!!! Sorry, there are no images matching your search query. Please try again.');
          this.setState({ images: data.hits, error: null, page: data.page +1 });  
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

  // nextPage(){
  //   this.setState({ page:this.page + 1})
  // }


  // onClickLoader = (e) => {
  //   console.log('loader');
  //   console.log('e.target', e.target)
   
  // };

  render() {
    const { images, error, isLoading} = this.state;

    return (
      <>
        {isLoading && (<>
            <Loader loading={isLoading} />
             <h1>Loading...</h1>
          </>)}
        {error && (
          <ErrorCard>Whoops, something went wrong: {error.message}</ErrorCard>
        )}
        {images && (
          <>
            <ul className={css.gallery} >
              {images.map(el => (
                <ImageGalleryItem key={el.largeImageURL} 
                webformatURL={el.webformatURL}
                  user={el.user}
                  id={el.id}
                  onClick={this.props.onClick}
                />
              ))}
            </ul>
            <Button onClickLoader={event => console.log(event)}>Click me!</Button>
          </>
        )}
      </>
    );
  }
}

