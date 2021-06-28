import React, { Component } from 'react';
import PropTypes from "prop-types";

class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidMount() {
    if (localStorage.getItem("auth-token") != "") {

    }
  }
  render() {
    return (
      <div>
        <h3>Profile</h3>
      </div>
    );
  }
}

export default Profile;