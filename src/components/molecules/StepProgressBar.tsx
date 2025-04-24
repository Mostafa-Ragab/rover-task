import React from "react";

export const StepProgressBar = () => (
  <div className="w-full px-6 pt-10 border-t border-gray-800">
    <div className="relative max-w-7xl mx-auto">
      {/* Labels */}
      <div className="flex justify-between text-sm font-medium text-gray-400">
        <span className="w-1/3 text-start">Appointment</span>
        <span className="w-1/3 text-center text-indigo-500">Payment</span>
        <span className="w-1/3 text-end">Confirmation</span>
      </div>

      {/* Line */}
      <div className="mt-3 h-1 flex bg-gray-800 rounded overflow-hidden">
        <div className="w-1/2 h-full bg-indigo-500 transition-all duration-300" />
      </div>

      {/* Dots */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center mt-1.5">
        <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-900" />
        <div className="w-4 h-4 rounded-full bg-indigo-500 border-2 border-gray-900" />
        <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-900" />
      </div>
    </div>
  </div>
);

export default StepProgressBar;