import React, { Component } from "react";
import Header from "./header";
import Top from "./top-block";
import Logo from "./logo";

class App extends Component {
    render() {
        return (
            <div className = 'mainblock'>  
                <div className = 'header'>  
                <Logo />               
                <Header />
                </div>
                <Top />                
            </div>            
        );
    }
}

export default App;