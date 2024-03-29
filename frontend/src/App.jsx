import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignUp'


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-out" element={<SignOut />} />
    </Routes>
   </BrowserRouter>
  )
}