import React from 'react';
import "../../stylesheets/splash.css";
import Footer from "../footer.js"; 
import { Link } from 'react-router-dom';

const Splash = () => {

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

                            <Link to = "/login">
                                <button className = "header-login">Log In</button>
                            </Link>
                            <Link to = "/signup">
                                <button className = "header-signup">Sign Up</button>
                            </Link>
                        </div>
                </div>
                  <video src="https://gitfit-app-images.s3.amazonaws.com/splash_video_3.mp4" autoPlay = {true} loop muted className = "video-banner"></video>
            </div>

            <div className = "splash-body">
                <div className = "splash-body-content-top">

                    <div className = "splash-message">
                        <div className = "splash-message-content">
                            
                            <span className = "get-fit-title">Get Fit.</span>
                            <span className = "get-fit-message">Find new ways to get fit! Check out other athletes. See what they eat and how they workout. With GitFit, you're one step closer to your fitness goals.</span>
                            
                        </div>
                            
                    </div>

                    <div className = "splash-content-images">
                        <img src="https://gitfit-app-images.s3.amazonaws.com/jumprope.jpg" alt="" className = "splash-athlete"/>
                        <img src="https://gitfit-app-images.s3.amazonaws.com/happy-runner-splash.jpg" alt="happyrunner" className = "splash-athlete"/>
                        <img src="https://gitfit-app-images.s3.amazonaws.com/bicep-curl-splash.jpg" alt="" className = "splash-athlete"/>
                    </div>

                    <div className = "eat-healthy-message-content">

                        <div className = "eat-healthy-message">
                            <span className = "eat-healthy-title">Eat Healthy.</span>
                            <span className = "eat-healthy-para">Abs are made in the kitchen.</span>
                        </div>

                    </div>

                    <div className = "meal-prep-container">
                        <div className='meal-prep-content'>
                            <img src="https://gitfit-app-images.s3.amazonaws.com/beef.jpg" alt="" className = "meal-prep-image" />
                            <img src="https://gitfit-app-images.s3.amazonaws.com/carrot-meal.jpg" alt="" className = "meal-prep-image" />
                            <img src="https://gitfit-app-images.s3.amazonaws.com/chicken.jpg" alt="" className = "meal-prep-image" />
                            <img src="https://gitfit-app-images.s3.amazonaws.com/fruits.jpg" alt="" className = "meal-prep-image" />
                        </div>
                        <div className='meal-prep-content'>
                            <img src="https://gitfit-app-images.s3.amazonaws.com/noodles.jpg" alt="" className = "meal-prep-image" />
                            <img src="https://gitfit-app-images.s3.amazonaws.com/oatmeal.jpg" alt="" className = "meal-prep-image" />
                            <img src="https://gitfit-app-images.s3.amazonaws.com/rice.jpg" alt="" className = "meal-prep-image" />
                            <img src="https://gitfit-app-images.s3.amazonaws.com/salad.jpg" alt="" className = "meal-prep-image" />
                        </div>

                    </div>

                    <div className = "splash-bottom-container">
                            <span className = "bottom-message">Git It Done.</span>
                    </div>
                    <div className = "video-container">
                        <video src="https://gitfit-app-images.s3.amazonaws.com/jump-splash.mp4" autoPlay = {true} loop muted className = "video-banner-bottom"></video>
                    </div>
                </div>
            </div>
            <div className = "splash-footer">
            <Footer />
            </div>

        </div>
    )
}

export default Splash;