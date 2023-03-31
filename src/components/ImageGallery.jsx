//  import React from 'react';
import { Component } from 'react';
import css from './ImageGallery.module.css'
import { getImages } from 'services/fetch';

export class ImageGallery extends Component{
state= {
  images: null,
}

componentDidUpdate(prevProps, prevState) { 
  const searchTextImages = this.props.searchTextImages.trim()

  if(prevProps.searchTextImages !== searchTextImages && searchTextImages){
    console.log('fetch', searchTextImages)
    getImages(searchTextImages).then(({hits}) => {
      this.setState({images: hits})
    })
  }
} 


render(){
const {images} = this.state
return (images&&<ul className={css.gallery}>
  {images.map(el=><li key={el.id} className={css['image-gallery-item']}>{el.user}</li>)}
</ul>);
}
}