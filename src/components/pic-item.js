import React, { Component } from "react";

class PicItem extends Component {
    render() {
        return (            
            <div className = "picItem" >
            <div className = 'pic_img'>
                {/* <img className='img' src= {this.props.img} />  */}
                <div className={this.props.id}></div>
            </div>
            <p>{this.props.picItem}</p>
            </div>           
        );
    }
}

export default PicItem;