import React, { Component } from "react";

class Third_block extends Component {
    render() {
        return (
            <div className = 'third_block'>
                <div className = 'third_block_info'>
                    <h2 className ='point_name'>Оперативная полиграфия — от визитки до баннера</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error. tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div>
                <div className = 'third_block_image'></div>
                <div className = 'third_block_form'>
                    <i>Есть вопросы?</i>
                    <p>Оставьте заявку на консультацию</p>
                    <div className='third_form'>
                        <input type = 'text' placeholder='Имя'/>
                        <input type = 'phone' placeholder='Телефон'/>
                        <button className = 'btn third_block_btn'>Отправить</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Third_block;