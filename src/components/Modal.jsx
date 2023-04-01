import { Component } from 'react';
//  import { PropTypes } from 'prop-types';
// import * as basicLightbox from 'basiclightbox'
import css from './Modal.module.css';

// onclick = () => {
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

export class Modal extends Component {

componentDidMount() {
  console.log('Modal DidMount');
}

componentWillUnmount() {
  console.log('Will Unmount')
}

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          {/* {this.prop.children} */}
          {/* <img src={el.webformatURL} alt="" /> */}
        </div>
      </div>
    );
  }
}
