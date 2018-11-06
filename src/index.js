import React from 'react'
import ReactDom from 'react-dom'
import Page from './containers'
import './style/entry.less'

const App = ()=>{
    return <Page />
}

ReactDom.render(<App />,document.getElementById('root'))