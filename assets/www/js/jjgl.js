//新建进件
function myjjgl(){
	$("#mainPage").html("");
	var cpxxurl="/ipad/product/selectProductByFilter.json";
	
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                         
    "<th></th>"+                 
    "<th>产品名称</th>"+  
    "<th>产品授信额度</th>"+
    "<th>产品利率</th>"+ 
    "<th>产品期限</th>"+
"</tr>";
	var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'正在加载，请稍后......', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#ff0', size:100, type:'o'});  
    
	 setTimeout(function() {
		 $.get(wsHost+cpxxurl,callbackresult);
		 xval.settext("正在加载，请稍后......");
	 },400);
	
	function callbackresult(json){
		xval.remove(); 
		var obj = $.evalJSON(json);
		for(var i = 0;i<obj.result.length;i++){
			tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> " +
			"<input type='radio' name='checkbox' value='"+obj.result[i].id+"@"+obj.result[i].productName+
			"'/>"+"</span></td>"+  
			"<td>"+obj.result[i].productName+"</td>"+
			"<td>"+obj.result[i].creditLine+"</td>"+
			"<td>"+obj.result[i].rateRange+"</td>"+
			"<td>"+obj.result[i].loanTimeLimit+"</td></tr>"

			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
		}
		result[j]=tmp;
		
	
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>进件管理</div>"+  
					"<div class='content'>" +
					    "<div class='jjstep'>" +
    					    "<div class='step1'>选择产品</div>"+
                            "<div class='step2'>选择客户</div>"+
                            "<div class='step2'>调查照</div>"+
                            "<div class='step2'>确认调查照</div>"+
                            "<div class='step2'>调查模板导入</div>"+
					    "</div><div class='line'></div>"+
	                    "<div class='bottom-content' style='padding-top:5px;'>"+
    						"<table id='cplb' class='cpTable' style='text-align:center;margin-top:0;'>"+
                                head+result[page]+
                            "</table>"+
                            "<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
        					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
        					"<input type='button' class='btn btn-primary btn-large next' id='xyb' value='下一步'/></p>"+
                        "</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();  
	
	$("#xyy").click(function(){
		page=page+1;
		if(result[page]){
			$("#cplb").html(head+result[page]);
		}else{
			alert("当前已经是最后一页");
			page=page-1;
		}
	})
	$("#syy").click(function(){
		page=page-1; 
		if(result[page]){
			$("#cplb").html(head+result[page]);
		}else{
			alert("当前已经是第一页");
			page = page+1;
		}
	})
	
	$("#xyb").click(function(){
		
		if ($("input[type='radio']").is(':checked')) {

			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			var res ={};
			res.productId = values[0];
			res.productName = values[1];
			myjjgl2(res);
		}else{
			alert("请选择一行");
		}
		
	})
	
	}
}
var cardId;
var productInfo;
var allobj={};
function myjjgl2(res){
	productInfo=res;
	var cpxxurl="/ipad/addIntoPieces/browseCustomer.json";
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                         
    "<th></th>"+                 
    "<th>中文姓名</th>"+  
    "<th>证件类型</th>"+
    "<th>证件号码</th>"+ 
"</tr>";
	$.get(wsHost+cpxxurl,{userId:userId,productId:productInfo.productId},callbackresult);
	
	function callbackresult(json){
		var obj = $.evalJSON(json);
		for(var i = 0;i<obj.items.length;i++){
			
			if(obj.items[i].cardType=="CST0000000000A" || obj.items[i].cardType=="0"){
				obj.items[i].cardType="身份证";
			}else if(obj.items[i].cardType=="1"){
				obj.items[i].cardType="军官证";
			}else if(obj.items[i].cardType=="2"){
				obj.items[i].cardType="护照";
			}else if(obj.items[i].cardType=="3"){
				obj.items[i].cardType="香港身份证";
			}else if(obj.items[i].cardType=="4"){
				obj.items[i].cardType="澳门身份证";
			}else if(obj.items[i].cardType=="5"){
				obj.items[i].cardType="台湾身份证";
			}
			
			tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> " +
			"<input type='radio' name='checkbox' value='"+obj.items[i].id+"@"+obj.items[i].cardId+"@"+obj.items[i].chineseName+
			"'/>"+"</span></td>"+  
			"<td>"+obj.items[i].chineseName+"</td>"+
			"<td>"+obj.items[i].cardType+"</td>"+
			"<td>"+obj.items[i].cardId+"</td></tr>"

			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
		}
		result[j]=tmp;
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>" +
            		    "<img src='images/back.png' onclick='myjjgl()'/>进件管理" +
                        "<input type='text' id='kexm' style='margin:13px 40px;' placeholder='搜索' onchange='sousuo(this)'/>" +
            		"</div>"+  
					"<div class='content'>" +
    					"<div class='jjstep'>" +
                            "<div class='step1'>"+productInfo.productName+"</div>"+
                            "<div class='step3'>选择客户</div>"+
                            "<div class='step2'>调查照</div>"+
                            "<div class='step2'>确认调查照</div>"+
                            "<div class='step2'>调查模板导入</div>"+
//                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='newUser1()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content' style='padding-top:5px;'>"+
    						"<table class='cpTable' id='khlb' style='text-align:center;margin-top:0;'>"+
                              head+result[page]+
                            "</table>"+
                            "<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
        					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
        					"<input type='button' class='btn btn-primary btn-large next' id='xyb' value='下一步'/></p>"+
                        "</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();
    
	$("#xyy").click(function(){
		page=page+1;
		if(result[page]){
			$("#khlb").html(head+result[page]);
		}else{
			alert("当前已经是最后一页");
			page=page-1;
		}
	})
	$("#syy").click(function(){
		page=page-1; 
		if(result[page]){
			$("#khlb").html(head+result[page]);
		}else{
			alert("当前已经是第一页");
			page = page+1;
		}
	})
	
	$("#xyb").click(function(){
		
		if ($("input[type='radio']").is(':checked')) {

			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			
			productInfo.customerId = values[0];
			productInfo.cardId = values[1];
			productInfo.chineseName = values[2];
			allobj.cardId = values[1];
			cardId=allobj.cardId;
			allobj.chineseName = values[2];
			var fxsxurl ="/ipad/NotifictionMessage/managerbrowse.json";
			var fxsxurl1 ="/ipad/customer/selectByCardId3.json?cardId="+allobj.cardId;
			var url = fxsxurl+"?userId="+window.sessionStorage.getItem("userId");
			var custormerid="";
			var custormerid1="";
			$.ajax({
				url:wsHost + url,
				type: "GET",
				dataType:'json',
				async: false,
				success: function (json) {
					obj = $.evalJSON(json);
					for(var i = 0;i<obj.size;i++){
						if(productInfo.customerId==obj.result[i].customerId){
							 custormerid=1;
						}
					}
					if(custormerid!=1){
						$.ajax({
							url:wsHost + fxsxurl1,
							type: "GET",
							dataType:'json',
							async: false,
							success: function (json) {
								obj = $.evalJSON(json);
								if(obj.size>0){
									custormerid1=1;
								}
							}})
					}
					if(custormerid==1){
						alert("对不起,该客户时在风险客户名单里面,不能申请进件!!!!")
					}else if(custormerid1==1){
						alert("对不起,该客户时在黑名单里面,不能申请进件!!!!")
					}else if(custormerid1!=1 & custormerid!=1){
						newUser6 (productInfo);
					}
					}})
		}else{
			alert("请选择一行");
			}
		
		})
	} 
}

