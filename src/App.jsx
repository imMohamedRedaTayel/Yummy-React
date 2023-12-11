import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Search from './components/Search/Search';
import Contact from './components/Contact/Contact';

const App = () => {


  const router = createBrowserRouter( [
    { path: '/' , element: <Layout/> , children: [
      { index: true , element: <Home/> },
      { path:'details/:id' , element: <Details/> },
      { path:'search' , element: <Search/> },
      { path:'contact' , element: <Contact/> },
    ] }
  ] )

  return <>
    <RouterProvider router={ router } ></RouterProvider>
  </>
}
 
export default App