import React from 'react';
import "./index.css";

const Menu = ({menuItems}) => {
  
  return(
    <div className="section-center">
      {menuItems.map((item)=>{
        const{id, title, price, img, desc} = item;
        return(
          <div className="menu-item" key={id}>
            <div>
            <img className="photo" src={img} alt="" />
            </div>
            <div>
              <div className="item-info">
                <h4>{title}</h4>
                <p className="price">{price}</p>
              </div>
              <div className="item-text">
                <p>{desc}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Menu;
