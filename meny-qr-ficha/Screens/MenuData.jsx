import React from 'react';

const MenuData = () => {
  const menuData = {
    id: "menu123",
    name: "Menú Principal",
    items: ["Pizza", "Pasta", "Ensalada"],
  };

  return (
    <div>
      <h1>{menuData.name}</h1>
      <ul>
        {menuData.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuData;
