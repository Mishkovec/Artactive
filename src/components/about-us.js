import React, { Component } from "react";
import Pic from "./pic-block";

class AboutUs extends Component {
    render() {
        return (
            <div className = 'about_us_common'>
                <Pic />
                <div className = 'about_us'>
                    <h2>1. О Нас</h2>
                    <p className ='point_name'>Полный спектр услуг —  от дизайна до печати</p>
                    <p> К вашим услугам мы предлагаем полный спектр работ, начиная от печати открыток, чертежей, баннеров, растяжек, создания буклетов и эксклюзивных календарей, и заканчивая постпечатной обработкой. 

                        В копицентре не просто предоставляют услуги печати: мы ориентируемся на комплексное обслуживание. Все услуги, будь то оперативная цифровая печать открыток или разработка серии календарей, Вы можете получить в одном месте, воспользовавшись сопутствующими услугами копицентра. 

                        При этом работа выполняется в максимально сжатые сроки и не в ущерб качеству конечного результата, которое неизменно остается на высоте. </p>
                </div>   
            </div>
        );
    }
}

export default AboutUs;