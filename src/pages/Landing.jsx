import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel'

function Landing() {
  return (
    <Layout>
        <div class="mx-auto w-full text-center my-5">
        <Carousel/>

        </div>
    </Layout>
  )
}

export default Landing