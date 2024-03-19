import React, { useState } from 'react';
import './tabs.css'

function AstrologerTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
    <div className="flex astrolistpage_tabs">
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 1 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
        }`}
        onClick={() => handleTabClick(1)}
      >
       Career
      </button>
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 2 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
        }`}
        onClick={() => handleTabClick(2)}
      >
       Online
      </button>
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 3 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
        }`}
        onClick={() => handleTabClick(3)}
      >
       English
      </button>
      <button
        className={`px-4 py-2 mr-2 rounded-t-lg focus:outline-none ${
          activeTab === 4 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
        }`}
        onClick={() => handleTabClick(4)}
      >
        Highest
      </button>
      <button
        className={`px-4 py-2 rounded-t-lg focus:outline-none ${
          activeTab === 5 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
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
