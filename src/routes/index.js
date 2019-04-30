import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import AsyncComponent from '../common/loadable'
import Header from '../common/header'
import Footer from '../common/footer'
import Home from '../components/home'
import Test from '../components/test'
import courseDetail from '../components/allCourse/courseDetail'
import mediaDetail from '../components/qklxyx'

export default class MainRoutes extends  Component{
    render(){
        return(
            <div>
                <Header />

                <Route path='/' exact component={Home}></Route>

                <Route path='/test' exact component={Test}></Route>

                <Route path='/core' component={AsyncComponent(()=>import('../components/core'))}></Route>

                <Route path='/allCourse' component={AsyncComponent(()=>import('../components/allCourse'))}></Route>

                {/*<Route path='/courseDetail/:id' component={AsyncComponent(()=>import('../components/allCourse/courseDetail'))}></Route>*/}
                <Route path='/courseDetail/:id' component={courseDetail}></Route>

                <Route path='/teacher' component={AsyncComponent(()=>import('../components/teacher'))}></Route>

                <Route path='/sixuexing' exact component={AsyncComponent(()=>import('../components/sixuexing'))}></Route>

                <Route path='/sixuexing/news' component={AsyncComponent(()=>import('../components/sixuexing'))}></Route>

                <Route path='/sixuexing/industry' component={AsyncComponent(()=>import('../components/sixuexing/industry'))}></Route>

                <Route path='/sixuexing/student' component={AsyncComponent(()=>import('../components/sixuexing/student'))}></Route>

                <Route path='/sixuexing/detail' component={ AsyncComponent(()=>import('../components/sixuexing/newsDetail'))}></Route>

                <Route path='/download' exact component={AsyncComponent(()=>import('../components/download'))}></Route>

                <Route path='/download/detail' component={AsyncComponent(()=>import('../components/download/downloadDetail'))}></Route>

                <Route path='/recruitment' component={AsyncComponent(()=>import('../components/recruitment'))}></Route>

                <Route path='/aboutUs' component={AsyncComponent(()=>import('../components/about'))}></Route>

                <Route path='/qkl' component={AsyncComponent(()=>import('../components/Home/QKL'))}></Route>

                <Route path='/qklpxb' component={AsyncComponent(()=>import('../components/Home/qklpxb'))}></Route>

                <Route path='/qklxyx' component={AsyncComponent(()=>import('../components/qklxyx'))}></Route>

                {/*<Route path='/qklxyx/:id' component={mediaDetail}></Route>*/}
                <Footer />
            </div>
        )
    }
}
