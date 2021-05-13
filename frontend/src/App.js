// import logo from './logo.svg';
import "./App.css";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import {useState,useEffect} from 'react'
// import {useHistory} from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
// import Routes from './Routes'
const App = () => {
  
 
  useEffect((loggedState) => {
  
      if(loggedState){
          fetch('http://localhost:8000/api/current_user/', {
                      headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`
                      }
                    })
                      .then(res => res.json())
                      .then(json => {
                        console.log(json)
                  
                      });
      }
     
  }, [])
  
  const [display, setdisplay] = useState([])
  const [loggedState, setloggedState] = useState(localStorage.getItem('token') ? true : false)
  const [username, setusername] = useState([])

const handleLogin=(e,data)=>{
        e.preventDefault();
     
        fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
          .then(
           
              json => {
                if(json.token===undefined)
                {alert("Enter correct credentials or Signup")}
                else
                {
                localStorage.setItem('token', json.token);
                localStorage.setItem('id',json.user.id)
                console.log(json)
                setloggedState(true);
                setdisplay('');
                console.log(json)
                setusername(json.user.username)
                
               }
                
            }
     
          );
            

    }



    const handleSignup=(e,data)=>{
      e.preventDefault();
      
  fetch('http://localhost:8000/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      localStorage.setItem('id',json.id)
      // localStorage.setItem('id',json.id)
          console.log(json)
          setloggedState(true);
          setdisplay('');
          setusername(json.username)
          
         
    });
  }
  
  const handleLogout = () => {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          setloggedState(false)
      
      };
      
  const displayForm = form => {
    
          setdisplay(form)
        };

            let form;
  switch (display) {
    case 'login':
      form = <SignIn handleLogin={handleLogin} />;
      break;
    case 'signup':
      form = <SignUp handleSignup={handleSignup} />;
      break;
    default:
      form = null;
  }



  return (
    <div className="App">
      
      <Navbar logged_in={loggedState}
          display_form={displayForm}
          handle_Logout={handleLogout}/>
          

          {loggedState?<Home username={username}/>:<h1>Login or signup</h1>}
          {form}
    </div>
  );
};

export default App;
