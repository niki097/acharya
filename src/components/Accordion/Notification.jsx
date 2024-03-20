import React, { useState } from 'react';
import astro_notif from '../../assets/imgs/astro_notif.svg';
import back from '../../assets/imgs/back.svg';
import './notification.css';

function Notification() {
    const [eventsOpen, setEventsOpen] = useState(false);
    const [astroOpen, setAstroOpen] = useState(false);

    const toggleEvents = () => {
        setEventsOpen(!eventsOpen);
    };

    const toggleAstro = () => {
        setAstroOpen(!astroOpen);
    };

    return (
        <div className='flex items-center py-4'>
            <div className='w-full max-w-lg pb-8 mx-6 bg-white rounded-lg shadow-xl'>
                <p className='notif_bg'><img src={back} className='h-5' />Notifications</p>

                <NotificationItem title="Events" icon={astro_notif} isOpen={eventsOpen} toggle={toggleEvents}>
                    Reminder: Your 1year career report is ready! Download your career report...
                </NotificationItem>

                <NotificationItem title="Astro" icon={astro_notif} isOpen={astroOpen} toggle={toggleAstro}>
                    Reminder: Your 1year career report is ready! Download your career report...
                </NotificationItem>
            </div>
        </div>
    );
}

function NotificationItem({ title, icon, isOpen, toggle, children }) {
    return (
        <div className='max-w-md mx-auto space-y-6'>
            <div onClick={toggle} className='flex items-center justify-between text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-3 mx-auto'>
                <div className='flex items-center px-2 py-3'>
                    <div className='mx-3 flex'>
                        <img src={icon} alt="" />
                        <button className="hover:underline pl-4">{title}</button>
                    </div>
                </div>
                <div className={`w-10 border-r px-2 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-90' : '-translate-y-0.0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <div className="flex p-4 md:p-0 w-full transform transition duration-300 ease-in-out border-b pb-10">
                    {children}
                </div>
            )}
        </div>
    );
}

export default Notification;
