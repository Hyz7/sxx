import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Home from '../containers/home'
import About from '../containers/about'
export default ()=>(
    <Fragment>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/aboutUs' component={About}></Route>
        </Switch>
    </Fragment>
)