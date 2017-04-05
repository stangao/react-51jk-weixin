import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import GetData from '../common/GetData';
import GetNextPage from '../common/GetNextPage';

import './Foot.less';

/**
 * 底部导航菜单
 *
 * @export
 * @class Footer
 * @extends {Component}
 */
class FooterInit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messageCount: 0
        };

        this.getMessageCount = () => {
        	console.log(this.props,222222222222);
            var accesstoken = this.props.User ? this.props.User.accesstoken : '';
            if (accesstoken) {
                Tool.get('/api/v1/message/count', { accesstoken }, (res) => {
                    this.setState({
                        messageCount: res.data
                    });
                });
            }
        }
    }
    render() {
        var myUrl = this.props.User && this.props.User.loginname ? '/user/' + this.props.User.loginname : '/signin';
        var arr = [];
        arr[this.props.index] = 'on';
        return (
            <footer className="common-footer">
                <div className="zhanwei"></div>
                <ul className="menu" data-flex="box:mean">
                    <li className={arr[0]}>
                        <Link to="/">
                            <i className="iconfont icon-home"></i>首页
                        </Link>
                    </li>
                    <li className={arr[1]}>
                        <Link to="/new/classification">
                            <i className="iconfont icon-category"></i>分类
                        </Link>
                    </li>
                    <li className={arr[2]}>
                        <Link to={"/my/cart"}>
                            <i className="iconfont icon-cart"></i>购物车
                        </Link>
                    </li>
                    <li className={arr[3]}>
                        <Link to="/user/index">
                            <i className="iconfont icon-user"></i>个人中心
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
    componentDidMount() {
        this.getMessageCount();
    }
    shouldComponentUpdate(np, ns) {
        return this.props.index !== np.index || this.state.messageCount !== ns.messageCount; //防止组件不必要的更新
    }
    componentDidUpdate() {
        this.getMessageCount();
    }
}
FooterInit.defaultProps = {
    index: 0
};


var Footer = connect((state) => { return { User: state.User }; }, action('User'))(FooterInit);

export { Footer }


