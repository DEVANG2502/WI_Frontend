// import React, { useState } from 'react';

// const Additem = () => {
//    const [searchItem, setSearchItem] = useState('');
//  const handleSearch = (e) => {
//     setSearchItem(e.target.value);
//     console.log("Searching for:", e.target.value);
//   };
//   return (
//     <div>

  
//     <div className="p-4 bg-blue-100">
//       <div className="box-content  p-4">
//         <div className="flex justify-between items-center pb-5">
//           <h1 className=''>Add Item</h1>
//           <h1 className='text-green-400'>Add</h1>
//         </div>
        
//       </div>
//     </div>

//    <div className='m-5 mb-8'>
//     <div className=''>
//           <input
//             type="text"
//             placeholder="Item Name"
          
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>  <div>
//           <input
//             type="text"
//             placeholder="Item Price"
          
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>
//           <div>
//           <input
//             type="text"
//             placeholder="Shipping Method"
          
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>
//           </div>
//           <button className='w-full bg-green-400   py-2  border rounded-full '> Submit</button>
//    </div>
     
//   );
// };

// export default Additem;

import React, { useState } from 'react';

const AddItem = () => {
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

  return (
    <div className="p-4 bg-blue-100 min-h-screen">
      <div className="box-content p-4 bg-white rounded shadow-md">
        <div className="flex justify-between items-center pb-5 border-b">
          <h1 className="text-xl font-semibold">Add Item</h1>
          <button className="text-green-400 font-medium">Add</button>
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
              onChange={(e) => setShippingMethod(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="" disabled>
                Select Shipping Method
              </option>
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
              <option value="Overnight">Overnight</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-400 text-white mt-5 py-2 rounded-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddItem;
