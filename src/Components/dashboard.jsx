import React, { useState } from 'react';

const Dashboard = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  return (
    <div className=" bg-blue-100">
      <div className="box-content  p-4">
        <div className="flex justify-between items-center pb-5">
          <h1 className=''>Explore</h1>
          <h1 className='text-green-400'>Filter</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={handleSearch}
            className="w-full px-3 py-2 border rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
