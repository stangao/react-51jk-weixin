import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../Action/Index';
import { Tool, merged } from '../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, TipMsgSignin, GetNextPage, GetData } from './common/index';
import { Footer } from './foot/Foot';
import { IndexHead } from './head/Head';
import { IndexSlider } from './slider/Slider';
import { IndexMenu } from './indexMenu/IndexMenu';
import { ProductList } from './productList/ProductList';

			

/**
 * (导出组件)
 * 
 * @export
 * @class Main
 * @extends {Component}
 */
class Main extends Component {

    render() {
    	var {data, limit} = this.props.state;
        var {items, before, next} = data;	
        var main = null;
        console.log(this.props.state);
        
        //var {data, loadAnimation, loadMsg, id, tabIndex} = this.props.state;
        //var {User, params} = this.props;
        //var main = null;
        //console.log("2");
        //if (!User) {
        //    main = <TipMsgSignin />
        //} else if (!data) {
        //    main = <DataLoad loadAnimation={loadAnimation} loadMsg={loadMsg} />;
        //} else {
        //    let {hasnot_read_messages, has_read_messages} = data;
        //    Array.prototype.push.apply(hasnot_read_messages, has_read_messages);
        //    main = <Content list={hasnot_read_messages} />;
        //}
        
        if(!items){
        	console.log("数据占时未加载");
        }else{
        	main = <ProductList list={items} />;
        }
    
        
        return (
            <div className="index-list-box">
                <IndexHead />
                <div className="content">
	                <IndexSlider />
	                <IndexMenu />
	                {main}
                </div>
                <Footer index="0" />
            </div>
        );
    }
    
}
export default GetData({
    id: 'IndexList',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/product/getProductList?site_id=100166&access_token=123456789098765432123456789124566', //服务器请求的地址
    success: (state) => { return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});