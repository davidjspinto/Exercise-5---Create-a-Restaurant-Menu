import React from 'react';
import "./index.css";

const Categories = ({menuCategories, handleCategory}) => {

return (
  menuCategories.map((btnCategory, index) => {
  
    return (
      <div key={index}>
          <button type="button" onClick={()=>handleCategory(btnCategory)} className="filter-btn">{btnCategory}</button>
      </div>
    );
  })
)
}

export default Categories;