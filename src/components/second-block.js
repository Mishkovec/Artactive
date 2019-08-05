import React, { Component } from "react";

class Second_block extends Component {
    render() {
        return (
            <div className = 'second_block'>
                <div className = 'second_block_image'></div>
                <div className = 'second_block_info'>
                    <h2 className='point_name'>Широкоформатная печать для вашего интерьера</h2>
                    <p className = 'second_block_text'>
                    Печатаем широкоформатные фотографии на глянцевой и матовой фотобумаге разной плотности, на глянцевом и матовом холсте или на самоклеющейся пленке. также можем предложить обработку и редактирование ваших фотографий силами наших дизайнеров: композиции, фотоколлаж, ретушь, различные эффекты
                    </p>
                    <button className = 'btn second_block_btn'>Оставить заявку</button>
                </div>
            </div>
        );
    }
}

export default Second_block;