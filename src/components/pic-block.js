import React, { Component } from "react";
import PicItem from "./pic-item";

class Pic extends Component {
    constructor() {
		super();		
		this.state = {
            picItem: [
                {content: 'Приём и детальное обсуждение заказа', img: '../src/assets/ebook@1X.png'},
                {content: 'Создание и согласование дизайн-макета', img: '../src/assets/tablet@1X.png'},
                {content: 'Печать и постпечатная обработка изделий любых размеров', img: '../src/assets/writer@1X.png'},
                {content: 'Доставка готовой продукции', img: '../src/assets/moving@1X.png'},                
            ] 			
        };
    }   
    render() {
        const picItems = this.state.picItem.map((item, index) => {
			return <PicItem
				key={index}
                picItem={item.content}
                img={item.img}				
			/>;
		});
        return ( 
            <div className = 'pic_block'>{picItems} </div>    
        );
    }
}

export default Pic;