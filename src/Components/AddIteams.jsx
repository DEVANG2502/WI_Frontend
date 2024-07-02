import React, { useState } from 'react';
import Footer from './Footer';

const AddItem2 = () => {
  const [searchItem, setSearchItem] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  const handleSubmit = () => {
    console.log("Item Name:", itemName);
    console.log("Item Price:", itemPrice);
    console.log("Shipping Method:", shippingMethod);
  };

  const handleShippingMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setShippingMethod(selectedMethod === "Standard" ? "None" : selectedMethod);
  };

  return (
    <div className=''>
      <div className="p-4 min-h-screen">
        <div className="box-content p-4 bg-white rounded shadow-md">
          <div className="flex justify-between items-center pb-5 border-b">
            <div className=''>
              <h1 className="text-xl font-semibold">Add Item</h1>
              <button className="text-green-400 font-medium">Add</button>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Item Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <select
                value={shippingMethod}
                onChange={handleShippingMethodChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="" disabled>
                  Select Shipping Method
                </option>
                <option value="Standard">Same Day Delivery</option>
                <option value="Express">Within a week</option>
                <option value="Overnight">10 Days</option>
              </select>
            </div>
            {shippingMethod === "None" && (
              <div className="text-sm text-gray-500 mt-2">
                Selected shipping method: None
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-green-400 text-white mt-5 py-2 rounded-full"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddItem2;
