import React from 'react'
import {useState} from 'react'

const SignIn = ({handleLogin}) => {


    // const handleLogin=(e,data)=>{
    //     e.preventDefault();
    //     console.log(data)
     
    //     fetch('http://localhost:8000/token-auth/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then(res => res.json())
    //       .then(
           
    //           json => {
    //             if(json.token===undefined)
    //             {alert("Enter correct credentials or Signup")}
    //             else
    //             {
    //             localStorage.setItem('token', json.token);
   
             
    //         }}
     
    //       );
            

    // }


    const [username, setusername] = useState([])
    const [password, setpassword] = useState([])
    
    const Submitter=(e)=>{
      e.preventDefault();
      console.log({'username':username,'password':password})
      handleLogin(e,{'username':username,'password':password})
     
    
    }
    

    return (
        <div>
                 
                        <div className="container bg-dark p-5 mt-5">
         <form onSubmit={Submitter}>
             <div className="formContainer ">
             <h1 className='text-light'>User Sign In </h1>
 
             <hr/>
 
             <div><input type="text" placeholder="Enter Username" name="username" required className='input' onChange={e=>setusername(e.target.value)}/></div>
 
             <div><input type="password" placeholder="Enter Password" name="password" required className='input' onChange={e=>setpassword(e.target.value)}/></div>
         
      
             <p className="text-light">By creating an account you agree to our <a href="/"
             style={{color:"dodgerblue"}}>Terms & Privacy</a></p>
             <div>
             <button type="submit"  className=' signup button'>Sign In</button>
             </div>
             </div>
             </form>
      
     </div>
        </div>
    )
}

export default SignIn
