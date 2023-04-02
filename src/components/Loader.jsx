// import React from 'react';
// import css from './Loader.module.css'

import { MutatingDots  } from  'react-loader-spinner'


export const Loader = ({location}) => {
   return <MutatingDots location={location}/>;

  // return (<MutatingDots 
  // height="100"
  // width="100"
  // color="#4fa94d"
  // secondaryColor= '#4fa94d'
  // radius='12.5'
  // ariaLabel="mutating-dots-loading"
  // wrapperStyle={{props}}
  // wrapperClass=""
  // visible={true} 
  // />);
}