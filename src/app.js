import React,{Component} from 'react'
import {BrowserRouter, Route ,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Header from "./components/header";
import MainRoutes from "./routes/home";
import Footer from "./components/footer";
import './style/swiper/swiper.css'
import './style/entry.less'
import NotFound from "./containers/notFound";

export default class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        {/*<Route exact path="/" render={() => <Redirect to="/xixuexing/index" push />} />*/}

                        <Route path='/' component={ MainRoutes }></Route>

                        <Route component={ NotFound }/>

                        {/*<Route path='/login' component={ login }></Route>*/}
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
