import React, { Component } from 'react';
// import axios from "axios";
import { Searchbar } from './Searchbar.jsx';
import { ImageGallery } from './ImageGallery.jsx';
import { Loader } from './Loader.jsx';
import { Modal } from './Modal.jsx';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchTextImages: '',
    loading: false,
    showModal: false,
  };

  handleFormSubmit = value => {
    console.log(value);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  createSearchTextImage = searchTextImages => {
    this.setState({ searchTextImages });
  };



  render() {
    const { showModal, loading } = this.state;
    return (
      <div className={css.app}>
        2 - Пошук зображень
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            // largeImageURL={this.props.largeImageURL}
          >
         <img src="" alt="" />
          </Modal>
        )}
        <Searchbar
          onSubmit={this.handleFormSubmit}
          createSearchTextImage={this.createSearchTextImage}
        />
        {this.state.loading && (
          <>
            <Loader loading={loading} />
             {/* <h1>Loading...</h1> */}
          </>
        )}
        {this.state.searchTextImages && !this.state.loading &&(
        //   <div>{this.state.searchTextImages}</div>
        // )}
        <ImageGallery
          searchTextImages={this.state.searchTextImages}
          onClick={this.toggleModal}
        /> )}
      </div>
    );
  }
}
