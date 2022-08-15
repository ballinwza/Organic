import React from "react" 

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart } from "./pages/Cart"
import {Product} from './pages/Product'
import {SignIn} from './pages/SignIn'
import {Navbar} from './components/Navbar'
import { AddCartItem } from "./pages/AddCartItem" 

import { useSelector } from "react-redux" 

const UnauthApp = () =>{
  return( 
      <div className="main-container"> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Product/>}/> 
          <Route path='/cart' element={<Product/>}/> 
          <Route path='/addCartItem' element={<Product/>}/>
          <Route path='/signin' element={<SignIn/>}/> 
        </Routes> 
      </div>

    
  )
}

const AuthApp = ()=>{ 
  return( 
      <div className="main-container"> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/addCartItem' element={<AddCartItem/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes> 
      </div> 
  )
} 

const App = ()=>{ 
  const {user} = useSelector(state=>state.auth) 

  return(
    <BrowserRouter> 
      {/* {!user ? <UnauthApp/> : <AuthApp/>} */}
      <AuthApp/>
      
    </BrowserRouter>
  )
} 
export default App