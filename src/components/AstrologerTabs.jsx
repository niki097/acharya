import React, { useState } from 'react';

function AstrologerTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
    <div className="flex">
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => handleTabClick(1)}
      >
        Tab 1
      </button>
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => handleTabClick(2)}
      >
        Tab 2
      </button>
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => handleTabClick(3)}
      >
        Tab 3
      </button>
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => handleTabClick(4)}
      >
        Tab 4
      </button>
      <button
        className={`px-4 py-2 rounded-t-lg focus:outline-none ${
          activeTab === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
        onClick={() => handleTabClick(5)}
      >
        Tab 5
      </button>
    </div>
    <div className="mt-4">
        {activeTab === 1 && <p>This is content for Tab 1</p>}
        {activeTab === 2 && <p>This is content for Tab 2</p>}
        {activeTab === 3 && <p>This is content for Tab 3</p>}
        {activeTab === 4 && <p>This is content for Tab 4</p>}
        {activeTab === 5 && <p>This is content for Tab 5</p>}
      </div>
    </>
  );
}

export default AstrologerTabs;
