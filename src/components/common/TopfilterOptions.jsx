import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './topfilterOptions.css'
import FilterModal from '../../components/FilterModal';

const ChatWithAstrologer = () => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const toggleFilterModal = () => {
        setIsFilterModalOpen(!isFilterModalOpen);
    };


    return (
        <>
            <div className="flex flex-col h-full">
                <div className="relative chatwith_astro_top flex flex-col sm:flex-row items-center justify-between px-4 py-2">
                    <div className="flex items-center mb-2 sm:mb-0">
                        <span className="">
                            {/* Add any content here */}
                        </span>
                    </div>
                    <div className="chat_head mb-2 sm:mb-0">
                        <p>Available Bal: 0</p>
                    </div>
                    <div className="mb-2 sm:mb-0">
                        <button className="recharge_button px-3 py-1 mr-2 text-sm rounded-md">
                            Recharge
                        </button>
                    </div>
                    <div className="flex items-center">
                        <select className="mr-4 p-2 bg-white border rounded-md">
                            <option value="">Sort</option>
                        </select>
                        <button
                            onClick={toggleFilterModal}
                            className="recharge_button mr-4 px-3 py-2 text-sm rounded-md"
                        >
                            Filter
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="p-2 bg-white border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <span className="absolute astro_card_heading">
                    Chat with Astrologer
                </span>
             {/* Filter Modal */}
                {isFilterModalOpen && <FilterModal onClose={toggleFilterModal} />}
                

            </div>
        </>
    );
};

export default ChatWithAstrologer;