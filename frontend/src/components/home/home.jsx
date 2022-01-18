import React from "react";
import TopNavBar from "../navBar";
import LeftNav from "../leftNav";
import Feed from "../feed/feed";
import "../../stylesheets/home.css"

class Home extends React.Component{
    render() {
        return (
            <div className="home-container">
                <TopNavBar />
                <div className="home-main">
                    <div className="left-nav">
                        <LeftNav />
                    </div>
                    <div>
                        <Feed />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;