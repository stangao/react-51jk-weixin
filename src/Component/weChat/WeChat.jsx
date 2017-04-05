import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Container/Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, GetData } from '../common/index';
import { output,IsNull,checktkexplain} from '../common/verifications';
import './WeChat.less';


function chatMainInit(){//聊天内容滚动
	
	let headHeight = document.querySelector('.chatHead').offsetHeight;
	let	footHeight = document.querySelector('.chatFoot-box').offsetHeight;
	let	bodyHeight =  document.documentElement.clientHeight || document.body.clientHeight;
	let	chatMainDom = document.querySelector('.chatMain-box');
	let	chatAreaHeight = document.getElementById('chatMainArea').offsetHeight;
	let	heightDistance = 0;
	let	heightScroll = 0;
	heightDistance = bodyHeight - headHeight - footHeight;
	chatMainDom.style.height = heightDistance +"px";
	heightScroll = chatAreaHeight - heightDistance;
	chatMainDom.scrollTop = heightScroll;
}


/**
 * 聊天头部
 *
 * @export
 * @class ChatHead
 * @extends {Component}
 */
export class ChatHead extends Component {
    render() {

        return (
        	<div className = "chatHead-box">
	            <div className = "chatHead">
	            	<a href="#">
		            	<i className = "iconfont icon-phone"></i>
		            	<span>一键呼叫，专家免费回拨电话，省心，省力！</span>
	            	</a>
	            </div>
	            <div className = "wx-people-center">
	            	<a href="#">
	            		<i className = "iconfont icon-people-center"></i>
	            	</a>
	            </div>
	            <div className = "chatHead-place"></div>
	        </div>    
        );
    }
}

/**
 * 聊天头部
 *
 * @export
 * @class ChatMain
 * @extends {Component}
 */
