import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';

import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';
import {  dataObj  } from '../common/wxmethod';

import "./theorder.less";

import { Flex, WhiteSpace, Modal, Button, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;

const ConWindow = React.createClass({
  render() {
    return (
      <WingBlank size="lg">
     
        <Button className="general" onClick={() => alert(' ', '确认收货', [
          { text: '取消', onPress: () => console.log('取消'), style: 'default' },
          { text: '确定', onPress: () => console.log('确定'), style: { fontWeight: 'bold' } },
        ])}
        >确认收货 </Button>

      </WingBlank>
    
    );
  },
});

export class Fixfoot extends Component{
  render() {
    return (
      <div className="flex-container fixedfoot">
        <Flex>
         <Flex.Item className="foot-but hide"><Link to="/">门店导航</Link></Flex.Item>
         <Flex.Item className="foot-but hide"><Link to="/">微信付款</Link></Flex.Item>         
         <Flex.Item className="foot-but "><ConWindow/></Flex.Item>
         
         <Flex.Item className="foot-but"><Link to="/new/refund">申请退款</Link></Flex.Item>
         <Flex.Item className="foot-but" ><Link to="/new/refundstatus">退款状态</Link></Flex.Item>
         <Flex.Item className="foot-but cancel-order hide"><Link to=" ">取消订单</Link></Flex.Item>
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
    	<p className="cont-ht">自提门店</p>
    	<p >白杨店</p>
    	<p>浙江省 杭州市 其他区 6号大街 368-1号</p>
    	</div>
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">自提人电话</p>
    	<p >13814758793</p>
    	</div>
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">提货码</p>
    	<p className="thm"><img src="../static/thm.png"/></p>
    	</div>
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">促销员ID</p>
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
    	<p className="goods-rules">规格:90g</p>
    	</div>
    	<div className="orderInfo-mt-fr">
    	<p>¥ 9.30</p>
    	<p>×1</p>
    	</div>
    	</div>
    	
    	<div className="orderInfo-ft">
    	<p>共<i className="goods-nu">1</i>件商品 运费 
    	<span className="goods-freight">¥ 0.00</span> 
    	实付
    	<span className="goods-pay">¥ 9.30</span>
    	</p>
    	</div>
    	
    	</div>
    	
    	
    	</div>
    )
    }
  }


export class RedPackage extends Component{
	Maskpop(e){
		 dataObj.init();
		document.querySelector('.maskpackage').style.display="block";
	}
	Closepop(e){
		document.querySelector('.maskpackage').style.display="none";
	}
  render() {
    return (
    	<div className="redpackage">
    	<div className="redpackage-cent" onClick={this.Maskpop}>
    	<img src='../static/hongbao.png'/>
    	</div>
    	<div className="maskpackage">
    	<div className="maskpackage-mask"></div>
    	<div className="maskpackage-cent">
    	<div className="maskpackage-arrow"><img src='../static/biaozhe.png'/></div>
    	<div className="maskpackage-txt">
    	<p>请点击右上角<br/>分享到朋友圈领取<br/>您的红包</p>
    	</div>
    	<div className="maskpackage-box"><img src='../static/hongbao.png'/></div>
    	<div className="maskpackage-giveup">   	
    	<span onClick={this.Closepop}>放弃,我不要了</span>
    	</div>
    	</div>
    	</div>
    	
    <input type="hidden" name="trigger_title" value="111"  className="trigger_title"/>
    <input type="hidden" name="trigger_desc" value="222" className="trigger_desc"/>
    <input type="hidden" name="share_url" value="333"  className="share_url"/>
    <input type="hidden" name="trigger_icon" value="444"  className="trigger_icon"/>
    	
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
	componentDidMount(e){               
			       this.shareCoupon();          
   }
    constructor(props) {
        super(props);
        
        this.share_coupon=(fnShareTimelineObj,fnSendAppMessageObj)=>{
        	/*alert(111);*/
    	     wx.ready(function() {
            wx.onMenuShareTimeline(fnShareTimelineObj);
                    wx.onMenuShareAppMessage(fnSendAppMessageObj);
                   
        	 });
        };
    }
    shareCoupon(e){
    	let title = document.querySelector('.trigger_title').value;
    	let desc  = document.querySelector('.trigger_desc').value;
    	let link  = document.querySelector('.share_url').value;
    	let imgUrl  = document.querySelector('.trigger_icon').value;
    	
    	let obj1 = {
          title: title,
          desc: desc,
          link: link,
          imgUrl: imgUrl,
          success: function() {
          alert("分享成功!");
          },        
         cancel: function() {
           // 用户取消分享后执行的回调函数
          }
       };
       let obj2 = {
          title: title,
          link: link,
          imgUrl: imgUrl,
          success: function(res) {
          alert("分享成功!");
          },
        cancel: function(res) {
          //alert('已取消');
        },
          fail: function(res) {
         //alert(JSON.stringify(res));
        }
      };
    	this.share_coupon(obj1, obj2);
    }
    
    
    
    
    render() {
        
        return (
            <div className="index-list-box">
              <OrderInfo/>
              <RedPackage/>
              <div className="zhanweizi"></div>
              <Fixfoot/>
            </div>
        );
    }
}


export default Main;
