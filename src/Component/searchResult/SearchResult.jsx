import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, TipMsgSignin, GetNextPage, GetData } from '../common/index';
import { IndexHead } from '../head/Head';	
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import './SearchResult.less';

function showToast() {
  Toast.info('商品已加入购物车', 1);
}

function loadingToast() {
  Toast.loading('加载中...', 2, () => {
    console.log('加载完成!!!');
  });
}

export class GoodsNoFund extends Component {
	ClearHistory(e){
    	var historyList=document.querySelector('.history-list');
    	if(historyList){
    		historyList.parentNode.removeChild(historyList);
    	}
    	}
    render() {
    	
    	return(
    	<div>
    		<div className="srarch-result">
    		<p>已找到<i>0</i>条搜索结果</p> 
    		<p className="change-keyword">请更换关键词进行搜索</p>
    		<div className="clear-result flex-cont flex-simple">
    		<label className="flex-item">最新搜索</label>
    		<p className="claer-but" onClick={this.ClearHistory}>清除历史</p>   		
    		</div>
    		<ul className="history-list">
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=147`}>147</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=健康`}>健康</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=@`}>@</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=试试`}>试试2222</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=试试`}>试试2222</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=试试`}>试试2222</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=试试`}>试试2222</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=试试`}>试试2222</Link></li>
    		<li><Link to={`/new/searchResult/?from=home-page-search&kw=试试`}>试试2222</Link></li>
    		</ul>
    		<p className="yy-pay">医药支付</p>
    		</div>
    	</div>
    	)
    }
}
export class GoodsList extends Component {
    render() {
    	console.log(this.props.list);
		let ThisList = this.props.list;
    	return (
    		<div>
    		<div className="srarch-result flex-cont flex-simple">
    		<p className="flex-item">健康</p>
    		<span>共<i>66</i>件商品</span>
    		</div>
    		<ul className="srarch-list">              
    		{
               	 ThisList.map((item,index) => {
              	 let {goods_id,goods_title,shop_price,cost_price,specif_cation,def_url} = item;
              	 let {imageId} = def_url;
              	 return(
              		 <li>
              		 <Link to={`/single/product?goodsid=${goods_id}`}>
                      <div className="search-pic">
                       <img src={`http://img01.pic.12306pc.cn//display/public/100166/10/0/10/0/500x500/${imageId}.jpg`}/>
                      </div>
                      </Link>
                      <p className="search-ti"><span>优惠</span>{goods_title}</p>
                      <div className="search-rule flex-cont flex-simple">
                       <div className="flex-item">
                        <p className="search-p1"><label>规格:</label><span>{specif_cation}</span></p>
                        <p className="search-p2"><label>{cost_price}</label><span>{shop_price}</span></p>
                       </div>
                      <div>
                      <i className="icon iconfont icon-icon-gouwuche" onClick={showToast}></i>
                     </div>
                    </div>
                 
                   </li>
               
              	);
              	
               })
               }
               </ul>
    		</div>
    	);
    }
}


  function UrlSearch() 
{
   var name,value; 
   var url=location.href; //取得整个地址栏
   var num=url.indexOf("?") //返回？在字符串中首次出现的位置。
   url=url.substr(num+1); // 在字符串中抽取从 start 下标开始的指定数目的字符。

   var arr=url.split("&"); //各个参数放到数组里以&分开。
   for(var i=0;i < arr.length;i++){ 
    num=arr[i].indexOf("="); //用等号进行分隔，返回=首次出现的位置。
    if(num>0){ //如果参数不止一个就进行循环
     name=arr[i].substring(0,num);//substring() 方法用于提取字符串中介于两个指定下标之间的字符。
     value=arr[i].substr(num+1);
     this[name]=value;
     } 
    } 
} 

/**
 * (导出组件)
 * 
 * @export
 * @class Main
 * @extends {Component}
 * 
 */
class Main extends Component {
  constructor (props) {
		super(props);
	}
  
    render() {
      var {data, limit,loadMsg} = this.props.state;
      var main = null;
      
      var Request=new UrlSearch(); //实例化url参数值         
      var keyword=decodeURI(Request.kw);
      
       console.log(this.props.state,888);   
       var oDiv = document.createElement('div');
	          var content='';	             
		        content= `<div class="loading">
		                  <i class="loading-icon"></i>
		                  </div>`
            oDiv.innerHTML = content;
                  
        if(!keyword){  
          if(loadMsg=="加载中"){
          	console.log("1需要加载");
          	document.body.appendChild(oDiv);
          }else{
          	console.log('1不需要加载');
          	var loading=document.querySelector('.loading');
          	if(loading){
          	loading.parentNode.removeChild(loading);
          	 main = <GoodsNoFund/>;
          	}
           }
          }else{         	
          	if(loadMsg=="加载中"){          	
          		console.log(data);
          		console.log("2需要加载");
          	 document.body.appendChild(oDiv);
          	}else{
          	 console.log(data,101010);
          	  var loading=document.querySelector('.loading');
          	  if(loading){
          	  loading.parentNode.removeChild(loading);
          	  var {items}=data; 
          	  console.log(items,787878);
          	  if(items){
          	  	console.log('items不为空');
          	  	main = <GoodsList list={items} />;
          	  }else{
          	  	 main = <GoodsNoFund/>;
          	  }
          	  
          	 }
          	}
          }
                
        return (
            <div className="index-list-box">
                <IndexHead />
                           
                {main}            
            </div>
        );
    }
    
}


export default GetData({
    id: 'SearchResult',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/product/getProductList?site_id=100166&access_token=123456789098765432123456789124566', //服务器请求的地址
    success: (state) => {console.log(state,66666666666666666);return state;}, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});