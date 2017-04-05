import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import { ActionSheet, Toast, Icon } from 'antd-mobile';
import './LoginSet.less';
// fix touch to scroll background page on iOS
		// https://github.com/ant-design/ant-design-mobile/issues/307
		// https://github.com/ant-design/ant-design-mobile/issues/163
		const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
		let wrapProps;

/**
 * 聊天头部
 *
 * @export
 * @class LoginSetHead
 * @extends {Component}
 */
export class LoginSetHead extends Component {	
    constructor() {
	    super();
	    this.state = {
	      clicked: 0,
	      clicked1: 1,
	      clicked2: 2,
	    };
	  }
	showActionSheet(e){
	    const BUTTONS = ['通过手机验证', '使用原密码修改', '取消'];
	    
	    ActionSheet.showActionSheetWithOptions({
	      options: BUTTONS,
	      cancelButtonIndex: BUTTONS.length - 1,
	      destructiveButtonIndex: BUTTONS.length - 2,
	      // title: '标题',
	      //message: '我是描述我是描述',
	      maskClosable: true,
	      'data-seed': 'logId',
	      wrapProps,
	    },
	    (buttonIndex) => {	
	      this.setState({ 
	      	clicked: BUTTONS[buttonIndex],
	      });
	      return new Promise(()=>{
	      		if (BUTTONS[buttonIndex] == "通过手机验证") {
	      			location.href="ResetPWD";
	      		}else if(BUTTONS[buttonIndex] == "使用原密码修改"){
	      			location.href="ForgetPsd";
	      		}else if(BUTTONS[buttonIndex] == "取消"){
	      			location.href="set";
	      		}
	      	}	
	      )
	    });
	}
	
    render() {
    		
		if (isIPhone) {
		
		  wrapProps = {
		    onTouchStart: e => e.preventDefault(),
		  };
		}
        return (
			
        	<div className = "LoginSetHead-box" onClick={this.showActionSheet.bind(this)}>
		        <div className="LoginSetHead-mian">
		        	<i className ="iconfont icon-change-password"></i>更改登陆密码
		        </div>
		        <span><i className ="iconfont icon-change-arrow"></i></span>
	        </div> 
        );
    }
}



/**
 * 聊天头部
 *
 * @export
 * @class LoginSetBottom
 * @extends {Component}
 */
export class LoginSetBottom extends Component {
	
    render() {
    	
		if (isIPhone) {
		  wrapProps = {
		    onTouchStart: e => e.preventDefault(),
		  };
		}
        return (
			<div className = "LoginSetMain-box">
				<div>
					<input type="button" value="退出当前账号" />
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
                <LoginSetHead />
                <LoginSetBottom />
            </div>
        );
    }

}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}


//export default connect((state) => { return { User: state.User } }, action('LoginSet'))(Main); //连接redux

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