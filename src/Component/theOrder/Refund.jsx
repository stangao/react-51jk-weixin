import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';

import { output,IsNull,checkTkreason,checktkmoney,checkydnum,checktkexplain} from '../common/verifications';

import "./theorder.less";
import { SegmentedControl, WingBlank,ImagePicker,Button,Modal,Flex,WhiteSpace } from 'antd-mobile';


export class Fixfoot extends Component{
	ItisNull(e){
		var stktkreason=document.getElementById('tkreason');	
	  var selectIndex = stktkreason.selectedIndex; 
	  var Strtkmoney=document.getElementById('tkmoney').value.trim();
	  var Strydnum=document.getElementById('ydnum').value.trim();
	  var Strtkexplain=document.getElementById('tkexplain').value.trim();
	  var cont= document.getElementsByClassName('from-remarks');
	  var stateTheawb=document.querySelector('.Theawb').style.display;	
	  
		 if(!stateTheawb || stateTheawb=="none"){		 	
		 if(selectIndex==0 && Strtkmoney.length==0 && Strtkexplain.length==0){
	     for(var i=0;i<cont.length;i++){
	     	 cont[i].style.display="block";
	       cont[i].firstChild.innerHTML="输入框内容不能为空!";
		}
	}else if(selectIndex==0){
			document.querySelector('.tkreason').style.display="block";
	    document.querySelector('.tkreason').innerHTML="输入框内容不能为空!";		
	}else if(Strtkmoney.length==0){
			document.querySelector('.tkmoney').style.display="block";
	    document.querySelector('.tkmoney').innerHTML="输入框内容不能为空!";		
	}else if(Strtkexplain.length==0){
			document.querySelector('.tkexplain').style.display="block";
	    document.querySelector('.tkexplain').innerHTML="输入框内容不能为空!";		
	}else{
		alert("退款中1....")
	}
		 }else{
		 	if(selectIndex==0 && Strtkmoney.length==0 && Strtkexplain.length==0 && Strydnum.length==0){
		 		 for(var i=0;i<cont.length;i++){
	     	 cont[i].style.display="block";
	       cont[i].firstChild.innerHTML="输入框内容不能为空!";
		  }
		 	}else if(selectIndex==0){
		 	document.querySelector('.tkreason').style.display="block";
	    document.querySelector('.tkreason').innerHTML="输入框内容不能为空!";	
		 	}else if(Strtkmoney.length==0){
			document.querySelector('.tkmoney').style.display="block";
	    document.querySelector('.tkmoney').innerHTML="输入框内容不能为空!";		
	   }else if(Strydnum.length==0){
		 	document.querySelector('.ydnum').style.display="block";
	    document.querySelector('.ydnum').innerHTML="输入框内容不能为空!";	
		 	}else if(Strtkexplain.length==0){
			document.querySelector('.tkexplain').style.display="block";
	    document.querySelector('.tkexplain').innerHTML="输入框内容不能为空!";		
	}else{
		alert("退款中2....")
	}
		 }

	 
	}
  render() {
    return (
      <div className="flex-container fixedfoot">
       <Flex>
         <Flex.Item className="foot-but hide"><Link to="/">门店导航</Link></Flex.Item>
         <Flex.Item className="foot-but hide"><Link to="/">微信付款</Link></Flex.Item>         
         <Flex.Item className="foot-but hide"><Link to="/">确认收货</Link></Flex.Item>
         
         <Flex.Item className="foot-but cancel-order"><p onClick={this.ItisNull} className="tkapply">申请退款</p></Flex.Item>
         <Flex.Item className="foot-but hide" ><Link to="/">退款状态</Link></Flex.Item>
         <Flex.Item className="foot-but hide"><Link to=" ">取消订单</Link></Flex.Item>
        </Flex>
      </div>
    )
  }
}


/**
 * (图片选择器)
 * 
 * @export
 * @class ImagePickerExample
 * @extends {Component}
 */
const data = [];

