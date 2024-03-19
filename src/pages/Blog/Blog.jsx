import React, { useState } from 'react';
import './blog.css'
import BlogContent from './BlogContent';

function Blog() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div class="container mx-auto px-4">
      <div className="blogCategories flex my-3">
          <img src="https://astrotalk.com/astrology-blog/wp-content/themes/astrology/images/blog_page/category.png" alt="" />
          <div className="grid">
            <p>Categories</p>
            <span>Select topic</span>
          </div>

        </div>
        <div class="flex blog-inner-container py-4">

          <div class="w-20 lg:w-1/5 h-full">
            <div className="grid justify-start astrolistpage_tabs">
              <button
                className={`px-4 py-2 my-2 mr-2 rounded-t-lg focus:outline-none ${activeTab === 1 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
                  }`}
                onClick={() => handleTabClick(1)}
              >
                Home
              </button>
              <button
                className={`px-4 py-2 my-2 mr-2 rounded-t-lg focus:outline-none ${activeTab === 2 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
                  }`}
                onClick={() => handleTabClick(2)}
              >
                Tarot
              </button>
              <button
                className={`px-4 py-2 my-2 mr-2 rounded-t-lg focus:outline-none ${activeTab === 3 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
                  }`}
                onClick={() => handleTabClick(3)}
              >
                Vastu
              </button>
              <button
                className={`px-4 py-2 my-2 mr-2 rounded-t-lg focus:outline-none ${activeTab === 4 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
                  }`}
                onClick={() => handleTabClick(4)}
              >
                Festivals
              </button>
              <button
                className={`px-4 py-2 my-2 rounded-t-lg focus:outline-none ${activeTab === 5 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
                  }`}
                onClick={() => handleTabClick(5)}
              >
                Numerology
              </button>
              <button
                className={`px-4 py-2 my-2 rounded-t-lg focus:outline-none ${activeTab === 5 ? 'bg-white-500 text-black' : 'bg-teal-300 text-white-700'
                  }`}
                onClick={() => handleTabClick(6)}
              >
                Kundli
              </button>
            </div>
          </div>

          <div class="w-80 lg:w-full">
            <div className="">
              {activeTab === 1 && <p><BlogContent /></p>}
              {activeTab === 2 && <p>This is content for Tab 2</p>}
              {activeTab === 3 && <p>This is content for Tab 3</p>}
              {activeTab === 4 && <p>This is content for Tab 4</p>}
              {activeTab === 5 && <p>This is content for Tab 5</p>}
              {activeTab === 6 && <p>This is content for Tab 6</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
