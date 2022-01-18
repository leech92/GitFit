import React from "react";
import TopNavBar from "../navBar";
import Feed from "../feed/feed";

class Home extends React.Component{
    render() {
        return (
            <div>
                <TopNavBar />
                This is home
                <Feed />
            </div>
        )
    }
}

export default Home;