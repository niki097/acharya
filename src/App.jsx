import './App.css'
import Register from './components/Register/Register'
import './assets/media.css'
import Login from './components/Login/Login'
import { Route, Router, Routes } from 'react-router-dom'
import ChatPage from './pages/chatpage/ChatPage'
import '.././src/assets/media.css'
import Otp from './components/Otp/Otp'
import Landing from './pages/LandingPage/Landing'
import TalkPage from './pages/talkpage/TalkPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Landing/>} />
      <Route path='/signup' element={ <Register/>} />
      <Route path='/login' element={ <Login/>} />
      <Route path='/otp' element={ <Otp/>} />
      <Route path='/chatwithastrologer' element={ <ChatPage/>} />
      <Route path='/talkwithastrologer' element={ <TalkPage/>} />
    </Routes>
    </>
  )
}

export default App
