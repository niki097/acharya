import React, { useState, useEffect } from 'react';
import AstrologerCard from '../components/CardComponents/AstrologerCard'; // Assume you have a component for rendering astrologer cards
import Layout from '../components/Layout/Layout';

function ChatPage() {
    const [astrologers, setAstrologers] = useState([]);
    const [filteredAstrologers, setFilteredAstrologers] = useState([]);
    const [sortBy, setSortBy] = useState('experience');
    const [filters, setFilters] = useState({
        language: '',
        country: '',
        gender: '',
        offer: '',
        topAstrologer: false
    });
    const [showFilterModal, setShowFilterModal] = useState(false);

    // Fetch astrologer data from API
    useEffect(() => {
        fetchAstrologers();
    }, []);

    const fetchAstrologers = async () => {
        try {
            const response = await fetch('api/astrologers');
            const data = await response.json();
            setAstrologers(data);
        } catch (error) {
            console.error('Error fetching astrologer data:', error);
        }
    };

    useEffect(() => {
        applySortingAndFiltering();
    }, [astrologers, sortBy, filters]);

    const applySortingAndFiltering = () => {
        let sortedAndFilteredData = [...astrologers];

        // Apply filtering
        Object.keys(filters).forEach((filterName) => {
            if (filters[filterName]) {
                sortedAndFilteredData = sortedAndFilteredData.filter(
                    (astrologer) => astrologer[filterName] === filters[filterName]
                );
            }
        });

        // Apply sorting
        sortedAndFilteredData.sort((a, b) => {
            switch (sortBy) {
                case 'experience':
                    return a.experience - b.experience;
                case 'price':
                    return a.price - b.price;
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });

        setFilteredAstrologers(sortedAndFilteredData);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const handleFilterOptionClick = () => {
        setShowFilterModal(true);
    };

    const handleModalClose = () => {
        setShowFilterModal(false);
    };

    return (
      <>
      <Layout>
      <div>
            {/* Menu */}
            <div>
                <button onClick={handleFilterOptionClick}>Filter</button>
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="experience">Sort by Experience</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                </select>
            </div>

            {/* Filter Modal */}
            {showFilterModal && (
                <div>
                    {/* Filter options */}
                    {/* Example: */}
                    <select value={filters.gender} onChange={(e) => handleFilterChange('gender', e.target.value)}>
                        <option value="">All Genders</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {/* Other filter options go here */}

                    {/* Close button */}
                    <button onClick={handleModalClose}>Close</button>
                </div>
            )}

            {/* Render filtered and sorted astrologer cards */}
            {filteredAstrologers.map((astrologer) => (
                <AstrologerCard key={astrologer.id} astrologer={astrologer} />
            ))}
        </div>
      </Layout>
    
        </>
    );
}

export default ChatPage;
