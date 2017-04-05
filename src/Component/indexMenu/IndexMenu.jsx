import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { SearchBar, Flex } from 'antd-mobile';
import './IndexMenu.less';


/**
 * 生成主题类型小图标
 *
 * @export
 * @class bottomTest
 * @extends {Component}
 */
export class IndexMenu extends Component {
    render() {
        return (
            <div className = "indexMenu">
				<ul className = "clearfix">
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
					<li>
						<div className = "ellipsis">
							<a href="#">
								<img src={`/src/Pic/menu01.jpg`} />
								<span>12.8优惠活动用品8优惠活动用品</span>
							</a>
						</div>
					</li>
				</ul>
            </div>
        );
    }
}

