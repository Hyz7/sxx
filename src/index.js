import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Page from './containers'
import './style/swiper/swiper.css'
import './style/entry.less'

const App = ()=>{
    return (
            <BrowserRouter>
                <Page />
            </BrowserRouter>
        )
}

ReactDom.render(<App />,document.getElementById('root'))