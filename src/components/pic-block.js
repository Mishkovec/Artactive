import React, { Component } from "react";
import PicItem from "./pic-item";

class Pic extends Component {
    constructor() {
		super();		
		this.state = {
            picItem: [
                {content: 'Приём и детальное обсуждение заказа'},
                {content: 'Создание и согласование дизайн-макета'},
                {content: 'Печать и постпечатная обработка изделий любых размеров'},
                {content: 'Доставка готовой продукции'},                
            ] 			
        };
    }   
    render() {
        const picItems = this.state.picItem.map((item, index) => {
			return <PicItem
				key={index}
				picItem={item.content}				
			/>;
		});
        return ( 
            <div className = 'pic_block'>{picItems} </div>    
        );
    }
}

export default Pic;