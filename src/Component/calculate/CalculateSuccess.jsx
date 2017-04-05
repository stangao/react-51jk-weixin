import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';

import "../placeOrder/placeorder.less";

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
            <div className="calculatesuccess">
                <p className="calculatesuccess-ti">支付成功!</p>
                <p className="calculatesuccess-nr">正在为您备货,请等待门店确认提货时间!</p>
                <div className="calculatesuccess-cont">
                <div className="earth"><Link to="">
                <i className="icon iconfont icon-0605shouhuodizhi"></i></Link></div>
                <p className="calculatesuccess-cont-ti">totort</p>
                <p className="calculatesuccess-cont-nr">上海市 上海市 虹口区 西江湾路544-2号</p>
                <p className="thm"><img src="../static/thm.png" /></p>
                <p className="calculatesuccess-cont-nr">正在为您备货,请等待门店确认提货时间</p>
                </div>
                
                <Link to="/new/ordermdzt"><button>我知道了</button></Link>
                </div>
            </div>
        );
    }
}


export default Main;