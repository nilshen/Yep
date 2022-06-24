import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Homepage from './homepege';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
