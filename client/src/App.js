import React from 'react';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/slice/authSlice';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cars from './pages/Cars';
import Add from './pages/Add';
import Deleteca from './pages/Deleteca';
import Update from './pages/Update';
import DeleteUser from './pages/DeleteUser';
import Reserve from './pages/Reserve';


function App() {

  const {user}=useSelector(state=>state.auth)
  const isAdmin=JSON.parse(localStorage.getItem('user'))?.role==='admin'
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const signoff=()=>{
    dispatch(logout())
  }
  useEffect(()=>{
    if(!user)
    navigate('/login')
  },[user])
  return (
    <>
    <div className='navbar'>
        <div className='title'>
        <h1 >Car rental</h1>
        </div>
    <div className='links'>
      {user?
      <>
      <NavLink to='/cars'>Cars</NavLink> 
      
      {isAdmin&&
      <>
      <NavLink to='/cars/add'>Add Car</NavLink>
      <NavLink to='/cars/updateca'>Update Car</NavLink>
      <NavLink to='/cars/deleteca'>Delete Car</NavLink>

      <NavLink to='/admin/deleteuser'>Delete User</NavLink>
      </>
      }
      
      
      
      <button onClick={signoff} className='logout'>logout</button>
      </>
          :
          <>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
          </>}
    
    
    </div>
    </div>
    <div className='content'>
    <Routes>
      <Route path='/register' element={<Register> </Register>}/>
      <Route path='/login' element={<Login> </Login>}/>
      <Route path='/cars' element={<Cars/>}></Route>
      <Route path='/cars/add' element={<Add/>}></Route>
      <Route path='/cars/deleteca' element={<Deleteca></Deleteca>}></Route>
      <Route path='/cars/updateca' element={<Update></Update>}></Route>
    
      <Route path='/admin/deleteuser' element={<DeleteUser></DeleteUser>}></Route>
      <Route path='/cars/reserve'element={<Reserve></Reserve>}></Route>
      
    </Routes>
    </div>
    <ToastContainer></ToastContainer>
    
    </>
  );
}

export default App;
