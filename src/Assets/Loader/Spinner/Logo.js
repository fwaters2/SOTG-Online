import React from 'react';
import logo from '../../Logos/SOTG_Icon.svg';
import './Spinner.css';

export default function Logo() {
  return (
    <div className="loader">
      <img className="spinner" src={logo} alt="logo" />
    </div>
  );
}
