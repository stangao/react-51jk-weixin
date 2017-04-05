import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import './ForgetPsd.less';
import { Tabs, WhiteSpace } from 'antd-mobile';
/**
 *
 * @export
 * @class IndexFoot
 * @extends {Component}
 */


export class UserLogin extends Component {

	checkMobile() {
    var mobile = document.querySelector('.Psd .InputTel').value.trim();
    var RegularExp = /^1[3|4|5|7|8][0-9]{9}$/;
		if (!RegularExp.test(mobile)) {
			document.querySelector('.Psd .check').style.visibility="visible";
			document.querySelector('.Psd .check').innerHTML="请输入正确格式的手机号码";
		}
		else{
			document.querySelector('.Psd .check').style.visibility="hidden";
		}
	}
	
	checkPsd() {
    var psd = document.querySelector('.Psd .InputPsd').value.trim();
    var RegularExp =/^[0-9A-Za-z]{6,}$/;
		if (!RegularExp.test(psd)) {
			document.querySelector('.Psd .cp').style.visibility="visible";
			document.querySelector('.Psd .cp').innerHTML="请输入6位以上以数字和字母组成的密码";
		}
		else{
			document.querySelector('.Psd .cp').style.visibility="hidden";
		}
	}
	
    render() {
        return (
        	<div className="BodyBg">        		
        		<div className="Psd">
        			<div className="msg">
	        			<p>
	        				<input className="InputTel" type="text" placeholder="请输入正确的手机号码"  onBlur ={this.checkMobile.bind(this)}/>
	        			</p>
	        			<span className="check">用户名不能为空</span>
	        		</div>
	        		<div className="msg">
	        			<p>
	        				<input className="InputNum" type="text" placeholder="请输入验证码"/>
	        				<input type="button" value="获取验证码" className="btn"/>
	        			</p>
	        			<span>手机号不能为空</span>
	        		</div>	
	        		<div className="msg">
	        			<p>
	        				<input className="InputPsd" type="text" placeholder="请输入6位以上的密码" onBlur ={this.checkPsd.bind(this)}/>
	        			</p>
	        			<span className="cp">用户名不能为空</span>
	        		</div>
	        		<div className="msg">
	        			<Link to="/login/Login"><input type="submit" value="完成更改" className="Submit"/></Link>
	        		</div>
	        		
        		</div>
        	</div>
        );
    }
}
/**
 * 模块入口
 * 
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <UserLogin />
            </div>
        );
    }

}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}


//export default connect((state) => { return { User: state.User } }, action('ResetPWD'))(Main); //连接redux

export default GetData({
    id: 'MyMessages',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/api/v1/messages', //服务器请求的地址
    stop: (props, state) => {
        return !Boolean(props.User); //true 拦截请求，false不拦截请求
    },
    data: (props, state) => { //发送给服务器的数据
        return { accesstoken: props.User.accesstoken }
    },
    success: (state) => { return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});