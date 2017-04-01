import axios from 'axios';
const BASEURL = 'https://reddit-election.firebaseio.com/';

export const API = {
  getCandidates: function() {
    return axios.get(`${BASEURL}.json`)
  },
  updateVote: function(id, newVote) {
    return axios.patch(`${BASEURL}candidates/${id}/.json`, { votes: newVote})
  }
};
