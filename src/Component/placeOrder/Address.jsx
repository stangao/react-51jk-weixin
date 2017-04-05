import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';
import { Picker, List, WhiteSpace , Checkbox, Flex, Modal, Button, WingBlank, Toast} from 'antd-mobile';
import { createForm } from 'rc-form';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import { output,IsNull,checkMobile,checkUsername,checkarea,checkDetailArea,checkZipCode} from '../common/verifications';
import "./placeorder.less";


/*保存收货地址*/
const alert = Modal.alert;


/**地址联动**/
// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (	
  <div className="choose-area"
    onClick={props.onClick}
  >
    <div className="choose-area-cont">
      <div className="choose-area-cont-fl">{props.children}</div>
      <div  id="area" className="choose-area-cont-fr">{props.extra}</div>   
      <input type="hidden"  id='area-ids'/>
    </div>
    <p className="area"></p>
  </div>
);



let Test = React.createClass({
  getInitialState() {
    return {
      data: [],
      cols: 1,
      pickerValue:[],
      
    };
  },
 Checkarea(e){
  		document.querySelector('.area').style.display="none";
 },
  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },
  render() {
    const { getFieldProps } = this.props.form;
    return (
    	<div className="pick-address" onClick={this.Checkarea}>    
      <List style={{ backgroundColor: 'white' }} className="picker-list">
                   
        <Picker
          data={district}
          title="选择地区"
          extra="请选择所在地区"
          value={this.state.pickerValue}
          onChange={v => {this.setState({ pickerValue: v }); document.getElementById('area-ids').value=v;}}        
        >
          <CustomChildren>所在地区</CustomChildren>
        </Picker>
      </List>
   
    </div>);
  },
});

Test = createForm()(Test);


/*设为默认地址**/
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;



export class  SetAddress extends Component{
	render(){
		return(
			<div className="set-address">
      <List >       
        <CheckboxItem >
          设为默认地址
        </CheckboxItem>
      </List>    
    </div>		
		)
	}
}


/*固定底部**/
export class  Fixfoot extends Component{
	DeleteArea(e){
	 var r=confirm("删除地址")
  if (r==true)
    {  
  var DefaultArea = document.querySelector('.am-checkbox-input'); 
     if(DefaultArea.checked==true){
     	alert('该地址是默认地址,不能删除');
     }
    }
	}
	ItisNull(e){
		var  Strmobile = document.getElementById('mobile').value.trim();
		var  Strusername = document.getElementById('username').value.trim();  
		var  Strdetailarea = document.getElementById('detailarea').value.trim();  
		var  Strizcode = document.getElementById('isZipCode').value.trim();  
		var  Strarea= document.getElementById('area');
		var cont = document.getElementById('from').getElementsByTagName('p');
		
	   if(Strmobile.length==0 && Strusername.length==0 && Strdetailarea.length==0 && Strizcode.length==0 && Strarea.innerHTML=="请选择所在地区"){
	   	 for(var i=0;i<cont.length;i++){
	     cont[i].style.display="block";
		   cont[i].innerText="输入框内容不能为空!";
		}
	   }else if(Strmobile.length==0){
	   	document.querySelector('.mobile').style.display="block";
	    document.querySelector('.mobile').innerHTML="输入框内容不能为空!";
	   }else if(Strusername.length==0){
	   	document.querySelector('.username').style.display="block";
	    document.querySelector('.username').innerHTML="输入框内容不能为空!";
	   }else if(Strarea.innerHTML=="请选择所在地区"){
	   	document.querySelector('.area').style.display="block";
	    document.querySelector('.area').innerHTML="输入框内容不能为空!";
	   }else if(Strdetailarea.length==0){
	   	document.querySelector('.detailarea').style.display="block";
	    document.querySelector('.detailarea').innerHTML="输入框内容不能为空!";
	   }else if(Strizcode.length==0){
	   	document.querySelector('.isZipCode').style.display="block";
	    document.querySelector('.isZipCode').innerHTML="输入框内容不能为空!";
	   }else{
	   	var f=confirm("保存收货地址");
    	  if(f==true){   		
    		browserHistory.push('addresslist','_self');
    		}
	   }   		
 }
  render() {
 		
    return (
      <div className="flex-container fixedfoot fixedfoot-address">
        <Flex>        
         <Flex.Item className="foot-but delete-address" ><span onClick ={this.DeleteArea}>删除地址</span></Flex.Item>       
         <Flex.Item className="foot-but save-address"><span onClick ={this.ItisNull}>保存地址</span></Flex.Item>
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
    }//定义输出内容
    //校验手机号
    CheckMobile(e){
    checkMobile('mobile');
    }
    //校验收货人
   CheckUsername(e){
    checkUsername('username');
    }
   //校验收货人
   Checkarea(e){
    checkarea('area');
    }
   //校验详细地址
   CheckDetailArea(e){
   	checkDetailArea('detailarea');
   }
   //校验邮政编码
   CheckZipCode(e){
   	 checkZipCode('isZipCode')
   }
  //校验地址
  Checkarea(e){
  	
  }
    render() {
       
        return (
            <div className="index-list-box " id="from">
              <div className = "place-bg2">
              <div className="form-cont">
              <div className="flex-cont flex-simple add-list">
              <label>手机号</label>
              <span className="flex-item">
              <input type="text" placeholder="填写手机号" name="mobile" id="mobile" maxLength="11" 
              onBlur ={this.CheckMobile.bind(this)}/>
              </span>             
              </div>
               <div className="from-remarks"><p className="mobile"></p></div>
              </div>
              
               <div className="form-cont">
               <div className="flex-cont flex-simple add-list">
              <label>收货人</label>
              <span className="flex-item">
              <input type="text" placeholder="填写收货人" name="username" id="username" 
              onBlur={this.CheckUsername.bind(this)}/>
              </span>            
              </div>
               <div className="from-remarks"><p className="username"></p></div>
              </div>
              
                
              <Test />
       
              
               <div className="form-cont">
               <div className="flex-cont flex-simple add-list">
              <label>详细地址</label>
              <span className="flex-item">
              <input type="text" placeholder="填写详细地址" name="detailarea" id="detailarea"
               onBlur={this.CheckDetailArea.bind(this)}/>
              </span>              
              </div>
              <div className="from-remarks"><p className="detailarea"></p></div>
              </div>
              
               <div className="form-cont">
               <div className="flex-cont flex-simple add-list">
              <label>邮政编码</label>
              <span className="flex-item">
              <input type="text" placeholder="填写详细地址" name="isZipCode" id="isZipCode" maxLength="6" 
              onBlur={this.CheckZipCode.bind(this)}/>
              </span>              
              </div>
              <div className="from-remarks"><p className="isZipCode"></p></div>
                </div>
                
                 <SetAddress />         
              </div>
             <Fixfoot/>
            </div>
        );
    }
    
}


export default Main;