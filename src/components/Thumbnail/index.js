import React from 'react';
import './Thumbnail.css';

const Thumbnail = props => (
  <div
    className="candidate-thumbnail"
    style={{
      backgroundImage: `url(${props.image})`
    }}
  />
);

export default Thumbnail;
