import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, user, onClick }) => {
  return (
    <li className={css['image-gallery-item']}>
      {user}
      <img className={css['gallery-item']} src={webformatURL} alt={user} onClick={onClick}/>
    </li>
    // <li className={css['gallery-item']}>
    //     <img
    //       // className={css['gallery-item']}
    //       src={webformatURL}
    //       alt={user}
    //       /></li>
  );
};
