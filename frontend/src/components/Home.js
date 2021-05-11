import React from 'react'
import {useState,useEffect} from 'react'
import PoliceForm from './PoliceForm'
const Home = () => {
    
const [policecomplains, setpolicecomplains] = useState([])
 
const addPoliceComplain=async(complain)=>{
        const res =await fetch('http://localhost:8000/api/policecomplain/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(complain)
        })
        const data=await res.json()
       
        setpolicecomplains([...policecomplains,data])
    }

    
    return (
        <div>
            <PoliceForm onAdd={addPoliceComplain}/>
        </div>
    )
}

export default Home
