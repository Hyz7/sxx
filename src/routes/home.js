import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../containers/home'
import About from '../containers/about'
export default ()=>(
    <div>
        <Header />
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/aboutUs'component={About}></Route>
        </Switch>
        <Footer />
    </div>

)