import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import {Button, Carousel, Tabs, Modal, WingBlank ,Toast} from 'antd-mobile'; 
import './Product.less';

/**
 * 聊天头部
 *
 * @export
 * @class ProductHead
 * @extends {Component}
 */
export class ProductHead extends Component {
	codeClickFun(e){
		document.querySelector(".code-pop-box").style.display = "block";
	}
	codeBoxHide(e){
		if(e.target != document.querySelector(".code-pop-img") && e.target != document.querySelector(".code-pop-img img")){
			document.querySelector(".code-pop-box").style.display = "none";
		}
	}
    render() {
        return (
        	<div className = "productHead-box">
		        <Carousel
			        className="my-carousel" autoplay={false} infinite
			        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
			        afterChange={(index) => console.log('slide to', index)}
		      	>
			        {['slider03.jpg', 'slider02.jpg', 'slider01.jpg', 'slider03.jpg'].map((ii) => (
			          <a key={ii}><img src={`/src/Pic/${ii}`} /></a>
			        ))}
		        </Carousel>
		      	<div className = "product-top-code" onClick = {this.codeClickFun.bind(this)}>
		      		<i className="iconfont icon-code"></i>
		      	</div>
		      	<div className ="code-pop-box">
		      		<div className ="code-pop-main" onClick = {this.codeBoxHide.bind(this)}>
		      			<div className ="code-pop-img">
		      				<img src="/src/Pic/productCode.png" />
		      			</div>
		      		</div>
		      	</div>
	        </div>    
        );
    }
}
/**
 * 聊天头部
 *
 * @export
 * @class productMain
 * @extends {Component}
 */
