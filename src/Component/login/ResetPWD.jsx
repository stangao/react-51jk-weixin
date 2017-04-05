import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import './ResetPWD.less';

/**
 * 聊天头部
 *
 * @export
 * @class ResetPWDHead
 * @extends {Component}
 */
export class ResetPWDHead extends Component {	
    constructor() {
	    super();
	  }	
    render() {

        return (
        	<div className = "ResetPWDHead-box">
		        <div className="ResetPWDHead-list">
		        	<input type="password" placeholder="请输入原始密码" />
		        </div>
		        <div className="ResetPWDHead-list">
		        	<input type="password" placeholder="请输入6位以上的新密码" />
		        </div>
	        </div> 
        );
    }
}


/**
 * 聊天头部
 *
 * @export
 * @class ResetPWDBottom
 * @extends {Component}
 */
export class ResetPWDBottom extends Component {	
    render() {    	
        return (
			<div className = "ResetPWDMain-box">
				<div>
					<input type="button" value="完成更改" />
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
                <ResetPWDHead />
                <ResetPWDBottom />
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