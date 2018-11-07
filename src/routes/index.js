import React,{Component} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from '../containers/home'
import About from '../containers/about'
export default ()=>(
    <div>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/aboutUs' component={About}></Route>
        </Switch>
    </div>
)