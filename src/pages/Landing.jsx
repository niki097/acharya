import React from 'react'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel/Carousel'
import Blog from './Blog/Blog'



function Landing() {
  return (
    <Layout>
        <div class="mx-auto w-full text-center my-5">
   <Blog/>
        </div>
    </Layout>
  )
}
export default Landing