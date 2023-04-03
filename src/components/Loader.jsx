import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
// import css from './Loader.module.css'

export const Loader = ({ loading }) => {
  // return <DotLoader color="#36d7b7" location={location} />;
  return <ClipLoader
  color="blue"
  loading={loading}
  // cssOverride={override}
  size={150}
  aria-label="Loading Spinner"
  // data-testid="loader"
/>
};
