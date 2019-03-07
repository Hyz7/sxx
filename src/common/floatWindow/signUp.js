import React, {Component} from 'react';
import signUpImg from '../../images/signup.png'
import signUpBtn from '../../images/signBtn.png'
import {message} from 'antd'
import axios from 'axios'
import * as API from '../../api'
class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            signUpState:true
        }
    }
    closeSignUp=()=>{
        this.setState({signUpState:false})
    }
    signUp=()=>{
        let body={
            studentMobilePhone:this.checkNum(),
            studentRealName:this.checkName()
        }
        if(this.checkNum()&&this.checkName()){
            axios.post(API.SIGN_UP_INFO,body).then(res=>{
                if(res.data.success){
                    this.setState({signUpState:false})
                    message.success('报名成功，三个工作日内会有导师联系您！')
                }
            })
        }else{
            message.error("姓名或手机号码有误，请重填写");
        }
    }
    checkName=()=>{
        let namereg = /^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/;
        let name = this.inputName.value;
        if(!(namereg.test(name))){
            return false;
        }
        return name
    }
    checkNum=()=>{
        let phone = this.inputPhone.value;
        if(!(/^1[34578]\d{9}$/.test(phone))){
            return false;
        }
        return phone
    }
    render() {
        return (
            <div>
                {this.state.signUpState?
                    <div className='signUp-container'>
                        <div className="sign-box">
                            <svg className='icon-svg' style={{fill:'#7A26F8'}} onClick={()=>{this.closeSignUp()}}>
                                <use xlinkHref='#icon-quxiao1' ></use>
                            </svg>
                            <img src={signUpImg} className='signUpImg' alt=""/>
                            <div className="inputBox">
                                <input type="text" ref={(node)=>this.inputName=node} placeholder='请输入您的姓名' />
                                <input type="text" ref={(node)=>this.inputPhone=node} placeholder='请输入您的电话' onKeyDown={(e)=>{
                                    if(e.keyCode==13){this.signUp()}
                                }}/>
                            </div>
                            <img src={signUpBtn} className='signUpBtn' alt="" onClick={()=>{this.signUp()}}/>
                        </div>
                    </div>
                    :null}
            </div>
        );
    }
}

export default SignUp;