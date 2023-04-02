// import React from 'react';
import { PropTypes } from 'prop-types';
import css from './Button.module.css'

export const Button =({children ,onClickLoad})=> {
  return (<button type='button' className={css.button} onClickLoad={onClickLoad}>Load more</button>)
}

Button.defaultProps = {
  onClickLoad: () => null,
  children: null,
}

Button.propTypes = {
  onClickLoad: PropTypes.func,
  children: PropTypes.node,
}