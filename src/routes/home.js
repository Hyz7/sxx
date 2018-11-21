import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../containers/home'
import Sxx from '../containers/sixuexing'
import Teacher from '../containers/teacher'
import About from '../containers/about'
import Core from '../containers/core'
import Download from '../containers/download'
export default ()=>(
    <div>
        <Header />
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/teacher' exact component={Teacher}></Route>
            <Route path='/sixuexing' exact component={Sxx}></Route>
            <Route path='/aboutUs'component={About}></Route>
            <Route path='/core'component={Core}></Route>
            <Route path='/download'component={Download}></Route>
        </Switch>
        <Footer />
    </div>

)