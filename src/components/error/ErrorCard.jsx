import React from 'react';
import { PropTypes } from 'prop-types';
import css from './ErrorCard.module.css';

export const ErrorCard=({children})=>{
  console.log('sos')
  return (<div className={css['alert'][ 'alert-danger']} role="alert">
  {children}
</div>)
}

ErrorCard.propTypes = {
  children: PropTypes.node,
}