function sousuo(){
	var userId = window.sessionStorage.getItem("userId");
	var kexm=$("#kexm").val();
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                         
    "<th></th>"+                 
    "<th>中文姓名</th>"+  
    "<th>证件类型</th>"+
    "<th>证件号码</th>"+ 
"</tr>";
	var edpgUrl="/ipad/addIntoPieces/sousCustomer.json";
	$.ajax({
		url:wsHost + edpgUrl,
		type: "GET",
		dataType:'json',
		data:{kexm:kexm,userId:userId,productId:productInfo.productId},
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				
				if(obj.result[i].cardType=="CST0000000000A" || obj.result[i].cardType=="0"){
					obj.result[i].cardType="身份证";
				}else if(obj.result[i].cardType=="1"){
					obj.result[i].cardType="军官证";
				}else if(obj.result[i].cardType=="2"){
					obj.result[i].cardType="护照";
				}else if(obj.result[i].cardType=="3"){
					obj.result[i].cardType="香港身份证";
				}else if(obj.result[i].cardType=="4"){
					obj.result[i].cardType="澳门身份证";
				}else if(obj.result[i].cardType=="5"){
					obj.result[i].cardType="台湾身份证";
				}
				
				tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> " +
				"<input type='radio' name='checkbox' value='"+obj.result[i].id+"@"+obj.result[i].cardId+"@"+obj.result[i].chineseName+
				"'/>"+"</span></td>"+  
				"<td>"+obj.result[i].chineseName+"</td>"+
				"<td>"+obj.result[i].cardType+"</td>"+
				"<td>"+obj.result[i].cardId+"</td></tr>"

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'>" +
	            		    "<img src='images/back.png' onclick='myjjgl()'/>进件管理" +
	            		"</div>"+  
						"<div class='content'>" +
	    					"<div class='jjstep'>" +
	                            "<div class='step1'>"+productInfo.productName+"</div>"+
	                            "<div class='step3'>选择客户</div>"+
	                            "<div class='step2'>调查照</div>"+
	                            "<div class='step2'>确认调查照</div>"+
	                            "<div class='step2'>调查模板导入</div>"+
//	                            "<input type='button' class='btn btn-primary btn-large next' value='下一步' onclick='newUser1()'/>"+
	                        "</div><div class='line'></div>"+
	                        "<div class='bottom-content' style='padding-top:5px;'>"+
	    						"<table class='cpTable' id='khlb' style='text-align:center;margin-top:0;'>"+
	                              head+result[page]+
	                            "</table>"+
	                            "<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
	        					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
	        					"<input type='button' class='btn btn-primary btn-large next' id='xyb' value='下一步'/></p>"+
	                        "</div>"+
						"</div>");
	    $(".right").hide();
	    $("#mainPage").show();
	    $("#xyy").click(function(){
			page=page+1;
			if(result[page]){
				$("#khlb").html(head+result[page]);
			}else{
				alert("当前已经是最后一页");
				page=page-1;
			}
		})
		$("#syy").click(function(){
			page=page-1; 
			if(result[page]){
				$("#khlb").html(head+result[page]);
			}else{
				alert("当前已经是第一页");
				page = page+1;
			}
		})	
			
			$("#xyb").click(function(){
		
		if ($("input[type='radio']").is(':checked')) {

			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			
			productInfo.customerId = values[0];
			productInfo.cardId = values[1];
			productInfo.chineseName = values[2];
			allobj.cardId = values[1];
			cardId=allobj.cardId;
			allobj.chineseName = values[2];
			var fxsxurl ="/ipad/NotifictionMessage/managerbrowse.json";
			var fxsxurl1 ="/ipad/customer/selectByCardId3.json?cardId="+allobj.cardId;
			var url = fxsxurl+"?userId="+window.sessionStorage.getItem("userId");
			var custormerid="";
			var custormerid1="";
			$.ajax({
				url:wsHost + url,
				type: "GET",
				dataType:'json',
				async: false,
				success: function (json) {
					obj = $.evalJSON(json);
					for(var i = 0;i<obj.size;i++){
						if(productInfo.customerId==obj.result[i].customerId){
							 custormerid=1;
						}
					}
					if(custormerid!=1){
						$.ajax({
							url:wsHost + fxsxurl1,
							type: "GET",
							dataType:'json',
							async: false,
							success: function (json) {
								obj = $.evalJSON(json);
								if(obj.size>0){
									custormerid1=1;
								}
							}})
					}
					if(custormerid==1){
						alert("对不起,该客户时在风险客户名单里面,不能申请进件!!!!")
					}else if(custormerid1==1){
						alert("对不起,该客户时在黑名单里面,不能申请进件!!!!")
					}else if(custormerid1!=1 & custormerid!=1){
						newUser6 (productInfo);
					}
					}})
		}else{
			alert("请选择一行");
			}
		
		})	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		}})
}
var b;
function newUser6(addIntopiece){
	b=addIntopiece;
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>选择图片上传方式</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
	                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
	                            "<div class='step3'>调查照</div>"+
	                            "<div class='step2'>确认调查照</div>"+
	                            "<div class='step2'>调查模板导入</div>"+
	                        "</div><div class='line'></div>"+
	                       "<div class='bottom-content'>"+
	                            "<div class='box jjgl' id = 'diaocmb' style='margin-left:400px;margin-right:50px;display:inline-block;'>" +
	                                "<img src='images/xxzl.png'/>" +
	                                "<span>从图库中选择</span>"+
	                            "</div>"+
	                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;'>" +
	                                "<img src='images/yxzl.png' />" +
	                                "<span>在线拍照</span>"+
	                            "</div>"+
							"</div>"+
	                      
					"</div>");
	    $(".right").hide();
	    $("#mainPage").show();
	     $("#diaocmb").click(function(){
	    	 newUser7 (addIntopiece);
	     });
	     $("#yxzlxx").click(function(){
	    	 UserNew(addIntopiece);
	    })
	    $("#mjjgl2").click(function(){
	    	var productInfo={};
			productInfo.productId = addIntopiece.productId;
			productInfo.productName = addIntopiece.productName;
			myjjgl2(productInfo);
	    })

	}








//新建进件
var val;
function newUser7 (addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
                            "<div class='step3'>图库选择</div>"+
                            "<div class='step2'>确认调查照</div>"+
                            "<div class='step2'>调查模板导入</div>"+
                        "</div><div class='line'></div>"+
                       "<div class='bottom-content'>"+
                            "<div class='box jjgl' id = 'jycs' style='margin-left:150px;margin-right:50px;display:inline-block;'>" +
                            "<img src='images/ugc_icon_type_photo.png' id='jycs'/>" +
                                "<span>经营场所</span>"+
                            "</div>"+
                            "<div class='box jjgl' id='jyqs' style='float:none;display:inline-block;margin-right:50px;'>" +
                                "<img src='images/ugc_icon_type_photo.png' />" +
                                "<span>经营权属</span>"+
                            "</div>"+
                            "<div class='box jjgl' id='jydj' style='float:none;display:inline-block;margin-right:50px;'>" +
                            "<img src='images/ugc_icon_type_photo.png'  />" +
                            "<span>经营单据</span>"+
                        "</div>"+
                        "<div class='box jjgl' id='qtsr' style='float:none;display:inline-block;margin-right:50px;'>" +
                        "<img src='images/ugc_icon_type_photo.png' />" +
                        "<span>其他收入</span>"+
                    "</div>"+
                    "</div>"+
               	 "<div class='spinner'>"+
				  "<div class='bounce1'></div>"+
				" <div class='bounce2'></div>"+
				  "<div class='bounce2'></div></div>"+
				  
                    "<div class='bottom-content'>"+
                    "<div class='box jjgl' id = 'sfzm' style='margin-left:150px;margin-right:50px;display:inline-block;'>" +
                    "<img src='images/ugc_icon_type_photo.png' />" +
                        "<span>身份证明</span>"+
                    "</div>"+
                    "<div class='box jjgl' id='grzc' style='float:none;display:inline-block;margin-right:50px;'>" +
                        "<img src='images/ugc_icon_type_photo.png' />" +
                        "<span>个人资产</span>"+
                    "</div>"+
                    "<div class='box jjgl' id='jf' style='float:none;display:inline-block;margin-right:50px;'>" +
                    "<img src='images/ugc_icon_type_photo.png' />" +
                    "<span>家访</span>"+
                "</div>"+
                "<div class='box jjgl' id='db' style='float:none;display:inline-block;margin-right:50px;'>" +
                "<img src='images/ugc_icon_type_photo.png' />" +
                "<span>担保</span>"+
            "</div>"+
						"</div>"+
						  "<div class='bottom-content'><p>"+
						"<input type='button' class='btn btn-large btn-primary' value='下一步' id = 'xyb'/>"+
						 "</div></p>"+
				"</div>");
    $(".right").hide();
    $("#mainPage").show();
    $('.spinner').hide();
    $("#jycs").click(function(){
    	var content=1;
    	var tel;
    	var size;
    	window.plugins.message.send(success,error,tel,content,size);
    	//$('#jycs').bind('click',onSend);
    })
      $("#jyqs").click(function(){
    		var content=2;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(success,error,tel,content,size,url);
    	
    })
      $("#qtsr").click(function(){
    	  var content=6;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(success,error,tel,content,size,url);
    })
      $("#sfzm").click(function(){
    	  var content=7;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(success,error,tel,content,size,url);
    	
    })
      $("#grzc").click(function(){
    	  var content=8;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(success,error,tel,content,size,url);
    })
      $("#jf").click(function(){
    	  var content=9;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(success,error,tel,content,size,url);
    })
      $("#db").click(function(){
    	  var content=10;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(success,error,tel,content,size,url);
    })
    
    
    
    
    
    
	$("#mjjgl2").click(function(){
		newUser6(addIntopiece);
	});
	$("#xyb").click(function(){
		newUser9 (addIntopiece);
	});
	
	$("#jydj").click(function(){
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
		                    "<div class='content'>" +
		                        "<div class='jjstep'>" +
		                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
		                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
		                            "<div class='step3'>调查照</div>"+
		                            "<div class='step3'>经营场所照</div>"+
		                            "<div class='step2'>确认调查照</div>"+
		                            "<div class='step2'>调查模板导入</div>"+
		                        "</div><div class='line'></div>"+
		                    "<div class='bottom-content'>"+
		                    "<div class='box jjgl' id = 'ljjc' style='margin-left:200px;margin-right:100px;display:inline-block;'>" +
		                    "<img src='images/ugc_icon_type_photo.png' />" +
		                        "<span>逻辑检查</span>"+
		                    "</div>"+
		                    "<div class='box jjgl' id='zcfz' style='float:none;display:inline-block;margin-right:100px;'>" +
		                        "<img src='images/ugc_icon_type_photo.png'/>" +
		                        "<span>资产负债</span>"+
		                    "</div>"+
		                    "<div class='box jjgl' id='sy' style='float:none;display:inline-block;margin-right:100px;'>" +
		                    "<img src='images/ugc_icon_type_photo.png'/>" +
		                    "<span>损益</span>"+
		                "</div>"+
								"</div>"+
								  "<div class='bottom-content'><p>"+
								"<input type='button' class='btn btn-large btn-primary' value='返回' id = 'xyb'/>"+
								 "</div></p>"+
								 "<div class='spinner'>"+
								  "<div class='bounce1'></div>"+
								" <div class='bounce2'></div>"+
								  "<div class='bounce2'></div>"+
						"</div>");
		    $(".right").hide();
		    $("#mainPage").show();
		    $('.spinner').hide();
		    $("#ljjc").click(function(){
		    	  var content=3;
		      	var tel;
		      	var size;
		    	var url;
	        	window.plugins.message.send(success,error,tel,content,size,url);
		    })
		      $("#zcfz").click(function(){
		    	  var content=4;
		        	var tel;
		        	var size;
		        	var url;
		        	window.plugins.message.send(success,error,tel,content,size,url);
		    })
		      $("#sy").click(function(){
		    	  var content=5;
		      	var tel;
		      	var size;
		    	var url;
	        	window.plugins.message.send(success,error,tel,content,size,url);
		    })
		    $("#xyb").click(function(){
		    	newUser7 (addIntopiece);
			});
		    $("#mjjgl2").click(function(){
		    	newUser7 (addIntopiece);
		    });
	});
}
var ImageCounts=0;
var obj=[];
var objs=[];
var success=function(data){
	if(data.size==0){
		alert("对不起,您pad该类照片文件夹没有照片!!");
	}else{alert("选择了"+data.size+"张照片进行上传!!");
	phone_type=data.content;
	var aa=data.target;
	aa=aa.replace("[", "");
	aa=aa.replace("]", "");
	obj=aa.split(",");
	var aa1=data.url;
	aa1=aa1.replace("[", "");
	aa1=aa1.replace("]", "");
	objs=aa1.split(",");
	var applicationId=null;
	$('.spinner').show();
	
		for(var ab=0;ab<data.size;ab++){
			 var fileURI ="file://"+objs[ab].trim();
	    	 var fileName =obj[ab].trim();
	    	 var options = new FileUploadOptions();  
	    	    options.fileKey = "file";  
	    	    options.fileName = fileName; 
	    	    options.mimeType = "multipart/form-data";  
	    	    options.chunkedMode = false;  
	    	    ft = new FileTransfer();  
	    	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+b.productId+"&customerId="+b.customerId+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type);  
	    	    ft.upload(fileURI,uploadUrl,uuuSuccesss, uploadFailed, options); 
		}
	    	    
	}
};
var error=function(){
	alert("获取照片失败");
};

