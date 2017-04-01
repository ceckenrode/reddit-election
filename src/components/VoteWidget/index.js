import React, { Component } from 'react';
import { API } from '../../utils';
import './VoteWidget.css';

class VoteWidget extends Component {
  vote = (type) => {
    const types = {
      'UPVOTE': 1,
      'DOWNVOTE': -1
    };
    API
      .updateVote(this.props.id, this.props.votes + types[type])
      .catch(err => console.log(err));
  }
  render() {
    return (
      <span className={`vote-container ${this.props.background}`}>
        <span className="vote-count">{this.props.votes}</span>
        <i
          onClick={() => this.vote('DOWNVOTE')}
          className="vote downvote fa fa-thumbs-down"
          aria-hidden="true"
        /> 
        <i
          onClick={() => this.vote('UPVOTE')}
          className="vote upvote fa fa-thumbs-up"
          aria-hidden="true"
        /> 
      </span>
    );
  }
}

export default VoteWidget;
