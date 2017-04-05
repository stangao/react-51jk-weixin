import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';
import { Picker, List, WhiteSpace , Checkbox, Flex} from 'antd-mobile';
import "./placeorder.less";

/*固定底部**/
export class  Fixfoot extends Component{
  render() {
    return (
      <div className="flex-container fixedfoot fixedfoot-address">
        <Flex>        
         <Flex.Item className="foot-but save-address"><a href="address">新增收货地址</a></Flex.Item>
        </Flex>
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
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="index-list-box">
            
            <div className="flex-cont flex-simple address-show">
            <div className="flex-item address-show-fl">
            <p>青山 <i>13847954654</i></p>
            <p>上海市 上海市 虹口区 </p>
            <p>虹关路368号</p>
            </div>
            <div className="address-show-fr"><a href="address">编辑</a></div>
            </div>
            
            <div className="flex-cont flex-simple address-show">
            <div className="flex-item address-show-fl">
            <p>青山 <i>13847954654</i></p>
            <p>上海市 上海市 虹口区 </p>
            <p>虹关路368号</p>
            </div>
            <div className="address-show-fr"><a href="address">编辑</a></div>
            </div>
            
            <div className="zhanweizi"></div>
              <Fixfoot/>
            </div>
        );
    }
}


export default Main;