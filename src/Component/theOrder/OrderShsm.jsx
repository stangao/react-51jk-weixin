import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';


import "./theorder.less";
import { Flex, WhiteSpace } from 'antd-mobile';

export class Fixfoot extends Component{
  render() {
    return (
      <div className="flex-container fixedfoot">
       <Flex>
         <Flex.Item className="foot-but hide"><Link to="/">门店导航</Link></Flex.Item>
         <Flex.Item className="foot-but hide"><Link to="/">微信付款</Link></Flex.Item>         
         <Flex.Item className="foot-but hide"><Link to="/">确认收货</Link></Flex.Item>
         
         <Flex.Item className="foot-but"><Link to="/new/refund">申请退款</Link></Flex.Item>
         <Flex.Item className="foot-but" ><Link to="/new/refundstatus">退款状态</Link></Flex.Item>
         <Flex.Item className="foot-but cancel-order"><Link to=" ">取消订单</Link></Flex.Item>
        </Flex>
      </div>
    )
  }
}

export class OrderInfo extends Component{
  render() {
    return (
    	<div className="orderInfo orderInfo-zt">
    	<div className="cont cont-tp">   	
    	<p className="cont-ht">收货信息</p>
    	<p >收货人:张三</p>
    	<p >联系电话:13814758793</p>
    	<p>收货地址:浙江省 杭州市 其他区 6号大街 368-1号</p>
    	</div>
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">促销ID</p>
    	<p >无</p>
    	</div>
    
    	
    	
    	<div className="cont"> 
    	<div className="orderInfo-ht">
    	<p className="cont-te">订单信息</p>
    	<p>订单号:1001661487140867749</p>
    	<p>下单时间:2017-01-05 14:20:03</p>
    	</div>
    	<div className="orderInfo-mt flex-cont flex-simple">
    	<div className="orderInfo-mt-fl">
    	<img src="../static/yp.png"/>
    	</div>
    	<div className="orderInfo-mt-md flex-item">
    	<p className="goods-name">佳洁士草本水晶牙膏90g</p>
    	<p className="goods-rules">规格:17cm*9m-3p</p>
    	</div>
    	<div className="orderInfo-mt-fr">
    	<p>¥ 0.68</p>
    	<p>×1</p>
    	</div>
    	</div>
    	
    	<div className="orderInfo-ft">
    	<p>共<i className="goods-nu">1</i>件商品 运费 
    	<span className="goods-freight">¥ 8.00</span> 
    	实付
    	<span className="goods-pay">¥ 8.68</span>
    	</p>
    	</div>
    	
    	</div>
    	
    	
    	</div>
    )
    }
  }

/**
 * (导出组件)
 * 
 * @export
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <div className="index-list-box">
              <OrderInfo/>
              <div className="zhanweizi"></div>
              <Fixfoot/>
            </div>
        );
    }
}


export default Main;
