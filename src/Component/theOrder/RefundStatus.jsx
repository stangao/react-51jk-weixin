import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';



import "./theorder.less";
export class FlexList extends Component{
	render() {
		return (
			<div className="cont">
			<p className="flex-cont flex-simple status">
			<label >{this.props.title}</label>
			<span className="flex-item">{this.props.content}</span>
			</p>
			</div>
		)
	}
	
}

export class StatusList extends Component{
  render() {
    return (<div className="orderInfo">
      
    <FlexList title="退款状态：" content="退款中"/>
    <FlexList title="申请时间：" content="2017-02-15 14:22:04"/>
    <FlexList title="实付款：" content="¥ 9.30"/>
    <FlexList title="运费：" content="¥ 0.03"/>
    <FlexList title="退款金额：" content="¥ 9.33"/>
    <FlexList title="是否退货：" content="仅退款"/>
    <FlexList title="退款原因：" content="我不想买了"/>
    <FlexList title="退款说明：" content="不想要了"/>
    <FlexList title="退款凭证：" content="您没有上传凭证"/>
      
    </div>)
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
                
              <StatusList />
               
            </div>
        );
    }
}


export default Main;
