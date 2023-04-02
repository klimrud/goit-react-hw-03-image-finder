 import React from 'react';
 import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({id, largeImageURL, user})=> {
  return ( 
     <li key={id} className={css['image-gallery-item']}>
    {user}
    <img
      className={css['gallery-item']}
      src={largeImageURL}
      alt={user}
    />
  </li>
  // <li className={css['gallery-item']}>
  //     <img
  //       // className={css['gallery-item']}
  //       src={largeImageURL}
  //       alt={user}
  //       /></li>
        )
}