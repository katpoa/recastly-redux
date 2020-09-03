import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// var SearchContainer = () => {
// };

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var SearchContainer = connect(
  handleSearchChange
)(Search);

// Give VoteComponent the props it expects, votes + updateVote
//containers, connect actions to components

export default SearchContainer;
