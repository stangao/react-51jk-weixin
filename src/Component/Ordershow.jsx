import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../Action/Index';
import { Tool, merged } from '../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from './common/index';






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
        var {data, loadAnimation, loadMsg} = this.props.state;
        return (
            <div className="index-list-box">
              
            </div>
        );
    }
}


export default GetNextPage({
    id: 'IndexList',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/api/v1/topics',
    data: (props, state) => { //发送给服务器的数据
        var {page, limit, mdrender} = state;
        return {
            tab: props.location.query.tab || 'all',
            page,
            limit,
            mdrender
        }
    },
    success: (state) => { return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});
