import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, StoreData, merged } from '../../Container/Tool';
import { DataLoad, GetData, UserHeadImg, TabIcon, GetNextPage } from '../common/index';
import { Footer } from '../foot/Foot';
import { IndexHead } from '../head/Head';
import { Tabs, WhiteSpace } from 'antd-mobile';


import "./classfl.less";

/*
 * (菜单左边导航)
 * 
 * @export
 * @class MenuList
 * @extends {Component}
 * */

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export class TabList extends Component{
	render(){
		return(
			 <div className="classfl">       
        <Tabs defaultActiveKey="1" animated={false} onChange={callback}>
          <TabPane tab="中西药品" key="1">
            
            <div className="goodslist">
               <h2>上呼吸道感染&gt;</h2>
               <ul>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               <li>
               <a href="#">
               <img src="/static/yp.png"/>
               </a>
               <p>感冒</p>
               </li>
               
               </ul>
                
              </div>
               
          </TabPane>
          <TabPane tab="母婴用品" key="2">
           <div className="goodslist">
            <h2>  母婴用品&gt;</h2>
          </div>
          </TabPane>
          <TabPane tab="中药/参茸" key="3">
           <div className="goodslist">
           <h2>  中药/参茸&gt;</h2>
            </div>
          </TabPane>
          <TabPane tab="养生保健" key="4">
           <div className="goodslist">
          <h2> 养生保健&gt;</h2>
          </div>
          </TabPane>
          <TabPane tab="医疗器械" key="5">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="6">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="7">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="8">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="9">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="10">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="11">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="12">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="12">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="14">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="医疗器械" key="15">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
          <TabPane tab="123" key="16">
           <div className="goodslist">
           <h2> 医疗器械&gt;</h2>
           </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
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
	//constructor内定义的方法和属性是实例对象自己的
	//constructor外定义的方法和属性则是所有实力对象可以共享的
    constructor(props) {
        super(props);      
        console.log(props);
    }
    
    render() {
    		var adcccc = StoreData.name;
			var sdfasdf = StoreData.sex;
			var sdfasdf =StoreData.work;
        return (
            <div className="index-list-box">
              <p>{adcccc}</p>
              <p>{sdfasdf}</p>
              <p>{sdfasdf}</p>
              <IndexHead/>
              <TabList />
              
              <Footer index="1" />
            </div>
        );
    }
    componentDidMount(){
    	
    }
    
    
}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default GetData({
    id: 'Classification',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/product/getProductCategory?site_id=100063&access_token=123456789098765432123456789123456&appkey=8810006315&_aop_timestamp=1470815406&_aop_signature=RJ%2BBGRP8%2FJCF52IMQRIZLG%3D%3D&print_sql=1', //服务器请求的地址
    success: (state) => {console.log(state); return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});
