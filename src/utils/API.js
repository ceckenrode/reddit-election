import axios from 'axios';
const BASEURL = 'https://reddit-election.firebaseio.com/';

export const API = {
  updateVote: function(id, newVote) {
    return axios.patch(`${BASEURL}candidates/${id}/.json`, { votes: newVote})
  }
};
