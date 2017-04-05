import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';

import "./MyPickCode.less";

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
	                <p className ="myPickCodeTop">
	                	<span>订单号:10000064646546546546546</span>
	                	<i className ="iconfont icon-pickCode-arrow"></i>
	                </p>
	                <div className="calculatesuccess-cont">
	                	<div className="earth">
		                	<Link to="">
		                		<i className="icon iconfont icon-0605shouhuodizhi"></i>
		                	</Link>
		                </div>
		                <p className="calculatesuccess-cont-ti">totort</p>
		                <p className="calculatesuccess-cont-nr">上海市 上海市 虹口区 西江湾路544-2号</p>
		                <p className="thm">
		                	<img src="../static/thm.png" />
		                </p>
		                <p className="calculatesuccess-cont-nr">正在为您备货,请等待门店确认提货时间</p>
	                </div>
                </div>
            </div>
        );
    }
}


export default Main;
