import { useState } from 'react';
import SalesChart from './SalesChart';
import AverageOrderValue from './AverageOrderValue';

const SalesAnalysis = () => {
  const [activeTab, setActiveTab] = useState('totalSales');
  const [activeMainTab, setActiveMainTab] = useState('salesAnalysis');

  const renderTabContent = () => {
    if (activeMainTab === 'salesAnalysis') {
      switch (activeTab) {
        case 'totalSales':
          return (
            <div>
              <h3 className="text-lg font-semibold">Sales Performance</h3>
              <SalesChart />
              <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-500 text-center">30% better compared to last month</p>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <div className="flex justify-between items-center p-4 bg-red-100 rounded-md">
                    <div>
                      <h4 className="text-xl font-semibold">July</h4>
                      <p className="text-gray-600">20,000 Total Orders</p>
                    </div>
                    <p className="text-red-600 font-semibold">30% Up from previous month</p>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-100 rounded-md">
                    <div>
                      <h4 className="text-xl font-semibold">June</h4>
                      <p className="text-gray-600">20,000 Total Orders</p>
                    </div>
                    <p className="text-green-600 font-semibold">30% Up from previous month</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'salesByCategory':
          return <p>Sales by Category: Beverages - 5,000, Meals - 15,000</p>;
        case 'salesByTime':
          return <p>Sales by Time: Peak Hours - 12 PM to 2 PM</p>;
        case 'salesByPaymentMethod':
          return <p>Sales by Payment Method: Credit Card - 60%, PayPal - 30%, Cash - 10%</p>;
        case 'averageOrderValue':
          return <AverageOrderValue />; 
        case 'salesByLocation':
          return <p>Sales by Location: City A - 10,000, City B - 7,000, City C - 3,000</p>;
        default:
          return <p>Select a tab to view the data</p>;
      }
    } else {
      return <p>Details for {activeMainTab.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <nav className="flex space-x-8 border-b">
          {['salesAnalysis', 'customerAnalysis', 'totalOrders', 'discountCoupons', 'canceledOrders'].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveMainTab(tab)}
              className={`cursor-pointer pb-2 border-b-2 ${
                activeMainTab === tab ? 'border-black text-black font-bold' : 'border-transparent text-gray-500'
              }`}
            >
              {tab.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          ))}
        </nav>
      </div>

      {activeMainTab === 'salesAnalysis' && (
        <div className="flex space-x-4 mb-6">
          {['totalSales', 'salesByCategory', 'salesByTime', 'salesByPaymentMethod', 'averageOrderValue', 'salesByLocation'].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 rounded-md ${
                  activeTab === tab ? 'border hover:bg-orange-300 hover:text-orange-500' : 'border hover:bg-orange-300 hover:text-orange-500'
                }`}
              >
                {tab.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            )
          )}
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-6">{renderTabContent()}</div>
    </div>
  );
};

export default SalesAnalysis;
