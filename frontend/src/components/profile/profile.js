import React from 'react';
import { Link } from 'react-router-dom';
import "../../stylesheets/profile.css";
import Footer from '../footer.js'; 

const Profile = ({ currentUser, logout }) => {
  
  const personalProfile = () => (
    <hgroup className="profile">
      <p> One Human's Profile </p>
      <button> Follow Me! </button>

      <h1> Meal Plans </h1>

      <h1> Workout Plans </h1>

      <h1> User's Activity </h1>

      <h1> Gyms near You!</h1>

      <h1> Followers </h1>

      <h1> Following </h1>

      <button> Log Out? </button>

      <Footer />

    </hgroup>
  );

  return personalProfile(); 
};
  
  
export default Profile;