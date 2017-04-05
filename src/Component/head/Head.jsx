import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { SearchBar } from 'antd-mobile';
import './Head.less';


/**
 * 生成主题类型小图标
 *
 * @export
 * @class bottomTest
 * @extends {Component}
 */
export class IndexHead extends Component {
	componentDidMount(){
     	var Inputcode=document.querySelector('.am-search-value');
     	Inputcode.onkeydown=function(e){
     		var keycode=document.all?event.keyCode:e.which;
            if(keycode==13){
               var Inputvalue=Inputcode.value;
               //alert(Inputvalue);
             browserHistory.push(`/new/searchResult?kw=${Inputvalue}`,`_self`)
            }
     	}
     }
    render() {
     
        return (
        	<div className = "comHead-box">
        	
	            <div className = "comHead">
	            	<div className = "comHead-sweep">
	            		<i className = "iconfont icon-sweep"></i>
	            	</div>
	            	<SearchBar placeholder="请输入关键词" onkeypress/>
	            </div>
	            <div className = "comHead-place"></div>
	        </div>    
        );
    }
}

