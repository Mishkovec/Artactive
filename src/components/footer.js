import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='contacts'>
                    <h2>5. Контакты</h2>
                    <p>г. Ярославль, проспект Октября, 88</p>
                    <p>art-aktiv.76@mail.ru</p>
                    <p>+7 (920) 148 81 31</p>
                </div>
                <div className='footer_info'> 
                    <p>ООО «АртАктив», 2019 ©</p>
                    <p>Политика конфиденциальноси</p>
                    <p>Designed by Sergey Strogiy</p>
                </div>
            </div>
        );
    }
}

export default Footer;