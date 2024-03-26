import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './chatpage.css'
import AstrologerCard from '../../components/CardComponents/AstrologerCard';
import TopfilterOptions from '../../components/common/TopfilterOptions'

const ChatWithAstrologer = () => {
    const [astroCard, setAstroCard] = useState([]);

    const fetchAstroCardApi = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/carts/5");
            const data = await response.json();
            setAstroCard(data.products); // Assuming you want to set products from the response
        } catch (error) {
            console.error('Error fetching astro card data:', error);
        }
    };

    useEffect(() => {
        fetchAstroCardApi();
    }, []);

    return (
        <Layout>
            <TopfilterOptions/>
                
                <div className="flex-grow chatwithAstro_card overflow-y-auto">
                    {astroCard.map(product => (
                        <div key={product.productId} className="my-2 p-2 bg-white rounded-md">
                            <AstrologerCard />
                        </div>
                    ))}
                </div>

            
        </Layout>
    );
};

export default ChatWithAstrologer;