function uuuSuccesss() {  
	ImageCounts=ImageCounts+1;
	if(ImageCounts==obj.length){
		$('.spinner').hide();
		alert('上传成功');
		ImageCounts=0;
	}
}


























//新建进件
function UserNew(addIntopiece){
	a=addIntopiece;
	var objs;
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
                            "<div class='step3'>在线拍照</div>"+
                            "<div class='step2'>确认调查照</div>"+
                            "<div class='step2'>调查模板导入</div>"+
                        "</div><div class='line'></div>"+
                       "<div class='bottom-content'>"+
                            "<div class='box jjgl' id = 'diaocmb' style='margin-left:150px;margin-right:50px;display:inline-block;'>" +
                            "<input type='hidden' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/>"+
                            "<img src='images/ugc_icon_type_photo.png' id='jycs' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"1\");'/>" +
                                "<span>经营场所</span>"+
                            "</div>"+
                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                                "<img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"2\");'/>" +
                                "<span>经营权属</span>"+
                            "</div>"+
                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                            "<img src='images/ugc_icon_type_photo.png' id='jydj' />" +
                            "<span>经营单据</span>"+
                        "</div>"+
                        "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                        "<img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"6\");'/>" +
                        "<span>其他收入</span>"+
                    "</div>"+
                    "</div>"+
                    "<div class='bottom-content'>"+
                    "<div class='box jjgl' id = 'diaocmb' style='margin-left:150px;margin-right:50px;display:inline-block;'>" +
                    "<input type='hidden' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/>"+
                    "<img src='images/ugc_icon_type_photo.png' id='jycs' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"7\");'/>" +
                        "<span>身份证明</span>"+
                    "</div>"+
                    "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                        "<img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"8\");'/>" +
                        "<span>个人资产</span>"+
                    "</div>"+
                    "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                    "<img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"9\");'/>" +
                    "<span>家访</span>"+
                "</div>"+
                "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                "<img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"10\");'/>" +
                "<span>担保</span>"+
            "</div>"+
						"</div>"+
						  "<div class='bottom-content'><p>"+
						"<input type='button' class='btn btn-large btn-primary' value='下一步' id = 'xyb'/>"+
						 "</div></p>"+
				"</div>");
    $(".right").hide();
    $("#mainPage").show();
	$("#mjjgl2").click(function(){
		var productInfo={};
		productInfo.productId = addIntopiece.productId;
		productInfo.productName = addIntopiece.productName;
		myjjgl2(productInfo);
		capture();
	});
	$("#xyb").click(function(){
		newUser9 (addIntopiece);
	});
	
	$("#jydj").click(function(){
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
		                    "<div class='content'>" +
		                        "<div class='jjstep'>" +
		                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
		                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
		                            "<div class='step3'>在线拍照</div>"+
		                            "<div class='step3'>经营场所照</div>"+
		                            "<div class='step2'>确认调查照</div>"+
		                            "<div class='step2'>调查模板导入</div>"+
		                        "</div><div class='line'></div>"+
		                    "<div class='bottom-content'>"+
		                    "<div class='box jjgl' id = 'diaocmb' style='margin-left:200px;margin-right:100px;display:inline-block;'>" +
		                    "<input type='hidden' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/>"+
		                    "<img src='images/ugc_icon_type_photo.png' id='jycs' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"3\");'/>" +
		                        "<span>逻辑检查</span>"+
		                    "</div>"+
		                    "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:100px;'>" +
		                        "<img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"4\");'/>" +
		                        "<span>资产负债</span>"+
		                    "</div>"+
		                    "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:100px;'>" +
		                    "<img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"5\");'/>" +
		                    "<span>损益</span>"+
		                "</div>"+
								"</div>"+
								  "<div class='bottom-content'><p>"+
								"<input type='button' class='btn btn-large btn-primary' value='返回' id = 'xyb'/>"+
								 "</div></p>"+
						"</div>");
		    $(".right").hide();
		    $("#mainPage").show();
		    $("#xyb").click(function(){
		    	UserNew(addIntopiece);
			});
		    $("#mjjgl2").click(function(){
		    	UserNew(addIntopiece);
		    });
	});
}


