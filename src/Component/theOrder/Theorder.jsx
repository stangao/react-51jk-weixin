import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, GetData, UserHeadImg, TabIcon, GetNextPage } from '../common/index';
import { Footer } from '../foot/Foot';
import { Tabs, WhiteSpace } from 'antd-mobile';
import "./theorder.less";

/**
 * (订单状态tab切换)
 * 
 * @export
 * @class TabPane(头部)
 * @class Taborder(内容)
 * @extends {Component}
 * 
 * */
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	}
export class Taborder extends Component{	 
  render() {
  	let inKey = getQueryString("key");
    return (
      <div className="theorder">
        <Tabs defaultActiveKey={inKey} onChange={callback} animated={false}>
          <TabPane tab="全部" key="1">    
            
            <div className="listorder order-close">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >未付款，主动关闭（门店自提）</span></p>
			<p className="order-pay"><label>实付:</label> <span>5.80元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="orderMdzt"><button className="look-dd">查看订单</button></a>
			
			</div>
			</div>
			<a href="orderMdzt">
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">雅培全安素全营养配方粉</p>
			<p className="goods-rules">规格:70mm*22m*5s</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
            
            <div className="listorder order-close">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >未付款，主动关闭（送货上门）</span></p>
			<p className="order-pay"><label>实付:</label> <span>5.80元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="orderShsm"><button className="look-dd">查看订单</button></a>
			
			</div>
			</div>
			<a href="orderShsm">
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">雅培全安素全营养配方粉</p>
			<p className="goods-rules">规格:70mm*22m*5s</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
            
            
            <div className="listorder order-close">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >超时未付款,系统关闭(门店自提)</span></p>
			<p className="order-pay"><label>实付:</label> <span>5.80元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="orderMdzt"><button className="look-dd">查看订单</button></a>
			</div>
			</div>
			<a href="orderMdzt">
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">雅培全安素全营养配方粉</p>
			<p className="goods-rules">规格:70mm*22m*5s</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
             
             <div className="listorder order-close">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >超时未付款,系统关闭(送货上门)</span></p>
			<p className="order-pay"><label>实付:</label> <span>5.80元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="orderMdzt"><button className="look-dd">查看订单</button></a>
			</div>
			</div>
			<a href="orderMdzt">
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">雅培全安素全营养配方粉</p>
			<p className="goods-rules">规格:70mm*22m*5s</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
             
            
          </TabPane>
          <TabPane tab="待付款" key="2">
            <div className="listorder order-close">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >待付款(门店自提)</span></p>
			<p className="order-pay"><label>实付:</label> <span>5.80元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="payother"><button className="pay-fd" >找人代付</button></a>
			<a href="calculateload"><button className="pay-to">去付款</button></a>
			</div>
			</div>
			
			<a href="ordermdzt">		
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">雅培全安素全营养配方粉</p>
			<p className="goods-rules">规格:70mm*22m*5s</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
            
            <div className="listorder order-close">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >待付款(送货上门)</span></p>
			<p className="order-pay"><label>实付:</label> <span>9.80元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="payother"><button className="pay-fd" >找人代付</button></a>
			<a href="calculateload"><button className="pay-to">去付款</button></a>
			</div>
			</div>
			
			<a href="ordershsm">		
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">雅培全安素全营养配方粉</p>
			<p className="goods-rules">规格:70mm*22m*5s</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
            
            
          </TabPane>
          
          <TabPane tab="待发货" key="3">
           <div className="listorder order-close">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >待发货</span></p>
			<p className="order-pay"><label>实付:</label> <span>5.80元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
		    <a href="orderShsm">		
			<button className="look-state">订单状态</button>	
			</a>
			</div>
			</div>
			
			 <a href="orderShsm">		
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">雅培全安素全营养配方粉</p>
			<p className="goods-rules">规格:70mm*22m*5s</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
          </TabPane>
          
          
          <TabPane tab="待自提" key="4">
           <div className="listorder order-tkz">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >待自提</span></p>
			<p className="order-pay"><label>实付:</label> <span>0.01元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="orderMdzt">
			<button className="look-thm">查看提货码</button>
			</a>
			</div>
			</div>
			<a href="orderMdzt">
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">三九感冒灵</p>
			<p className="goods-rules">规格:10g*9袋</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
          </TabPane>
          <TabPane tab="已完成" key="5">
           <div className="listorder order-tkz">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >已完成(门店自提)</span></p>
			<p className="order-pay"><label>实付:</label> <span>0.01元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="review">
			<button className="look-pj">去评价</button>
			</a>
			</div>
			</div>
			<a href="orderMdzt">
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">三九感冒灵</p>
			<p className="goods-rules">规格:10g*9袋</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
             <div className="listorder order-tkz">
			<div className="listorder-ht flex-cont flex-simple">
			<div className="listorder-ht-fl flex-item">
			<p className="order-state"><label>状态:</label> <span >已完成(送货上门)</span></p>
			<p className="order-pay"><label>实付:</label> <span>0.01元</span></p>
			<p className="order-time"><label>下单时间:</label> <span>2016-12-28</span></p>
			</div>
			<div className="listorder-ht-fr">
			<a href="review">
			<button className="look-pj">去评价</button>
			</a>
			</div>
			</div>
			<a href="orderShsm">
		    <div className="listorder-ft flex-cont flex-simple">
		    <div className="listorder-ft-fl">
		    <img src="../static/yp.png"/>
		    </div>
			<div className="listorder-ft-ct flex-item">
			<p className="goods-name">三九感冒灵</p>
			<p className="goods-rules">规格:10g*9袋</p>
			</div>
			<div className="listorder-ft-fr">
			<p className="goods-num">×1</p>
			</div>
		    </div>
		    </a>
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
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
                <Taborder />
                <Footer index="2" />
            </div>
        );
    }
}


export default Main;