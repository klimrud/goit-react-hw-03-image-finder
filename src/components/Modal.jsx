import { Component } from 'react';
//  import { PropTypes } from 'prop-types';
import css from './Modal.module.css';

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
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    );
  }
}
