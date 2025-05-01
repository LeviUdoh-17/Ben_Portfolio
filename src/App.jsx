import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './pages/About'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<About/>} />
        <Route path='/projects' element={<h1>Projects</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App