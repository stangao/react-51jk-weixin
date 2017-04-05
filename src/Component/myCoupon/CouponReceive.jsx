import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import { Footer } from '../foot/Foot';
import {Button, Carousel, Tabs, Modal, WingBlank ,Toast} from 'antd-mobile'; 
import './CouponReceive.less';


/**
 * 领取优惠券头部
 *
 * @export
 * @class MyCouponHead
 * @extends {Component}
 */

export class CouponReceiveHead extends Component {	
    render() {
        return (
        	<div className="CouponReceiveHead-box">
        		<Link to="/my/coupon">
        			<i className="iconfont icon-shangyiye"></i>
        		</Link>
        		<p>领取优惠券</p>
		    </div>    
        );
    }
}


/**
 * 领取优惠券Main
 *
 * @export
 * @class MyCouponHead
 * @extends {Component}
 */

export class CouponReceiveMain extends Component {
	render(){
		return (
			<div>
				<div className="CouponReceiveMain-box">
					<p className="receive-title">【宏仁堂】年中大促 , 惠不可挡</p>
					<a href="#"><img src={`/src/Pic/slider02.jpg`} /></a>
					<p className="coupon-activity">
						优惠券活动说明文字优惠券活动说明文字优惠券活动说明文字优惠券活动说明文字优惠券活动说明文字优惠券活动说明文字优惠券活动说明文字
					</p>
				</div>
				<p className="CouponMainButton">立即领取</p>
			</div>
		)
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
            	<CouponReceiveHead />
            	<CouponReceiveMain />
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






