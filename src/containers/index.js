import React,{Component} from 'react'
import '../style/swiper/swiper.css'

import Header from '../components/header'
import Route from '../routes'
import Footer from '../components/footer'
export default class Page extends Component{
    render() {
        return(
            <div>
                <Header />
                <Route />
                <Footer />
            </div>
        )
    }
}
