import React, {PureComponent} from 'react'
import sxxImg from '../../images/sxxbanner.png'

export default class Recruitment extends PureComponent{
    render(){
        console.log(1)
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
