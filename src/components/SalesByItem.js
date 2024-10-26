import React, { useState } from 'react';

const SalesByItem = () => {
  const [items] = useState([
    { name: 'Roti', orders: 1218 },
    { name: 'Masala Dosa', orders: 800 },
    { name: 'Paneer Butter Masala', orders: 450 },
    { name: 'Chole Bhature', orders: 600 },
    { name: 'Biryani', orders: 900 },
    { name: 'Pav Bhaji', orders: 700 },
    { name: 'Samosa', orders: 400 },
    { name: 'Paneer Tikka', orders: 550 },
    { name: 'Spring Roll', orders: 350 },
    { name: 'Ice Cream', orders: 250 },
    { name: 'Gulab Jamun', orders: 300 },
    { name: 'Dhokla', orders: 500 },
    { name: 'Tandoori Chicken', orders: 800 },
    { name: 'Masala Chai', orders: 650 },
    { name: 'French Fries', orders: 450 },
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 mr-3 border border-gray-300" style={{ width: '400px', height: '400px' }}>
      <h2 className="text-lg font-bold">Sales by Item</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 overflow-y-auto" style={{ height: 'calc(100% - 48px)' }}> {/* Adjusting for header height */}
        {items.map((item, index) => (
          <div key={index} className="flex justify-between bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-sm">
            <span className="font-semibold">{item.name}</span>
            <span>{item.orders} orders</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesByItem;
