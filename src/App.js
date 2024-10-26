import Sidebar from "./components/SideBar";
import TopBar from "./components/TopBar";
import SalesAnalysis from "./components/SalesAnalysis";
import SalesByItem from "./components/SalesByItem";
import AverageOrderValue from "./components/AverageOrderValue";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <SalesAnalysis />
            </div>

            <AverageOrderValue />

            <div className="col-span-3 flex justify-end mt-[-550px]">
              <SalesByItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