export class ChatMain extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isLeave: false,
            isLogin: false,
        };
    }
	chatMainClick(e){
		document.querySelector('.upload-content').style.display="none";	
	    document.querySelector('.face-content').style.display="none";
	    setTimeout(chatMainInit,200);
	}
	chatPicToBig(e){
		let bigImgSrc = e.target.src;
		let bigDom=document.createElement("img");
		bigDom.setAttribute("src", bigImgSrc );
		document.querySelector('.pic-pop-box').style.display="block";
		document.querySelector('.pic-pop-main').innerHTML="";
		document.querySelector('.pic-pop-main').appendChild(bigDom);
	}
	popBoxHide(e){
		document.querySelector('.pic-pop-box').style.display="none";	
	}
	componentDidMount(e){			
		let commentsList=document.querySelector('.comments-list');
		let commentsSpan=commentsList.getElementsByTagName('span');
		let commentsResult=document.querySelector('.comments-result');
		for(let i=0;i<commentsSpan.length;i++){
			commentsSpan[i].onclick=()=>{
				console.log(i);
				let chooseNr=commentsSpan[i].innerHTML;				
				document.querySelector('.win-box-publish').style.display="block";
				commentsResult.innerHTML=chooseNr;				
			}
		}
		this.setState({
			isLogin:true,
		})
		
	}
	comtSure(e){
		let commentFwVlue=document.getElementById('comment-fw').value;
		if(commentFwVlue){
			alert("提交中...");
			 document.querySelector('.win-box-publish').style.display="none";		 
		}else{
		  document.querySelector('.tkexplain').style.display="block";
	      document.querySelector('.tkexplain').innerHTML="输入框内容不能为空!";	
		 }		
		}
	comtBack(e){
		document.querySelector('.win-box-publish').style.display="none";
	}
	 Checktkexplain(e){
	 	checktkexplain('comment-fw');	   
      }
    LoginClose(e){
    	document.querySelector('.win-box-login').style.display="none";
    }
    LoginSure(e){
    	browserHistory.push(`/login/login`);
    }
    render() {
    	let isLogin = this.state.isLogin;
        if(isLogin==true){
        	document.querySelector('.win-box-login').style.display="none";
        }
        else{
        	console.log(222);
        }
        return (
        	<div className = "chatMain-box" onClick = {this.chatMainClick.bind(this)}>
        		<div className = "chatMain-area" id ="chatMainArea">
		            <p className = "history-dialogue">没有历史记录</p>
		            <p className = "chat-time"><span>2017-02-16 18:49:05</span></p>
		            <div className = "chat-item-news">
		            	<div className="news-content-system">
		            		<div className="content-system">
		            			<p>请您点击开始呼叫药师吧。</p>
		            			【<a className="call_pharmacist">点击呼叫药师</a>】，药师会免费打电话联系您
		            		</div>
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-my">
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="1">
			            			司法斯蒂芬<img src="/src/Pic/facePic/wx_1.png" />
			            			<img src="/src/Pic/facePic/wx_2.png" /> 是否是司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬
			            			<img src="/src/Pic/facePic/wx_3.png" /> 
		            			</div>	            		
		            		</div>
		            		<div className="send-head-pic sender_head_my">
		            			<img src="/src/Pic/user_log_default.png" />
		            		</div>
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-service">
		            		<div className="send-head-pic sender_head_service">
		            			<img src="/src/Pic/service.png" />
		            		</div>
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="1">
			            			司法斯蒂芬<img src="/src/Pic/facePic/wx_1.png" />
			            			<img src="/src/Pic/facePic/wx_2.png" /> 是否是司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬
			            			<img src="/src/Pic/facePic/wx_3.png" /> 
		            			</div>	            		
		            		</div>
		            		
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-my">
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="4">
		            				<img src="/src/Pic/ad02.jpg" onClick = {this.chatPicToBig.bind(this)} />
		            			</div>	            		
		            		</div>
		            		<div className="send-head-pic sender_head_my">
		            			<img src="/src/Pic/user_log_default.png" />
		            		</div>
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-my">
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="1">
			            			司法斯蒂芬<img src="/src/Pic/facePic/wx_1.png" />
			            			<img src="/src/Pic/facePic/wx_2.png" /> 是否是司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬
			            			<img src="/src/Pic/facePic/wx_3.png" /> 
		            			</div>	            		
		            		</div>
		            		<div className="send-head-pic sender_head_my">
		            			<img src="/src/Pic/user_log_default.png" />
		            		</div>
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-service">
		            		<div className="send-head-pic sender_head_service">
		            			<img src="/src/Pic/service.png" />
		            		</div>
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="1">
			            			司法斯蒂芬<img src="/src/Pic/facePic/wx_1.png" />
			            			<img src="/src/Pic/facePic/wx_2.png" /> 是否是司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬
			            			<img src="/src/Pic/facePic/wx_3.png" /> 
		            			</div>	            		
		            		</div>
		            		
		            	</div>	
		            </div>
		            
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-service">
		            		<div className="send-head-pic sender_head_service">
		            			<img src="/src/Pic/service.png" />
		            		</div>
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="1">
			            			司法斯蒂芬<img src="/src/Pic/facePic/wx_1.png" />
			            			<img src="/src/Pic/facePic/wx_2.png" /> 是否是司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬
			            			<img src="/src/Pic/facePic/wx_3.png" /> 
		            			</div>	            		
		            		</div>
		            		
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-my">
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="4">
		            				<img src="/src/Pic/ad02.jpg" onClick = {this.chatPicToBig.bind(this)} />
		            			</div>	            		
		            		</div>
		            		<div className="send-head-pic sender_head_my">
		            			<img src="/src/Pic/user_log_default.png" />
		            		</div>
		            	</div>	
		            </div>
		             <div className = "chat-item-news">
		            	<div className="news-content news-content-service">
		            		<div className="send-head-pic sender_head_service">
		            			<img src="/src/Pic/service.png" />
		            		</div>
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="1">
			                     您的情况我基本都了解了.
		            			</div>	            		
		            		</div>
		            		
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content-system">
		            		<div className="content-system bg-white">
		            			<p className="goods-name">感冒灵胶囊感冒灵胶囊感冒灵胶囊感冒灵胶囊感冒灵胶囊</p>
		            			<div className="pricenu">
		            			<label>¥11.80</label>
		            			<i>×4</i>
		            			</div>
		            			<p className="look-but">
		            			<Link to={`/single/product?goods_id=1`}>点击查看</Link>
		            			</p>
		            		</div>
		            	</div>	
		            </div>
		            <div className = "chat-item-news">
		            	<div className="news-content-system">
		            		<div className="content-system bg-white">
		            			<p className="goods-name">感冒灵胶囊感冒灵胶囊感冒灵胶囊感冒灵胶囊感冒灵胶囊</p>
		            			<div className="pricenu">
		            			<label>¥11.80</label>
		            			<i>×4</i>
		            			</div>
		            			<p className="look-but">
		            			<Link to={`/single/product?goods_id=1`}>点击查看</Link>
		            			</p>
		            		</div>
		            	</div>	
		            </div>
		            
		            <div className = "chat-item-news">
		            	<div className="news-content-system">
		            		<div className="content-system bg-white">
		            			<p className="total-price">小计:<i>25.4</i>元,优惠<i>5</i>元,共<i>20.4</i>元</p>		            				            			
		            		</div>
		            	</div>	
		            </div>
		            
		            <div className = "chat-item-news">
		            	<div className="news-content news-content-service">
		            		<div className="send-head-pic sender_head_service">
		            			<img src="/src/Pic/service.png" />
		            		</div>
		            		<div className="content-chat-area">
		            			<div className="content-chat-main" data-type="1">
			            			<p className="transfer">我们支持在线转账,您可以<br/>【<Link to={`/ `}>点击转账</Link>】<i>20.4</i>元</p>
			            			
		            			</div>	            		
		            		</div>
		            		
		            	</div>	
		            </div> 
		            
		             <div className = "chat-item-news">
		            	<div className="news-content-system">
		            		<div className="content-system bg-white">
		            		 <div className="win-box-choose-cent">
	        		         <p className="comments-cont">感谢您对我们的支持,为了更好地为您服务,请为本次服务打分</p>
	        		         <p className="comments-list">
	        		         <span>非常满意</span>
	        		         <span>一般</span>
	        		         <span>不满意</span>
	        		         </p>        		       	   
	        	              </div>
		            		</div>
		            	</div>	
		            </div>
		            
		            
		            
		            <div className = "pic-pop-box">
	        			<div className = "pic-pop-main" onClick = {this.popBoxHide.bind(this)}>
	        			</div>
	        	   
	        		</div>
	        		
	        	   <div className="win-box-common win-box-publish">
	        		  <div className="win-mask"></div>
	        		  <div className="win-box-common-cent win-box-publish-cent">
	        		   <p className="comments-ti"><label>您本次的评论为:</label><i className="comments-result">非常满意</i></p>
	        		   <div className="comments-tex">
	        		   <textarea className="comments-nr" id="comment-fw" placeholder="您可以在此输入评论内容" onBlur={this.Checktkexplain.bind(this)}/>
	        		   </div>
	        		   <div className="from-remarks">
	        		   <p className="tkexplain"></p>
	        		   </div>
	        		   <p className="comments-but">
	        		   <span className="comments-but-sure" onClick={this.comtSure.bind(this)}>确定</span>
	        		   <span className="comments-but-back" onClick={this.comtBack.bind(this)}>返回</span>
	        		   </p>
	        		</div>	        	   
	        	   </div>
	        	  
	        	  <div className="win-box-common win-box-login">
	        	   <div className="win-mask"></div>
	        	   <div className="win-box-common-cent win-box-login-cent">
	        	   <p className="login-remind">为了保证给您最好的服务体验,请您登录后再进行聊天咨询哟~</p>
	        	   <p className="login-choose">
	        	   <span onClick={this.LoginClose}>取消</span>
	        	   <span onClick={this.LoginSure}>确定</span>
	        	   </p>
	        	  
	        	   </div>
	        	  </div>
	        	  
	        	</div>	
	        </div>    
        );
    }
}







