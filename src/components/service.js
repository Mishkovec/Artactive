import React, { Component } from "react";

class Service extends Component {
    render() {
        return (
            <div className = 'service_block'>
                <div className = 'service'>
                    <h2>2. Услуги </h2>
                    <p className='point_name'> Широкоформатная печать 
                        баннеров, растяжек, афиш</p>
                    <ul>
                        <li>подготовка макетов к печати, дизайн рекламных баннеров</li>
                        <li>срочная печать за 3 часа</li>
                        <li>проварка карманов и сварка нескольких изображений</li>
                        <li>пробивка люверсов и вварка монтажных тросов</li>
                        <li>изготовление цветопробы</li>
                        <li>доставка баннеров</li>
                    </ul>
                    <div className = 'service_btn_block'>
                        <div className ='service_btn_text'>
                            <i>Есть вопросы?</i>
                            <p>Закажите консультацию</p>
                        </div>
                        <button className = 'btn'>Заказать</button>
                    </div>
                </div>
                <div className = 'service_slider'>
                    <div className = 'slider_image'></div>
                </div>
            </div>
        );
    }
}

export default Service;