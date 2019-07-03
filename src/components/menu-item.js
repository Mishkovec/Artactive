import React, { Component } from "react";

class MenuItem extends Component {
    render() {
        return (            
            <p className="menuItem">{this.props.menuItem}</p>           
        );
    }
}

export default MenuItem;