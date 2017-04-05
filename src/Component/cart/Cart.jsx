import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, StoreData, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import { Footer } from '../foot/Foot';
import { toDecimal2} from '../common/verifications';
import './Cart.less';



/**
 * 购物车
 *
 * @export
 * @class CartHead
 * @extends {Component}
 */
export class CartHead extends Component {
	constructor(props) {
        super(props);
        this.show=()=>{
  			var shadow=document.querySelector(".cartHead-box .shadow");
    		var Prop=document.querySelector(".cartHead-box .props");
    		Prop.style.display="block";
  		    shadow.style.display="block";
    	}
        this.hide=()=> {
    		var shadow=document.querySelector(".cartHead-box .shadow");
    		var Prop=document.querySelector(".cartHead-box .props");
    		Prop.style.display="none";
    		shadow.style.display="none";
    	}
	}
	
    render() {    	  		
        return (
        	<div className = "cartHead-box">
				<div className = "cartHead-main">
					<span className ="cartHead-left"><i className="iconfont icon-sweep"></i></span>
					<div className ="cartHead-title">共8件商品</div>
					<span className ="cartHead-right">
					   <i className="iconfont icon-delete" onClick={this.show.bind(this)}></i>
					</span>
				</div>
				<div className ="cartHead-place"></div>
				<div className="props">
					<p className="top">提示</p>
					<p className="center">你确定要删除所选商品吗?</p>
					<p className="bottom">
						<span className="cancel" onClick={this.hide.bind(this)}>取消</span>
						<span className="OK" onClick={this.hide.bind(this)}>确定</span>
					</p>
				</div>
				<div className="shadow"></div>
	        </div>       
        );
    }
}



/**
 * 聊天头部
 *
 * @export
 * @class CartMain
 * @extends {Component}
 */
