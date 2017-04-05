import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import IndexList from '../Component/IndexList'; //首页组件
import Topic from '../Component/Topic'; //主题详情
import TopicCreate from '../Component/TopicCreate'; //发布主题
import MyMessages from '../Component/MyMessages'; //我的消息
import Signin from '../Component/Signin'; //登录
import Signout from '../Component/Signout'; //登录
import WeChat from '../Component/weChat/WeChat'; //聊天页面
import Product from '../Component/product/Product'; //产品详情页
import Personal from '../Component/personal/Personal'; //个人中心页面
import MyScore from '../Component/myScore/MyScore'; //我的积分页面
import MyCoupon from '../Component/myCoupon/MyCoupon'; //我的优惠券页面
import CouponReceive from '../Component/myCoupon/CouponReceive';//优惠券领取页面
import LoginSet from '../Component/login/LoginSet'; //账号设置页面
import ResetPWD from '../Component/login/ResetPWD'; //密码重置页面
import MyCart from '../Component/cart/Cart'; //找回密码页面
import MyPickCode from '../Component/myPickCode/MyPickCode'; //我的提货码

import Classification from '../Component/classification/Classification'; //分类
import Ordershow from '../Component/Ordershow'; //查看订单
import Login from '../Component/login/Login';//shc登录页面
import ForgetPsd from '../Component/login/ForgetPsd';//shc忘记密码时，修改密码

/**下单**/
import Address from '../Component/placeOrder/Address'; //新增地址
import AddressList from '../Component/placeOrder/AddressList'; //收货地址列表页
import PlaceOrder from '../Component/placeOrder/PlaceOrder'; //下单页面
import PayOther from '../Component/placeOrder/PayOther'; //找人代付

/**订单**/
import Refund from '../Component/theOrder/Refund'; //申请退款
import RefundStatus from '../Component/theOrder/RefundStatus'; //退款状态
import Review from '../Component/theOrder/Review'; //去点评
import OrderShsm from '../Component/theOrder/OrderShsm'; //送货上门
import OrderMdzt from '../Component/theOrder/OrderMdzt'; //门店自提
import Theorder from '../Component/theOrder/Theorder'; //订单

/**结算**/
import CalculateLoad from '../Component/calculate/CalculateLoad'; //支付中
import CalculateSuccess from '../Component/calculate/CalculateSuccess'; //支付成功

/**搜索页面**/
import SearchResult from '../Component/searchResult/SearchResult'; //搜索页面
/*
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={IndexList} />//默认首页
            <Route path="topic/create" component={TopicCreate} />
            <Route path="topic/:id" component={Topic} />
            <Route path="my/messages" component={MyMessages} />
            <Route path="signin" component={Signin} />
            <Route path="signout" component={Signout} />
            <Route path="single/product" component={Product} />
            <Route path="my/wechat" component={WeChat} />
            <Route path="user/index" component={Personal} />
            <Route path="my/score" component={MyScore} />
            <Route path="my/coupon" component={MyCoupon} />
            <Route path="my/couponReceive" component={CouponReceive} />
            <Route path="login/set" component={LoginSet} />
            <Route path="login/resetPWD" component={ResetPWD} />
            <Route path="login/login" component={Login} />
            <Route path="login/forgetPsd" component={ForgetPsd} />
             
            <Route path="my/cart" component={MyCart} />
            <Route path="my/myPickCode" component={MyPickCode} />
                                 
           <Route path="new/classification" component={Classification} />//分类
           <Route path="new/ordershow" component={Ordershow} /> //查看订单
            
            //下单
            <Route path="new/address" component={Address} />//新增地址
            <Route path="new/addresslist" component={AddressList} />//收货地址列表页
            <Route path="new/placeorder" component={PlaceOrder} />//下单页面
            <Route path="new/payother" component={PayOther} />//找人代付
           
           
           //订单
            <Route path="new/refund" component={Refund} /> //申请退款
            <Route path="new/refundstatus" component={RefundStatus} /> //退款状态
            <Route path="new/review" component={Review} /> //去点评             
            <Route path="new/ordershsm" component={OrderShsm} />//送货上门
            <Route path="new/ordermdzt" component={OrderMdzt} />//门店自提
            <Route path="new/theorder" component={Theorder} /> //订单        
          
          //结算
           <Route path="new/calculateload" component={CalculateLoad} />//结算支付中
           <Route path="new/calculatesuccess" component={CalculateSuccess} />//结算支付成功
          
          //搜索页面
          <Route path="new/searchResult" component={SearchResult} />//搜索页面
        </Route>
    </Router>
);

export default RouteConfig;