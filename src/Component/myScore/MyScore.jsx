import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import { Footer } from '../foot/Foot';
import {Button, Carousel, Tabs, Modal, WingBlank ,Toast} from 'antd-mobile'; 
import './MyScore.less';


/**
 * 聊天头部
 *
 * @export
 * @class MyScoreHead
 * @extends {Component}
 */
export class MyScoreHead extends Component {	
    render() {
        return (
        	<div className = "MyScoreHead-box">
		        <p>我的积分:<span>100</span>分</p> 
	        </div>    
        );
    }
}



/**
 * 聊天头部
 *
 * @export
 * @class MyScoreMain
 * @extends {Component}
 */
export class MyScoreMain extends Component {
	constructor(props) {
        super(props);
    }	
    render() {
    	const TabPane = Tabs.TabPane;
        return (
			<div className = "MyScoreMain-box">
        		<Tabs defaultActiveKey="1" animated={false}>
		          	<TabPane tab="全部积分" key="1">
			            <div>
			              	<div className="my-score-box">
			              		<div className="my-score-list">
			              			<div className="my-score-list-left">
			              				<p>签到送积分</p>
			              				<p className ="my-score-list-time large">2017-02-23</p>
			              			</div>
			              			<span className ="my-score-list-num">+10</span>
			              		</div>			              		
			              		<div className="my-score-list">
			              			<div className="my-score-list-left">
			              				<p>签到送积分</p>
			              				<p>2017-02-23</p>
			              			</div>
			              			<span className ="my-score-list-num">+10</span>
			              		</div>
			              		<div className="my-score-list">
			              			<div className="my-score-list-left">
			              				<p>签到送积分</p>
			              				<p>2017-02-23</p>
			              			</div>
			              			<span className ="my-score-list-num">+10</span>
			              		</div>
			              	</div>
			            </div>
		          	</TabPane>
		          	<TabPane tab="积分收入" key="2">
			            <div>
			              <p className="No">您还没有积分收入</p>
			            </div>
		            </TabPane>
		            <TabPane tab="积分支出" key="3">
			            <div>
			               <p className="No">您还目前没有积分支出</p>
			            </div>
		            </TabPane>
		        </Tabs>
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
                <MyScoreHead />
                <MyScoreMain />
                <Footer />
            </div>
        );
    }

}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}


//export default connect((state) => { return { User: state.User } }, action('MyScore'))(Main); //连接redux

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