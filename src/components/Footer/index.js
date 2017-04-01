import React from 'react';
import './Footer.css';
import svg from '../../assets/images/SVG/react.svg';

const Footer = props => (
  <footer className="footer">
    <span className="bottom">
      Built with React.js {"  "}
      <img alt="React Logo" src={svg} />
    </span>
  </footer>
);

export default Footer;
