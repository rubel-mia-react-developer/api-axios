import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Buy from './Components/Buy'
import Confirm from './Components/Confirm'
import Error from './Components/Error'



function App() {
 const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/buy' element={<Buy/>}/>
      <Route path='/confirm' element={<Confirm/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  )
 )
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App