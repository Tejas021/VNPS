import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App'
import Profile from './components/Profile'
import Help from './components/Help'
import Newsfeed from './components/Newsfeed';
import New from './components/New'
const Routes = () => {
    return (
        <div>
            <Router>

                <Switch>
                    <Route exact path='/' component={App}></Route>
                    <Route path='/profile' component={Profile}></Route>
                    <Route path='/help' component={Help}></Route>
                    <Route path='/news' component={New}></Route>
                    {/* <Route path='/teacher' component={TeacherUI}></Route>
                    <Route path= '/about' component ={About}></Route>
                    <Route  path='/' component={Loginer}></Route> */}
                </Switch>
            </Router>   
        </div>
    )
}

export default Routes
