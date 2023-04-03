// import React from 'react';
import { PropTypes } from 'prop-types';
import css from './Button.module.css'

export const Button =({children ,onClickLoader})=> {

  return (<button type='click' className={css.button} onClickLoader={onClickLoader}>{children}Load more</button>)
}

Button.defaultProps = {
  onClickLoader: () => null,
  children: null,
}

Button.propTypes = {
  onClickLoader: PropTypes.func,
  children: PropTypes.node,
}