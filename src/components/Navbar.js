import React from 'react';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../context/AppContext';

const Navbar = () => {
  const {value} = useGlobalContext();

  return (
    <>
      <h1>navbar</h1>
    </>
  );
};

export default Navbar;
