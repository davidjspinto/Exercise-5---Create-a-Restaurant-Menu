import React from 'react';
import "./index.css";

const Categories = ({menuCategories, handleCategory}) => {

return (
  <div className="btn-container">
    {menuCategories.map((btnCategory, index) => {
      return (
        <div key={index}>
            <button className="filter-btn" type="button" onClick={()=>handleCategory(btnCategory)} className="filter-btn">{btnCategory}</button>
        </div>
      );
    })}
  </div>
)
}

export default Categories;