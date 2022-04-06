import React from 'react';

export const HomePage = () => {
  return ( <div className= "m-4 p-4 w-80" >
    <div className="mb-10">
      <div className = "text-3xl font-bold mb-5">New</div>
      <div className="bg-gray-100 h-80 p-4">
        <div className="text-xl font-extrabold">아이스크림 맛집</div>
        <div className="text-600 text-sm my-2 font-bold">구경해보세요</div>
      </div>
    </div>

    <div>
      <div className = "text-3xl font-bold mb-5">List</div>
      <div className="border border-gray-300 p-4">
        <div className="bg-indigo-50 h-48 w-54"></div>
        <div className="mt-4">
          <div className="font-bold text-xl mb-2">Card title</div>
          <div className="text-gray-400 text-sm h-24">상세설명란</div>
          <div className="py-2 flex flex-row">
            <div className="w-24 h-12 bg-gray-800 text-sm text-white text-center p-4 mr-2">button</div>
            <div className="w-24 h-12 bg-gray-800 text-sm text-white text-center p-4 ml-2">button</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};