import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'
import Home from '../components/home'
import Sxx from '../components/sixuexing'
import Teacher from '../components/teacher'
import About from '../components/about'
import Core from '../components/core'
import Download from '../components/download'
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