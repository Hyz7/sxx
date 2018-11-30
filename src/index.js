import React from 'react'
import ReactDom from 'react-dom'
// import App from './app'
import store from "./store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainRoutes from "./routes/index";
import NotFound from "./components/notFound";
import Provider from "react-redux/es/components/Provider";
import './style/swiper/swiper.css'
import './style/entry.less'

const App=()=>{
    return(
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

ReactDom.render(<App />,document.getElementById('root'))