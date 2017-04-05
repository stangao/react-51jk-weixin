import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';

import "../placeOrder/placeorder.less";
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';



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
    JudgeState(e){
    var Load=document.querySelector('.calculateload');
	var state=1;
	if(Load && state){
	alert('支付成功！');
	browserHistory.push('calculatesuccess','_self');
	}	
}
    componentDidMount(e){
   	this.JudgeState();
   }
    render() {
      
        return (
            <div className="index-list-box">
            <div className="calculateload">
               <p className="load">支付中,请稍后...</p>
               <p>温馨提示:若支付窗口长时间未打开,请点击按钮重试.</p>
               </div>
            </div>
        );
    }
}


export default Main;