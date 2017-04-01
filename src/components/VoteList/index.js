import React, { Component } from "react";
import VoteListItem from '../VoteListItem';
import { fb } from '../../utils';
import { FirebaseHOC } from '../../Hoc';

class VoteList extends Component {
  renderCandidates() {
    const sortedCandidates = this.props.candidates.sort(function(a, b) {
      return b.votes - a.votes;
    });
    return sortedCandidates.map(candidate => {
      return (
        <VoteListItem key={candidate.id} {...candidate} />
      );
    });
  }
  render() {
    return (
      <ul className="list-group">
        {
          this.props.candidates.length ? 
          this.renderCandidates() : 
          <h1 className="text-center">
            Loading...
          </h1>
        }
      </ul>
      );
  }
}

export default FirebaseHOC(VoteList, fb);
