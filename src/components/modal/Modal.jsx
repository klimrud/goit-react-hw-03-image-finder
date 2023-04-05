import { Component } from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDowne);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDowne);
  }

  handleKeyDowne = e => {
    if (e.code === 'Escape') {
      console.log('click Escape');
      this.props.onCloseModal();
    }
  };

  handelBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handelBackdropClick}>
        <div className={css.modal}>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  onClick: PropTypes.func,
};
