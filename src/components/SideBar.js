import { CiHome } from "react-icons/ci";
import { FiShoppingBag, FiBarChart2, FiCreditCard, FiTag } from "react-icons/fi";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-50 h-screen bg-gray-100 p-4">
      <nav className="space-y-8"> 
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 cursor-pointer">
          <CiHome className="text-3xl" /> 
          <span>Dashboard</span>
        </div>
        
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 cursor-pointer">
          <FiShoppingBag className="text-3xl" />
          <span>Order</span>
        </div>
        
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 font-bold cursor-pointer">
          <FiBarChart2 className="text-3xl" />
          <span>Analytics</span>
        </div>
        
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 cursor-pointer">
          <IoBookOutline className="text-3xl" />
          <span>Menu</span>
        </div>
        
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 cursor-pointer">
          <FiCreditCard className="text-3xl" />
          <span>Payments</span>
        </div>
        
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 cursor-pointer">
          <FiTag className="text-3xl" />
          <span>Discounts</span>
        </div>
        
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500 cursor-pointer">
          <IoSettingsOutline className="text-3xl" />
          <span>Manage</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
