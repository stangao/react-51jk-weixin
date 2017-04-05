import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, TipMsgSignin, GetNextPage, GetData } from '../common/index';
import "./placeorder.less";	

/**
 * (导出组件)
 * 
 * @export
 * @class Main
 * @extends {Component}
 */
class Main extends Component {

    render() {
    	        
        return (
            <div className="index-list-box">
              <div className="pay-other">
              <div className="pay-other-pic"><img src="../static/pay-ewm.png"/></div>
              <p className="pay-other-money">¥0.01</p>
              <p>微信扫一扫支付</p>
              </div>
            </div>
        );
    }
    
}


export default Main;