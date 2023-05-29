import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function Deleteca() {
  const navigate=useNavigate()
  const deletecar=async(e)=>{
    e.preventDefault()
    const token=JSON.parse(localStorage.getItem("user")).token
    await axios.post('http://localhost:8000/api/cars/deleteht',{name:carname.current.value},{
      headers: {
      'Authorization': `Bearer ${token}` 
      }}
      )
      navigate('/cars')
    }
    const carname=useRef()
  return (
    <div>
      
    <form>
<label>Name of the car to delete</label>
        <input type ="text" placeholder="enter the car name to delete" ref={carname} ></input>
        <button onClick={deletecar}>Delete</button>
        </form>
    </div>
  )
}

export default Deleteca