export class ProductMain extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            productNum: 1
        };
    }
	openDetalis(e){
		let isOpen = !this.state.isOpen;
		this.setState({
			isOpen: isOpen
		});
		if(this.state.isOpen){
			document.querySelector(".detalis-info-btn span").innerHTML = "点击收起完整说明书";
			document.querySelector(".detalis-info-hide").style.display = "block";
		}else{
			document.querySelector(".detalis-info-btn span").innerHTML = "点击展开完整说明书";
			document.querySelector(".detalis-info-hide").style.display = "none";
		}
	}
	numMinusFun(e){
		let productNum = this.state.productNum - 1;
		productNum = productNum? productNum : 1;
		this.setState({
			productNum: productNum
		});
	}
	numAddFun(e){
		let productNum = this.state.productNum + 1;
		productNum = productNum? productNum : 1;
		this.setState({
			productNum: productNum
		});
	}
    render() {
    	const TabPane = Tabs.TabPane;
    	let numValue = this.state.productNum;
        return (
        	<div className = "productMain-box">
        		<div className ="productMain-top">
        			<p className="detalis-name detalis-title">麝香壮骨膏</p>
        			<p className="detalis-info">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</p>
        			<p className="detalis-price">
	        			<span className ="real-price">￥0.99</span>
	        			<span className ="market-price">￥1.99</span>
        			</p>
        			<p className="detalis-norm detalis-title">规格</p>
        			<p className="detalis-norm-mian">
        				<span>7cm*10cm*4s</span>
        			</p>
        			<p className="detalis-num-title detalis-title">数量</p>
        			<div className="detalis-num-box">
        				<span>
        					<i className="iconfont icon-num-minus" onClick = {this.numMinusFun.bind(this)}></i>
        				</span>
        				<input type="text" value ={numValue} />
        				<span>
        					<i className="iconfont icon-num-add" onClick = {this.numAddFun.bind(this)}></i>
        				</span>
        			</div>
        		</div>
        		<div className ="productMain-middle">
        			<p className="detalis-info-title">商品信息</p>
        			<p><span className="detalis-info-name">【通用名称】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
        			<p><span className="detalis-info-name">【功能主治】</span><span className="detalis-info-text">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</span></p>
        			<p><span className="detalis-info-name">【通用名称】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
        			<p><span className="detalis-info-name">【功能主治】</span><span className="detalis-info-text">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</span></p>
        			<p className="red-font"><span className="detalis-info-name">【禁&nbsp;&nbsp;&nbsp;&nbsp;忌】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
        			<p><span className="detalis-info-name">【功能主治】</span><span className="detalis-info-text">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</span></p>
        			<p><span className="detalis-info-name">【通用名称】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
        			<p><span className="detalis-info-name">【功能主治】</span><span className="detalis-info-text">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</span></p>
        			<div className="detalis-info-hide">
	        			<p><span className="detalis-info-name">【通用名称】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
	        			<p><span className="detalis-info-name">【功能主治】</span><span className="detalis-info-text">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</span></p>
	        			<p><span className="detalis-info-name">【通用名称】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
	        			<p><span className="detalis-info-name">【功能主治】</span><span className="detalis-info-text">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</span></p>
	        			<p><span className="detalis-info-name">【通用名称】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
	        			<p><span className="detalis-info-name">【功能主治】</span><span className="detalis-info-text">镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。镇痛，消炎。用于风湿痛，关节痛，腰痛，神经痛，肌肉酸痛，扭伤，挫伤。</span></p>
	        			<p><span className="detalis-info-name">【通用名称】</span><span className="detalis-info-text">  麝香壮骨膏  </span></p>
        			</div>
        			<div className ="detalis-info-btn" onClick ={this.openDetalis.bind(this)}>
        				<span>点击展开完整说明书</span>
        			</div>
        		</div>
        		<div className ="productMain-bottom">
					<Tabs defaultActiveKey="1" animated={false}>
			          	<TabPane tab="图文详情" key="1">
				            <div>
				               	<p className="No">该商品暂无详情</p>
				            </div>
			          	</TabPane>
			          	<TabPane tab="用户评价" key="2">
				            <div>
				             	<p className="evalution">
				             			<span className="user">用户 183****5170</span>
				             			<span className="time">2017-03-06 11:08:01</span>
				             			<br/>
				             			<span className="content">什么玩意啊！我都没有买东西还叫我评价什么玩意啊！我都没有买东西还叫我评价什么玩意啊！我都没有买东西还叫我评价</span>
				             	</p>
				             	<p className="evalution">
				             			<span className="user">用户 183****5170</span>
				             			<span className="time">2017-03-06 11:08:01</span>
				             			<br/>
				             			<span className="content">什么玩意啊！我都没有买东西还叫我评价什么玩意啊！我都没有买东西还叫我评价什么玩意啊！我都没有买东西还叫我评价</span>
				             	</p>
				             	<p className="evalution">
				             			<span className="user">用户 183****6106</span>
				             			<span className="time">2017-03-06 11:08:01</span>
				             			<br/>
				             			<span className="content">暂无评价</span>
				             	</p>
				             	<p className="evalution">
				             			<span className="user">用户 150****5248</span>
				             			<span className="time">2017-03-06 11:08:01</span>
				             			<br/>
				             			<span className="content">12866</span>
				             	</p>
				             	<p className="evalution">
				             			<span className="user">用户 183****5170</span>
				             			<span className="time">2017-03-06 11:08:01</span>
				             			<br/>
				             			<span className="content">什么玩意啊！我都没有买东西还叫我评价什么玩意啊！我都没有买东西还叫我评价什么玩意啊！我都没有买东西还叫我评价</span>
				             	</p>
				            </div>
			            </TabPane>
			        </Tabs>
        		</div>
	        </div>    
        );
    }
}







/**
 * 聊天底部输入框
 *
 * @export
 * @class productFoot
 * @extends {Component}
 */
export class ProductFoot extends Component {
	constructor(props) {
        super(props);    
    }
    render() {
    	const prompt = Modal.prompt;
        return (
        	<div className = "productFoot-box">
	            <span className ="productFoot-btn"><a href="#">拨打订购电话</a></span>
	            <span className ="productFoot-btn">
	            	<a className ="obligate-info" onClick={() => prompt(
				      '订单预约',
				      '',
				      [
				        { text: '取消预约' },
				        { text: '确定预约',  onPress: value => console.log(`输入的内容:${value}`) },
				      ],
				      'plain-text',
				    )}
				    >预留订购信息</a>	
	    		</span>
	        </div>    
        );
    }
}









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
                        <Link to="/topic/create">
                            <i className="iconfont icon-category"></i>分类
                        </Link>
                    </li>
                    <li className={arr[2]}>
                        <Link to={myUrl}>
                            <i className="iconfont icon-cart"></i>购物车
                        </Link>
                    </li>
                    <li className={arr[3]}>
                        <Link to="/my/weproduct">
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



/**
 * 模块入口
 * 
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <ProductHead />
                <ProductMain />
                <ProductFoot />
            </div>
        );
    }

}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}


//export default connect((state) => { return { User: state.User } }, action('Product'))(Main); //连接redux

export default GetData({
    id: 'Product',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/product/getProductList?site_id=100166&access_token=123456789098765432123456789124566', //服务器请求的地址
    success: (state) => { return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});