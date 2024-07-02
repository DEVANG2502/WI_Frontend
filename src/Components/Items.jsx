import React, { useEffect, useState } from 'react';
import Footer from './Footer';
const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          "createdAt": "2024-07-01T13:31:21.051Z",
          "item": "item 1",
          "image_url": "https://placehold.co/400x400.png",
          "price": 16,
          "shipping_method": "Same Day Shipping",
          "id": "1"
        },
        {
          "createdAt": "2024-06-30T16:25:38.372Z",
          "item": "item 2",
          "image_url": "https://placehold.co/400x400.png",
          "price": 10,
          "shipping_method": "Same Day Shipping",
          "id": "2"
        },
        {
          "createdAt": "2024-06-30T14:27:08.542Z",
          "item": "item 3",
          "image_url": "https://placehold.co/400x400.png",
          "price": 82,
          "shipping_method": null,
          "id": "3"
        },
      
      ];
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {items.map(item => (
        <div key={item.id} className="flex m-4 p-4 border rounded-lg shadow-md">
          <div className="pr-5">
            <img src={item.image_url} alt={item.item} className="w-20 h-20 object-cover" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">{item.item}</h1>
            <h1 className="font-thin text-sm">
              MRP: <span className="text-white-500 font-bold">Rs.{item.price}</span>
            </h1>
            {item.shipping_method && (
              <h2 className="text-xs font-medium text-gray-300">
                {item.shipping_method}
              </h2>
            )}
          </div>
        </div>
      ))}
  
    </div>
  );
}

export default Items;
