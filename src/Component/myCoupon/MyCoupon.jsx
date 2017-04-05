import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import { Footer } from '../foot/Foot';
import {Button, Carousel, Tabs, Modal, WingBlank ,Toast} from 'antd-mobile'; 
import './MyCoupon.less';


/**
 * 优惠券头部
 *
 * @export
 * @class MyCouponHead
 * @extends {Component}
 */

export class MyCouponHead extends Component {	
	constructor(props){
		super(props);
		this.state = {
			visible:true
		};
	}
	
	handleClick(e){
		this.setState({
			visible:!this.state.visible
		})
	}
    render() {
    	var visible = this.state.visible?"none":"block";
        return (
        	<div>
	        	<div className = "MyCouponHead-box">
			        <p>可使用<span className="iconfont icon-xiangxia2" onClick={this.handleClick.bind(this)}></span></p> 
		        </div>  
		        <div className="MyCouponHead-hidden" style={{display:visible}}>
		        	<div className="MyCouponHead-btn">
			        	<span>可使用</span>
			        	<span>已使用</span>
			        	<span>已过期</span>
		        	</div>
		        </div>
		    </div>    
        );
    }
}





/**
 * 优惠券头部可领取
 *
 * @export
 * @class myCouponReceive
 * @extends {Component}
 */
export class MyCouponReceive extends Component {
	render () {
		return (
			<div className = "myCouponReceive-box">
				<p>您有新的优惠券<Link to="/my/couponReceive">点击领取</Link></p>
			</div>
		);
	}
}

/**
 * 优惠券内容
 *
 * @export
 * @class MycouponMain
 * @extends {Component}
 */
export class MycouponMain extends Component {
	render () {
		return (
			<div className="myCouponMain-box">
				<div className="myCouponMain-title">
					<p className="title">推荐您使用</p>
				</div>
				
				
				<div className="myCouponMain-list">
					<div className="myCoupon-left">
						<p className="iconfont icon-youhuiquan-zuosekuai icon-red">
							<span className="icon-title">全品类</span>
							<span className="icon-leftline"></span>
							<span className="icon-rightline"></span>
							<span className="icon-bottom">¥ <b>5</b></span>			
						</p>
						<p className="iconfont icon-youhuiquan-zuosekuaixianjie"></p>
					</div>
					<div className="myCoupon-right">
						<p className="p-top">购买全商品类商品满3件使用</p>
						<p className="p-mid">购买指定商品</p>
						<p className="p-bottom" >点击查看规则详情</p>
						<p className="expired-time"><span>00 </span>时 <span>02 </span>分 <span>07 </span>秒 后过期</p>
						<p className="p-button">立即使用</p>
					</div>
				</div>
				<div className="myCouponMain-list">
					<div className="myCoupon-left">
						<p className="iconfont icon-youhuiquan-zuosekuai icon-orange">
							<span className="icon-title">全品类</span>
							<span className="icon-leftline"></span>
							<span className="icon-rightline"></span>
							<span className="icon-bottom"><b>9</b> 折</span>			
						</p>
						<p className="iconfont icon-youhuiquan-zuosekuaixianjie"></p>
					</div>
					<div className="myCoupon-right">
						<p className="p-top">购买全商品类商品满3件使用</p>
						<p className="p-mid">购买指定商品</p>
						<p className="p-bottom" >点击查看规则详情</p>
						<p className="expired-time"><span>00 </span>时 <span>02 </span>分 <span>07 </span>秒 后过期</p>
						<p className="p-button">立即使用</p>
					</div>
				</div>
				
				<div className="myCouponMain-list">
					<div className="myCoupon-left">
						<p className="iconfont icon-youhuiquan-zuosekuai icon-navy">
							<span className="icon-title">全品类</span>
							<span className="icon-leftline"></span>
							<span className="icon-rightline"></span>
							<span className="icon-bottom">
								<span className="span-navy"><sup>¥</sup><sub>限价</sub> <b>80</b></span>
							</span>
						</p>
						<p className="iconfont icon-youhuiquan-zuosekuaixianjie"></p>
					</div>
					<div className="myCoupon-right">
						<p className="p-top">指定品类满3件立减</p>
						<p className="p-mid"></p>
						<p className="p-bottom" >点击查看规则详情</p>
						<p className="expired-time"><span>05</span> 天后过期</p>
						<p className="p-button">立即使用</p>
					</div>
				</div>
				
				<div className="myCouponMain-list">
					<div className="myCoupon-left">
						<p className="iconfont icon-youhuiquan-zuosekuai icon-blue">
							<span className="icon-title">全品类</span>
							<span className="icon-leftline"></span>
							<span className="icon-rightline"></span>
							<span className="icon-bottom"><b className="shipping">包邮</b></span>			
						</p>
						<p className="iconfont icon-youhuiquan-zuosekuaixianjie"></p>
					</div>
					<div className="myCoupon-right">
						<p className="p-top">指定品类满3件立减</p>
						<p className="p-mid"></p>
						<p className="p-bottom" >点击查看规则详情</p>
						<p className="expired-time"><span>2017.02.25~2017.02.28</span> 有效</p>
						<p className="p-button">立即使用</p>
					</div>
				</div>
				
				<div className="myCouponMain-list">
					<div className="myCoupon-left">
						<p className="iconfont icon-youhuiquan-zuosekuai icon-gray">
							<span className="icon-title">全品类</span>
							<span className="icon-leftline"></span>
							<span className="icon-rightline"></span>
							<span className="icon-bottom">¥ <b>5</b></span>			
						</p>
						<p className="iconfont icon-youhuiquan-zuosekuaixianjie"></p>
					</div>
					<div className="myCoupon-right">
						<p className="p-top">购买全商品类商品满3件使用</p>
						<p className="p-bottom" >点击查看规则详情</p>
						<p className="iconfont icon-icon-yishiyong"></p>
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
                <MyCouponHead />
                <MyCouponReceive />
                <MycouponMain />
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