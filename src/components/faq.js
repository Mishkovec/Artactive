import React, { Component } from "react";
import FaqPharagraphs from "./faq-paragraphs";
class FAQ extends Component {
    render() {
        return (
            <div className='faq'>
                <h2>4. Частые вопросы (FAQ)</h2>
                <FaqPharagraphs/>              
                <div className ='faq_form'>
                    <i>Остались вопросы?</i>
                    <p>Оставьте заявку на консультацию</p>
                    <div className='last_form'>
                        <input type = 'text' placeholder='Имя'/>
                        <input type = 'phone' placeholder='Телефон'/>
                        <button className = 'btn faq_form_btn'>Отправить</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;