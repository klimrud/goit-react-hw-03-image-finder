import React, { Component } from 'react';
import { Modal } from '../modal/Modal';

import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    return (
      <li className={css['image-gallery-item']}>
        {tags}
        <img
          className={css['gallery-item']}
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
          id={id}
        />
        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={largeImageURL} alt={tags} width="800" height="600" />
          </Modal>
        )}
      </li>
    );
  }
}
