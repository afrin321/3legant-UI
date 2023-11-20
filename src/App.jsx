import './App.css'
import Home from './pages/Home'
import { SidebarMenuProvider } from './context/sidebarMenuContext'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { Routes, Route, Router } from 'react-router-dom'
import Shop from './pages/Shop'



export default function App() {
  return (
    <SidebarMenuProvider>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/sign-in' Component={SignIn}/>
        <Route path='/sign-up' Component={SignUp}/>
        <Route path='/shop' Component={Shop}/>
      </Routes>
    </SidebarMenuProvider>
    
  )
}