export class CartMain extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            productNum: 1,
            isCheckOn :true,
        };
       this.AddFun = () => {   
		let Intotal=document.querySelector('.intotal');
		let subTotalAll=document.querySelectorAll('.subtotal');			
		let sum=0;
		for(let i=0;i<subTotalAll.length;i++){			
			let parentDiv=subTotalAll[i].parentNode.parentNode.parentNode;
			 console.log(parentDiv,33333);			 
			let checkStateOn=parentDiv.querySelector('.isCheckOn');			
			if(checkStateOn){
			let partSub=subTotalAll[i].innerHTML;
	        sum += parseFloat(partSub);	  
				
			}else{
				console.log("不可以计算")
	       }		      
		}
		Intotal.innerHTML=toDecimal2(sum,2);
	};
      
  }
	
	//个数减1
	numMinusFun(e){
		let parentSpan = e.target.parentNode.parentNode;
		let findInput = parentSpan.getElementsByTagName("input");		
		let productNumFl =  parseInt(findInput[0].value);			
		findInput[0].value= findInput[0].value <1 ? 0 : productNumFl-1;	//最小的值为0	
		let contDiv=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;	//获取最外层的div	
		let unitPrice=contDiv.querySelector('.unitprice').innerHTML;//获取单价	
		let subTotal=contDiv.querySelector('.subtotal');	//获取小计	
		let subTotalNu=findInput[0].value*unitPrice;			
		subTotal.innerHTML=toDecimal2(subTotalNu,2)		
		console.log(unitPrice,subTotal.innerHTML);
		this.AddFun();		
	}
	//个数加1
	numAddFun(e){	
		let parentSpan = e.target.parentNode.parentNode;
		let findInput = parentSpan.getElementsByTagName("input");			
		let productNum =  parseInt(findInput[0].value);			
		findInput[0].value=productNum+1;		
		let contDiv=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;	//获取最外层的div	
		let unitPrice=contDiv.querySelector('.unitprice').innerHTML;//获取单价	
		let subTotal=contDiv.querySelector('.subtotal');	//获取小计	
		let subTotalNu=findInput[0].value*unitPrice;			
		subTotal.innerHTML=toDecimal2(subTotalNu,2);	
		/*console.log(unitPrice,subTotal.innerHTML);*/		
		this.AddFun();		
	}
	//手动输入
	numChangeFun(e){	
		let parentSpan = e.target.parentNode.parentNode;
		let findInput = parentSpan.getElementsByTagName("input");			
		let productNum =  parseInt(findInput[0].value);			
		findInput[0].value=productNum;		
		let contDiv=e.target.parentNode.parentNode.parentNode.parentNode.parentNode;	//获取最外层的div	
		let unitPrice=contDiv.querySelector('.unitprice').innerHTML;//获取单价	
		let subTotal=contDiv.querySelector('.subtotal');	//获取小计	
		let subTotalNu=findInput[0].value*unitPrice;			
		subTotal.innerHTML=toDecimal2(subTotalNu,2);	
		/*console.log(unitPrice,subTotal.innerHTML);*/		
		this.AddFun();	
	}
	//选中单个商品
	checkSingelFun(e){	
		let parentSpan=e.target.parentNode;	
		let isCheckon=parentSpan.querySelector('.isCheckOn');
		let isCheckoff=parentSpan.querySelector('.isCheckOff');
		let CheckAll=document.querySelector('.CartFoot-main-left');
		
		if(isCheckon){
			e.target.setAttribute("class", "isCheckOff iconfont icon-check-single");
			this.AddFun();
		    CheckAll.firstChild.setAttribute("class", "isCheckOff iconfont icon-check-all");		    
		}
		else{
		    e.target.setAttribute("class", "isCheckOn iconfont icon-check-single"); 
		    this.AddFun();
		    let cartMainBox=document.querySelector('.cartMain-box')	
		    let cartMainBoxOff=cartMainBox.querySelectorAll('.isCheckOff');
		    console.log(cartMainBoxOff.length)
	        if(cartMainBoxOff.length==0){
	        	CheckAll.firstChild.setAttribute("class", "isCheckOn iconfont icon-check-all");
	        }
		}
	}
	//全选
	checkAllFun(e){
		this.setState({
			isCheckOn : !this.state.isCheckOn
		});	
		//var This=this;
		setTimeout( () => {
			this.AddFun();
		},200);		
	}
	//跳转
	toPayFun(e){
		/*页面通信传递数据示例*/
        let ccc = {name:"super",sex:"19",work:"IT"};//要传递的数据
        Tool.objMerger(StoreData,ccc);//传递方法调用，数据绑定到StoreData对象上
        alert(StoreData.name);
	}
	
   componentDidMount(e){
   	this.AddFun();
   }
    render() {
    	let numValue = this.state.productNum;
    	let isCheckOn = this.state.isCheckOn ? "isCheckOn" : "isCheckOff";
        return (
        	<div>
	        	<div className = "cartMain-box">
					<div className="carMian-list">
						<span className="carMian-list-left" onClick = {this.checkSingelFun.bind(this)}>
							<i className={`${isCheckOn} iconfont icon-check-single`}></i>
						</span>
						<div className="carMian-list-mid">
							<div className="carMian-list-mid-main">
								<img src="/src/Pic/drug01.jpg" />
								<div className="carMian-list-mid-info">
									<p className="carMian-list-title">雅培全安素全营养配方粉</p>
									<p className="carMian-list-norms">规格：150毫升</p>
									<div className="carMian-num-box ">
				        				<span>
				        					<i className="iconfont icon-num-minus" onClick = {this.numMinusFun.bind(this)}></i>
				        				</span>
				        			<input type="text"  defaultValue="1" onBlur={this.numChangeFun.bind(this)}/>
				        				<span>
				        					<i className="iconfont icon-num-add" onClick = {this.numAddFun.bind(this)}></i>
				        				</span>
				        			</div>
								</div>
							</div>
						</div>
						<span className="carMian-list-right">
							<div >单价<em className="unitprice">1.35</em></div>
							<div >小计<em className="subtotal">1.35</em></div>
						</span>
					</div>
					
					<div className="carMian-list">
						<span className="carMian-list-left" onClick = {this.checkSingelFun.bind(this)}>
							<i className={`${isCheckOn} iconfont icon-check-single`}></i>
						</span>
						<div className="carMian-list-mid">
							<div className="carMian-list-mid-main">
								<img src="/src/Pic/drug01.jpg" />
								<div className="carMian-list-mid-info">
									<p className="carMian-list-title">雅培全安素全营养配方粉 </p>
									<p className="carMian-list-norms">规格：150毫升</p>
									<div className="carMian-num-box ">
				        				<span>
				        					<i className="iconfont icon-num-minus" onClick = {this.numMinusFun.bind(this)}></i>
				        				</span>
				        				<input type="text" defaultValue="1" onBlur={this.numChangeFun.bind(this)}/>
				        				<span>
				        					<i className="iconfont icon-num-add" onClick = {this.numAddFun.bind(this)}></i>
				        				</span>
				        			</div>
								</div>
							</div>
						</div>
						<span className="carMian-list-right">
							<div >单价<em className="unitprice">1.35</em></div>
							<div >小计<em className="subtotal">1.35</em></div>
						</span>
					</div>
		        </div>
		        <div className = "CartFoot-box">
	        		<div className = "CartFoot-main">
	        			<span className = "CartFoot-main-left" onClick={this.checkAllFun.bind(this)}>
	        				<i className={`${isCheckOn} iconfont icon-check-all`}></i>全选
	        			</span>
	        			<div className = "CartFoot-main-total">
	        				<p>总计：<em className="intotal">0.00</em></p>
	        				<span>(不含运费)</span>
	        			</div>
		            	<Link to="/new/placeorder"><span className = "CartFoot-main-right" onClick ={this.toPayFun.bind(this)}> 去结算</span></Link>
	        		</div>
	        		<div className = "CartFoot-place"></div>
		        </div>
		    </div>    
        );
    }
}



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
                <CartHead />
                <CartMain />
            </div>
        );
    }

}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}


//export default connect((state) => { return { User: state.User } }, action('Personal'))(Main); //连接redux

export default GetData({
    id: 'MyMessages',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/api/v1/messages', //服务器请求的地址
    stop: (props, state) => {
        return !Boolean(props.User); //true 拦截请求，false不拦截请求
    },
    data: (props, state) => { //发送给服务器的数据
        return { accesstoken: props.User.accesstoken }
    },
    success: (state) => { return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});