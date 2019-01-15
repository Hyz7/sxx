import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import AsyncComponent from '../common/loadable'
import Header from '../common/header'
import Footer from '../common/footer'
/*import Home from '../components/home'
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
import DownloadDetail from "../components/download/downloadDetail";*/

export default ()=>(
    <div>
        <Header />
        <Switch>
            <Route path='/' exact component={AsyncComponent(()=>import('../components/home'))}></Route>
            <Route path='/allcourse' component={AsyncComponent(()=>import('../components/Home/allCourse'))}></Route>
            <Route path='/teacher' component={AsyncComponent(()=>import('../components/teacher'))}></Route>
            <Route path='/sixuexing' exact component={AsyncComponent(()=>import('../components/sixuexing'))}></Route>
            <Route path='/sixuexing/news' component={AsyncComponent(()=>import('../components/sixuexing'))}></Route>
            <Route path='/sixuexing/industry' component={AsyncComponent(()=>import('../components/sixuexing/industry'))}></Route>
            <Route path='/sixuexing/student' component={AsyncComponent(()=>import('../components/sixuexing/student'))}></Route>
            <Route path='/sixuexing/detail' component={ AsyncComponent(()=>import('../components/sixuexing/newsDetail'))}></Route>
            <Route path='/core' component={AsyncComponent(()=>import('../components/core'))}></Route>
            <Route path='/download' exact component={AsyncComponent(()=>import('../components/download'))}></Route>
            <Route path='/download/detail' component={AsyncComponent(()=>import('../components/download/downloadDetail'))}></Route>
            <Route path='/recruitment' component={AsyncComponent(()=>import('../components/recruitment'))}></Route>
            <Route path='/aboutUs' component={AsyncComponent(()=>import('../components/about'))}></Route>
            <Route path='/contactUs' component={AsyncComponent(()=>import('../components/contact'))}></Route>
            <Route path='/qkl' component={AsyncComponent(()=>import('../components/Home/QKL'))}></Route>
            <Route path='/coursedetail' component={AsyncComponent(()=>import('../components/Home/allCourse/courseDetail'))}></Route>
        </Switch>
        <Footer />
    </div>
)