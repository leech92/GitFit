import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ currentUser, logout }) => {
  
    const personalProfile = () => (
      <hgroup className="profile">
          <p> One Human's Profile </p>

          <h1> User's Activity </h1>

          <button> Log Out? </button>
      </hgroup>
    );

    return personalProfile(); 
};
  
  
export default Profile;