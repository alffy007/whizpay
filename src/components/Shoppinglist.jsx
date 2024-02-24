import React, { useState } from 'react';
import { IoAddCircle } from "react-icons/io5";


const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItemToList = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="  border-l-3 border-gray-400  flex-1  justify-start ml-4">
      <div className="flex items-center p-7">
        <input
          type="text"
          onSubmit={addItemToList}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item..."
          className="border-none  py-3 px-3 w-full rounded-2xl mr-2"
        />
        
        <button
          onClick={addItemToList}
          className="bg-blue-500 flex justify-center items-center p-2 hover:bg-blue-600 w-44 text-white  rounded-2xl"
        >
          <IoAddCircle  size={30}   />
<h1 className='text-sm'>Add item</h1>
        </button>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded p-4  ml-5 mb-2 flex justify-between items-center"
          >
            <span>{item}</span>
            
            <button
              onClick={() => {
                const newItems = [...items];
                newItems.splice(index, 1);
                setItems(newItems);
              }}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
