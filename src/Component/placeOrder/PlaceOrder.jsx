import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index'; //实例,后期可删除
import { Tool, StoreData, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';
import { List, Radio, Flex, WhiteSpace, Modal, Button, WingBlank, Toast,Popup,Icon } from 'antd-mobile';
import "./placeorder.less";

const RadioItem = Radio.RadioItem;
/**送货方式选择*/
export class WaySelect extends Component{
	constructor(props){
        super(props);
        this.state = { 
            value: 0,
            value2: 0,
            value3: 0,
            value4: 0,
        } 
    }
   onChange2(value) {  
    this.setState({
      value2: value,
    });
    console.log(value); 
    var timeRemind = document.querySelector('.time-remind');
    if(value==0){
    	 timeRemind.style.display = "block";
    }
    else{
     timeRemind.style.display = "none";
    }
  }
   SelectWay(e) { 
   e = e || window.event;
            e.currentTarget = e.currentTarget || e.srcElement;
             var idNum=e.currentTarget.id;
            
             if(idNum==0){
             	/**送货地址选择**/
             	console.log('我是送货上门');
             	var oDiv = document.createElement('div');
	            oDiv.className="address-tk";
	             var content='';		
		   content= `<div class="show-address">	
		         <div class="page-mask"></div>
		         <div class="show-address-cont show-address-action">
		         
		         <div class="show-address-cont-ht">
		         <div class="flex-cont flex-simple addList">
		         <div class="flex-item">
		           <p>青山 136787987465</p>
		            <p>上海市 上海市 虹口区 宏关路368号</p>
		            </div>
		             <div>
		             <a href="address"><button>编辑</button></a>
		             </div>
		             </div>
		             <div class="flex-cont flex-simple addList">
		             <div class="flex-item">
		             <p>青山 136787987465</p>
		             <p>上海市 上海市 虹口区 宏关路368号</p>
		             </div>
		             <div>
		             <a href="address"><button>编辑</button></a>
		             </div>
		         </div>
		         </div>
		         
		          <div class="show-address-cont-ft">
		          <a href="address"><button>添加新地址</button></a>
		          </div>
         
		          </div>
	            </div>`
       oDiv.innerHTML = content;
       document.body.appendChild(oDiv);
        var mask=document.querySelector('.page-mask');
	   	   mask.onclick=function(){
	   	 	 document.body.removeChild(oDiv);
	   	 }
       
             }else{
             	/**门店选择**/
             	console.log('门店选择');
             	var selectCity = document.querySelector('.selectcity');	
             	var selectClose = document.querySelector('.selectclose');  
             	var storesNoposition = document.querySelector('.stores-noposition');  
             	var changeCity = document.querySelector('.changecity');
              var closeCity = document.querySelector('.closecity');
              var Stores = document.querySelector('.stores');
              var cityTab1 = document.querySelector('.city-tab1');
              var cityTab2 = document.querySelector('.city-tab2');
              
              Stores.style.display = "block";
              storesNoposition.style.display = "block";	
              selectClose.onclick = function() {
	            Stores.style.display = "none";
               }
              
              closeCity.onclick = function() {
	            Stores.style.display = "none";
               }
              
              selectCity.onclick = function() {
	            storesNoposition.style.display = "none";	           
                }
              
              changeCity.onclick = function() {
	            cityTab1.style.display = "none";
	            cityTab2.style.display = "block";
                }
              var cityList = document.getElementsByClassName('city-list');
              for(let i = 0; i < cityList.length; i++) {
	            cityList[i].onclick = function() {
		          var cityName = this.querySelector('.city-name').innerHTML;
	           	document.getElementById('citycall').innerHTML = cityName;
		          cityTab1.style.display = "block";
		          cityTab2.style.display = "none";
	         }
        }
       }
   }
	render(){
		 const { value, value2, value3, value4 } = this.state;
    const data2 = [
      { value: 0, label: '送货上门',freight:'运费0.03元', extra: '上海市 上海市 虹口区 虹关路368号 青山',tlnum:'',phone:'13222222245',remind:'下午三点之前下单当天送货，不然第二天送货'},
      { value: 1, label: '门店自提',freight:'免运费', extra: 'totorc 距离3771米',tlnum:'共30家',phone:' ',remind:' ' },
    ];
    	let dataExample =  StoreData.name;//测试获取数据,用户名
		return(
			<div>
			<p>{dataExample}</p>
      <List className="way-choose">
        {data2.map(i => (
          <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)} >
          
           <div className="way-choose-fl">
           <p className="way-choose-ht">{i.label}<i >{i.freight}</i></p>
            <List.Item.Brief>
            <p>{i.extra}</p>
            <p>{i.phone}</p>
            <p className="time-remind">{i.remind}</p>
            </List.Item.Brief>
            </div> 
            <p className="way-choose-fr" id={i.value} onClick ={this.SelectWay}><span>{i.tlnum}</span>
           <i className="icon iconfont icon-0609jiantou"></i>          
           </p>
          </RadioItem>
        ))}
      </List>

 
    </div>
		)
	}
}

