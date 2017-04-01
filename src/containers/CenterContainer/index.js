import React from 'react';
import './CenterContainer.css';

const CenterContainer = props => (
  <div className="wrapper container">
    <h1 className="text-center">Reddit Elections</h1>
    <h2 className="text-center">Where the Popular Vote Always Wins</h2>
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        {props.children}
      </div>
    </div>
  </div>
);

export default CenterContainer;
