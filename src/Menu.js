import React from 'react';

const Menu = ({menuItems}) => {
  
  return(
    menuItems.map((item)=>{
      const{id, title, category, price, img, desc} = item;
      return(
        <div key={id}>
          <img className="photo" src={img} alt="" />
          <p>{title}</p>
          <p>{category}</p>
          <p className="price">{price}</p>
          <p>{desc}</p>
        </div>
      )
    })
  );
};

export default Menu;
