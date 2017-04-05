


	/**数据api**/
	var dataObj = {
		wxApiList:[
		        'checkJsApi',
		        'onMenuShareTimeline',
		        'onMenuShareAppMessage',
		        'onMenuShareQQ',
		        'onMenuShareWeibo',
		        'onMenuShareQZone',
		        'hideMenuItems',
		        'showMenuItems',
		        'hideAllNonBaseMenuItem',
		        'showAllNonBaseMenuItem',
		        'translateVoice',
		        'startRecord',
		        'stopRecord',
		        'onVoiceRecordEnd',
		        'playVoice',
		        'onVoicePlayEnd',
		        'pauseVoice',
		        'stopVoice',
		        'uploadVoice',
		        'downloadVoice',
		        'chooseImage',
		        'previewImage',
		        'uploadImage',
		        'downloadImage',
		        'getNetworkType',
		        'openLocation',
		        'getLocation',
		        'hideOptionMenu',
		        'showOptionMenu',
		        'closeWindow',
		        'scanQRCode',
		        'chooseWXPay',
		        'openProductSpecificView',
		        'addCard',
		        'chooseCard',
		        'openCard'
		    ],
		 back_url:'',
		init:function(){
			
			dataObj.getSignPackage();
			//通过js对象异步请求统计脚本
			var Count = document.createElement('script');
			Count.type = 'text/javascript';
			Count.async = true;
			Count.src = 'http://count-js.51jk.com/o_code.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(Count, s);
		},
		getSignPackage:function(){
			alert(222);return;
			var urlStr  = "/sweep/getSignPackage";
			var params = {};
			params.url = encodeURIComponent(location.href.split('#')[0]);
			params.back_url = window.location.search.replace("?back=","");
    		  dataObj.back_url = params.back_url;

			$.post(urlStr,params,function(data){
			  var signpack = JSON.parse(data);
			  signpack.jsApiList = dataObj.wxApiList;
    		  signpack.debug = false;
    		  wx.config(signpack);
	        });
		},
		sweepResult:function () {
			 wx.ready(function() {
		            wx.scanQRCode({
		                needResult: 1,
		                desc: 'scanQRCode desc',
		                success: function(result) {
		                	var back_url = dataObj.back_url;
						    var url = result.resultStr;
						    //匹配条形码结果
						    //首先匹配条形码,条形码规则 : AXC_13,1231111
						    var result = /^(?:.*?)\,(\d+)$/.exec(url);
						    //如果匹配到了,则进行条形码处理
						    if (result && result[1] != undefined) {
						        var qid = (result[1]);
						        //AJAX 数据搜索,搜索出数据
						        $.get("/search/barcode/" + qid, function (response) {
						            if (response.errorCode != 0) {
						                $.confirm(response.errorMessage,function(){

							              	if(back_url == '/index' || back_url == "/" || back_url == "/cart" || back_url == "/category"){
							                	$.router.load(back_url);
							              	}else{
						                 		$.router.load('/index');
					                  		}

						                },function(){

							              	if(back_url == '/index' || back_url == "/" || back_url == "/cart" || back_url == "/category"){
							                	$.router.load(back_url);
							              	}else{
						                 		$.router.load('/index');
						                 	}
				                  		});
						                return false;
						            }
						           	$.router.load("/product/detail?goods_ids=" + response.result.item_id, true);

						        });

						        //函数终止,需要return false
						        return false;
						    }
						    //如果代码走到这里,判断二维码生成的地址,规则:
						    //http://www.a.com/p_id=123&....
						    //正则匹配 p_id(+数字)
						    //var matched = (/detail\?goods_id[s]?=(\d+)/ig).exec(url);
						    //var matched = (/detail\/(\d+)/ig).exec(url);
							var matched = (/goods_id=(\d+)/ig).exec(url);

						    //这句话的意思是,如果没有匹配到,或者没有捕获到第一个匹配的值,进行提示
						    if (!matched || undefined == matched[1] || !matched[1]) {
						         $.confirm("抱歉,数据不匹配!",function(){

					              	if(back_url == '/index' || back_url == "/" || back_url == "/cart" || back_url == "/category"){
					                	$.router.load(back_url);
					              	}else{
				                 		$.router.load('/index');
				              		}

				                },function(){

					              	if(back_url == '/index' || back_url == "/" || back_url == "/cart" || back_url == "/category"){
					                	$.router.load(back_url);
					              	}else{
				                 		$.router.load('/index');
				              		}

				                });
						        return false;
						    }
						    //强制转换int
						    var pid = parseInt(matched[1]);

						    //添加到购物车,功能结束
						    var params = {};
					          params.p_id = pid;
					          params.num = 1;
						    $.post("/cart/add",params, function (response) {
						        if (response.errorCode) {
						            $.alert("数据处理失败,请稍后重试! 错误代码:" + response.errorCode);
						            return false;
						        }
						        alert("已经添加至购物车!");
						        $.router.load('/cart', true);
						    });
					  },
	                fail: function(errMsg) {
	                    $.alert('抱歉,无法识别您扫描的二维码/条形码');
	                },
	                cancel: function() {
	                	$.router.load('/index', true);
	                }
	            });

            });
		},
		share_coupon:function(fnShareTimelineObj,fnSendAppMessageObj){
			/*var urlStr  = "/sweep/getSignPackage";
			var params = {};
			params.url = encodeURIComponent(location.href.split('#')[0]);
			params.back_url = window.location.search.replace("?back=","");

			$.post(urlStr,params,function(data){
			  var signpack = JSON.parse(data);
			  signpack.jsApiList = dataObj.wxApiList;
    		  signpack.debug = false;

    		   wx.config(signpack);*/
		       wx.ready(function() {
		            wx.onMenuShareTimeline(fnShareTimelineObj);
                    wx.onMenuShareAppMessage(fnSendAppMessageObj);
        		});

	       /* });*/
		},
		chooseImage:function(imgObj){
			/*var urlStr  = "/sweep/getSignPackage";
			var params = {};
			params.url = encodeURIComponent(location.href.split('#')[0]);
			params.back_url = window.location.search.replace("?back=","");

			$.post(urlStr,params,function(data){
			  var signpack = JSON.parse(data);
			  signpack.jsApiList = dataObj.wxApiList;
    		  signpack.debug = false;

    		   wx.config(signpack);*/
		       wx.ready(function() {
					wx.chooseImage({
					    count: 1, // 默认9
					    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					    success: function (res) {
					        var localId = res.localIds[0]; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
					        if (localId.indexOf("wxlocalresource") != -1) {
								localId = localId.replace("wxlocalresource", "wxLocalResource");
							}
					       wx.uploadImage({
							    localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
							    isShowProgressTips: 1, // 默认为1，显示进度提示
							    success: function (res) {
							        var serverId = res.serverId; // 返回图片的服务器端ID
							        $.get('/tool/downLoadPic/'+serverId,{} , function (data) {
							              var data = typeof(data) == 'object'?data:JSON.parse(data);
							              if (data.errorCode != 0) {
							                  alert(data.errorMessage.msg);
							                  return false;
							              }else{
                                             // alert(data.errorMessage.image);
							        		  $(imgObj).attr("src",data.errorMessage.image);
							              }

							          });

							    }
							});
					    }
					});

				});
		  /*  });	*/
		}
	};
	



export {
  dataObj  
}





