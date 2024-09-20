import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard.tsx'


import Layout from './Layout.tsx'
import Hero from './Hero/Hero.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Hero/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>
  )
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
