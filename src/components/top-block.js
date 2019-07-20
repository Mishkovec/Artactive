import React, { Component } from "react";

class Top extends Component {
    render() {
        return (
            <div className='top'>
                <div className='top-img'></div>
                <div className='top-text'> 
                <h2>РАЗМЕР ИМЕЕТ ЗНАЧЕНИЯ!</h2>                
                <p>Оперативная полиграфия  и широкоформатная печать любого размера</p>
                <div className='top-btn-block'>
                    <button className='btn'>ЗАКАЗАТЬ ПЕЧАТЬ</button>
                    <p>с доставкой по Ярославлю  и Ярославской области</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Top;