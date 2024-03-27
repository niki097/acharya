import React from 'react'

import '../../assets/media.css'
import './landingPage.css'
import Layout from '../../components/Layout/Layout'
import HoroscopeCard from '../../components/CardComponents/HoroscopeCard'
import AstroServiceCard from '../../components/CardComponents/AstroServiceCard'
import finance from '../../assets/imgs/Finance.svg'
import Acharya from '../../assets/imgs/Rectangle 67.svg'
import Carousel from '../../components/Carousel/Carousel'


function Landing() {
  return (
    <Layout>
      <div className="container hero_section mx-auto py-4">
        <div className="grid grid-cols-2 justify-center m-5">
          <div className="col grid justify-center banner">
          </div>
        </div>
      </div>


      <div className="mx-auto w-full text-center my-5">
        <h1 style={{ fontSize: '2.3rem', fontWeight: '600', color: '#E64B51' }}>Daily Horoscope</h1>
        <p style={{ fontSize: '1.3rem', fontWeight: '500', color: 'gray' }}>The stars are on your favor, you cant be horrible.They
          wont let you down!</p>
        <HoroscopeCard />
      </div>

      <AstroServiceCard />

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 justify-center m-5">
          <div className="col grid justify-center business_advice">
            <h1 className="text-4xl font-bold">Are you worried about your business ?</h1>
            <p className="text-lg">Our astrolgers are there to Guide/ help you</p>
          </div>
          <div className="col grid justify-center business_advice">
            <img src={finance} alt="Image" className="max-w-full" />
          </div>
        </div>
        <div className="grid grid-cols-4 px-5 justify-center bg-white mb-3">
          <div className="col grid justify-center business_advice_astrologerList">
            <img src={Acharya} alt="" />
            <h4>Acharya</h4>
            <h5>₹ 40/min</h5>
          </div>
          <div className="col grid justify-center business_advice_astrologerList">
            <img src={Acharya} alt="" />
            <h4>Acharya</h4>
            <h5>₹ 40/min</h5>
          </div>
          <div className="col grid justify-center business_advice_astrologerList">
            <img src={Acharya} alt="" />
            <h4>Acharya</h4>
            <h5>₹ 40/min</h5>
          </div>
          <div className="col grid justify-center business_advice_astrologerList">
            <img src={Acharya} alt="" />
            <h4>Acharya</h4>
            <h5>₹ 40/min</h5>
          </div>

        </div>
        <div className="grid grid-cols-1 justify-center bg-white">
          <Carousel />
        </div>
      </div>

    </Layout>


  )
}
export default Landing