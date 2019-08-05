import React, { Component } from "react";
class Rewiews extends Component {
    render() {
        return (
            <div className='rewiews'>
                <h2>3. Отзывы</h2>
                <div className ='slider'>
                    <div className = 'rewiew1'>
                        <div className ='rewiew1_photo'></div>
                        <div className ='rewiew_info'>
                            <p className='rewiew_text'>
                            Обратился в компанию АртАктив за визитками. Это мой первый опыт, поэтому немного нервничал, не знал, с чего начать. Остался доволен, потому что мне всё объяснили, показали и сделали по высшему разряду. Советую!
                            </p>
                            <p className='rewiew_name'>Александров Максим, 24 года</p>
                            <p className='rewiew_nets'>vk.com/mr.sharp</p>
                        </div>
                    </div>
                    <div className = 'rewiew2'>
                        <div className ='rewiew2_photo'></div>
                        <div className ='rewiew_info'>
                            <p className='rewiew_text'>Заказывала большой постер в компании АртАктив. Ребята сделали все очень быстро и качественно. Рассказали технологию печати и посоветовали оптимальный вариант для меня.</p>
                            <p className='rewiew_name'>Сакович Мария, 26 лет</p>
                            <p className='rewiew_nets'>vk.com/maria_sakovich</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rewiews;