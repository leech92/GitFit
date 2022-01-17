import React from 'react';
import "../../stylesheets/splash.css";
const Splash = (props) => {

    const { login, signup } = props;

    return (
        <div className = "splash-container">

            <div className = "splash-header">
                <div className = "splash-header-top">
                        <div className = "header-logo">
                            <div className = "header-name">
                                <span className='header-git'>Git</span>
                                <span className='header-fit'>Fit</span>
                            </div>
                        </div>

                        <div className = "header-buttons">
                            <button className = "header-login">Log In</button>
                            <button className = "header-signup">Sign Up</button>
                        </div>
                </div>
                  <video src="https://gitfit-app-images.s3.amazonaws.com/splash_video_3.mp4" autoPlay = {true} loop muted className = "video-banner"></video>
            </div>
            
            <div className = "splash-body">
                <div className = "splash-body-content-top">
                    <img src="https://gitfit-app-images.s3.amazonaws.com/treadmill-splash.jpg" alt="runner" className = "splash-runner" />
                </div>
            </div>
            <div className = "splash-footer">

            </div>
        </div>
    )
}

export default Splash;


//   <video src="https://gitfit-app-images.s3.amazonaws.com/splash_video_3.mp4" autoPlay = {true} loop muted className = "video-banner"></video>