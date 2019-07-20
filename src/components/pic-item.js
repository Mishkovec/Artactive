import React, { Component } from "react";

class PicItem extends Component {
    render() {
        return (            
            <div className = "picItem" >
            <div className = 'pic_img'></div>
            <p>{this.props.picItem}</p>
            </div>           
        );
    }
}

export default PicItem;