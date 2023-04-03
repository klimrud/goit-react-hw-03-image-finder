import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const Loader = ({ loading }) => {
  return <ClipLoader
  color="blue"
  loading={loading}
  size={150}
  aria-label="Loading Spinner"
  
/>
};
