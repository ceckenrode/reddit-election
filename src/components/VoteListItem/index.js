import React from 'react';
import Thumbnail from '../Thumbnail';
import VoteWidget from '../VoteWidget';
import './VoteListItem.css';

const VoteListItem = props => (
  <li className="candidate list-group-item">
    <Thumbnail image={props.image} />
    <section className="info">
      <h3 className="name">
        <a target="_blank" href={props.twitter}>{props.name}</a>
      </h3>
      <p className="bio">{props.bio}</p>
    </section>
    <VoteWidget
      id={props.id}
      votes={props.votes}
      background={props.background} 
    />
  </li>
);

export default VoteListItem;
