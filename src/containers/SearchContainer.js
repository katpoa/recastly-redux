import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

// var SearchContainer = () => {
// };

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.


var mapStateToProps = state => ({
  currentVideo: state.currentVideo
});

var mapDispatchToProps = dispatch => ({
  handleInputChange: (q) => dispatch(handleVideoSearch(q))
});

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

// Give VoteComponent the props it expects, votes + updateVote
//containers, connect actions to components

export default SearchContainer;


// example

// //action creator
// const createMyAction = () => ({ type: 'MY_ACTION' })

// //map
// const mapDispatchToProps = (dispatch, ownProps) => {

//   const boundActions = bindActionCreators({ createMyAction }, dispatch)
//   return {
//     dispatchPlainObject: () => dispatch({ type: 'MY_ACTION' }),
//     dispatchActionCreatedByActionCreator: () => dispatch(createMyAction()),
//     ...boundActions,
//     // you may return dispatch here
//     dispatch
//   }
// }