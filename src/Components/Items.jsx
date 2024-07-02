import React, { useEffect, useState } from 'react';

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
        {
          "createdAt": "2024-07-01T03:39:43.992Z",
          "item": "item 4",
          "image_url": "https://placehold.co/400x400.png",
          "price": 94,
          "shipping_method": "Same Day Shipping",
          "id": "4"
        },
        {
          "createdAt": "2024-07-01T04:45:48.368Z",
          "item": "item 5",
          "image_url": "https://placehold.co/400x400.png",
          "price": 13,
          "shipping_method": "Same Day Shipping",
          "id": "5"
        },
        {
          "createdAt": "2024-07-01T01:51:34.268Z",
          "item": "item 6",
          "image_url": "https://placehold.co/400x400.png",
          "price": 50,
          "shipping_method": null,
          "id": "6"
        },
        {
          "createdAt": "2024-07-01T03:27:01.009Z",
          "item": "item 7",
          "image_url": "https://placehold.co/400x400.png",
          "price": 33,
          "shipping_method": null,
          "id": "7"
        },
        {
          "createdAt": "2024-07-01T08:17:42.536Z",
          "item": "item 8",
          "image_url": "https://placehold.co/400x400.png",
          "price": 62,
          "shipping_method": "Same Day Shipping",
          "id": "8"
        },
        {
          "createdAt": "2024-07-01T05:24:39.813Z",
          "item": "item 9",
          "image_url": "https://placehold.co/400x400.png",
          "price": 47,
          "shipping_method": null,
          "id": "9"
        },
        {
          "createdAt": "2024-07-01T12:59:43.276Z",
          "item": "item 10",
          "image_url": "https://placehold.co/400x400.png",
          "price": 0,
          "shipping_method": "Same Day Shipping",
          "id": "10"
        },
        {
          "createdAt": "2024-07-01T06:07:39.347Z",
          "item": "item 11",
          "image_url": "https://placehold.co/400x400.png",
          "price": 80,
          "shipping_method": null,
          "id": "11"
        },
        {
          "createdAt": "2024-07-01T06:29:52.237Z",
          "item": "item 12",
          "image_url": "https://placehold.co/400x400.png",
          "price": 79,
          "shipping_method": null,
          "id": "12"
        },
        {
          "createdAt": "2024-06-30T17:32:46.778Z",
          "item": "item 13",
          "image_url": "https://placehold.co/400x400.png",
          "price": 12,
          "shipping_method": null,
          "id": "13"
        },
        {
          "createdAt": "2024-06-30T14:38:11.126Z",
          "item": "item 14",
          "image_url": "https://placehold.co/400x400.png",
          "price": 92,
          "shipping_method": "Same Day Shipping",
          "id": "14"
        },
        {
          "createdAt": "2024-06-30T19:18:30.302Z",
          "item": "item 15",
          "image_url": "https://placehold.co/400x400.png",
          "price": 11,
          "shipping_method": "Same Day Shipping",
          "id": "15"
        },
        {
          "createdAt": "2024-07-01T00:20:53.196Z",
          "item": "item 16",
          "image_url": "https://placehold.co/400x400.png",
          "price": 41,
          "shipping_method": null,
          "id": "16"
        },
        {
          "createdAt": "2024-07-01T08:30:38.864Z",
          "item": "item 17",
          "image_url": "https://placehold.co/400x400.png",
          "price": 76,
          "shipping_method": null,
          "id": "17"
        },
        {
          "createdAt": "2024-06-30T16:48:50.557Z",
          "item": "item 18",
          "image_url": "https://placehold.co/400x400.png",
          "price": 47,
          "shipping_method": "Same Day Shipping",
          "id": "18"
        },
        {
          "createdAt": "2024-07-01T02:55:55.165Z",
          "item": "item 19",
          "image_url": "https://placehold.co/400x400.png",
          "price": 33,
          "shipping_method": null,
          "id": "19"
        },
        {
          "createdAt": "2024-07-01T13:11:35.835Z",
          "item": "item 20",
          "image_url": "https://placehold.co/400x400.png",
          "price": 61,
          "shipping_method": "Same Day Shipping",
          "id": "20"
        }
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
              <h2 className="text-xs font-medium text-green-500">
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
