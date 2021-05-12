
import React from 'react'
import {useState} from 'react'
const SignUp = ({handleSignup}) => {
    const [username, setusername] = useState([])
    const [password, setpassword] = useState([])
 

    // const handleSignup=(e,data)=>{
    //     e.preventDefault();
        
    // fetch('http://localhost:8000/api/users/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     localStorage.setItem('token', json.token);
    //     localStorage.setItem('id', json.id);
    //     localStorage.setItem('log',true)
    
        
    //         setusername(json.username)
            
    //   });
    // }
    

    const submitter=(e)=>{
        e.preventDefault()
        
        handleSignup(e,{'username':username,'password':password})
        
    }
    
     return (
   
             <div className="container bg-dark p-5 mt-5">
         <form onSubmit={submitter}>
             <div className="formContainer ">
             <h1 className='text-light'>User Sign Up </h1>
 
             <hr/>
 
             <div><input type="text" placeholder="Enter Username" name="username" required className='input' onChange={e=>setusername(e.target.value)}/></div>
             <div><input type="text" placeholder="Enter Email" name="email" required className='input'/></div>
             <div><input type="password" placeholder="Enter Password" name="password" required className='input' onChange={e=>setpassword(e.target.value)}/></div>
             <div><input type="password" placeholder="Repeat Password" name="repeatPassword"
             required className='input'/></div>
      
             <p className="text-light">By creating an account you agree to our <a href="/"
             style={{color:"dodgerblue"}}>Terms & Privacy</a></p>
             <div>
             <button type="submit"  className=' signup button'>Sign Up</button>
             </div>
             </div>
             </form>
      
     </div>)
}

export default SignUp
