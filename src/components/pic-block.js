import React, { Component } from "react";
import PicItem from "./pic-item";

class Pic extends Component {
    constructor() {
		super();		
		this.state = {
            picItem: [
                {id: 'id1', content: 'Приём и детальное обсуждение заказа', img: './img/ebook@1X.png'},
                {id: 'id2', content: 'Создание и согласование дизайн-макета', img: '../assets/tablet@1X.png'},
                {id: 'id3', content: 'Печать и постпечатная обработка изделий любых размеров', img: '../../assets/writer@1X.png'},
                {id: 'id4',content: 'Доставка готовой продукции', img: 'assets/moving@1X.png'},                
            ] 			
        };
    }   
    render() {
        const picItems = this.state.picItem.map((item, index) => {
			return <PicItem
                key={index}
                id={item.id}
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