function newUser9 (addIntopiece){
	var objs;
	 var yxzlur1l="/ipad/JnpadImageBrowse/findLocalImageByType1.json";
	$.get(wsHost+yxzlur1l,{customerId:addIntopiece.customerId,productId:addIntopiece.productId},callbackfunction);
	function  callbackfunction (json){
		objs = $.evalJSON(json);
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
                            "<div class='step3'>调查照</div>"+
                            "<div class='step3'>确认调查照</div>"+
                            "<div class='step2'>调查模板导入</div>"+
                        "</div><div class='line'></div>"+
                       "<div class='bottom-content'>"+
                            "<div class='box jjgl' id = 'diaocmb' style='margin-left:150px;margin-right:50px;display:inline-block;'>" +
                            "<img src='images/wenjian.png' id='jycs' />" +
                                "<span>经营场所</span><br/>"+
                                "<span class='tongzhi'>"+objs.size1+"</span>"+
                            "</div>"+
                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                            "<img src='images/wenjian.png' id='jyqs' />" +
                            "<span>经营权属</span>"+
                            "<span class='tongzhi'>"+objs.size2+"</span>"+
                            "</div>"+
                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                            "<img src='images/wenjian.png' id='jydj' />" +
                            "<span>经营单据</span>"+
                            "<span class='tongzhi'>"+(objs.size3+objs.size4+objs.size5)+"</span>"+
                        "</div>"+
                        "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                        "<img src='images/wenjian.png' id='qtsr' />" +
                        "<span>其他收入</span>"+
                        "<span class='tongzhi'>"+objs.size6+"</span>"+
                    "</div>"+
                    "</div>"+
                    "<div class='bottom-content'>"+
                    "<div class='box jjgl' id = 'diaocmb' style='margin-left:150px;margin-right:50px;display:inline-block;'>" +
                    "<img src='images/wenjian.png' id='sfzm' />" +
                        "<span>身份证明</span>"+
                        "<span class='tongzhi'>"+objs.size7+"</span>"+
                    "</div>"+
                    "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                    "<img src='images/wenjian.png' id='grzc' />" +
                        "<span>个人资产</span>"+
                        "<span class='tongzhi'>"+objs.size8+"</span>"+
                    "</div>"+
                    "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                    "<img src='images/wenjian.png' id='jf' />" +
                    "<span>家访</span>"+
                    "<span class='tongzhi'>"+objs.size9+"</span>"+
                "</div>"+
                "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:50px;'>" +
                "<img src='images/wenjian.png' id='db' />" +
                "<span>担保</span>"+
                "<span class='tongzhi'>"+objs.size10+"</span>"+
            "</div>"+
						"</div>"+
						  "<div class='bottom-content'><p>"+
						"<input type='button' class='btn btn-large btn-primary' value='下一步' id = 'xyb'/>"+
						 "</div></p>"+
				"</div>");
    $(".right").hide();
    $("#mainPage").show();
	$("#xyb").click(function(){
		dcmbadd(addIntopiece);
	});
	
	$("#mjjgl2").click(function(){
		newUser6 (addIntopiece);
	});
	$("#jycs").click(function(){
		var phone_type=1;
		deleteIma(addIntopiece,phone_type);
	});$("#jyqs").click(function(){
		var phone_type=2;
		deleteIma(addIntopiece,phone_type);
	});$("#qtsr").click(function(){
		var phone_type=6;
		deleteIma(addIntopiece,phone_type);
	});$("#sfzm").click(function(){
		var phone_type=7;
		deleteIma(addIntopiece,phone_type);
	});$("grzc").click(function(){
		var phone_type=8;
		deleteIma(addIntopiece,phone_type);
	});$("#jf").click(function(){
		var phone_type=9;
		deleteIma(addIntopiece,phone_type);
	});$("#db").click(function(){
		var phone_type=10;
		deleteIma(addIntopiece,phone_type);
	});
	
$("#jydj").click(function(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='mjjgl2'>经营权属</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
	                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
	                            "<div class='step3'>调查照</div>"+
	                            "<div class='step3'>确认调查照</div>"+
	                            "<div class='step3'>经营权属</div>"+
	                            "<div class='step2'>调查模板导入</div>"+
	                        "</div><div class='line'></div>"+
	                       "<div class='bottom-content'>"+
	                            "<div class='box jjgl' id = 'diaocmb' style='margin-left:200px;margin-right:100px;display:inline-block;'>" +
	                            "<img src='images/wenjian.png' id='ljjc' />" +
	                                "<span>逻辑检查</span><br/>"+
	                                "<span class='tongzhi'>"+objs.size3+"</span>"+
	                            "</div>"+
	                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:100px;'>" +
	                            "<img src='images/wenjian.png' id='zcfz' />" +
	                            "<span>资产负债</span>"+
	                            "<span class='tongzhi'>"+objs.size4+"</span>"+
	                            "</div>"+
	                        "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;margin-right:100px;'>" +
	                        "<img src='images/wenjian.png' id='sy' />" +
	                        "<span>损益</span>"+
	                        "<span class='tongzhi'>"+objs.size5+"</span>"+
	                    "</div>"+
	                    "</div>"+
							  "<div class='bottom-content'><p>"+
							"<input type='button' class='btn btn-large btn-primary' value='返回' id = 'xyb'/>"+
							 "</div></p>"+
					"</div>");
	    $(".right").hide();
	    $("#mainPage").show();
	    $("#xyb").click(function(){
	    	newUser9 (addIntopiece);
		});
		$("#ljjc").click(function(){
			var phone_type=3;
			deleteIma(addIntopiece,phone_type);
		});$("#zcfz").click(function(){
			var phone_type=4;
			deleteIma(addIntopiece,phone_type);
		});$("#sy").click(function(){
			var phone_type=5;
			deleteIma(addIntopiece,phone_type);
		});
	});
}}
var phoneTYPE;
function aa(phoneIma,phone_type){
	phoneTYPE=phone_type;
	var applicationId = null;
	 var fileURI = document.getElementsByName("imageuri")[0].getAttribute("uri");
	 var fileName = phoneIma;
	 var options = new FileUploadOptions();  
	    options.fileKey = "file";  
	    options.fileName = fileName; 
	    options.mimeType = "multipart/form-data";  
	    options.chunkedMode = false;  
	    ft = new FileTransfer();  
	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+a.productId+"&customerId="+a.customerId+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type);  
	    ft.upload(fileURI,uploadUrl,uploadSuccess1, uploadFailed, options); 
}

function deleteIma(addIntopiece,phone_type){
	var yxzlurl="/ipad/JnpadImageBrowse/findLocalImageByType.json";
	var obj;
	var id;
	var page = 0;
	var lltpurl;
	$.get(wsHost+yxzlurl,{customerId:addIntopiece.customerId,productId:addIntopiece.productId,phone_type:phone_type},callbackfunction);
		function  callbackfunction (json){
			obj = $.evalJSON(json);
			if(obj.size==0){
				alert('暂无照片!!');
				newUser1(addIntopiece);
			}else{
				id=obj.imagerList[0].id;
				lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
				
				
				$("#mainPage").html("<div class='title'><img src='images/back.png' id='backk'/>查看/更改照片</div>"+
						"<div class='content'>" +
						"<div class='tabplace' id='imageBrowse' style='text-align:center;margin:0 auto;'>图片加载中..." +
						"</div>"+
						"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
								"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
								"<input type='button' class='btn btn-large btn-primary' value='删除' id = 'delete'/>"+
								//"<input type='button' class='btn btn-large btn-primary' value='查看原图' id = 'ckyt'/>"+
								//"<input type='button' class='btn btn-large' value='返回' ondblclick='"+res.currentLoc+" /></p>"+
				"</div>");
				$(".right").hide();
				$("#mainPage").show();
				$("#imageBrowse").html(
						"<img id ='images' width='500px' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
				);
				$("#backk").click(function(){
					newUser9 (addIntopiece);
				})
					$("#delete").click(function(){
						var deletetpurl ="/ipad/JnpadImageBrowse/deleteImage.json";
						  $.ajax({
								url:wsHost+deletetpurl,
								type: "GET",
								dataType:'json',
								data:{
									imageId:id,
								},
								cache:false,
								success: function (json){
									var obj = $.evalJSON(json);
									alert(obj.mess);
									deleteIma(addIntopiece,phone_type);
								}
						  })  
					})
				$("#ckyt").click(function(){
					var values=$("#ckyt").val();
					var xx="查看原图";
					var xxx="查看小图";
					if(values==xx){
						
					$("#imageBrowse").html(
							"<img id ='images' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
					);
					$("#ckyt").val("查看小图");
					}else if(values==xxx){
						$("#imageBrowse").html(
								"<img id ='images' width='500px' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
						);
						$("#ckyt").val("查看原图");
					}
				})
				
				$("#syy").click(function(){
					
					page=page-1; 
					if(page>=0){
						id=obj.imagerList[page].id
						lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
						$("#imageBrowse").html(
								"<img id ='images' style='text-align:center' width='500px' src='"+wsHost+lltpurl+"' alt=''/>"
						);
					}else{
						alert("当前已经是第一页");
						page = page+1;
					}
				})
				
				$("#xyy").click(function(){
					
					page=page+1; 
					if(page<obj.size){
						id=obj.imagerList[page].id
						lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
						$("#imageBrowse").html(
								"<img id ='images' width='500px' height='500px'  src='"+wsHost+lltpurl+"' alt=''/>"
						);
					}else{
						alert("当前已经是最后一页");
						page = page-1;
					}
				});
			}
		
	
		}
}