export class ImagePickerExample extends Component{
   constructor(props){
        super(props);
        this.state = { 
            files: data,
            custom: false,
        };
       this.onChange = (files, type, index) => {
          console.log(files, type, index);
          this.setState({
            files,
       });
     }
  }
 
  render() {
    const { files } = this.state;
    return (<div>     
      {<ImagePicker
        files={files}
        onChange={this.onChange}
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 5}
      />}
    </div>)
  }
}



/**
 * (退款方式选择器)
 * 
 * @export
 * @class Fefundway
 * @extends {Component}
 */


export class Fefundway extends Component{
  onChange(e) {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);   
    var selectItem=e.nativeEvent.selectedSegmentIndex;
    console.log(selectItem);
    if(selectItem==0){
     document.querySelector('.Theawb').style.display="none";	
    }
    else{
    	document.querySelector('.Theawb').style.display="block";	
    }
  }
  
  onValueChange(value) {
    console.log(value);
  }
  render() {
    return (
     
        <SegmentedControl values={['尽退款', '退款并退货']} 
         onChange={this.onChange}
          onValueChange={this.onValueChange}/>
     
    )
  }
}

/**
 * (退款信息)
 * 
 * @export
 * @class OrderInfo
 * @extends {Component}
 */
export class OrderInfo extends Component{	 
	Checktkmoney(e){
		checktkmoney('tkmoney');
	}
	Checkydnum(e){
		checkydnum('ydnum')
	}
	Checktkexplain(e){
		checktkexplain('tkexplain');
	}
	CheckTkreason(e){
		checkTkreason('tkreason');
	}
  render() {
    return (
    	<div className="orderInfo orderInfo-zt" id="from">
    	<div className="cont cont-tp">
    	<p className="cont-ht">订单信息</p>
    	<p >1001661487140867749</p>
    	</div>
    	
     <div className="cont cont-tp">
    	<p className="cont-ht">退款原因<span className="sup">*</span></p>
    	<p>
       <select defaultValue="1" className="select-reason" id="tkreason" onChange={this.CheckTkreason}>
            <option value="1">请选择退款原因</option>
            <option value="2">拍错了/不想要了</option>
            <option value="3">我已经重新下单了</option>
            <option value="3">服务态度不好</option>
            <option value="3">退运费</option>
            <option value="3">发票问题</option>
          </select>
    	</p>
    	<div className="from-remarks"><p className="tkreason"></p></div>
    	</div>
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">退款金额<span className="sup">*</span></p>
    	<p className="refund-input">
    	<input type="number" name="tkmoney" id="tkmoney" 
    	onBlur={this.Checktkmoney}/>
    	元  最多可退<span>0.04</span>元,含运费<span>0.03</span>元
    	</p>
    	<div className="from-remarks"><p className="tkmoney"> </p></div>
    	</div>
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">是否退款<span className="sup">*</span></p>
    	<Fefundway/>
    	
    	</div>
    	
    	<div className="cont cont-tp Theawb">
    	<p className="cont-ht">运单号<span className="sup">*</span></p>
    	<p className="refund-input">
    	<input type="text" placeholder="请输入运单号"  name="ydnum" id="ydnum" 
    	onBlur={this.Checkydnum}/>    
    	</p>
    	<div className="from-remarks"><p className="ydnum"></p></div>
    	</div>
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">退款说明<span className="sup">*</span></p>
    	<p className="refund-input">
    	<input type="text" placeholder="请输入退款说明" name="tkexplain" id="tkexplain" 
    	onBlur={this.Checktkexplain}/>   	
    	</p>
    	<div className="from-remarks"><p className="tkexplain"> </p></div>
    	</div>
    	
    	
    	<div className="cont cont-tp">
    	<p className="cont-ht">退款凭证</p>
    	<ImagePickerExample/>
    	
    	<p>每张图片大小不超过5M,最多支持5张,支持GIF,JPG,PNG格式</p>
    	
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
              <OrderInfo/>
            
              <div className="zhanweizi"></div>
              <Fixfoot/>
            </div>
        );
    }
}


export default Main;
