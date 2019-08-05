import React, { Component } from "react";

class FaqBlock extends Component {
    render() {
        return ( 
            <div className ='faq_block'>
                <p className ="faq_block_question">{this.props.question}</p>  
                <p className ="faq_block_answer">{this.props.answer}</p>  
            </div>                                 
        );
    }
}

export default FaqBlock;