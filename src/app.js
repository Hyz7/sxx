import React,{Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Header from "./components/header";
import Routes from "./routes";
import Footer from "./components/footer";
import './style/swiper/swiper.css'
import './style/entry.less'

export default class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Routes />
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}
