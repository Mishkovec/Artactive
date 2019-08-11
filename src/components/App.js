import React, { Component } from "react";
import Header from "./header";
import Top from "./top-block";
import Logo from "./logo";
import First_block from "./first-block";
import Second_block from "./second-block";
import Third_block from "./third-block";
import Rewiews from "./rewiews";
import FAQ from "./faq";
import Footer from "./footer";
import FooterInfo from "./footer-info";

class App extends Component {
    render() {
        return (<div className = 'main'>
            <div className = 'header-top'>  
                <div className = 'header-menu'>  
                <Logo />               
                <Header />                
                </div> 
                <Top />                                    
            </div>  
            <First_block />   
            <Second_block /> 
            <Third_block /> 
            <Rewiews />
            <FAQ />  
            <Footer /> 
            <FooterInfo />
        </div>) 
    }
}

export default App;