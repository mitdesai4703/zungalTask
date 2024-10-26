import { useState } from "react";
import GaugeChart from "react-gauge-chart";

const AverageOrderValue = () => {
  const [selectedMonth, setSelectedMonth] = useState("July");

  const monthlyData = {
    July: { percent: 0.75, value: 350, label: "Excellent" },
    June: { percent: 0.6, value: 300, label: "Good" },
    May: { percent: 0.5, value: 250, label: "Average" },
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const { percent, value, label } = monthlyData[selectedMonth] || {};

  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-[300px] w-[400px] ml-6 border border-gray-300">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Average Order Value</h2>
        <select
          className="p-2 border rounded-md"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {Object.keys(monthlyData).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

     
      <div className="flex justify-center items-center mt-4 h-full relative">
        <GaugeChart
          id="average-order-gauge"
          nrOfLevels={1}              
          arcsLength={[0.75, 0.25]}    
          colors={["#555", "#eaeaea"]} 
          percent={percent}
          arcWidth={0.2}               
          textColor="#000"
          formatTextValue={() => ""}
          style={{ width: "100%", height: "100%" }}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <span className=" text-2xl font-semibold">{value}</span>
          <span className=" mb-[-80px] text-lg">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default AverageOrderValue;
