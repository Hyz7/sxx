import React,{Component} from 'react'
import {BrowserRouter, Route ,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Header from "./common/header";
import MainRoutes from "./routes/home";
import Footer from "./common/footer";
import './style/swiper/swiper.css'
import './style/entry.less'
import NotFound from "./components/notFound";

export default class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={ MainRoutes }></Route>

                        <Route component={ NotFound }/>

                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