function sureIma(addIntopiece){
	var objs;
	 var phone_type=2;
	 var yxzlur1l="/ipad/JnpadImageBrowse/findLocalImageByType.json";
	$.get(wsHost+yxzlur1l,{customerId:addIntopiece.customerId,productId:addIntopiece.productId,phone_type:phone_type},callbackfunction);
	function  callbackfunction (json){
		objs = $.evalJSON(json);
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
	                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
	                            "<div class='step3' id='khzj'>客户证件照</div>"+
	                            "<div class='step3'>场景照片</div>"+
	                            "<div class='step2'>其他照片</div>"+
	                            "<div class='step2'>调查模板导入</div>"+
	                        "</div><div class='line'></div>"+
	                      /*  "<div class='bottom-content'>"+
	                            "<div class='box jjgl' id = 'diaocmb' style='margin-left:400px;margin-right:50px;display:inline-block;'>" +
	                                "<img src='images/xxzl.png'/>" +
	                                "<span>客户信息调查模板</span>"+
	                            "</div>"+
	                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;'>" +
	                                "<img src='images/yxzl.png' />" +
	                                "<span>客户影像资料采集</span>"+
	                            "</div>"+
							"</div>"+*/
	                        "<div class='bottom-content'>"+
							"<table id='qtyxzl' class='cpTable' style='text-align:center;margin-top:20px;'>"+
								"<tr>"+    
									"<th style='width:40px;'>序号</th>"+ 
									"<th>文件路径</th>"+
									"<th>操作</th>"+
								"</tr>"+
								"<tr>"+  
								"<td>1</td>"+
								"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");' value='选择文件'/></td>"+
//								"<td><img src='images/ugc_icon_type_photo.png' id ='takepucture'/></td>"+
								"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");'/></td>"+
							"</tr>"+
						
						
							"</table>"+
							"<p class='Left'>" +
							"<button class='add-button' onclick='addTd(\"qtyxzl\")'><img src='images/add.png'/></button>" +
							"<button class='add-button' onclick='removeTd(\"qtyxzl\")'><img src='images/del.png'/></button>" +
							"</p>"+
							"<p>" +
							"<input type='button' class='btn btn-primary btn-large' value='下一步' id='next' />" +
							"<input type='button' class='btn btn-primary btn-large' value='上传客户证件照' id='sure' />" +
							"<input type='button' class='btn btn-primary btn-large' value='已上传客户证件照' id='cksc' /></br><span class='tongzhi'>"+objs.size+"</br></span>" +
							"</p>"+
						"</div>"+
					"</div>");
	    $(".right").hide();
	    $("#mainPage").show();
	    $("#next").click(function(){
	    	//$("#next").attr("disabled",true);
	    	if(objs.size>0){
	    		newUser3(addIntopiece);
	    	}else{
	    		alert('请上传场景照片!!');
	    	}
	    });
	     $("#cksc").click(function(){
    	deleteIma(addIntopiece,phone_type);
	     });
	     $("#khzj").click(function(){
	    	 newUser1(addIntopiece);
	    })
	    $("#sure").click(function(){
	    	alert($('#qtyxzl_sheet1').val());
	  	  var applicationId = null;
	  	  var num= $('#qtyxzl tr').length;
	  	  for(var i=0;i<num;i++){
	  	 var fileURI = document.getElementsByName("imageuri")[i].getAttribute("uri");
	  	 var j=i+1;
	  	 var fileName = $("#qtyxzl_sheet"+j).val();
	  	 var phone_type=2;
	  	 var options = new FileUploadOptions();  
	  	    options.fileKey = "file";  
	  	    options.fileName = fileName; 
	  	    options.mimeType = "multipart/form-data";  
	  	    options.chunkedMode = false;  
	  	    ft = new FileTransfer();  
	  	  var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+addIntopiece.productId+"&customerId="+addIntopiece.customerId+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type); 
	  	  ft.upload(fileURI,uploadUrl,uploadSuccess2, uploadFailed, options); 
	  	  }
	    })
	    $("#khxxlb").click(function(){
	    	
	    	myjjgl2(addIntopiece);
	    })
	    $("#mjjgl2").click(function(){
	    	
	    	newUser1(addIntopiece);
	    })

	}}

var allzi;
//调查模板 
function dcmbadd(addIntopiece){
	allzi=addIntopiece;
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='newUsers1'><img src='images/back.png'/>调查模板采集</div>"+  
			"<div class='content' style='text-align:center;'>" +  
			"<div class='jjstep'>" +
			   "<div class='step1' >"+addIntopiece.productName+"</div>"+
               "<div class='step3' >"+addIntopiece.chineseName+"</div>"+
               "<div class='step3'>调查照</div>"+
               "<div class='step3'>确认调查照</div>"+
               "<div class='step3'>调查模板导入</div>"+
			"<input type='button' class='btn btn-large btn-primary next' value='确定' id='sure'/>" +
			"</div><div class='line'></div>"+
			"<div class='bottom-content'>"+
			"<table id='fcz' class='cpTable' style='text-align:center;margin-top:20px;'>"+
			"<tr>"+                             
			"<th>文件路径</th>"+
//			"<th>操作</th>"+
			"</tr>"+
			"<tr>"+    
			"<td><input type='text' id='fcz_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' id='select' value='选择文件'/></td>"+
			"</tr>"+
			"</table>"+
			"</div>"+
			"<div class='upload_process_bar'>"+  
			"<div class='upload_current_process'></div>"+ 
			"<div id='process_info'></div>"+ 
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	 $("#cjz").click(function(){
	    	newUser2(addIntopiece);
	    })
	     $("#khzj").click(function(){
	    	 newUser1(addIntopiece);
	    })
	    $("#qtz").click(function(){
	    	 newUser3(addIntopiece);
	    })
	document.addEventListener("deviceready", function(){  
	    $(function(){  
	         $('#upload_file_link').click(openFileSelector);  
	    });  
	}, false); 
	  $("#sure").click(function(){
		  $("#sure").attr('disabled',"true");
			 var fileURI = document.getElementsByName("imageuri")[0].getAttribute("uri");
			 var fileName = $("#fcz_sheet1").val();
			 var options = new FileUploadOptions();  
			    options.fileKey = "file";  
			    options.fileName=fileURI.substr(fileURI.lastIndexOf('/') + 1); 
			    options.mimeType = "multipart/form-data";  
			    options.chunkedMode = false;  
			    ft = new FileTransfer();  
			    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/reportImport.json?productId="+addIntopiece.productId+"&customerId="+addIntopiece.customerId+"&fileName="+options.fileName);  
			    ft.upload(fileURI,uploadUrl,uploadSuccess, uploadFailed, options); 
			  
			    //获取上传进度  
			    ft.onprogress = uploadProcessing;  
			    //显示进度条  
			    $('.upload_process_bar,#process_info').show(); 
		  })
		  
		  
		  $("#select").click(function(){
			  
			  openFileSelector("fcz_sheet1","imageuri");
		  })
		  	$("#khxxlb").click(function(){
		    	
		    	myjjgl2(addIntopiece);
		    })
		    $("#xxzlcj").click(function(){
		    	
		    	newUser1(addIntopiece);
		    })
		    $("#newUsers1").click(function(){
		    	newUser9(addIntopiece);
		    })
	
}
//影像资料
function yxzladd(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='newUsers1'><img src='images/back.png'/>影像资料采集</div>"+  
                    "<div class='content' style='text-align:center;'>" +  
                        "<div class='jjstep'>" +
                        "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                        "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
                        "<div class='step3' id='newUser1'>客户影像资料采集</div>"+
                        "<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='确定' id='sure'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='qtyxzl' class='cpTable' style='text-align:center;margin-top:20px;'>"+
								"<tr>"+    
									"<th style='width:40px;'>序号</th>"+ 
									"<th>文件路径</th>"+
									"<th>操作</th>"+
								"</tr>"+
								"<tr>"+  
								"<td>1</td>"+
								"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");' value='选择文件'/></td>"+
//								"<td><img src='images/ugc_icon_type_photo.png' id ='takepucture'/></td>"+
								"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");'/></td>"+
							"</tr>"+
							"</table>"+
							"<p class='Left'>" +
							"<button class='add-button' onclick='addTd(\"qtyxzl\")'><img src='images/add.png'/></button>" +
							"<button class='add-button' onclick='removeTd(\"qtyxzl\")'><img src='images/del.png'/></button>" +
							"</p>"+
							"<p>" +
							"<input type='button' class='btn btn-primary btn-large' value='查看已上传列表' id='ysctplb' />" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
  
  $("#sure").click(function(){
	  var applicationId = null;
	  var num= $('#qtyxzl tr').length;
	  for(var i=0;i<num;i++){
	 var fileURI = document.getElementsByName("imageuri")[i].getAttribute("uri");
	 var j=i+1;
	 var fileName = $("#qtyxzl_sheet"+j).val();
	 var options = new FileUploadOptions();  
	    options.fileKey = "file";  
	    options.fileName = fileName; 
	    options.mimeType = "multipart/form-data";  
	    options.chunkedMode = false;  
	    ft = new FileTransfer();  
	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+addIntopiece.productId+"&customerId="+addIntopiece.customerId+"&fileName="+options.fileName+"&applicationId="+applicationId);  
	    ft.upload(fileURI,uploadUrl,uploadSuccess, uploadFailed, options); 
	  }
//	    //获取上传进度  
//	    ft.onprogress = uploadProcessing;  
//	    //显示进度条  
////	    $('.upload_process_bar,#process_info').show(); 
  })
  
  	  $("#ysctplb").click(function(){
  		ckimage(addIntopiece);
	  })
  
  	$("#khxxlb").click(function(){
    	
    	myjjgl2(addIntopiece);
    })
    $("#newUser1").click(function(){
    	
    	newUser1(addIntopiece);
    })
    $("#newUsers1").click(function(){
    	
    	newUser1(addIntopiece);
    })
    $("#xxzlcj").click(function(){
    	
    	newUser1(addIntopiece);
    })
    $("#takepucture").click(function(){
    	
    	capturePhoto();
    })

}

