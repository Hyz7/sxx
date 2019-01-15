import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import AsyncComponent from '../common/loadable'
import Header from '../common/header'
import Footer from '../common/footer'
import Home from '../components/home'
import Sxx from '../components/sixuexing'
// import Teacher from '../components/teacher'
import About from '../components/about'
import Core from '../components/core'
import Download from '../components/download'
import Recruitment from '../components/recruitment'
import ContactUs from '../components/contact'
import AllCourse from "../components/Home/allCourse";
import QKL from "../components/Home/QKL";
import CourseDetail from '../components/Home/allCourse/courseDetail'
import NewsDetail from "../components/sixuexing/newsDetail";
// import News from "../components/sixuexing/news";
import Industry from "../components/sixuexing/industry";
import Student from "../components/sixuexing/student";
import DownloadDetail from "../components/download/downloadDetail";

export default ()=>(
    <div>
        <Header />
        <Switch>
            <Route path='/' exact component={AsyncComponent(()=>import('../components/home'))}></Route>
            <Route path='/allcourse' component={AllCourse}></Route>
            <Route path='/teacher' component={AsyncComponent(()=>import('../components/teacher'))}></Route>
            <Route path='/sixuexing' exact component={Sxx}></Route>
            <Route path='/sixuexing/news' component={Sxx}></Route>
            <Route path='/sixuexing/industry' component={Industry}></Route>
            <Route path='/sixuexing/student' component={Student}></Route>
            <Route path='/sixuexing/detail' component={ NewsDetail }></Route>
            <Route path='/core' component={Core}></Route>
            <Route path='/download' exact component={Download}></Route>
            <Route path='/download/detail' component={DownloadDetail}></Route>
            <Route path='/recruitment' component={Recruitment}></Route>
            <Route path='/aboutUs' component={About}></Route>
            <Route path='/contactUs' component={ContactUs}></Route>
            <Route path='/qkl' component={QKL}></Route>
            <Route path='/coursedetail' component={CourseDetail}></Route>
        </Switch>
        <Footer />
    </div>
)