/**
 * (支付方式选择)
 * 
 * @export
 * @class PaySelect
 * @extends {Component}
 */

const PaySelect = React.createClass({
  getInitialState() {
    return {
      value: 0,
      value2: 0,
      value3: 0,
      value4: 0,
    };
  },
  onChange(value) {  
    this.setState({
      value:value,
    });
     console.log(value);
  },
  
  render() {
    const { value, value2, value3, value4 } = this.state;
    const data = [
      { value: 0,icon:'icon iconfont icon-06082weixinhui', label: '微信支付' },
      { value: 1,icon:'icon iconfont icon-052zhaorendaifu', label: '找人代付' },
    ];  
    return (<div>    
      <List className="pay-choose">
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
           <i className={i.icon}></i>{i.label}
          </RadioItem>
        ))}
      </List>
     
    </div>);
  },
});



/*fixfoot*/

export class FootPlace extends Component{
	Checkradio(e){
		var radios=document.querySelectorAll('.am-radio-input');
		var radioState=radios[3].checked;
		console.log(radioState)
		if(radioState){
				browserHistory.push('payother','_self');
		}else{
				browserHistory.push('calculateload','_self');
		}
		
	}
	render(){
		return(
			<div className="foot-place flex-cont flex-simple">
     		<p className="flex-item">实付款:<span>¥ 9.30</span></p>
     	
     		<button onClick={this.Checkradio}>确认下单</button>
     		</div>
		)
	}
}


