import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Project'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App