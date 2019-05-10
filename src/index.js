import React from 'react'
import ReactDom from 'react-dom'
import store from "./store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './style/entry.less'
import MainRoutes from "./routes/index";
import NotFound from "./components/notFound";
import { Provider } from "react-redux";
import './style/swiper/swiper.less'
import './utils/global'

const App=()=>{
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <MainRoutes />
                    <Route component={ NotFound }/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.render(<App />,document.getElementById('root'))