//查看已上传图片列表
function ckimage(res){
	var ysctpurl ="/ipad/JnpadImageBrowse/uploadYx.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head="<tr>"+                         
	"<th></th>"+                 
	"<th>文件名</th>"+  
	"<th>产品名称</th>"+
	"<th>客户名称</th>"+
	"<th>上传时间</th>"+
	"</tr>";
	$.get(wsHost+ysctpurl,{customerId:res.customerId,productId:res.productId,applicationId:res.appId},callbackfunction);
	function  callbackfunction (json){
		obj = $.evalJSON(json);
		for(var i = 0;i<obj.imagerList.length;i++){
			
			tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.imagerList[i].id+"@"+
			obj.imagerList[i].applicationId+"'/>"+"</span></td>"+  
			"<td>"+obj.imagerList[i].attachment+"</td>"+
			"<td>"+obj.imagerList[i].productName+"</td>"+
			"<td>"+obj.imagerList[i].customerName+"</td>"+
			"<td>"+obj.imagerList[i].createdTime+"</td></tr>"

			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
		}

		result[j]=tmp;

		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' id='backs'/>已上传图片列表</div>"+  
				"<div class='content'>" +                        
				"<table id='bzsplb' class='cpTable jjTable' style='text-align:center;'>"+
				head+result[page]+
				"</table>"+
				"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-primary btn-large' value='删除' id='delete' />" +
				"<input type='button' class='btn btn-large' value='返回' id='backk'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();  
		$("#xyy").click(function(){
			page=page+1;
			if(result[page]){
				$("#bzsplb").html(head+result[page]);
			}else{
				alert("当前已经是最后一页");
				page=page-1;
			}
		})
		$("#syy").click(function(){
			page=page-1; 
			if(result[page]){
				$("#bzsplb").html(head+result[page]);
			}else{
				alert("当前已经是第一页");
				page = page+1;
			}
		})
		
		$("#backk").click(function(){
			yxzladd(res);
		})
		$("#backs").click(function(){
			yxzladd(res);
		})
		  $("#delete").click(function(){
			  if ($("input[type='radio']").is(':checked')) {

					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var deletetpurl ="/ipad/JnpadImageBrowse/deleteImage.json";
					  $.ajax({
							url:wsHost+deletetpurl,
							type: "GET",
							dataType:'json',
							data:{
								imageId:values[0],
							},
							cache:false,
							success: function (json){
								var obj = $.evalJSON(json);
								alert(obj.mess);
								ckimage(res);
							}
					  })  
					
				}else{
					alert("请选择一行");
				}
			  
	  })
	}
}

function openFileSelector(id,name) {  
    var source = navigator.camera.PictureSourceType.PHOTOLIBRARY;  
    //描述类型，取文件路径  
//    var destinationType = navigator.camera.DestinationType.FILE_URI; 
   destinationType = Camera.DestinationType.FILE_URI; 
    //媒体类型，设置为ALLMEDIA即支持任意文件选择  
    var mediaType = navigator.camera.MediaType.ALLMEDIA;  
    var options={  
        quality : 50,  
        destinationType : destinationType,  
        sourceType : source,  
        mediaType : mediaType     
    };  
    navigator.camera.getPicture(getsuccess,uploadBroken,options);  
 


function getsuccess(URI){
	
	
	window.resolveLocalFileSystemURI(URI, gotFileEntry, onFileFail);
	    //转换URI到全路径
		function gotFileEntry(fileEntry) {
			var fpath = fileEntry.fullPath;
			
//			window.plugins.imagePluginAPI.startActivity(testSuccess,testError, fpath);
//			function testSuccess(res){
				var url = document.getElementById(id);
				url.value = fpath;
				URI="file://"+fpath;
				var lll= document.getElementsByName("imageuri")[0].setAttribute("uri",URI);
				alert('456');
//			}
			function testError(){
				alert("error");
			}
		}
		//文件操作失败
		function onFileFail(error) { 
			toLog("error code: "+ error.code);
		};
	
	}
};
/** 
 * 上传过程回调，用于处理上传进度，如显示进度条等。 
 */  
function uploadProcessing(progressEvent){
//	    $("#text").html("<div class='display-div' id='xdyss'>"+
//	                        "<div class='dialog-head'>"+
//	                           "<h4>提示</h4>"+
//	                        "</div>"+
//	                        "<div class='upload_current_process'></div>"+ 
//	                        "<div class='dialog-content' id='process_info'>"+
//	                        "</div>"+
//	                        "<div class='dialog-bottom'>"+
//	                           "<button type='button' class='btn btn-default' onclick='hide_upload()'>取消</button>"+
//	                           "<button type='button' class='btn btn-danger' onclick='dc();hide_dcts()'>确定</button>"+
//	                        "</div>"+
//	                    "</div><!-- /display-div -->");
//	    $("#text").animate({top:"0px"},"500");
    if (progressEvent.lengthComputable) {  
        //已经上传  
        var loaded=progressEvent.loaded;  
        //文件总长度  
        var total=progressEvent.total;  
        //计算百分比，用于显示进度条  
        var percent=parseInt((loaded/total)*100);  
        //换算成MB  
        alert(total);
        alert(percent);
        loaded=(loaded/1024/1024).toFixed(2);  
        total=(total/1024/1024).toFixed(2);  
        $('#process_info').html(loaded+'M/'+total+'M');  
        $('.upload_current_process').css({'width':percent+'%'});  
    }  
}; 

/** 
 * 上传成功回调. 
 * @param r 
 */ 
function uploadSuccess(r) { 
	var objjs;
	var obj = $.evalJSON(r.response);
	if(obj.success==false){
	if(obj.message=="001"){
		alert("调查模板不一致！导入失败！");
		 $("#sure").attr('disabled',false);
	}else{
		alert("导入失败！");
    $("#sure").attr('disabled',false);
	}
	}else{
		alert("导入成功！");
		var url="/ipad/selectAllCustomerApprais.json?cardid="+cardId;
		$.ajax({
			url:wsHost + url,
			type: "GET",
			dataType:'json',
			async: false,
			success: function (json) {
				objjs = $.evalJSON(json);
				if(objjs.result!=null){
					tosqjj(allzi);
				}else{
					pglr(allzi);
				}
			}})
	}
    clearProcess();  
} 
/** 
 * 客户证件上传成功回调. 
 * @param r 
 */ 
function uploadSuccess1(r) { 
	var obj = $.evalJSON(r.response);
	if(obj.success==false){
	if(obj.message=="001"){
		alert("调查模板不一致！导入失败！");
		 $("#sure").attr('disabled',false);
	}else{
		alert("导入失败！");
    $("#sure").attr('disabled',false);
	}
	}else{
		alert("oooooyeah！");
		if(phoneTYPE==1){
			capture("qtyxzl_sheet1","img","imageuri","1","1");
		}else if(phoneTYPE==2){
			capture("qtyxzl_sheet1","img","imageuri","1","2");
		}else if(phoneTYPE==3){
			capture("qtyxzl_sheet1","img","imageuri","1","3");
		}else if(phoneTYPE==4){
			capture("qtyxzl_sheet1","img","imageuri","1","4");
		}else if(phoneTYPE==5){
			capture("qtyxzl_sheet1","img","imageuri","1","5");
		}else if(phoneTYPE==6){
			capture("qtyxzl_sheet1","img","imageuri","1","6");
		}else if(phoneTYPE==7){
			capture("qtyxzl_sheet1","img","imageuri","1","7");
		}else if(phoneTYPE==8){
			capture("qtyxzl_sheet1","img","imageuri","1","8");
		}else if(phoneTYPE==9){
			capture("qtyxzl_sheet1","img","imageuri","1","9");
		}else if(phoneTYPE==10){
			capture("qtyxzl_sheet1","img","imageuri","1","10");
		}
	  	
	}
    clearProcess();  
}  
/** 
 * 客户证件上传成功回调. 
 * @param r 
 */ 
function uploadSuccess2(r) { 
	var obj = $.evalJSON(r.response);
	if(obj.success==false){
	if(obj.message=="001"){
		alert("调查模板不一致！导入失败！");
		 $("#sure").attr('disabled',false);
	}else{
		alert("导入失败！");
    $("#sure").attr('disabled',false);
	}
	}else{
		alert("导入成功！");
	  	newUser2(a);
	  	
	}
    clearProcess();  
}  
/** 
 * 客户证件上传成功回调. 
 * @param r 
 */ 
function uploadSuccess3(r) { 
	var obj = $.evalJSON(r.response);
	if(obj.success==false){
	if(obj.message=="001"){
		alert("调查模板不一致！导入失败！");
		 $("#sure").attr('disabled',false);
	}else{
		alert("导入失败！");
    $("#sure").attr('disabled',false);
	}
	}else{
		alert("导入成功！");
	  	newUser3(a);
	  	
	}
    clearProcess();  
}  

/** 
 * 上传失败回调. 
 * @param error 
 */  
function uploadFailed(error) {  
    alert('文件上传失败');  
    $("#sure").attr('disabled',false);
    clearProcess();  
    
} 

/** 
 * 上传意外终止处理。 
 * @param message 
 */  
function uploadBroken(message){  
    alert(message);  
    clearProcess();  
};  
  
var ft;  

