import React from "react";
import {Link,useHistory} from 'react-router-dom'
const Navbar = ({logged_in,display_form,handle_Logout}) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('token');
   handle_Logout()
    history.push('/')
};

const logged_out_nav=(
  <ul className="navbar-nav ms-auto mb-lg-0">
  
  <li className="nav-item mx-4">   
            <a className="nav-link"
         href="/"
             >Home</a>
  </li>  
  

  
<li className="nav-item mx-4" id="tej" onClick={(e)=>{e.preventDefault();display_form('login')}}>

<a className="nav-link"  
href="/"
>SignIn</a>

</li>
<li className="nav-item mx-4" 
onClick={(e)=>{e.preventDefault();display_form('signup')}}>

<a className="nav-link"
href="/"
 >SignUp</a>
</li>  

  
  
</ul>
     
 )
 const logged_in_nav=(
 <ul className="navbar-nav ms-auto mb-lg-0">       
 
  <li className="nav-item mx-4">
  
  <a className="nav-link" 
  href="/"
  >Home</a>
            
  </li>
  <li className="nav-item mx-4">   
            <Link className="nav-link"
        onClick={e=>history.push("/help")}
             >HelpLines</Link>
  </li>  
  <li className="nav-item mx-4">   
            <Link className="nav-link"
        onClick={e=>history.push("/news")}
             >News</Link>
  </li>  


 <li className="nav-item mx-4" id="tej" onClick={(e)=>{e.preventDefault();handleLogout()}}>
  
   <a className="nav-link" 
 href="/"
   >LogOut</a>
 </li>
 
</ul>
)


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-info" >
        <a className=" mx-3 navbar-brand" href="/" style={{ color: "aqua" }}>
          <h3>EmerX</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          

{logged_in?logged_in_nav:logged_out_nav}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
