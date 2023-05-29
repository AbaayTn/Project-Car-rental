import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Register() {
    const  [userData,setUser]=useState()
    
    const {user, loading, error, message}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const signup=(e)=>{
        e.preventDefault()
        dispatch(register(userData))
        
        
        
    }
    useEffect(()=>{
        if(user)
        navigate('/cars')
        if(error){
            toast.error(message)
            dispatch(reset())
        }
    },[user,error])
    return (
    
        <form>
            <label>name</label>
            <input type='text' placeholder='enter your name' onChange={(e)=>{
                setUser({...userData,name:e.target.value})
            }}/>
            <label>email</label>
            <input type='text' placeholder='enter your email' onChange={(e)=>{
                setUser({...userData,email:e.target.value})
            }}/>
            <label>password</label>
            <input type='text' placeholder='enter your password' onChange={(e)=>{
                setUser({...userData,password:e.target.value})
            }}/>
            <button type='submit' onClick={signup}>register</button>
        </form>
    
    )}


export default Register

