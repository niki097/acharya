import './App.css'
import Register from './components/Register'
import './assets/media.css'
import Login from './components/Login'
import { Route, Router, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import ChatPage from './pages/ChatPage'
import TalkPage from './pages/TalkPage'
import 'flowbite/dist/flowbite.css';
import AstrologerList from './components/AstrologerList'

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
<AstrologerList/>
    </>
  )
}

export default App