/** 
 * 清除上传进度，处理上传失败，上传中断，上传成功 
 */  
function clearProcess() {  
    $('.upload_process_bar,#process_info').hide();  
    ft.abort();  
};

function hide_upload(){//隐藏登出提示
	   // $(".display-div").animate({marginTop:"-250px"},"500");
	    $("#text").animate({top:"-800px"},"500");
	} 




//额度评估工具
function pglr(allzi){
	
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' id='back'/>进件管理--进件申请--额度评估</div>"+  
        "<div class='content'>"+
       /* "<div class='jjstep'>" +
            "<div class='step1' >"+allobj.chineseName+"</div>"+
            "<div class='step3' >"+allobj.productName+"</div>"+
            "<div class='step3' >调查模板</div>"+
            "<div class='step3' >影像资料</div>"+
            "<div class='step3'>信息录入</div>"+
            "<div class='step3'>评估录入</div>"+*/
			                    
			                        "<table class='cpTable'>"+  
										"<tr>"+                     
			                                "<th colspan='2'>"+
												//"客户：<input type='text'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
												//"证件号码：<input type='text'/>"+
			                                "客户:"+allobj.chineseName+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
			                                "证件号码:"+allobj.cardId+
											"</th>"+ 
			                            "</tr>"+
			                            "<tr>"+                             
			                            "<th style='width:180px;'>住房情况</th>"+         
			                            "<td id='zfqk'>" +
			                                "<label onclick='checkBox(this,\"radio1\")' class='checkbox' ><input type='radio' name='radio1'   value='A11'/>自置房屋(无贷款)</label>" +
			                                "<label onclick='checkBox(this,\"radio1\")' class='checkbox'><input type='radio' name='radio1'  value='B7'/>自置房屋(有贷款)</label>" +
			                                "<label onclick='checkBox(this,\"radio1\")' class='checkbox' ><input type='radio' name='radio1'  value='C5'/>与父母同住</label>" +
			                                "<label onclick='checkBox(this,\"radio1\")' class='checkbox' ><input type='radio' name='radio1'  value='D4'/>租房</label>" +
			                                "<label onclick='checkBox(this,\"radio1\")' class='checkbox' ><input type='radio' name='radio1'   value='E0'/>无房</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>金融资产情况（我行）</th>"+         
			                            "<td id='zcqk'>" +
			                                "<label onclick='checkBox(this,\"radio2\")' class='checkbox' ><input type='radio' name='radio2'  value='A7'/>20万以上</label>" +
			                                "<label onclick='checkBox(this,\"radio2\")' class='checkbox' ><input type='radio' name='radio2'  value='B4'/>20万以下</label>" +
			                                "<label onclick='checkBox(this,\"radio2\")' class='checkbox' ><input type='radio' name='radio2'  value='C0'/>无</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
									    "</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>大件消费品拥有情况</th>"+         
			                            "<td id='yyqk'>" +
			                                "<label onclick='checkBox(this,\"radio3\")' class='checkbox'><input type='radio' name='radio3' value='A5'/>完全产权车</label>" +
			                                "<label onclick='checkBox(this,\"radio3\")' class='checkbox'><input type='radio' name='radio3' value='B2'/>贷款购车</label>" +
			                                "<label onclick='checkBox(this,\"radio3\")' class='checkbox'><input type='radio' name='radio3' value='C0'/>无</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>单位性质</th>"+         
			                            "<td id='dwxz'>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='A16'/>机关/事业单位</label>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='B14'/>国有</label>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='C13'/>独资</label>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='D10'/>合资</label>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='E6'/>股份制</label>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='F8'/>私营</label>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='G4'/>其他</label>" +
			                                "<label onclick='checkBox(this,\"radio4\")' class='checkbox'><input type='radio' name='radio4' value='H0'/>失业无社会救济</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+ 
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>现工作单位工龄</th>"+         
			                            "<td id='dwgl'>" +
			                                "<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='A3'/>10年以上</label>" +
			                                "<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='B2'/>5-10年</label>" +
			                                "<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='C1'/>1-5年</label>" +
			                                "<label onclick='checkBox(this,\"radio5\")' class='checkbox'><input type='radio' name='radio5' value='D0'/>一年以下</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>在现址居住时间</th>"+         
			                            "<td id='jzsj'>" +
			                                "<label onclick='checkBox(this,\"radio6\")' class='checkbox'><input type='radio' name='radio6' value='A7'/>6年以上</label>" +
			                                "<label onclick='checkBox(this,\"radio6\")' class='checkbox'><input type='radio' name='radio6' value='B5'/>2-6年</label>" +
			                                "<label onclick='checkBox(this,\"radio6\")' class='checkbox'><input type='radio' name='radio6' value='C2'/>2年以下</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+ 
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>婚姻状况</th>"+         
			                            "<td id='hyzk'>" +
			                                "<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='A8'/>已婚有子女</label>" +
			                                "<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='B5'/>已婚无子女</label>" +
			                                "<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='C3'/>未婚</label>" +
			                                "<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='D4'/>离婚</label>" +
			                                "<label onclick='checkBox(this,\"radio7\")' class='checkbox'><input type='radio' name='radio7' value='E5'/>再婚</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>户籍情况</th>"+         
			                            "<td id='hjzk'>" +
			                                "<label onclick='checkBox(this,\"radio8\")' class='checkbox'><input type='radio' name='radio8' value='A5'/>本地户口</label>" +
			                                "<label onclick='checkBox(this,\"radio8\")' class='checkbox'><input type='radio' name='radio8' value='B4'/>本地农户</label>" +
			                                "<label onclick='checkBox(this,\"radio8\")' class='checkbox'><input type='radio' name='radio8' value='C2'/>外地户口</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+ 
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>教育程度</th>"+         
			                            "<td id='jycd'>" +
			                                "<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='A5'/>硕士及以上</label>" +
			                                "<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='B4'/>本科</label>" +
			                                "<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='C3'/>大专</label>" +
			                                "<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='D1'/>高中及中专</label>" +
			                                "<label onclick='checkBox(this,\"radio9\")' class='checkbox'><input type='radio' name='radio9' value='E0'/>初中及以下</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+ 
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>职业资格证书拥有情况</th>"+         
			                            "<td id='zgzs'>" +
			                                "<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='A5'/>高级</label>" +
			                                "<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='B4'/>中级</label>" +
			                                "<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='C3'/>初级</label>" +
			                                "<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='D1'/>其他</label>" +
			                                "<label onclick='checkBox(this,\"radio10\")' class='checkbox'><input type='radio' name='radio10' value='E0'/>无</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>职称</th>"+         
			                            "<td id='zc'>" +
			                                "<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='A5'/>高级</label>" +
			                                "<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='B4'/>中级</label>" +
			                                "<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='C3'/>初级</label>" +
			                                "<label onclick='checkBox(this,\"radio11\")' class='checkbox'><input type='radio' name='radio11' value='D1'/>其他</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>年龄</th>"+         
			                            "<td id='age'>" +
			                                "<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='A3'/>18-30岁</label>" +
			                                "<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='B5'/>30-45岁</label>" +
			                                "<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='C4'/>45-55岁</label>" +
			                                "<label onclick='checkBox(this,\"radio12\")' class='checkbox'><input type='radio' name='radio12' value='D2'/>55岁以上</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>健康情况</th>"+         
			                            "<td id='jkqk'>" +
			                                "<label onclick='checkBox(this,\"radio13\")' class='checkbox'><input type='radio' name='radio13' value='A10'/>良好</label>" +
			                                "<label onclick='checkBox(this,\"radio13\")' class='checkbox'><input type='radio' name='radio13' value='B5'/>一般</label>" +
			                                "<label onclick='checkBox(this,\"radio13\")' class='checkbox'><input type='radio' name='radio13' value='C0'/>差</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+  
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>公共记录</th>"+         
			                            "<td id='ggjl'>" +
			                                "<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='A20'/>无</label>" +
			                                "<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='B-5'/>拖欠记录</label>" +
			                                "<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='C-7'/>不良诉讼记录</label>" +
			                                "<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='D-20'/>治安处罚记录</label>" +
			                                "<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='E-40'/>犯罪记录</label>" +
			                                "<label onclick='checkBox(this,\"radio14\")' class='checkbox'><input type='radio' name='radio14' value='F0'/>未确认</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>职务</th>"+         
			                            "<td id='zw'>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='A10'/>厅局级及以上(公务员)</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='B7'/>处级(公务员)</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='C5'/>科级(公务员)</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='D3'/>一般干部(公务员)</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='E5'/>企业负责人</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='F3'/>中高层管理人员</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='G1'/>一般管理人员</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='H4'/>私营业主</label>" +
			                                "<label onclick='checkBox(this,\"radio15\")' class='checkbox'><input type='radio' name='radio15' value='I0'/>一般员工</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>个人月收入（税前）</th>"+         
			                            "<td id='grsr'>" +
			                                "<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='A26'/>1万元以上</label>" +
			                                "<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='B22'/>0.8-1万元</label>" +
			                                "<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='C18'/>0.5-0.8万元</label>" +
			                                "<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='D12'/>0.3-0.5万元</label>" +
			                                "<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='E7'/>0.1-0.3万元</label>" +
			                                "<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='F5'/>0.1万元以下</label>" +
			                                "<label onclick='checkBox(this,\"radio16\")' class='checkbox'><input type='radio' name='radio16' value='G0'/>无</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>债务收入比</th>"+         
			                            "<td id='zwsrb'>" +
			                                "<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='A17'/>0</label>" +
			                                "<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='B13'/>0-15%</label>" +
			                                "<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='C10'/>15-25%</label>" +
			                                "<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='D7'/>26-35%</label>" +
			                                "<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='E2'/>36-49%</label>" +
			                                "<label onclick='checkBox(this,\"radio17\")' class='checkbox'><input type='radio' name='radio17' value='F0'/>>50%</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>赡养人口</th>"+         
			                            "<td id='syrk'>" +
			                                "<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='A5'/>无</label>" +
			                                "<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='B4'/>1人</label>" +
			                                "<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='C3'/>2人</label>" +
			                                "<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='D2'/>3人</label>" +
			                                "<label onclick='checkBox(this,\"radio18\")' class='checkbox'><input type='radio' name='radio18' value='E0'/>3人以上</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+ 
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>推荐人</th>"+         
			                            "<td id='tjr'>" +
			                                "<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='A3'/>本公司员工推荐</label>" +
			                                "<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='B2'/>其他中介推荐</label>" +
			                                "<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='C5'/>银行推荐</label>" +
			                                "<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='D1'/>已担保客户推荐</label>" +
			                                "<label onclick='checkBox(this,\"radio19\")' class='checkbox'><input type='radio' name='radio19' value='E0'/>无</label>" +
											"<font class='dj'></font><font class='score'>0</font>"+
										"</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>客户经理主观印象</th>"+         
			                            "<td id='khjlzgyx'>" +
			                                "<input id='khjlzgyx' type='text' onchange='qh(this)'/><font color='gray'>最高15分<font class='score'>0</font></font>" +
			                            "</td>"+ 
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>客户单月可支配收入</th>"+         
			                            "<td >" +
			                                "<input  type='text' id='khdysr'/><font id='ed2'>1000000</font>" +
			                                //"<input  type='text' onchange='jyed1(this)'/><font id='ed2'>1000000</font>" +
			                            "</td>"+
			                        "</tr>"+
			                        "<tr>"+                             
			                            "<th>是否属于超优客户</th>"+         
			                            "<td >" +
			                                "<input id='cykh' type='text' onchange='jyed2(this)'/><font color='gray'>“是”填“1”，“否”填“0”</font><font id='ed3'>500000</font>" +
			                            "</td>"+
			                        "</tr>"+
			                    "</table>"+
			                    "<table class='cpTable' style='margin-top:-20px;'>"+ 
			                        "<tr>"+    
										"<td style='width:33%;background:#fcd357;border:none;color:#fff;'>总分<font class='pf' id='zf'>0</font></td>"+
										"<td style='width:33%;background:#f49857;border:none;color:#fff;'>评分等级<font class='pf' id='pfdj'>B</font><font id='ed1'>20000</font></td>"+
										"<td style='background:#f26d6e;border:none;color:#fff;'>建议额度<font class='pf' id='jyed'>0</font></td>"+   
			                        "</tr>"+
			                    "</table>"+
								"<p>" +
			                        "<input id='sure' type='button' class='btn btn-large btn-primary' value='确定'/>"+  
			                    "</p>" +
			                   
			                "</div>");
			$(".right").hide();
			$("#mainPage").show();
			  $("#back").click(function(){
				  dcmbadd(addIntopiece) ;
			  })
			    $("#sure").click(function(){
			    	 $("#sure").attr('disabled',"true");
			    	var chinesename=allobj.chineseName
			    	var cardid=allobj.cardId;
			    	var khdysr=$("#khdysr").val();
			   	var cykh=$("#cykh").val();
			   	 zf=zf;
			   	 jyed=jyed;
			   	pfdj=pfdj;
			   	if(cykh!="0" && cykh!="1"){
			   		alert('是否属于超优客户只能是1或者0');
			   	}else if(khjlzgyx>15){
			   		alert('客户经理主观印象分数只能在0-15之间');
			   	}else if(chinesename=="" ||chinesename==null ||
			   			cardid=="" ||cardid==null ||
			   			khdysr=="" ||khdysr==null ||
			   			zfqk=="" ||zfqk==null ||
			   			zcqk=="" ||zcqk==null ||
			   			dwxz=="" ||dwxz==null ||
			   			dwgl=="" ||dwgl==null ||
			   			jzsj=="" ||jzsj==null ||
			   			hyzk=="" ||hyzk==null ||
			   			jycd=="" ||jycd==null ||
			   			hjzk=="" ||hjzk==null ||
			   			zgzs=="" ||zgzs==null ||
			   			zc=="" ||zc==null ||
			   			age=="" ||age==null ||
			   			jkqk=="" ||jkqk==null ||
			   			ggjl=="" ||ggjl==null ||
			   			zw=="" ||zw==null ||
			   			grsr=="" ||grsr==null ||
			   			zwsrb=="" ||zwsrb==null ||
			   			syrk=="" ||syrk==null ||
			   			tjr=="" ||tjr==null){
			   		alert('请填写完整的信息!!!');
			   	    }else{
			   	    	
			    	var edpgUrl="/ipad/addCustomerApprais.json";
			    	$.ajax({
						url:wsHost + edpgUrl,
						type: "GET",
						dataType:'json',
						data:{chinesename:chinesename,cardid:cardid,zfqk:zfqk,zcqk:zcqk,yyqk:yyqk,dwxz:dwxz,dwgl:dwgl,jzsj:jzsj,
							hyzk:hyzk,hjzk:hjzk,jycd:jycd,zgzs:zgzs,zc:zc,age:age,jkqk:jkqk,ggjl:ggjl,
							zw:zw,grsr:grsr,zwsrb:zwsrb,syrk:syrk,tjr:tjr,khjlzgyx:khjlzgyx,khdysr:khdysr,cykh:cykh,zf:zf,jyed:jyed,pfdj:pfdj},
						success: function (json) {
						
							obj = $.evalJSON(json);
							if(obj.a>0){
								tosqjj(allzi);
							}else{
								alert('上传失败!');
								pglr(allobj);
							}
							
						}})}
			    })
}
			    var zfqk;
			    var zcqk;
			    var yyqk;
			    var dwxz;
			    var dwgl;
			    var jzsj;
			    var hyzk;
			    var jycd;
			    var hjzk;
			    var zgzs;
			    var zc;
			    var age;
			    var jkqk;
			    var ggjl;
			    var zw;
			    var grsr;
			    var zwsrb;
			    var syrk;
			    var tjr;
			    var zf;
			    var jyed;
			    var pfdj;
			    var khjlzgyx;
			    function kh1(khjlzgyx1){
			    	khjlzgyx=khjlzgyx1;
			    }
			    function cy1(cykh1){
			    	khdysr=cykh1;
			    }
			    function cd1(pfdj1,jyed2,num1){
			    	pfdj=pfdj1;
			    	jyed=jyed2;
			    	zf=num1;
			    	jyed3();
			    }
			    function hqz1(id,str){
			    	if(id=='radio1'){
			    		zfqk=str;	
			    	}if(id=='radio2'){
			    		zcqk=str;
			    	}if(id=='radio3'){
			    		yyqk=str;
			    	}if(id=='radio4'){
			    		dwxz=str;
			    	}if(id=='radio5'){
			    		dwgl=str;
			    	}if(id=='radio6'){
			    		jzsj=str;
			    	}if(id=='radio7'){
			    		hyzk=str;
			    	}if(id=='radio8'){
			    		hjzk=str;
			    	}if(id=='radio9'){
			    		jycd=str;
			    	}if(id=='radio10'){
			    		zgzs=str;
			    	}if(id=='radio11'){
			    		zc=str;
			    	}if(id=='radio12'){
			    		age=str;
			    	}if(id=='radio13'){
			    		jkqk=str;
			    	}if(id=='radio14'){
			    		ggjl=str;
			    	}if(id=='radio15'){
			    		zw=str;
			    	}if(id=='radio16'){
			    		grsr=str;
			    	}if(id=='radio17'){
			    		zwsrb=str;
			    	}if(id=='radio18'){
			    		syrk=str;
			    	}if(id=='radio19'){
			    		tjr=str;
			    	}
			    
}
			    function tosqjj(allzi){
			    	var khwhurl="/ipad/jnnaddIntopieces/tjsq.json"
			    	var userId = window.sessionStorage.getItem("userId");
			    	$.ajax({
			    		url:wsHost + khwhurl,
			    		type: "GET",
			    		dataType:'json',
			    		data:{productId:allzi.productId,userId:userId,customerId:allzi.customerId},
			    		success: function (json) {
			    			obj = $.evalJSON(json);
			    			alert(obj.message);
			    			myjjgl();
			    		}})}