/**
 * 聊天底部输入框
 *
 * @export
 * @class ChatFoot
 * @extends {Component}
 */
export class ChatFoot extends Component {
	constructor(props) {
        super(props);
        this.state = {
	        imgbm : ["/::)", "/::~", "/::B", "/::|", "/:8-)", "/::<", "/::$", "/::X", "/::Z", "/::’(", "/::-|", "/::@", "/::P", "/::D",
						"/::O", "/::(", "/::+", "/:–b", "/::Q", "/::T", "/:,@P", "/:,@-D", "/::d", "/:,@o", "/::g", "/:|-)", "/::!", "/::L",
						"/::>", "/::,@", "/:,@f", "/::-S", "/:?", "/:,@x", "/:,@@", "/::8", "/:,@!", "/:!!!", "/:xx", "/:bye", "/:wipe", "/:dig",
						"/:handclap", "/:@-(", "/:B-)", "/:<@", "/:@>", "/::-O", "/:>-|", "/:P-(", "/::’|", "/:X-)", "/::*", "/:@x", "/:8*",
						"/:pd", "/:<W>", "/:eat", "/:miao", "/:ill", "/:friend", "/:money", "/:pig", "/:v5", "/:good", "/:ok",
						"/:thanks", "/:shackhand", "/:ye", "/:break"],
			img_intro : ["[微笑]", "[撇嘴]", "[色]", "[发呆]", "[得意]", "[流泪]", "[害羞]", "[闭嘴]", "[睡]", "[大哭]", "[尴尬]", "[发怒]",
						"[调皮]", "[呲牙]", "[惊讶]", "[难过]", "[酷]", "[汗]", "[抓狂]", "[吐]", "[偷笑]", "[快乐]", "[白眼]", "[傲慢]", "[饿]", "[困]",
						"[惊恐]", "[汗]", "[憨笑]", "[悠闲]", "[努力]", "[咒骂]", "[疑问]", "[嘘]", "[晕]", "[疯了]", "[哀]", "[骷髅]", "[敲打]", "[再见]",
						"[汗]", "[擦汗]", "[鼓掌]", "[糗大了]", "[坏笑]", "[左哼哼]", "[右哼哼]", "[哈欠]", "[鄙视]", "[委屈]", "[快哭了]", "[阴险]",
						"[亲亲]", "[爱心]", "[思考]", "[笑哭]", "[好吃]", "[喵]", "[生病]", "[互粉]", "[要钱]", "[猪头]", "[给力]", "[威武]", "[棒]",
						"[没问题]", "[抱拳]", "[握手]", "[欧耶]", "[心碎]"],			
	
			icon_face : []
        };
        
  	}
	chatAddFace(e){
	  document.querySelector('.upload-content').style.display="none";	
	  document.querySelector('.face-content').style.display="block";
	  setTimeout(chatMainInit,200);
	}
	chatAddPic(e){
	  document.querySelector('.face-content').style.display="none";
	  document.querySelector('.upload-content').style.display="block";	
	  setTimeout(chatMainInit,200);
	}
	writeFace(e){//表情输入
		let faceImgSrc = e.target.src;
		let node=document.createElement("img");
		node.setAttribute("src", faceImgSrc );
		document.querySelector('.input-msg').appendChild(node);
	}
	chatSendInfo(e){
		let addHtml = `<div class = "chat-item-news">
		            	<div class="news-content news-content-my">
		            		<div class="content-chat-area">
		            			<div class="content-chat-main" data-type="1">
			            			司法斯蒂芬<img src="/src/Pic/facePic/wx_1.png" />
			            			<img src="/src/Pic/facePic/wx_2.png" /> 是否是司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬司法斯蒂芬
			            			<img src="/src/Pic/facePic/wx_3.png" /> 
		            			</div>	            		
		            		</div>
		            		<div class="send-head-pic sender_head_my">
		            			<img src="/src/Pic/user_log_default.png" />
		            		</div>
		            	</div>	
		            </div>`
		document.querySelector('.input-msg').innerHTML = "";
		document.querySelector('.upload-content').style.display="none";	
	  	document.querySelector('.face-content').style.display="none";
	  	
	  	document.querySelector('.chatMain-area').innerHTML += addHtml;
	  	document.querySelector('.input-msg').focus();
	}
	chatInputFocus(e){
		setTimeout(chatMainInit,200);
	}
	componentDidMount(){
		
	}
    render() {
		const This = this;
		let arr1 = This.state.imgbm;
		let newArry = [];
		for(let i=1;i<=arr1.length;i++){
            newArry.push(
                <img onClick={this.writeFace} key={i} src={`/src/Pic/facePic/wx_${i}.png`} />
            )
        }
        return (
        	<div className = "chatFoot-box">
	            <div className = "chatFoot-top">
	            	<div className = "chatFoot-top-left">
	            		<i className = "iconfont icon-add-face" onClick ={this.chatAddFace.bind(this)}></i>
	            		<i className = "iconfont icon-add-pic" onClick ={this.chatAddPic.bind(this)}></i>
	            	</div>
	            	<div className = "chatFoot-top-middle">
	            		<div className="input-msg" contentEditable="true" onFocus = {this.chatInputFocus.bind(this)} ></div>
	            	</div>
	            	<div className = "chatFoot-top-right">
	            		<input className = "input-send" type="button" value="发送" id ="input-send" onClick ={this.chatSendInfo.bind(this)}  />
	            	</div>
	            </div>
	            <div className = "chatFoot-bottom">
	            	<div className = "face-content">
	            		{newArry}
	            	</div>
	            	<div className = "upload-content">
	            		<span className = "img-upload">
	            			<i className = "iconfont icon-add-img"></i>
	            		</span>
	            		<img src={`/src/Pic/menu01.jpg`} />
	            		<img src={`/src/Pic/menu01.jpg`} />
	            		<img src={`/src/Pic/menu01.jpg`} />
	            		<img src={`/src/Pic/menu01.jpg`} />
	            		<img src={`/src/Pic/menu01.jpg`} />
	            	</div>
	            </div>
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
                        <Link to="/my/wechat">
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
    JudgeState(e){
    if(document.querySelector('.chatHead')){//判断是否是聊天页面
		chatMainInit();	
	}	
    }
    componentDidMount(e){
   	this.JudgeState();
   }
    render() {
		console.log(this.props.state);
        return (
            <div>
                <ChatHead />
                <ChatMain />
                <ChatFoot />
            </div>
        );
        
    }
    componentDidMount(){
    	setTimeout(this.chatMainInit,100);
    }
    chatMainInit(){//聊天内容滚动
		let headHeight = document.querySelector('.chatHead').offsetHeight;
		let	footHeight = document.querySelector('.chatFoot-box').offsetHeight;
		let	bodyHeight =  document.documentElement.clientHeight || document.body.clientHeight;
		let	chatMainDom = document.querySelector('.chatMain-box');
		let	chatAreaHeight = document.getElementById('chatMainArea').offsetHeight;
		let	heightDistance = 0;
		let	heightScroll = 0;
		heightDistance = bodyHeight - headHeight - footHeight;
		chatMainDom.style.height = heightDistance +"px";
		heightScroll = chatAreaHeight - heightDistance;
		chatMainDom.scrollTop = heightScroll;
	}


}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
}


//export default connect((state) => { return { User: state.User } }, action('Product'))(Main); //连接redux

export default GetData({
    id: 'WeChat',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/product/getProductList?site_id=100166&access_token=123456789098765432123456789124566', //服务器请求的地址
    success: (state) => {console.log(state); return state; }, //请求成功后执行的方法
    error: (state) => { return state } //请求失败后执行的方法
});