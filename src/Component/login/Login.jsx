import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import './Login.less';
import { Tabs, WhiteSpace } from 'antd-mobile';
/**
 *
 * @export
 * @class IndexFoot
 * @extends {Component}
 */
export class UserLogin extends Component {
	change(){
		var Oli=document.getElementsByTagName("li")[0];
		var Olii=document.getElementsByTagName("li")[1];
		var Tel=document.getElementById("telphone");
		var Psd=document.getElementById("Psd");
			Tel.className ="show";
			Psd.className ="hide";
			Oli.className="active";
			Olii.className="";
	}
	changeTwo(){
		var Oli=document.getElementsByTagName("li")[0];
		var Olii=document.getElementsByTagName("li")[1];
		var Tel=document.getElementById("telphone");
		var Psd=document.getElementById("Psd");
			Tel.className ="hide";
			Psd.className ="show";
			Oli.className="";
			Olii.className="active";
	}
	
	ItisNull(){
		var InputTel=document.querySelector('#Psd .InputTel').value.trim();
		var InputPsd=document.querySelector('#Psd .InputPsd').value.trim();
		if(InputPsd.length==0&&InputPsd.length==0){
			document.querySelector('#Psd .check').style.visibility="visible";
			document.querySelector('#Psd .cp').style.visibility="visible";
		}

	}
	
	checkMobile() {
    var mobile = document.querySelector('#Psd .InputTel').value.trim();
    var RegularExp = /^1[3|4|5|7|8][0-9]{9}$/;
		if (!RegularExp.test(mobile)) {
			document.querySelector('#Psd .check').style.visibility="visible";
			document.querySelector('#Psd .check').innerHTML="请输入正确格式的手机号码";
		}
		else{
			document.querySelector('#Psd .check').style.visibility="hidden";
		}
	}
 checkMobilep() {
    var mobile = document.querySelector('#telphone .InputTel').value.trim();
    var RegularExp = /^1[3|4|5|7|8][0-9]{9}$/;
		if (!RegularExp.test(mobile)) {
			document.querySelector('#telphone .check').style.visibility="visible";
			document.querySelector('#telphone .check').innerHTML="请输入正确格式的手机号码";
		}
		else{
			document.querySelector('#telphone .check').style.visibility="hidden";
		}
	}
	
	checkPsd() {
    var psd = document.querySelector('#Psd .InputTel').value.trim();
    var RegularExp =/^[0-9A-Za-z]{6,}$/;
		if (!RegularExp.test(psd)) {
			document.querySelector('#Psd .cp').style.visibility="visible";
			document.querySelector('#Psd .cp').innerHTML="请输入6位以上以数字和字母组成的密码";
		}
		else{
			document.querySelector('#Psd .cp').style.visibility="hidden";
		}
	}

	checkPsdd() {
    var psd = document.querySelector('#telphone .InputNum').value.trim();
    var psdd=document.querySelector('#telphone .InputY').value.trim();
		if (psd!=psdd) {
			document.querySelector('#telphone .cp').style.visibility="visible";
		}
		else{
			document.querySelector('#telphone .cp').style.visibility="hidden";
		}
	}
    render() {
        return (
        	
        	<div className="BodyBg">
        		<ul className="Tab">
        			<li onClick={this.change}>手机验证登陆</li>
        			<li onClick={this.changeTwo} className="active">账号密码登陆</li>
        		</ul>
        		
        		<div id="telphone" className="hide">
        			<div className="msg">
	        			<p>
	        				<input className="InputTel" type="text" placeholder="请输入正确的手机号码" onBlur ={this.checkMobilep.bind(this)}/>
	        			</p>
	        			<span className="check">手机号不能为空</span>
	        		</div>
        			<div className="msg Re">
	        			<p>
	        				<input className="InputNum" type="text" placeholder="请输入验证码"/>
	        				<input type="button" value="获取验证码" className="btn"/>
	        			</p>
	        			<span>手机号不能为空</span>
	        		</div>	
					<div className="msg">
	        			<p>
	        				<input className="InputY" type="text" placeholder="请输入邀请码【选填】"onBlur ={this.checkPsdd.bind(this)}/>
	        			</p>
	        			<span className="cp">两次输入的验证码不一致</span>
	        		</div>
	        		<input type="submit" value="登录" className="Submit"/>
        		</div>
        		
        		
        		<div id="Psd" className="show">
        			<div className="msg">
	        			<p>
	        				<input className="InputTel" type="text" placeholder="请输入正确的手机号码"  onBlur ={this.checkMobile.bind(this)}/>
	        			</p>
	        			<span className="check">手机号码不能为空</span>
	        		</div>
	        		<div className="msg">
	        			<p>
	        				<input className="InputPsd" type="text" placeholder="请输入6位以上的密码" onBlur ={this.checkPsd.bind(this)}/>
	        			</p>
	        			<span className="cp">密码不能为空</span>
	        		</div>
	        		<div className="msg small">
	        			<input type="submit" onClick={this.ItisNull} value="登录" className="Submit"/>
	        			<Link to="/login/forgetPsd">
	        				<font>忘记密码?</font>
	        			</Link>	
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