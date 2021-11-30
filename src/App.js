import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import categoriesList from "./data";

function App() {

  const [menuItems, setMenuItems] = useState(categoriesList)

  /* Step 1 - List of Categories */
  const rawCategories = categoriesList.map((item) => item.category)
  console.log(rawCategories)

  /* Step 2 - Filter de RawList of Categories */
  const menuCategories = rawCategories.filter((item, index)=>(rawCategories.indexOf(item) === index))                               
  console.log(menuCategories)

  function handleCategory (btnCategory) {
    const newCategory = categoriesList.filter((items)=>items.category === btnCategory)
    setMenuItems(newCategory) 
   }
  
  return(
    <div>
      <h2>Restaurant menu</h2>
      <Categories menuCategories={menuCategories} handleCategory={handleCategory} />
      <Menu menuItems={menuItems}/>
    </div>
  ) 
}

export default App;
