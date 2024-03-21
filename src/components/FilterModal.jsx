// FilterModal.js

import React, { useState } from 'react';

const FilterModal = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleApply = () => {
        console.log("Applying filter:", selectedOption);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-30">
            <div className="bg-white p-8 rounded-md shadow-md max-w-md h-1/2 w-1/2">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Filter Options</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Gender</h3>
                        <CheckboxOption
                            label="Male"
                            checked={selectedOption === 'Male'}
                            onChange={() => handleOptionClick('Male')}
                        />
                        <CheckboxOption
                            label="Female"
                            checked={selectedOption === 'Female'}
                            onChange={() => handleOptionClick('Female')}
                        />
                    </div>
                    <div className="flex flex-col items-end">
                        <h3 className="text-lg font-semibold mb-2">Selected Option</h3>
                        <p>{selectedOption}</p>
                        <button onClick={handleApply} className="mt-4 px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CheckboxOption = ({ label, checked, onChange }) => {
    const handleClick = () => {
        onChange(!checked); // Toggle the checked state
    };

    return (
        <div className="flex items-center mb-2" onClick={handleClick}>
            <input type="checkbox" id={`${label.toLowerCase()}Checkbox`} className="mr-2" checked={checked} onChange={() => {}} />
            <label htmlFor={`${label.toLowerCase()}Checkbox`}>{label}</label>
        </div>
    );
};


export default FilterModal;
