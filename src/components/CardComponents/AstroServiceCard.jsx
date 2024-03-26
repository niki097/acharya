import React from 'react';
import call from '../../assets/imgs/landline.svg';
import chat from '../../assets/imgs/chat.svg';
import video from '../../assets/imgs/video.svg';
import carbonreport from '../../assets/imgs/carbon_report.svg';
import entypocchat from '../../assets/imgs/entypo_chat.svg';
import fluentvideoperson from '../../assets/imgs/fluent_video-person-call-16-filled.svg';
import './AstroCard.css';

const services = [
  { image: call, name: 'call' },
  { image: entypocchat, name: 'chat' },
  { image: fluentvideoperson, name: 'video call' },
  { image: carbonreport, name: 'Detail Report' }
];

function AstroServiceCard() {
  return (
    <div className="astro_services_bg container mx-auto py-4">
      <div className="flex justify-center">
        {services.map((service, index) => (
          <div key={index} className="w-56 p-4 mx-4 text-center">
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <img src={service.image} alt={service.name} className="w-20 h-24 mx-auto" />
            </div>
            <span className='font-bold text-xl'>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AstroServiceCard;
