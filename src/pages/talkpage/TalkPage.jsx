import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AstrologerList from '../../components/CardComponents/AstrologerList'
import './talkpage.css'
import TopfilterOptions from '../../components/common/TopfilterOptions'

function TalkPage() {
  const [talkApiState, setTalkApiState]=useState([])
  const talkApi=async()=>{
    const talkdata=await fetch("https://jsonplaceholder.typicode.com/posts")
    const talkres=await talkdata.json();
    
    setTalkApiState(talkres)
    console.log(talkApiState)
  }

  useEffect(()=>{
    talkApi()
  },[])

  return (
    <Layout>
      <TopfilterOptions/>
         <div className='talk_with_astro_cards'>
         {
          talkApiState.length>0 && talkApiState.map((item , index)=>(
            <div className="" key={item.id}>
             <AstrologerList title={item.title} body={item.body}  />
             
            </div>
          ))
         }
         </div>
    </Layout>
       
   
  
  )
}

export default TalkPage