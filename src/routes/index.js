import React,{Component} from 'react'
import { Router, Route,Switch,Redirect} from 'react-router-dom'
import Index from '../containers'
import About from '../containers/about'
export default ()=>(
    <Router>
        <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route path='/aboutUs' component={About}></Route>
            {/*<Route exact path='/contact' component={Contact}></Route>*/}
        </Switch>
    </Router>
)