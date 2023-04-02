import { Component } from 'react';
import { createPortal } from 'react-dom';
//  import { PropTypes } from 'prop-types';
// import  as basicLightbox from 'basiclightbox';
import css from './Modal.module.css';
// const basicLightbox = require('basiclightbox');

// onClick = () => {
// 	basicLightbox.create(`
//   <img width="1400" height="900" src="https://placehold.it/1400x900">
// `).show()

// }
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    console.log('Modal DidMount');
    window.addEventListener('keydown', this.handleKeyDowne);
  }

  componentWillUnmount() {
    console.log('Will Unmount');
    window.removeEventListener('keydown', this.handleKeyDowne);
  }

  handleKeyDowne = e => {
    console.log('e.code', e.code);
    if (e.code === 'Escape') {
      console.log('click escape');
      this.props.onClose();
    }
  };

  handelBackdropClick = event => {
    console.log('Click my backDrop');
    console.log('на чем сработал обработчик события', event.currentTarget);
    console.log('на что кликнули', event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handelBackdropClick}>
        <div className={css.modal}>
          {/* {this.prop.children} */}
          <p>
            Your first lightbox with just a few lines of code. Yes, it's really
            that simple.
          </p>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
    // (
    //   <div className={css.overlay}>
    //     <div className={css.modal}>
    //       {/* {this.prop.children} */}
    //       <p>
    //         Your first lightbox with just a few lines of code. Yes, it's really
    //         that simple.
    //       </p>
    //       <img src="" alt="" />
    //     </div>
    //   </div>
    // );
  }
}
