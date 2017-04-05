import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import './ProductList.less';

import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


function showToast() {
  Toast.info('商品已加入购物车', 1);
}
/**
 * 生成主题类型小图标
 *
 * @export
 * @className ProductList
 * @extends {Component}
 */
export class ProductList extends Component {
    render() {
		console.log(this.props.list);
		let ThisList = this.props.list;
        return (
            <div className="userDefined">
            	<div className="element">
            		<p className="userDefined-title-picText">
            			<a href="#">
            			<img src={`/src/Pic/menu01.jpg`} />
            			<span>火锅饮料</span>               			       					
            			</a>
            		</p>
            		<div className="ad-area">
            			<div className="row">
            				<div className="ad-pic">
            					<a href="#"><img src={`/src/Pic/ad01.jpg`} /></a>
            				</div>
            			</div>
            		</div>
            	</div>
            	<div className="element">
            		<div className="ad-area">
            			<div className="row">
            				<div className="ad-pic">
            					<a href="#"><img src={`/src/Pic/ad02.jpg`} /></a>
            				</div>
            				<div className="ad-pic">
            					<a href="#"><img src={`/src/Pic/ad03.jpg`} /></a>
            				</div>
            			</div>
            		</div>
            	</div>
            	<div className="element">
            		<div className="ad-area">
            			<div className="row">
            				<div className="ad-pic">
            					<a href="#"><img src={`/src/Pic/ad02.jpg`} /></a>
            				</div>
            				<div className="ad-pic">
            					<a href="#"><img src={`/src/Pic/ad03.jpg`} /></a>
            				</div>
            				<div className="ad-pic">
            					<a href="#"><img src={`/src/Pic/ad02.jpg`} /></a>
            				</div>
            			</div>
            		</div>
            	</div>
				<div className="element">
					<div className="index-33">
						<p className="userDefined-title-text">感冒用药</p>
						<div className="row">
							{	
			                     ThisList.map((item, index) => {
		                            var {cate_code, category_name, specif_cation, cost_price, market_price, goods_title, goods_company, def_url} = item;
		                            var {imageId} = def_url;
		                            if(index<3){
		                            	return (
			                                <div className="goods_element" key={index}>
												<div className="triple_line_goods_img">
													<Link to="/single/product"><img src={`http://img01.pic.12306pc.cn//display/public/100166/10/0/10/0/500x500/${imageId}.jpg`} /></Link>	
												</div>
												<p className="goods-title"><span>优惠</span>{goods_title}</p>
												<span className="goods-nprms">规格:<em>{specif_cation}</em></span>
												<div className="goods-price-box">
													<div className="goods-price">
														<span className="goods-money">{cost_price}</span>
														<span className="market-money">{market_price}</span>
													</div>
													<div className="goods-car">
														 <i className="iconfont icon-car" onClick={showToast}></i>
													</div>
												</div>
											</div>
			                            );
		                            }
		                            
		                        })
			                }
						</div>
					</div>
				</div>	
				<div className="element">
					<div className="index-22">
						<p className="userDefined-title-text">感冒用药</p>
						<div className="row">
							{	
			                     ThisList.map((item, index) => {
		                            var {cate_code, category_name, specif_cation, cost_price, market_price, goods_title, goods_company, def_url} = item;
		                            var {imageId} = def_url;
		                            if(index<2){
		                            	return (
			                                <div className="goods_element" key={index}>
												<div className="triple_line_goods_img">
													<Link to="/single/product"><img src={`http://img01.pic.12306pc.cn//display/public/100166/10/0/10/0/500x500/${imageId}.jpg`} /></Link>	
												</div>
												<p className="goods-title"><span>优惠</span>{goods_title}</p>
												<span className="goods-nprms">规格:<em>{specif_cation}</em></span>
												<div className="goods-price-box">
													<div className="goods-price">
														<span className="goods-money">{cost_price}</span>
														<span className="market-money">{market_price}</span>
													</div>
													<div className="goods-car">
														 <i className="iconfont icon-car" onClick={showToast}></i>
													</div>
												</div>
											</div>
			                            );
		                            }
		                            
		                        })
			                }
							
						</div>
					</div>	
				</div>
				<div className="element">
					<div className="index-11">
						<p className="userDefined-title-text">感冒用药</p>
						<div className="row">
							{	
			                     ThisList.map((item, index) => {
		                            var {cate_code, category_name, specif_cation, cost_price, market_price, goods_title, goods_company, def_url} = item;
		                            var {imageId} = def_url;
		                            if(index<1){
		                            	return (
			                                <div className="goods_element" key={index}>
												<div className="triple_line_goods_img">
													<Link to="/single/product"><img src={`http://img01.pic.12306pc.cn//display/public/100166/10/0/10/0/500x500/${imageId}.jpg`} /></Link>	
												</div>
												<p className="goods-title"><span>优惠</span>{goods_title}</p>
												<span className="goods-nprms">规格:<em>{specif_cation}</em></span>
												<div className="goods-price-box">
													<div className="goods-price">
														<span className="goods-money">{cost_price}</span>
														<span className="market-money">{market_price}</span>
													</div>
													<div className="goods-car">
														 <i className="iconfont icon-car" onClick={showToast}></i>
													</div>
												</div>
											</div>
			                            );
		                            }
		                            
		                        })
			                }
							
						</div>
					</div>		
				</div>
			</div>   
        );
    }
}
