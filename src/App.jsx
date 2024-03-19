import './App.css'
import Register from './components/Register/Register'
import './assets/media.css'
import Login from './components/Login/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import ChatPage from './pages/ChatPage'
import TalkPage from './pages/TalkPage'

import Blog from './pages/Blog/Blog'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Landing/>} />
      <Route path='/signup' element={ <Register/>} />
      <Route path='/login' element={ <Login/>} />
      <Route path='/chatwithastrologer' element={ <ChatPage/>} />
      <Route path='/talkwithastrologer' element={ <TalkPage/>} />
    </Routes>
    </>
  )
}

export default App