/***内容块**/
export class PlaceOrder extends Component{	
     render() {
     	return(
     		<div>
     		<div className="place-bg">
     		<p className="way-ps">请选择配送方式</p>    		
     		<WaySelect/>  		
     		</div>
     		
     		< div className = "place-bg " >     		
     		<div className="flex-cont flex-simple order-show">
     		<div className="order-show-pic"><img src="/static/yp.png"/></div>
     		<div className="flex-item">
     		<p className="goods-name"><label >健胃消食片</label><i >×1</i></p>   		
     		<p className="goods-rules"><label >规格:0.5g*36s</label ><i >¥ 9.30</i></p>    		
    		</div>
     		</div>
     		<p className="goods-calculate">共<i className="goods-num">1</i>件商品 合计<i className="goods-pay">¥ 9.30</i></p>
     		</div>
     		
     		<div className = "place-bg2 coupons">
     		<p className="flex-cont flex-simple coupons-one">
     		<label className="flex-item">积分抵扣</label>
     		<span>可使用1分<input  type="text"/>分</span>     	
     		</p>
     		
     		<p className="flex-cont flex-simple coupons-one">
     		<label className="flex-item">优惠券<i className="yhqnum">5</i></label>
     		<span>可抵扣金额20元</span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     	    		
     		
     		<p className="flex-cont flex-simple coupons-two">
     		<label className="flex-item">积分抵扣</label>
     		<span>¥0</span>
     	
     		</p>
     		<p className="flex-cont flex-simple coupons-two">
     		<label className="flex-item">优惠券抵扣</label>
     		<span>¥-0.00</span>
     	
     		</p>
     		</div>
     		
     		<div className="place-bg2 ">
     		<PaySelect/>
     		<p className="flex-cont flex-simple pay-remark">
     		<label>促销员</label>
     		<span className="flex-item">
     		<input type="text" placeholder="填写邀请码" />
     		</span>    		
     		</p>
     		
     		<p className="flex-cont flex-simple pay-remark">
     		<label>备注</label>
     		<span className="flex-item">
     		<input type="text" placeholder="请输入备注的内容，100字以内" />
     		</span>    		
     		</p>
     		</div>
     		
     		<div className="stores" >
     		<div className="page-mask1"></div>
     		
     		<div className="stores-noposition">
	     		<p className="stores-noposition-ti">如何查找显示附件门店</p>
	     		<p className="stores-noposition-nr">第一步:请返回我们的公众号首页,点击右上角小人图标;</p>
	     		<img src="../static/wedw1.png"/>
	     		<p className="stores-noposition-nr">第二步:开启提供位置信息;</p>
	     		<img src="../static/wedw2.png"/>
	     		<p className="selectcity">选择我所在的城市</p>
	     		<p className="selectclose">关闭</p>
     	
     		</div>
     		
     		<div className="stores-wind">
     		<p className="stores-wind-ht">请选择门店</p>    	
     		<p className="openpositon">请开启"提供位置信息"显示距离,如何开启?</p>
     		<div className="stores-wind-ct">
     		<div className="city-tab1">
     		<p className="search-md">当前所选城市:<span id="citycall">上海市</span></p>
     	  <p className="search-md"><input type="text" placeholder="请输入关键字" className="search-cont"/>
     	  <button className="search-but">搜索</button>
     	  </p>
     	  <div className="flex-cont flex-simple stores-wind-ct-list">
     	  <div className="flex-item">
     	  <p>天麻测试店</p>
     	  <p>距您:<i>2.17千米</i></p>
     	  </div>
     	  <a href="http://api.map.baidu.com/direction?origin=latlng:121.48,31.22|name:&amp;destination=latlng:39.938867,116.184556|name:北京店&amp;mode=walking&amp;output=html&amp;region=上海">查看地图</a>
     	  </div> 
     	  
     	  <div className="flex-cont flex-simple stores-wind-ct-list">
     	  <div className="flex-item">
     	  <p>天麻测试店</p>
     	  <p>距您:<i>2.17千米</i></p>
     	  </div>
     	  <a href="">查看地图</a>
     	  </div> 
     	  
     	  <div className="flex-cont flex-simple stores-wind-ct-list">
     	  <div className="flex-item">
     	  <p>天麻测试店</p>
     	  <p>距您:<i>2.17千米</i></p>
     	  </div>
     	  <a href="">查看地图</a>
     	  </div>
     		</div>
     		
     		<div className="city-tab2">
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">北京市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">石家庄</label><i>(1家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">上海市</label><i>(22家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">广州市区</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">深圳市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		<p className="flex-cont flex-simple city-list">
     		<span className="flex-item"><label className="city-name">黄冈市12</label><i>(2家)</i></span>
     		<i className="icon iconfont icon-0609jiantou"></i>
     		</p>
     		</div>
     	  
        
     	  <div className="load-all"><p>已经全部加载完毕</p></div>
     		</div>
     		
     		<div className="stores-wind-ft">
     		<p className="closecity">取消</p>
     		<p className="changecity">更换城市</p>
     		</div>
     		</div>
     		</div>
     		
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
              <PlaceOrder/>
              <div className="zhanweizi"></div>
               <FootPlace/>
            </div>
        );
    }
}


export default Main;