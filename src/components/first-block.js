import React, { Component } from "react";
import AboutUs from "./about-us";
import Service from "./service";

class First_block extends Component {
    render() {
        return (
            <div className = 'first_block'>
                <AboutUs />
                <Service />
            </div>
        );
    }
}

export default First_block;