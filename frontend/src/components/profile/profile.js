import React from 'react';
import { Link } from 'react-router-dom';
import "../../stylesheets/profile.css";
import Footer from '../footer.js'; 
// import TopNavBar from '../navBar.js'

const Profile = ({ currentUser, logout }) => {
  
  const personalProfile = () => (
    <hgroup className="profile">

      {/* <TopNavBar /> */}

      <p> One Human's Profile </p>

      <button> Follow Me! </button>
      {/* use the wildcard in the url and store it as a var, pass in current User as params.user */}

      <h1> Meal Plans </h1>

      <h1> Workout Plans </h1>

      <h1> User's Activity </h1>

      <h1> Followers </h1>

      <h1> Following </h1>

      <button> Log Out? </button>

      <Footer />

    </hgroup>
  );

  return personalProfile(); 
};
  
  
export default Profile;