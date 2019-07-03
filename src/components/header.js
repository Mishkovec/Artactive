import React, { Component } from "react";
import MenuItem from "./menu-item";

class Header extends Component {
    constructor() {
		super();		
		this.state = {
            menuItem: [
                {content: 'О НАС'},
                {content: 'УСЛУГИ'},
                {content: 'ОТЗЫВЫ'},
                {content: 'FAQ'},
                {content: 'КОНТАКТЫ'},
                {content: '+7 (920) 148 81 31'},
            ] 			
        };
    }   
    render() {
        const menuItems = this.state.menuItem.map((item, index) => {
			return <MenuItem
				key={index}
				menuItem={item.content}				
			/>;
		});
        return ( 
            <div className='menu'>                              
                {menuItems}                 
                <button className='menuBtn'>ЗАКАЗАТЬ ЗВОНОК</button>             
            </div>      
        );
    }
}

export default Header;