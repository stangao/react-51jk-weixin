import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad,  UserHeadImg, TabIcon, GetNextPage } from '../common/index';
import { output,IsNull,checktkexplain} from '../common/verifications';

import "./theorder.less";

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
    
   componentDidMount(){	
		this.ScoreMark();
	}
    ScoreMark(){
	let score = document.getElementsByClassName('score');
	for(let e = 0, len = score.length; e < len; e++) {
		let star = score[e].getElementsByTagName('a');
		let temp = 0;

		for(let i = 0, len = star.length; i < len; i++) {
			star[i].index = i;

			star[i].onmouseover = function() {
				clear();
				for(let j = 0; j < this.index + 1; j++) {
					document.getElementsByClassName('score')[e].getElementsByTagName('a')[j].style.backgroundPosition = '0 0';
				}
			}

			star[i].onmouseout = function() {
					for(let j = 0; j < this.index + 1; j++) {
						document.getElementsByClassName('score')[e].getElementsByTagName('a')[j].style.backgroundPosition = '0 -32px';
					}
					current(temp);
				}
				//鼠标点击
			star[i].onclick = function() {
				temp = this.index + 1;
				score[e].getElementsByTagName('p')[0].innerHTML = temp + ' 分';
				current(temp);
			}
		}
		//清除所有
		function clear() {
			for(let i = 0, len = star.length; i < len; i++) {
				document.getElementsByClassName('score')[e].getElementsByTagName('a')[i].style.backgroundPosition = '0 -32px';
			}
		}
		//显示当前第几颗星
		function current(temp) {
			for(let i = 0; i < temp; i++) {
				document.getElementsByClassName('score')[e].getElementsByTagName('a')[i].style.backgroundPosition = '0 0';
			}
		}

	}

}
    CheckSrore(e){
    let fwscore=document.getElementById('fwscore');
    let spscore=document.getElementById('spscore');	
    let comments=document.getElementById('comment');	  
    let cont = document.querySelectorAll('.from-remarks');
    
    if(fwscore.innerHTML=="0分" && spscore.innerHTML=="0分" && comments.value.trim()==0){   
    	for(let i=0;i<cont.length;i++){
    	   cont[i].style.display="block";
	       cont[i].firstChild.innerHTML="评价内容不能为空!";	       
    	}
    }else if(fwscore.innerHTML=="0分"){
    	document.querySelector('.fwscore').style.display="block";
	    document.querySelector('.fwscore').innerHTML="请为服务打分!";	
    }else if(comments.value.trim()==0){
    	document.querySelector('.tkexplain').style.display="block";
	    document.querySelector('.tkexplain').innerHTML="评价内容不能为空!";	
    }else if(spscore.innerHTML=="0分"){
    	document.querySelector('.spscore').style.display="block";
	    document.querySelector('.spscore').innerHTML="请为商品打分!";	
    }else{
    	alert("提交中...")
    }
    
    }
    CheckMask(e){
    	var formMarsk=e.target.parentNode.parentNode.nextSibling;
    	formMarsk.style.display="none";
    }
   Checktkexplain(e){
   	checktkexplain('comment');
   }
    render() { 
        return (
            <div className="orderInfo">
              <div className="cont review">
              <p className="review-title" id="aa">服务评价</p>
                
              <div className="score-total flex-cont flex-simple">
              <label>评分1</label>
              <div className="score flex-item" >
              <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <p id="fwscore">0分</p>		    
              </div>
              </div>
              <div className="from-remarks"><p className="fwscore"> </p></div>
              
                </div>
                
               <div className="cont review">
                <p className="review-title">商品评价</p>
                <div>
                <div className="goods-pl flex-cont flex-simple">
                <div className="review-pic">
                <img src="../static/yp.png"/>
                </div>
                <div className="review-tex flex-item">
                <textarea placeholder="写点什么吧，您的意见很重要" id="comment" onBlur={this.Checktkexplain.bind(this)}/> 
                </div>               
                </div>
                <div className="from-remarks"><p className="tkexplain"> </p></div>
                </div>
              <div className="score-total flex-cont flex-simple">
              <label>评分2</label>
              <div className="score flex-item" >
              <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <a href="javascript:;" onClick={this.CheckMask.bind(this)}></a>
		      <p id="spscore">0分</p>		    
              </div>
              </div>
               <div className="from-remarks"><p className="spscore"> </p></div>
                </div>
              <div className="submit-review" onClick={this.CheckSrore}>提交评论</div>
              
            </div>
        );
    }
 
}




export default Main;
