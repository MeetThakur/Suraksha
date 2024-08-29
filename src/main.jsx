import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Report from './Components/Report.jsx'
import Home from './Components/Home.jsx'
import Settings from './Components/Settings.jsx'
import Profile from './Components/Profile.jsx'
import Nav from './Components/Nav.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
  <Route path="" element={<Home />}/>
  <Route path="/Report" element={<Report />}/>
  <Route path="/Settings" element={<Settings />}/>
  <Route path="/Profile" element={<Profile />}/>
  </Route>,
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
