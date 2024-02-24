import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import Customer from "../components/Customercard.jsx";

const ShoppingList = () => {
  // const [items, setItems] = useState([]);
  // const [newItem, setNewItem] = useState("");

  // const addItemToList = () => {
  //   if (newItem.trim() !== "") {
  //     setItems([...items, newItem]);
  //     setNewItem("");
  //   }
  // };
  const [isTyping, setIsTyping] = useState(false);
  const [searchInput, setSearchInput] = useState("");
const [totalbill ,setTotalBill]  = useState(0)
  const shoppingitems = [
    { product_name: "T-shirt", price: "200₹", warranty: "No warranty" },
    { product_name: "Jeans", price: "300₹", warranty: "No warranty" },
    { product_name: "Jacket", price: "400₹", warranty: "1 year" },
    { product_name: "Sneakers", price: "450₹", warranty: "6 months" },
    { product_name: "Dress", price: "300₹", warranty: "No warranty" },
    { product_name: "Shoes", price: "250₹", warranty: "3 months" },
    { product_name: "Smartphone", price: "12000₹", warranty: "1 year" },
    { product_name: "Laptop", price: "20000₹", warranty: "2 years" },
    { product_name: "Tablet", price: "34000₹", warranty: "1 year" },
    { product_name: "Headphones", price: "3000₹", warranty: "6 months" },
    { product_name: "Smartwatch", price: "4000₹", warranty: "1 year" },
    { product_name: "Camera", price: "25000₹", warranty: "2 years" },
    { product_name: "Television", price: "20000₹", warranty: "1 year" },
    { product_name: "Speaker", price: "2300₹", warranty: "6 months" },
    { product_name: "Keyboard", price: "2000₹", warranty: "No warranty" },
    { product_name: "Mouse", price: "2300₹", warranty: "No warranty" },
    { product_name: "Backpack", price: "400₹", warranty: "3 months" },
    { product_name: "Wallet", price: "200₹", warranty: "No warranty" },
    { product_name: "Watch", price: "4000₹", warranty: "1 year" },
    { product_name: "Sunglasses", price: "300₹", warranty: "No warranty" },
    { product_name: "Hat", price: "230₹", warranty: "No warranty" },
    { product_name: "Scarf", price: "300₹", warranty: "No warranty" },
    { product_name: "Gloves", price: "200₹", warranty: "No warranty" },
  ];
  

  const [items, setItems] = useState([]);

  const handleClick = ({ product_name, price ,warranty}) => {
    const cartitem = {
      product_name: product_name,
      price: price,
      warranty:warranty
    };
    let s = items;
    const newprice = parseInt(price);
    setTotalBill(totalbill+newprice)
    s.push(cartitem);
    setItems(s);
    alert(`You clicked on ${product_name}`);
    setSearchInput("");
    setIsTyping(false);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue !== "") {
      setIsTyping(true);
      console.log(isTyping);
    } else {
      setIsTyping(false);
      console.log(isTyping);
    }
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredItems =
    searchInput.length > 0
      ? shoppingitems.filter((item) =>
          item.product_name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : shoppingitems;

  return (
    <div className="  border-l-3 border-gray-400  flex-1  justify-start ml-4">
      <div className="flex items-center p-7">
        <input
          type="text"
          onChange={handleChange}
          value={searchInput}
          placeholder="Enter item..."
          className="border-none bg-slate-50 text-black py-3 px-3 w-full rounded-2xl mr-2"
        />

        <button
          // onClick={}
          className="bg-blue-500 flex justify-center items-center p-2 hover:bg-blue-600 w-52 text-white  rounded-2xl"
        >
          <IoAddCircle size={30} />
          <h1 className="text-sm">Add item</h1>
        </button>
      </div>
      <div className="w-96">
        {filteredItems
          .filter((item) => {
            const searchtearm = searchInput.toLowerCase();
            const shopitem = item.product_name.toLowerCase();
            return searchtearm && shopitem.startsWith(searchtearm);
          })
          .map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded px-4 py-3  ml-5 mb-1 flex justify-between items-center"
            >
              <span className="font-semibold">{item.product_name}</span>

              <div className="flex items-center font-bold gap-3">
                <h1 className="text-green-600 ">{item.price}</h1>
                <button
                  onClick={() =>
                    handleClick({
                      product_name: item.product_name,
                      price: item.price,
                      warranty:item.warranty
                    })
                  }
                  className="bg-green-600 flex justify-center items-center p-2 hover:bg-green-800 w-30 text-white  rounded-2xl"
                >
                  <IoAddCircle size={20} />
                  <h1 className="text-xs">Add item</h1>
                </button>
              </div>
            </div>
          ))}
      </div>
   <div className="flex flex-1 ">
   <div className={`${isTyping ? "hidden" : ""}`}>
        {items.map((item, index) => (
          <div className="p-4 ml-6 mb-3 flex items-center justify-between drop-shadow-sm rounded-lg bg-slate-100 w-[800px]">
            <div>
              <h1 className="text-xl font-semibold ">
                {JSON.stringify(item["product_name"]).replace(/^"(.*)"$/, "$1")}
              </h1>
              <h1 className=" pt-2 text-xs">Qty 1</h1>
            </div>
          <div >
          <h1 className="text-green-600 justify-end flex font-semibold text-2xl">
              {" "}
              {JSON.stringify(item["price"]).replace(/^"(.*)"$/, "$1")}
            </h1>
            <h1>
            <h1 className="text-gray-600 font-semibold text-sm">
              {" "}
              Warranty: {JSON.stringify(item["warranty"]).replace(/^"(.*)"$/, "$1")}
            </h1>
            </h1>
          </div>
            
          </div>
        ))}
        
      </div>   
      <Customer list={items} passedData={totalbill} />
   </div>
   
    </div>
  );
};

export default ShoppingList;
