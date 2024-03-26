import React from 'react'

import '../../assets/media.css'
import './landingPage.css'
import Layout from '../../components/Layout/Layout'
import HoroscopeCard from '../../components/CardComponents/HoroscopeCard'
import AstroServiceCard from '../../components/CardComponents/AstroServiceCard'



function Landing() {
  return (
    <Layout>
      <div className="mx-auto w-full text-center my-5">
        <h1 style={{ fontSize: '2.3rem', fontWeight:'600', color: '#E64B51' }}>Daily Horoscope</h1>
        <p style={{ fontSize: '1.3rem', fontWeight:'500', color: 'gray' }}>The stars are on your favor, you cant be horrible.They
          wont let you down!</p>
         <HoroscopeCard/>
      </div>
    
        <AstroServiceCard/>
    
    </Layout>


  )
}
export default Landing