import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import { Footer } from '../foot/Foot';
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Personal.less';
import { List, Badge } from 'antd-mobile';

/**
 * 聊天头部
 *
 * @export
 * @class PersonalHead
 * @extends {Component}
 */
export class PersonalHead extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      visible: false,
	      isHaveClick: false,//判断是否已点击
	      initCheckText: "签到+10",
	      examApi:1,//api测试用的
	    };
	}
	exampleApi(){
		let site_id = "100166";
		let access_token = "123456789098765432123456789124566";
		Tool.get('/product/getProductList',{site_id,access_token} , (res) => {
            console.log(res.result.next);//res是请求数据源
            this.setState({
                examApi: res.result.next
            });
        });
	}
	showModal(e){
	    // 现象：如果弹出的弹框上的 x 按钮的位置、和手指点击 button 时所在的位置「重叠」起来，
	    // 会触发 x 按钮的点击事件而导致关闭弹框 (注：弹框上的取消/确定等按钮遇到同样情况也会如此)
	    e.preventDefault(); // 修复 Android 上点击穿透
	    if(!this.state.isHaveClick){
	    	this.setState({
		      visible: true,
		      isHaveClick: true,//判断是否已点击
		      initCheckText: "明日签到+10",
		    });
	    }  
	}
	onClose(e){
	    this.setState({
	      visible: false,
	    });
	}
    render() {
        return (
        	<div className = "PersonalHead-box">
		        <div className ="people-head">
		        	<img src={`/src/Pic/user_log_default.png`} />
		        </div>
		        <div className = "people-info">
		        	 <p className ="user-phone">13888888888</p>
		        	<p className ="user-checkIn">
		        	   <span onClick={this.showModal.bind(this)}>{this.state.initCheckText}</span>
		        	</p>
		        	<p className ="user-checkIn-text">连续签到{this.state.examApi}天可额外获得20积分</p>
		        	
		        </div>
				<Modal
		          title="已签到"
		          transparent
		          maskClosable={false}
		          visible={this.state.visible}
		          onClose={this.onClose}
		          footer={[{ text: '确定', onPress: () => { console.log('ok'); this.onClose(); } }]}
		        >
		          获得10积分<br />
		        </Modal>    	
	        </div>    
        );
    }
    componentDidMount() {
        this.exampleApi();
    }
}



/**
 * 聊天头部
 *
 * @export
 * @class PersonalMain
 * @extends {Component}
 */
export class PersonalMain extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            PersonalNum: 1
        };
    }	
    render() {
        return (
			<div className = "PersonalMain-box">
				<Link to="/new/theorder?key=1">
	        		<div className ="user-common-list">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-order"></i>
	        			</div>
	        			<div className ="common-list-center">
	        				<span>我的订单</span>
	        			</div>
	        			<div className ="common-list-right">
	        				<span>查看全部订单</span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
	        	</Link>	
	        	
        		<div className ="user-order-box">
        			<div>
        				<Link to="/new/theorder?key=2">
        					<i className ="iconfont icon-pay-money"><em>1</em></i>	
        				</Link>
        				<Link to="/new/theorder?key=3">
        					<i className ="iconfont icon-get-goods"><em>8</em></i>
        				</Link>
        				<Link to="/new/theorder?key=4">
        					<i className ="iconfont icon-take-goods"><em>18</em></i>
        				</Link>
        				<Link to="/new/theorder?key=5">
        					<i className ="iconfont icon-have-complete"><em>12</em></i>
        				</Link>	
        			</div>
        		</div>
        		<Link to="/my/score">
	        		<div className ="user-common-list user-list-top">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-score"></i>
	        			</div>
	        			<div className ="common-list-center">
	                            <span>我的积分</span>
	        			</div>
	        			<div className ="common-list-right">
	        				<span>已有积分110</span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
        		</Link>
        		<Link to="/my/myPickCode">
	        		<div className ="user-common-list">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-code"></i>
	        			</div>
	        			<div className ="common-list-center">
	        				<span>我的提货码</span>
	        			</div>
	        			<div className ="common-list-right">
	        				<span></span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
	        	</Link>	
	        	
        		<Link to="/my/coupon">        		
	        		<div className ="user-common-list">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-coupon"></i>
	        			</div>
	        			<div className ="common-list-center">
	        				<span>我的优惠卷</span><em>1</em>
	        			</div>
	        			<div className ="common-list-right">
	        				<span></span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
        		</Link>
        		
        		<Link to="/new/addresslist">        		
	        		<div className ="user-common-list user-list-top">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-adress"></i>
	        			</div>
	        			<div className ="common-list-center">
	        				<span>我的收货地址</span>
	        			</div>
	        			<div className ="common-list-right">
	        				<span></span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
	        	</Link>	
        		<Link to="/login/set">
	        		<div className ="user-common-list">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-account"></i>
	        			</div>
	        			<div className ="common-list-center">
	        				<span>账户设置</span>
	        			</div>
	        			<div className ="common-list-right">
	        				<span></span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
	        	</Link>
	        	<a href="tel:18317775170" className="Dial">
	        		<div className ="user-common-list user-list-top">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-phone"></i>
	        			</div>
	        			
		        		<div className ="common-list-center">
		        			<span>客服电话</span>
		        		</div>
	        			<div className ="common-list-right">
	        				<span></span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
	        	</a>
        		<Link to="/my/wechat">
	        		<div className ="user-common-list">
	        			<div className="common-list-left">
	        				<i className ="iconfont icon-my-server"></i>
	        			</div>
	        			<div className ="common-list-center">
	        				<span>在线客服</span>
	        			</div>
	        			<div className ="common-list-right">
	        				<span></span>
	        				<i className ="iconfont icon-user-arrow"></i>
	        			</div>
	        		</div>
	        	</Link>	
        		<div className ="user-common-list">
        			<div className="common-list-left">
        				<i className ="iconfont icon-my-public"></i>
        			</div>
        			<div className ="common-list-center">
        				<span>已关注公众号</span>
        			</div>
        			<div className ="common-list-right">
        				<span></span>
        				<i className ="iconfont icon-user-arrow"></i>
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
                <PersonalHead />
                <PersonalMain />
                <Footer />
            </div>
        );
    }

}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}


//export default connect((state) => { return { User: state.User } }, action('Personal'))(Main); //连接redux

export default GetData({
    id: 'Personal',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/product/getProductList?site_id=100166&access_token=123456789098765432123456789124566', //服务器请求的地址
    success: (state) => { return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});