import React,{PureComponent} from 'react'
import sxxImg from '../../images/sxxbanner.png'

class Recruitment extends PureComponent{
    render(){
        return (
            <div className="recruitment-container">
                <div className="recruitment-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="recruitment-content">

                </div>
            </div>
        )
    }
}

export default Recruitment