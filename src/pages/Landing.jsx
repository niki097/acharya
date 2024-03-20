import React from 'react'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel/Carousel'
import Blog from './Blog/Blog'
import AstrologerList from '../components/CardComponents/AstrologerList'
import StarRating from '../components/Rating/StarRating'
import '../assets/media.css'
import Notification from '../components/Accordion/Notification'
import ChatPage from './ChatPage'



function Landing() {
  return (
    <Layout>
        <div class="mx-auto w-full text-center my-5">
   {/* <Blog/> */}
   <AstrologerList/>
  <Notification/>
  <ChatPage/>
        </div>
    </Layout>
  )
}
export default Landing