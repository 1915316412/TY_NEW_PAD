
//我的首页
function mywdsy(){
	window.scrollTo(0,0);//滚动条回到顶端
//	alert("GET当前登录用户ID："+window.sessionStorage.getItem("userId"));
	var get = crud.dom.factory("GET");
	wsCustManager ="/ipad/user/findSysUserMsg.json";
	var url = wsCustManager+"?userId="+window.sessionStorage.getItem("userId");
	get.doGet(url,initCustManagerContentCallback,"加载客户经理信息失败！");
	function initCustManagerContentCallback(json){
		var objs = $.evalJSON(json);
		var im="";
		var gett = crud.dom.factory("GETT");
		wsNotifiyMessage ="/ipad/custAppInfo/notifiyMessageNum.json";
		var url = wsNotifiyMessage+"?userId="+window.sessionStorage.getItem("userId");
		gett.doGet(url,initNotifiyMessageContentCallback,"加载通知信息失败！");
		function initNotifiyMessageContentCallback(json){
			var obj = $.evalJSON(json);
			if(obj.sum==0){
				im="<div class='box wdsy4' onclick='tz()'><img src='images/tz.png'/><span>通知</span></div>";
			}else{
				im="<div class='box wdsy4' onclick='tz()'><img src='images/tz11.png'/><span>通知</span></div>";
			}
		}	
		if(objs.result.age==null){
			objs.result.age="";
		}
		var content = "<div class='title'>我的首页</div>"+  
		"<div class='content'>" +
		"<div class='user-info'>" +
		"<img src='images/sq.jpg'/>"+
		"<p class='h2'>客户经理信息</p>"+
		"<p>姓名："+objs.result.name+"</p>"+
		"<p>性别："+objs.result.sex+"</p>"+
		"<p>年龄："+objs.result.age+"</p>"+
		"<p>所属银行："+objs.result.org+"</p>"+
		"<p>客户经理编号："+objs.result.externalId+"</p>"+
		"<p>职位：客户经理</p>"+
		/*"<p>授信权限：50万</p>"+*/
//		"<p>放款总额：100万</p>"+
		"</div>"+
		//"<div class='box wdsy5' ><a href='gdmap.html'>定位</a></div>"+ 
		"<div class='box wdsy1' onclick='mycpgl()'><img src='images/clkh.png'/><span>产品查询</span></div>"+
		"<div class='box wdsy2' onclick='khjjxx();pie()'><img src='images/khjjxx.png'/><span>客户进件信息</span></div>"+
		"<div class='box wdsy3' onclick='khyyzk()'><img src='images/khyyzk.png'/><span>客户运营状况</span></div>"+
		im+
		"<div class='box wdsy5' onclick='edpggj()'><img src='images/jljlxx.png'/><span>额度评估工具</span></div>"+ 
		"<div class='box wdsy5' onclick ='khjlrb()'><img src='images/jljlxx.png'/><span>客户经理日报</span></div>"+ 
		"<div class='box wdsy5' onclick ='wzxx()'><img src='images/wdzj.png'/><span>位置信息</span></div>"+ 
//		"<div class='box wdsy5' id ='wzxx'><img src='images/jljlxx.png'/><span>位置信息</span></div>"+ 
		"</div>"
		$("#mainPage").html(content);
		$("#nimei").html("上次登录时间：<br/>"+window.sessionStorage.getItem("time"));
	}

	/*$("#mainPage").html("<div class='title'>我的首页</div>"+  
                        "<div class='content'>" +
                            "<div class='user-info'>" +
                                "<img src='images/sq.jpg'/>"+
                                "<p class='h2'>客户经理信息</p>"+
                                "<p>姓名：杨景琳</p>"+
                                "<p>性别：女</p>"+
                                "<p>年龄：36岁</p>"+
                                "<p>所属银行：济南农商行总行</p>"+
                                "<p>客户经理编号：01010419</p>"+
                                "<p>职位：客户经理主管</p>"+
                                "<p>授信权限：50万</p>"+
                                "<p>放款总额：100万</p>"+
                            "</div>"+
                            "<div class='box wdsy1' onclick='mycpgl()'><img src='images/clkh.png'/><span>产品查询</span></div>"+
                            "<div class='box wdsy2' onclick='khjjxx();pie()'><img src='images/khjjxx.png'/><span>客户进件信息</span></div>"+
                            "<div class='box wdsy3' onclick='khyyzk()'><img src='images/khyyzk.png'/><span>客户运营状况</span></div>"+
                            "<div class='box wdsy4' onclick='tz()'><img src='images/tz.png'/><span>通知</span></div>"+
                            "<div class='box wdsy5' onclick='edpggj()'><img src='images/jljlxx.png'/><span>额度评估工具</span></div>"+                           
                        "</div>");*/
	$(".right").hide();
	$("#mainPage").show();
}
//function zzzzz(){
//window.location.href="file:///android_asset/www/map.html";
//}
//客户进件信息
function khjjxx(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>客户进件信息</div>"+  
			"<div class='content'>" +
			"<div id='ex_1' class='zingchart'></div>"+ 
			"<div class='ban'></div>"+
			"<p>" +
			/*	"<input type='button' class='tab-button' style='margin-left:40px;' value='补充进件' onclick='bcjj()'/>" +
								"<input type='button' class='tab-button' value='拒绝进件' onclick='jjjj()'/>" +*/
			"<input type='button' class='tab-button' value='查看详情' onclick='jjxxlb()'/>" +
			"</p>" +
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
function pie() {
	var get = crud.dom.factory("GET");
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
//	wsAppInfo ="/ipad/custAppInfo/browse1.json?userId="+userId;
	wsAppInfo ="/ipad/custAppInfo/browse1.json?userId="+userId+"&userType="+userType;
	var url = wsAppInfo;
	get.doGet(url,initAppInfoManagerContentCallback,"加载进件信息失败！");
	function initAppInfoManagerContentCallback(json){
		var obj = $.evalJSON(json);
		// example one data
		var ex1 = {                         
				"type": "pie",
				"legend":{},
				"backgroundColor":"#fff",
				"series": [
				           {   
				        	   "backgroundColor":"#e62163","text": "拒绝进件数量  "+obj.result.refuseNum,"values": [obj.result.refuseNum]
				           },
				           {   
				        	   "backgroundColor":"#4e74c0","text": "审核通过数量  "+obj.result.approvedNum,"values": [obj.result.approvedNum]
				           }
				           ]
		};
		// render example one
		$('#ex_1').zingchart({
			data:ex1
		}); 
	}
}
//客户进件信息列表
function jjxxlb(){
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
	var jjcxurl="/ipad/customerIntopiece/browse.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>客户姓名</th>"+
	"<th>产品名称</th>"+
	"<th>申请金额</th>"+
	"<th>审贷金额</th>"+
	"<th>合同金额</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>节点名称</th>"+
	"<th>退回原因</th>"+
	"<th>拒绝原因</th>"+
	"</tr>";
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			userId: userId,
			userType:userType,
		},
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.items.length;i++){
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="returnedToFirst"){
					obj.items[i].status="退回至客户经理";
				}else if(obj.items[i].status=="end"){
					obj.items[i].status="放款成功";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].chineseName+"@"+
				obj.items[i].productName+"'"+"/>"+"</span></td>"+
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].productName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].finalApproval+"</td>"+
				"<td>"+obj.items[i].reqlmt+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].nodeName+"</td>"+
				"<td>"+obj.items[i].fallBackReason+"</td>"+
				"<td>"+obj.items[i].refusqlReason+"</td>"+
				"</tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjjxx();pie()'/>客户进件信息-进件详情</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='khjjxx();pie()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
					alert("当前已经是最后一页");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
					alert("当前已经是第一页");
					page = page+1;
				}
			})
		}
	})
}   
//退回客户列表
function thkhlb(){
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
	var jjcxurl="/ipad/customerIntopiece/browse.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>客户姓名</th>"+
	"<th>产品名称</th>"+
	"<th>申请金额</th>"+
	"<th>审贷金额</th>"+
	"<th>合同金额</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>节点名称</th>"+
	"<th>退回原因</th>"+
	"<th>拒绝原因</th>"+
	"</tr>";
	var thkh='';
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			userId: userId,
			userType:userType,
			status:"returnedToFirst",
		},
		success: function (json) {
			obj = $.evalJSON(json);
			
			for(var i = 0;i<obj.items.length;i++){
				
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="end"){
					obj.items[i].status="放款成功";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}else if(obj.items[i].status=="returnedToFirst"){
					obj.items[i].status="退回至客户经理";
					
				}
				
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].chineseName+"@"+
				obj.items[i].productName+"'"+"/>"+"</span></td>"+
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].productName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].finalApproval+"</td>"+
				"<td>"+obj.items[i].reqlmt+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].nodeName+"</td>"+
				"<td>"+obj.items[i].fallBackReason+"</td>"+
				"<td>"+obj.items[i].refusqlReason+"</td>"+
				"</tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>重新调查客户</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='tz()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
					alert("当前已经是最后一页");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
					alert("当前已经是第一页");
					page = page+1;
				}
			})
		}
	})
}   
//拒绝客户列表
function jjkhlb(){
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
	var jjcxurl="/ipad/customerIntopiece/browse.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>客户姓名</th>"+
	"<th>产品名称</th>"+
	"<th>申请金额</th>"+
	"<th>审贷金额</th>"+
	"<th>合同金额</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>节点名称</th>"+
	"<th>退回原因</th>"+
	"<th>拒绝原因</th>"+
	"</tr>";
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			userId: userId,
			userType:userType,
			status:"refuse",
		},
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.items.length;i++){
				if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="returnedToFirst"){
					obj.items[i].status="退回至客户经理";
				}else if(obj.items[i].status=="end"){
					obj.items[i].status="放款成功";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}else if(obj.items[i].status=="refuse"){
					obj.items[i].status="被拒接";
				}else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].chineseName+"@"+
				obj.items[i].productName+"'"+"/>"+"</span></td>"+
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].productName+"</td>"+
				"<td>"+obj.items[i].applyQuota+"</td>"+
				"<td>"+obj.items[i].finalApproval+"</td>"+
				"<td>"+obj.items[i].reqlmt+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].status+"</td>"+
				"<td>"+obj.items[i].nodeName+"</td>"+
				"<td>"+obj.items[i].fallBackReason+"</td>"+
				"<td>"+obj.items[i].refusqlReason+"</td>"+
				"</tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>拒绝客户</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='tz()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
					alert("当前已经是最后一页");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1;
				if(result[page]){
					$("#llll").html(head+result[page]);
				}else{
					alert("当前已经是第一页");
					page = page+1;
				}
			})
		}
	})
}   
//客户进件信息-补充进件
function bcjj(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjjxx();pie()'/>客户进件信息-补充进件</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>接受</th>"+
			"<th>拒绝</th>"+
			"<th>是否变更维护计划</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td><img src='images/success.png'/></td>"+
			"<td></td>"+
			"<td><input type='button' class='btn btn-warning' value='是'/></td>"+
			"</tr>"+
			"<tr>"+    
			"<td>2</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td><img src='images/wrong.png'/></td>"+
			"<td><input type='button' class='btn btn-warning' value='是'/></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}   

//客户进件信息-拒绝进件
function jjjj(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjjxx();pie()'/>客户进件信息-拒绝进件</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>接受</th>"+
			"<th>拒绝</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td><img src='images/success.png'/></td>"+
			"<td></td>"+
			"</tr>"+
			"<tr>"+    
			"<td>2</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td><img src='images/wrong.png'/></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}   
//客户运营状况
function khyyzk(){
	window.scrollTo(0,0);//滚动条回到顶端

	var get = crud.dom.factory("GET");
	wsYunyin ="/ipad/user/findYunyinstatus.json";
	var url = wsYunyin+"?userId="+window.sessionStorage.getItem("userId");
	get.doGet(url,initCustManagerContentCallback,"加载客户运营状况失败！");
	function initCustManagerContentCallback(json){
		var objs = $.evalJSON(json);
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>客户运营状况</div>"+  
				"<div class='content' style='width:70%;margin:0 auto;'>" +
				"<div class='span3' style='background:#f86817;'>客户授信总额<br/><span>"+objs.result.ksze+"</span></div>"+
				"<div class='span3' style='background:#e93c3f;'>客户用信总额<br/><span>"+objs.result.kyze+"</span></div>"+
				"<div class='span3' style='background:#67cdcc;'>客户逾期余额总额<br/><span>"+objs.result.kyyeze+"</span></div>"+
				"<div class='span2' style='background:#046589;'>逾期客户数<br/><span>"+objs.result.yqkhs+"</span></div>"+
				"<div class='span2' style='background:#d6bf00;'>核销客户数<br/><span>"+objs.result.hxkhs+"</span></div>"+
				"<p>" +
				"<input type='button' class='tab-button' value='查看其他统计图' onclick='ckqttjt()'/>" +
				"</p>" +
		"</div>");
	}
	$(".right").hide();
	$("#mainPage").show();
}

/*function ckqttjt(){
	$("#mainPage").html("");
	var url = "/ipad/tongji.json";
	var get = crud.dom.factory("GET");
	get.doGet(url,initTongjituCallback,"加载统计图失败！");

	function initTongjituCallback(json){
		var objs = $.evalJSON(json);
		var value1 = objs.organApplicationAuditNumJson;		
		value1=value1.replace(/\]/,"");
		value1=value1.replace(/\[/,"");
				var value11 = value1.split(",");
				var value2 = objs.organApplicationApprovedNumJson;	
				value2=value2.replace(/\]/,"");
				value2=value2.replace(/\[/,"");
						var value22 = value2.split(",");
						var zonged = objs.organApplicationjineJson;
						zonged=zonged.replace(/\]/,"");
						zonged=zonged.replace(/\[/,"");
								zonged=zonged.split(",");
								var shouxin =objs.organApplicationsxJson;
								shouxin=shouxin.replace(/\]/,"");
								shouxin=shouxin.replace(/\[/,"");
										shouxin=shouxin.split(",");
										var yuqi=objs.organApplicationyqJson;
										yuqi=yuqi.replace(/\]/,"");
										yuqi=yuqi.replace(/\[/,"");
												yuqi=yuqi.split(",");
												var buliang=objs.organApplicationblJson;
												buliang=buliang.replace(/\]/,"");
												buliang=buliang.replace(/\[/,"");
														buliang=buliang.split(",");
														var nnnn=objs.applicationStatusJson;
														$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyyzk()'/>统计图</div>"+  
																"<div class='content'>" +
																"<div class='zingchartt' id='container' ></div>"+
																"<p><input type='button' class='btn btn-large btn-primary' value='进件状况统计' id = 'jjzktj' />"+
																"<input type='button' class='btn btn-large btn-primary' value='进件数量统计' id = 'jjsltj' />"+
																"<input type='button' class='btn btn-large btn-primary' value='总额度状况统计' id = 'zedtj' />"+
																"<input type='button' class='btn btn-large btn-primary' value='区域额度状况统计' id = 'zhedtj'/>"+
																"<input type='button' class='btn btn-large' value='返回' onclick='khyyzk()'/></p>"+
														"</div>");
														$(".right").hide();
														$("#mainPage").show();

														var chartData = {
																"type": "bar", 
																"series": [    
																           {"text":"已申请进件数量","values":[Number(value11[0]),Number(value11[1]),Number(value11[2]),Number(value11[3])]},
																           {"text":"通过进件数量","values":[Number(value22[0]),Number(value22[1]),Number(value22[2]),Number(value22[3])]}
																           ],
																           "scale-x":{ 
																        	   "values":["第一区域","第二区域","第三区域","第四区域"],
																           },
																           "scale-y":{ 
																        	   "zooming":false,
//																        	   "zoom-to":[0,5]
																           },
																           "title": {
																        	   "text":"统计各支行已申请和通过的进件数量"
																           },
																           "legend":{

																           }
														};
														var chartData2 = {
																"type": "bar", 
																"series": [    
																           {"text":"金额","values":[Number(zonged[0]),Number(zonged[1]),Number(zonged[2])]},

																           ],
																           "scale-x":{ 
																        	   "values":["授信总额度","逾期总额度","不良总额度"],
																           },
																           "scale-y":{ 
																        	   "zooming":false,
//																        	   "zoom-to":[0,5]
																           },
																           "title": {
																        	   "text":"统计各区域已申请和通过的进件数量"
																           },
																           "legend":{

																           }
														};
														var chartData3 = {
																"type": "bar", 
																"series": [    
																           {"text":"授信金额","values":[Number(shouxin[0])+Number(shouxin[1])+Number(shouxin[2]),Number(shouxin[3])+Number(shouxin[4])+Number(shouxin[5]),Number(shouxin[6])+Number(shouxin[7])+Number(shouxin[8]),Number(shouxin[9])+Number(shouxin[10])+Number(shouxin[11]),]},
																           {"text":"逾期金额","values":[Number(yuqi[0])+Number(yuqi[1])+Number(yuqi[2]),Number(yuqi[3])+Number(yuqi[4])+Number(yuqi[5]),Number(yuqi[6])+Number(yuqi[7])+Number(yuqi[8]),Number(yuqi[9])+Number(yuqi[10])+Number(yuqi[11]),]},
																           {"text":"不良金额","values":[Number(buliang[0])+Number(buliang[1])+Number(buliang[2]),Number(buliang[3])+Number(buliang[4])+Number(buliang[5]),Number(buliang[6])+Number(buliang[7])+Number(buliang[8]),Number(buliang[9])+Number(buliang[10])+Number(buliang[11]),]}
																           ],
																           "scale-x":{ 
																        	   "values":["第一区域","第二区域","第三区域","第四区域"],
																           },
																           "scale-y":{ 
																        	   "zooming":false,
//																        	   "zoom-to":[0,5]
																           },
																           "title": {
																        	   "text":"统计各区域已申请和通过的进件数量"
																           },
																           "legend":{

																           }
														};

														var myConfig = {
																"type":"pie",
																"title":{
																	"text":"Pie Chart Styling"
																},
																"plot":{
																	"border-width":1,
																	"border-color":"#cccccc",
																	"line-style":"dotted",
																	"value-box":{
																		"font-size":10,
																		"text":"%t: %v (%npv%)",
																		"font-weight":"normal",
																		"placement":"out"
																	}
																},
																"series":[
																          {
																        	  "values":[Number($.evalJSON(nnnn)[0].y)],
																        	  "background-color":"#cc0000",
																        	  "text":"拒绝"
																          },
																          {
																        	  "values":[Number($.evalJSON(nnnn)[1].y)],
																        	  "background-color":"#ff9933",
																        	  "text":"已审批"
																          },
																          {
																        	  "values":[Number($.evalJSON(nnnn)[2].y)],
																        	  "background-color":"#88cc00",
																        	  "text":"审批中"
																          },
																          {
																        	  "values":[Number($.evalJSON(nnnn)[3].y)],
																        	  "background-color":"#3399ff",
																        	  "text":"退回"
																          },
																          {
																        	  "values":[Number($.evalJSON(nnnn)[4].y)],
																        	  "background-color":"#9933ff",
																        	  "text":"放款成功"
																          }
																          ]
														};
														        zingchart.render({ 
															            id: "container",    
															            height: 500,       
															            width: 700,        
															            data: chartData
															        });
														$("#zedtj").click(function(){
															 zingchart.render({ 
																            id: "container",    
																            height: 500,       
																            width: 700,        
																            data: chartData2
																        });

														})
														$("#jjsltj").click(function(){
															 zingchart.render({ 
																            id: "container",    
																            height: 500,       
																            width: 700,        
																            data: chartData
																        });

														})
														$("#zhedtj").click(function(){
															 zingchart.render({ 
																            id: "container",    
																            height: 500,       
																            width: 700,        
																            data: chartData3
																        });

														})
														$("#jjzktj").click(function(){
															 zingchart.render({ 
																            id: "container",    
																            height: 500,       
																            width: 700,        
																            data: myConfig
																        });

														})
	}
}*/
//我的足迹
function wdzj(){
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>杨景琳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010419</div>"+  
			"<div class='content'>" +
			"<div class='map'>地图</div>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//通知
function tz(){
	window.scrollTo(0,0);//滚动条回到顶端
	var get = crud.dom.factory("GET");
	wsNotifiyMessage ="/ipad/custAppInfo/notifiyMessageNum.json";
	var url = wsNotifiyMessage+"?userId="+window.sessionStorage.getItem("userId");
	get.doGet(url,initNotifiyMessageContentCallback,"加载通知信息失败！");
	function initNotifiyMessageContentCallback(json){
		var objs = $.evalJSON(json);
		
		//alert(json);
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>通知</div>"+  
				"<div class='content'>" +
				"<table class='cpTable' style='width:100%;height:85%;position:fixed;top:100px;bottom:0;text-align:center;'>"+
				"<tr>"+                             
				"<td style='width:33.3%;' onclick='sdhtz()'>" +
				"<img src='images/sdh.png'/><br/><span class='tongzhi'>"+objs.pcount+"</span><br/>" +
				"<span class='tz_message'>审贷会通知</span>" +
				"</td>"+                           
				"<td style='width:33.3%;' onclick='pxjh()'>" +
				"<img src='images/px.png'/><br/><span class='tongzhi'>"+objs.peixun+"</span><br/>" +
				"<span class='tz_message'>培训通知</span>" +
				"</td>"+                      
				"<td style='width:33.3%;' onclick='fpjjtz()'>" +
				"<img src='images/fpjj.png'/><br/><span class='tongzhi'>0</span><br/>" +
				"<span class='tz_message'>分配进件通知</span>" +
				"</td>"+
				"</tr>"+
				"<tr>"+                         
				"<td onclick='fxsxtz()'>" +
				"<img src='images/fxsx.png'/><br/><span class='tongzhi'>"+objs.risk+"</span><br/>" +
				"<span class='tz_message'>风险客户通知</span>" +
				"</td>"+                    
				"<td onclick='thkhlb()'>" +
				"<img src='images/bcdc.png'/><br/><span class='tongzhi'>"+objs.returnCount+"</span><br/>" +
				"<span class='tz_message'>补充调查通知</span>" +
				"</td>"+                  
				"<td onclick='jjkhlb()'>" +
				"<img src='images/jjjj.png'/><br/><span class='tongzhi'>"+objs.refuseCount+"</span><br/>" +
				"<span class='tz_message'>拒绝进件通知</span>" +
				"</td>"+ 
				"</tr>"+
				"<tr>"+                         
				"<td onclick='hmdtz()'>" +
				"<img src='images/cs.png'/><br/><span class='tongzhi'>"+objs.blackcount+"</span><br/>" +
				"<span class='tz_message'>黑名单客户通知</span>" +
				"</td>"+                    
				"<td id='kkkk'>" +
				"<img src='images/khzlbg.png'/><br/><span class='tongzhi'>"+objs.ziliaobiangeng+"</span><br/>" +
				"<span class='tz_message'>客户资料变更通知</span>" +
				"</td>"+                  
				"<td></td>"+ 
				"</tr>"+
				"</table>"+
		"</div>");
		$("#kkkk").click(function(){
			khzlbgtz(objs.bianggeng);
		})
	}
	$(".right").hide();
	$("#mainPage").show();
}

//通知-审贷会通知
function hmdtz(){
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var obj;
	var head ="<tr>"+   
	"<th></th>"+ 
	"<th>客户名称</th>"+
	"<th>证件号码</th>"+
	"<th>拉黑原因</th>"+
	"<th>上报人</th>"+
	"</tr>";

	var khwhurl="/ipad/customer/custormerblacklist.json"+"?userId="+userId
	$.ajax({
		url:wsHost + khwhurl,
		type: "GET",
		dataType:'json',
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].display_name+"@"+obj.result[i].card_id+
				"@"+obj.result[i].reason+"@"+obj.result[i].chinese_name+"@"+obj.result[i].customer_id+"'"+"/>"+"</span></td>"+
				"<td>"+obj.result[i].chinese_name+"</td>"+
				"<td>"+obj.result[i].card_id+"</td>"+
				"<td>"+obj.result[i].reason+"</td>"+
				"<td>"+obj.result[i].display_name+"</td>"+
				"</tr>";
			
			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
			}
		result[j]=tmp;
			
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-黑名单客户</div>"+  
				"<div class='content'>"+
				"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
				head+result[page]+
				"</table>"+

				"<p>"+
				"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='移除' id = 'deleteku'/>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();  $("#xyy").click(function(){
			page=page+1;
			if(result[page]){
				$("#whlb").html(head+result[page]);
			}else{
				alert("当前已经是最后一页");
				page=page-1;
			}
		})
		$("#syy").click(function(){
			page=page-1; 
			if(result[page]){
				$("#whlb").html(head+result[page]);
			}else{
				alert("当前已经是第一页");
				page = page+1;
			}
		})
			$("#deleteku").click(function(){
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var khwhurl1="/ipad/customer/deleteByCoustorId.json";
					$.ajax({
						url:wsHost + khwhurl1,
						type: "GET",
						dataType:'json',
						data:{userId:userId,customerId:values[4]},
						success: function (json) {
							obj = $.evalJSON(json);
							if(obj.message=="移除成功"){
								alert(obj.message);
								hmdtz();
							}else{
								alert(obj.message);
							}
							
						}})
				}else{
					alert("请选择一行");
				}
			})
		}})
	}
//通知-审贷会通知
function sdhtz(){
var userId = window.sessionStorage.getItem("userId");
var tmp ="";
var result={};
var page=1;
var j = 1;
var obj;
var head ="<tr>"+   
"<th></th>"+ 
"<th>产品名称</th>"+
"<th>审贷节点</th>"+
"<th>负责人</th>"+
"</tr>";

var khwhurl="/ipad/product/selectProductUser.json"+"?userId="+userId
$.ajax({
	url:wsHost + khwhurl,
	type: "GET",
	dataType:'json',
	success: function (json) {
		obj = $.evalJSON(json);
		for(var i = 0;i<obj.size;i++){
			tmp=tmp+"<tr onclick='check(this)'>"+
			"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].displayName+"@"+obj.result[i].productName+
			"@"+obj.result[i].node_name+"@"+obj.result[i].product_id+"'"+"/>"+"</span></td>"+
			"<td>"+obj.result[i].productName+"</td>"+
			"<td>"+obj.result[i].node_name+"</td>"+
			"<td>"+obj.result[i].displayName+"</td>"+
			"</tr>";
		
		if((i+1)%5==0){
			result[j]=tmp;
			j++;
			tmp="";
		}
		}
	result[j]=tmp;
		
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-审贷会通知</div>"+  
			"<div class='content'>"+
			"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
			head+result[page]+
			"</table>"+

			"<p>"+
			"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
			"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
			"<input type='button' class='btn btn-large btn-primary' value='显示' id = 'sqsave'/>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();  $("#xyy").click(function(){
		page=page+1;
		if(result[page]){
			$("#whlb").html(head+result[page]);
		}else{
			alert("当前已经是最后一页");
			page=page-1;
		}
	})
	$("#syy").click(function(){
		page=page-1; 
		if(result[page]){
			$("#whlb").html(head+result[page]);
		}else{
			alert("当前已经是第一页");
			page = page+1;
		}
	})
		$("#sqsave").click(function(){
			if ($("input[type='radio']").is(':checked')) {
				var objs={};
				var values =$('input[name="checkbox"]:checked').attr("value").split("@");
				objs.productId = values[3];
				cxjj(objs);
			}else{
				alert("请选择一行");
			}
		})
	}})
}
function cxjj(objs){
	var productid=objs.productId;
	var head ="<tr>"+   
	"<th>节点序号</th>"+ 
	"<th>产品名称</th>"+
	"<th>审贷节点</th>"+
	"<th>负责人</th>"+
	"</tr>";
	var tem="";
	var khwhurl="/ipad/product/selectAllProductUser.json"+"?productId="+productid
	$.ajax({
		url:wsHost + khwhurl,
		type: "GET",
		dataType:'json',
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				tem=tem+"<tr><td>"+obj.result[i].seq_no+"</td>"+
				"<td>"+obj.result[i].productName+"</td>"+
				"<td>"+obj.result[i].node_name+"</td>"+
				"<td>"+obj.result[i].displayName+"</td></tr>"
			}
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='sdhtz()'/>通知-产品负责人显示</div>"+  
					"<div class='content'>"+
					"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
					head+tem+
					"</table>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show(); 
			
		}})
}
function show_sdhtz(){
	$("#text").html("<div class='display-div sdhtz'>"+
			"<div class='dialog-head'>"+
			"<h4>王军忠进件02356561审贷会</h4>"+
			"<div style='border-right:1px solid #57c5f7;'>开始时间<br/><span>2015-06-12 13:00</span></div>"+
			"<div>结束时间<br/><span>2015-06-12 14:00</span></div>"+
			"<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
			"</div>"+
			"<div class='dialog-content'>"+
			"<p>创建人</p>"+
			"<p class='cy'>管理员</p>"+
			"<p>参与者</p>"+
			"<p class='cy'>王旭、朱远炎、宋辰、谭文华</p>"+
			"<p>地点</p>"+
			"<p class='cy'>江苏省常州市九州环宇505</p>"+
			"</div>"+
			"<div class='dialog-bottom'>"+
			"<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
			"<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
			"</div>"+
	"</div><!-- /display-div -->");
	$("#text").animate({top:"0px"},"500");
}
//通知-培训通知
function pxtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	var get = crud.dom.factory("GET");
	wsNotice ="/ipad/custAppInfo/findRetraining.json";
	var url = wsNotice;
	get.doGet(url,initNoticeContentCallback,"加载培训通知信息失败！");
	function initNoticeContentCallback(json){
		var objs = $.evalJSON(json);
		//alert(json);
		var content ="";
		var contsnt ="";
		var title ="<div class='title'><img src='images/back.png' onclick='tz()'/>通知-培训通知</div>"+  
		"<div class='content' style='margin-top:146px;'>" +"";
		for(var i = 0;i<objs.totalCount;i++){
			contsnt = "<div class='rcap' onclick='show_pxtz('"+objs.result[i].id+"')'>" +
			"<table>" +
			"<tr>" +
			"<td class='center' style='width:20%;'>"+objs.result[i].id+"<br/>~<br/>"+objs.result[i].trainingTime+"</td>"+
			"<td style='width:40%;'>" +
			"<p class='rcTitle'>"+objs.result[i].trainingObjective+"</p>" +
			"<p class='cyz'>参与者</p>" +
			"<p class='cyzxm'>"+objs.result[i].userList+"</p>" +
			"</td>"+
			"<td style='width:35%;'>" +
			"<p class='center'>"+objs.result[i].trainingLocation+"</p>" +
			"</td>"+
			"<td style='width:5%;'>" +
			"<img src='images/right.png'/>" +
			"</td>"+
			"</tr>"+                            
			"</table>"+
			"</div>"+""; 
			content = content+contsnt;
		}
		alert(content);
		$("#mainPage").html(title+content+"</div>");
		window.parent.resizeFrame();
	}
	$(".right").hide();
	$("#mainPage").show();
}
function show_pxtz(id){
	alert("111");
	$("#text").html("<div class='display-div sdhtz'>"+
			"<div class='dialog-head'>"+
			"<h4>客户经理业务培训</h4>"+
			"<div style='border-right:1px solid #57c5f7;'>开始时间<br/><span>2015-06-12</span></div>"+
			"<div>结束时间<br/><span>2015-06-13</span></div>"+
			"<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
			"</div>"+
			"<div class='dialog-content'>"+
			"<p>创建人：<span class='cy'>管理员</span></p>"+
			"<p>参与者：<span class='cy'>王旭、朱远炎、宋辰、谭文华</span></p>"+
			"<p>地点：<span class='cy'>江苏省常州市九州环宇505</span></p>"+
			"<p>培训方式：<span class='cy'>上课</span></p>"+
			"<p>考核方式：<span class='cy'>笔试</span></p>"+
			"</div>"+
			"<div class='dialog-bottom'>"+
			"<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
			"<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
			"</div>"+
	"</div>");
	$("#text").animate({top:"0px"},"500");
}
//通知-分配进件通知
function fpjjtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-分配进件通知</div>"+  
			"<div class='content' style='margin-top:146px;'>" +
			"<div class='rcap' onclick='show_fpjjtz()'>" +
			"<table>" +
			"<tr>" +
			"<td class='center' style='width:20%;'>2015-06-12<br/>13:00:58</td>"+
			"<td style='width:40%;'>" +
			"<p class='rcTitle'>王军忠 / 00023</p>" +
			"<p class='cyz'>分配人</p>" +
			"<p class='cyzxm'>管理员</p>" +
			"</td>"+
			"<td style='width:35%;'>" +
			"<p class='center'>济南农商行</p>" +
			"</td>"+
			"<td style='width:5%;'>" +
			"<img src='images/right.png'/>" +
			"</td>"+
			"</tr>"+                            
			"</table>"+
			"</div>"+   
			/*"<table class='cpTable' style='text-align:center;'>"+
                            "<tr>"+                             
                                "<th>序号</th>"+  
                                "<th>客户姓名</th>"+
                                "<th>客户身份标识</th>"+
                                "<th>接受</th>"+
                                "<th>拒绝</th>"+
                                "<th>是否变更维护计划</th>"+
                            "</tr>"+
                            "<tr>"+    
                                "<td>1</td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+*/
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
function show_fpjjtz(){
	$("#text").html("<div class='display-div sdhtz'>"+
			"<div class='dialog-head'>"+
			"<h4>王军忠 / 00023</h4>"+
			"<div style='width:80%'>分配时间<br/><span>2015-06-12&nbsp;&nbsp;&nbsp;&nbsp;13:00:58</span></div>"+                           
			"<img src='images/sdhClose.jpg' onclick='hide_dcts()'/>"+
			"</div>"+
			"<div class='dialog-content'>"+
			"<p>分配人</p>"+
			"<p class='cy'>管理员</p>"+
			"<p>客户所属银行</p>"+
			"<p class='cy'>济南农商行</p>"+
			"<p>变更维护计划</p>"+
			"<p class='cy'>否</p>"+
			"</div>"+
			"<div class='dialog-bottom'>"+
			"<button type='button' class='btn btn-success' onclick='hide_dcts()'>接受</button>"+
			"<button type='button' class='btn btn-danger' onclick='hide_dcts()'>拒绝</button>"+
			"</div>"+
	"</div><!-- /display-div -->");
	$("#text").animate({top:"0px"},"500");
}
//通知-风险事项通知
function fxsxtz(){
	var get = crud.dom.factory("GET");
	var fxsxurl ="/ipad/NotifictionMessage/managerbrowse.json";
	var url = fxsxurl+"?userId="+window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                             
	"<th>序号</th>"+  
	"<th>客户名称</th>"+
	"<th>证件类型</th>"+
	"<th>证件号码</th>"+
	"<th>状态</th>"+
	"<th>风险类型</th>"+
	"<th>拒绝原因</th>"+
	"<th>上报人</th>"+
	"<th>产品名称</th>"+
	"</tr>";
	get.doGet(url,initNotifiyMessageContentCallback,"加载通知信息失败！");
	function initNotifiyMessageContentCallback(json){
		var obj = $.evalJSON(json);
		for(var i = 0;i<obj.result.length;i++){
			if(obj.result[i].cardType=="0"){
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

			if(obj.result[i].riskCreateType=="manual"){
				obj.result[i].riskCreateType="手动";
			}else if(obj.result[i].riskCreateType=="system"){
				obj.result[i].riskCreateType="系统";
			}
			if(obj.result[i].status=="UNREPORTED"){
				obj.result[i].status="未上报";
			}else if(obj.result[i].status=="UNREPORTED_CARDCENTER"||obj.result[i].status=="unreported_cardcenter"){
				obj.result[i].status="未上报";
			}else if(obj.result[i].status=="REPORTED_SUPERVISOR"||obj.result[i].status=="reported_supervisor"){
				obj.result[i].status="上报机构主管";
			}else if(obj.result[i].status=="REPORTED_SUPERVISOR"||obj.result[i].status=="reported_supervisor"){
				obj.result[i].status="上报卡中心";
			}else if(obj.result[i].status=="CONFIRMED_SUPERVISOR"||obj.result[i].status=="confirmed_supervisor"){
				obj.result[i].status="机构主管确认";
			}else if(obj.result[i].status=="CONFIRMED_CARDCENTER"||obj.result[i].status=="confirmed_cardcenter"){
				obj.result[i].status="卡中心确认";
			}else if(obj.result[i].status=="REJECT_SUPERVISOR"||obj.result[i].status=="reject_supervisor"){
				obj.result[i].status="机构主管拒绝";
			}else if(obj.result[i].status=="REJECT_CARDCENTER"||obj.result[i].status=="reject_cardcenter"){
				obj.result[i].status="卡中心拒绝";
			}

			tmp=tmp+"<tr onclick='check(this)'>"+"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].customerId+"@"+
			obj.result[i].id+"'/>"+"</span></td>"+  
			"<td>"+obj.result[i].customerName+"</td>"+
			"<td>"+obj.result[i].cardType+"</td>"+
			"<td>"+obj.result[i].cardId+"</td>"+
			"<td>"+obj.result[i].status+"</td>"+			
			"<td>"+obj.result[i].riskCreateType+"</td>"+			
			"<td>"+obj.result[i].refuseReason+"</td>"+			
			"<td>"+obj.result[i].reportedManager+"</td>"+			
			"<td>"+obj.result[i].productName+"</td>"+			
			"</tr>"
			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
		}
		result[j]=tmp;

		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-风险事项通知</div>"+  
				"<div class='content'>" +
				"<table class='cpTable' id='fxkh' style='text-align:center;'>"+
				head+result[page]+
				"</table>"+
				"<p>"+
				"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='移除风险客户名单' id = 'ycfx'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='tz()'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();
		$("#xyy").click(function(){
			page=page+1;
			if(result[page]){
				$("#fxkh").html(head+result[page]);
			}else{
				alert("当前已经是最后一页");
				page=page-1;
			}
		})
		$("#syy").click(function(){
			page=page-1; 
			if(result[page]){
				$("#fxkh").html(head+result[page]);
			}else{
				alert("当前已经是第一页");
				page = page+1;
			}
		})
		$("#ycfx").click(function(){
			if ($("input[type='radio']").is(':checked')) {

				var values =$('input[name="checkbox"]:checked').attr("value").split("@");
				var ycfxurl="/ipad/NotifictionMessage/removeRisk.json";

				$.get(wsHost+ycfxurl,{customerId:values[1]},yichucallback);
				function yichucallback(json){
					var obj = $.evalJSON(json);
					alert(obj.mess);
					fxsxtz();
				}

			}else{
				alert("请选择一行");
			}
		})
	}
}
//通知-催收客户通知
function cskhtz(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-催收客户通知</div>"+  
			"<div class='content'>" +
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                        
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>产品标识</th>"+
			"<th>逾期金额</th>"+
			"<th>逾期期数</th>"+
			"<th>是否变更维护计划</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"<td></td>"+
			"</tr>"+
			"</table>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//通知-客户资料变更通知
function khzlbgtz(customerInfo){
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head =	"<tr>"+  
	"<th></th>"+
	"<th>客户姓名</th>"+
	"<th>证件类型</th>"+
	"<th>证件号码</th>"+
	"<th>手机</th>"+
	"<th>状态</th>"+
	"</tr>"; 
	for(var i=0;i<customerInfo.length;i++){
		if(customerInfo[i].cardtype=="0"){
			customerInfo[i].cardtype="身份证";
		}else if(customerInfo[i].cardtype=="1"){
			customerInfo[i].cardtype="军官证";
		}else if(customerInfo[i].cardtype=="2"){
			customerInfo[i].cardtype="护照";
		}else if(customerInfo[i].cardtype=="3"){
			customerInfo[i].cardtype="香港身份证";
		}else if(customerInfo[i].cardtype=="4"){
			customerInfo[i].cardtype="澳门身份证";
		}else if(customerInfo[i].cardtype=="5"){
			customerInfo[i].cardtype="台湾身份证";
		}
		if(customerInfo[i].islook==null||customerInfo[i].islook==""){
			customerInfo[i].islook="未查看"
		}
		tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+customerInfo[i].id+"@"+
		customerInfo[i].cardnum+"'/>"+"</span></td>"+  
		"<td>"+customerInfo[i].cname+"</td>"+
		"<td>"+customerInfo[i].cardtype+"</td>"+
		"<td>"+customerInfo[i].cardnum+"</td>"+
		"<td>"+customerInfo[i].contactmobiletel+"</td>"+
		"<td>"+customerInfo[i].islook+"</td>"+
		"</tr>"

		if((i+1)%5==0){
			result[j]=tmp;
			j++;
			tmp="";
		}
	}
	result[j]=tmp;
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>通知-客户资料变更通知</div>"+  
			"<div class='content'>" +
			"<table id='cslb' class='cpTable' style='text-align:center;'>"+
//			"<tr>"+                        
//			"<th>序号</th>"+  
//			"<th>客户姓名</th>"+
//			"<th>客户身份标识</th>"+
//			"<th>产品标识</th>"+
//			"<th>变更项</th>"+
//			"<th>是否变更维护计划</th>"+
//			"</tr>"+
//			"<tr>"+    
//			"<td>1</td>"+
//			"<td></td>"+
//			"<td></td>"+
//			"<td></td>"+
//			"<td></td>"+
//			"<td></td>"+
//			"</tr>"+
			head +result[page]+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
			"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
			"<input type='button' class='btn btn-large btn-primary' value='标记为查看' id = 'bjck'/>"+
			"<input type='button' class='btn btn-large'' value='返回' onclick='tz()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#syy").click(function(){
		page=page-1; 
		if(result[page]){
			$("#cslb").html(head+result[page]);
		}else{
			alert("当前已经是第一页");
			page = page+1;
		}
	})

	$("#xyy").click(function(){
		page=page+1;
		if(result[page]){
			$("#cslb").html(head+result[page]);
		}else{
			alert("当前已经是最后一页");
			page=page-1;
		}
	})
	$("#bjck").click(function(){
		if ($("input[type='radio']").is(':checked')) {
			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
		var chakanurl="/ipad/custAppInfo/changestate.json";
		$.ajax({
			url:wsHost+chakanurl,
			type: "GET",
			dataType:'json',
			data:{
				id:values[0],
				cardId:values[1],
			},
			success: function (json){
				var obj = $.evalJSON(json);
				alert(obj.mess);
				tz();
			}
		})
	}else{
		alert("请选择一行");
	}
	})
}

//额度评估工具
function edpggj(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>额度评估工具</div>"+  
                    "<div class='content'>" +
                        "<table class='cpTable'>"+  
							"<tr>"+                     
                                "<th colspan='2'>"+
									"客户：<input id='chinesename'  type='text'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
									"证件号码：<input id='cardid' onchange='yzCardId(this)' type='text'/>"+
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
$("#sure").click(function(){
	
	var chinesename=$("#chinesename").val();
	var cardid=$("#cardid").val();
	var khdysr=$("#khdysr").val();
     /*zfqk=zfqk;
	 zcqk=zcqk;
	 yyqk=yyqk;
	 dwxz=dwxz;
	dwgl=dwgl;
	jzsj=jzsj;
	hyzk=hyzk;
	jycd=jycd;
	hjzk=hjzk;
	zgzs=zgzs;
	zc=zc;
	age=age;
	jkqk=jkqk;
	ggjl=ggjl;
	zw=zw;
	grsr=grsr;
	zwsrb=zwsrb;
	syrk=syrk;
	tjr=tjr;*/
	
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
					alert('上传成功!');
					edpggj();
				}else{
					alert('上传失败!');
				}
				
			}})
	}
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
/*function yzCardId(obj){
	var cardid=$(obj).val();
	var edpgUrl="/ipad/selectCardId.json";
	$.ajax({
		url:wsHost + edpgUrl,
		type: "GET",
		dataType:'json',
		data:{cardid:cardid},
		success: function (json) {
			alert(json);
			obj = $.evalJSON(json);
			alert(obj.message);
        	document.getElementById("cardid").value = ""
		}})
}*/
function kh(khjlzgyx1){
	khjlzgyx=khjlzgyx1;
}
function cy(cykh1){
	khdysr=cykh1;
}
function cd(pfdj1,jyed2,num1){

	pfdj=pfdj1;
	jyed=jyed2;
	zf=num1;
	jyed3();
}
function hqz(id,str){
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


//客户经理日报
function khjlrb(){
	var khjirburl ="/ipad/dailyAccount/browse.json";
	var userId = window.sessionStorage.getItem("userId"); 
	$.get(wsHost+khjirburl,{userId:userId},callbackInfor);
	function callbackInfor(json){
		var obj = $.evalJSON(json);
		var tmp ="";
		var result={};
		var page=1;
		var j = 1;
		var head= "<tr>"+                             
		"<th></th>"+  
		"<th>客户经理</th>"+
		"<th>周几</th>"+
		"<th>周报名称</th>"+
		"<th>创建时间</th>"+
		"<th>修改时间</th>"+
		"</tr>";
		for(var i=0;i<obj.totalCount;i++){
			tmp+="<tr onclick='check(this)'>"+    
			"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].id+"@"+obj.items[i].displayName+"@"+
			obj.items[i].whatDay+"@"+obj.items[i].tomorrowplan+"@"+obj.items[i].todayplan+
			"@"+obj.items[i].modifiedTime+"'/>"+"</span></td>"+
			"<td>"+obj.items[i].displayName+"</td>"+
			"<td>"+obj.items[i].whatDay+"</td>"+
			"<td>"+obj.items[i].title+"</td>"+
			"<td>"+obj.items[i].createdTime+"</td>"+
			"<td>"+obj.items[i].modifiedTime+"</td>"+
			"</tr>";

			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}

		}
		result[j]=tmp;
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>客户经理日报</div>"+  
				"<div class='content'>" +
				"<table class='cpTable' id='rblb' style='text-align:center;'>"+
				head+result[page]+ 
				"</table>"+
				"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='修改' id ='xgrb'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='查看' id ='ckrb'/>"+
				"<input type='button' class='btn btn-large' value='返回' onclick='mywdsy()'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();
		$("#xyy").click(function(){
			page=page+1;
			if(result[page]){
				$("#rblb").html(head+result[page]);
			}else{
				alert("当前已经是最后一页");
				page=page-1;
			}
		})
		$("#syy").click(function(){
			page=page-1; 
			if(result[page]){
				$("#rblb").html(head+result[page]);
			}else{
				alert("当前已经是第一页");
				page = page+1;
			}
		})

		$("#xgrb").click(function(){
			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			var resu={};
			resu.rbId =values[0];
			resu.tomorrowplan =values[3];
			resu.todayplan =values[4];
			xgkhrb(resu);

		})
		$("#ckrb").click(function(){
			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			var resu={};
			resu.rbId =values[0];
			resu.tomorrowplan =values[3];
			resu.todayplan =values[4];
			xsrbxx(resu);

		})
	}



}

function xgkhrb(resu){

	var rbxgurl="/ipad/dailyAccount/update.json";
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjlrb()'/>客户经理日报</div>"+  
			"<div class='content'>" +
			"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
			"<tr>"+                        
			"<th colspan='4'>今日工作内容</th></tr>"+ 
			"<tr>"+
			"<td><textarea name='todayplan' id='todayplan' style='height:200px'>"+resu.todayplan+"</textarea>"+
			"</tr>"+
			"<tr><td colspan='4'><h3><b>今日工作内容：</b>（工作地点、工作内容明细、工作总结与感悟等）。</h3></td></tr>"+

			"<tr>"+                        
			"<th colspan='4'>明日工作安排</th></tr>"+ 
			"</tr>"+
			"<td><textarea name='tomorrowplan' id='tomorrowplan' style='height:200px'>"+resu.tomorrowplan+"</textarea>"+
			"</tr>"+
			"<tr><td colspan='4'><h3><b>明日工作计划：</b>（工作计划区域、计划工作事项、业务目标等）。</h3></td></tr>"+

			"</table>"+
			"<p>" +
			"<input type='button' class='btn btn-primary btn-large' value='保存' id='save' />" +
			"<input type='button' class='btn btn-large' value='返回' onclick='khjlrb()'/>" +
			"</p>"+
	"</div>");

	$("#save").click(function(){
		$.ajax({
			url:wsHost+rbxgurl,
			dateType:'json',
			type:'GET',
			//是否异步		
			//			async:false,
			data:{
				userId:window.sessionStorage.getItem("userId"),
				todayplan:$("#todayplan").val(),
				tomorrowplan:$("#tomorrowplan").val(),
				id:resu.rbId,
			},
			success:function (json){
				var obj = $.evalJSON(json);
				alert(obj.message);
				if(obj.success=="true"){
					khjlrb();
				}
			}
		})
	})


}


//显示日报信息

function xsrbxx(resu){

	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khjlrb()'/>客户经理日报</div>"+  
			"<div class='content'>" +
			"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
			"<tr>"+                        
			"<th colspan='4'>今日工作内容</th></tr>"+ 
			"<tr>"+
			"<td><textarea name='todayplan' id='todayplan' style='height:200px' disabled='disabled'>"+resu.todayplan+"</textarea>"+
			"</tr>"+
			"<tr><td colspan='4'><h3><b>今日工作内容：</b>（工作地点、工作内容明细、工作总结与感悟等）。</h3></td></tr>"+

			"<tr>"+                        
			"<th colspan='4'>明日工作安排</th></tr>"+ 
			"</tr>"+
			"<td><textarea name='tomorrowplan' id='tomorrowplan' style='height:200px' disabled='disabled'>"+resu.tomorrowplan+"</textarea>"+
			"</tr>"+
			"<tr><td colspan='4'><h3><b>明日工作计划：</b>（工作计划区域、计划工作事项、业务目标等）。</h3></td></tr>"+

			"</table>"+
			"<p>" +
			"<input type='button' class='btn btn-large' value='返回' onclick='khjlrb()'/>" +
			"</p>"+
	"</div>");




}
//我的足迹
function wzxx(){
	var gxwzUrl = "/ipad/custAppInfo/TySelectAll.json";
	var tmp='';
	var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'正在加载，请稍后......', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#ff0', size:100, type:'o'});  
    
		$.ajax({
			url:wsHost+gxwzUrl,
			dateType:'json',
			type:'GET',
			beforeSend:function(){ 
	        	if(xval) {               
	        	xval.settext("正在加载，请稍后......");                      
	        	}              
	        	}, 
			success:function (json){
				var obj = $.evalJSON(json);
				for(var i = 0;i<obj.size ; i++){
				tmp=tmp+"<option value = '"+obj.result[i].id+"'>"+obj.result[i].displayName+"</option>"
				}
	window.scrollTo(0,0);//滚动条回到顶端
 	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdsy()'/>位置信息</div>"+  
 			"</div>"+
 			"<div class='content' id='allmap' style='height:580px;margin:0 auto;'></div>"+
 			"<div class='content' style ='margin:0 auto;'><p  align='center'>" +
 			"<select id ='userid'>"+"<option value = '0'>请选择客户经理</option>"+
 			tmp+
 			"</select>"+
 			"<input type='button' id='ckkhjlwz' class='btn btn-primary btn-large' value='查看客户经理位置'/>"+  
 			"<input type='button' id='fswdwz' class='btn btn btn-primary btn-large' value='发送我的位置'/>"+  
 			"<input type='button' class='btn btn-large'  value='返回' onclick='mywdsy()'/>"+  
 			"</p></div>"
 	);
 	$(".right").hide();
 	$("#mainPage").show();
 	setTimeout(function() {
 		startGetLocation();
 	},4000);
 	if(lon!="" && lat!=""){
 		xval.remove(); 
 	}
 	/**
 	 * 查看其他客户的地理位置
 	 */
	$("#ckkhjlwz").click(function(){
		var gxwzUrl1 = "/ipad/selectUserByUserid.json";
		var userid=$("#userid").val();
		if(userid!=null||userid!=''){
			$.ajax({
	 			url:wsHost+gxwzUrl1,
	 			dateType:'json',
	 			type:'GET',
	 			//是否异步		
	 //			async:false,
	 			data:{
	 				userId:userid,
	 			},
	 			success:function (json){
	 				var obj = $.evalJSON(json);
	 				var map = new BMap.Map("allmap"); 
						for(var i=0;i<obj.size;i++){
						 	var lon = obj.result[i].lon; 
						 	var lat = obj.result[i].lat; 
							var point = new BMap.Point(""+lon+"",""+lat+""); 
	 					 	map.centerAndZoom(point,15); 
	 					 		var marker  = new BMap.Marker(point); 
	 					 		map.addOverlay(marker); 
	 					 		map.setCenter(point);  
	 					 	showInformation(marker,obj.result[i].create_time,point,map);
	 					}
	 				}
	 			})
		}else{
			alert('请选择客户经理!!');
		}
	})
	/**
	 * 发送当前客户经理的地理位置
	 */
	$("#fswdwz").click(function(){
 		var gxwzUrl = "/ipad/addusercoorinate.json";
 		var userId = window.sessionStorage.getItem("userId");
 		if(lon!=""&&lat!=""){
 		$.ajax({
 			url:wsHost+gxwzUrl,
 			dateType:'json',
 			type:'GET',
 			//是否异步		
 //			async:false,
 			data:{
 				lat:lat,
 				lon:lon,
 				userId:userId,
 			},
 			success:function (json){
 				var obj = $.evalJSON(json);
 				alert(obj.message);
 			}
 
 		})}else{
 			
 			alert("位置信息为空，等待获取位置信息");
 		}
 	})}})
}
var lon="";
var lat="";

function startGetLocation(){

	if(supportsGeoLocation()){ 
		getLocation();
	}else{ 
		alert("不支持 GeoLocation.");
		mywdsy();
	} 

}

//检测浏览器是否支持HTML5 
function supportsGeoLocation(){ 
	return !!navigator.geolocation; 
}   
/**
 * 自动发送坐标
 */
function getLocations(){ 
	navigator.geolocation.getCurrentPosition(mapIts,locationError); 
} 
function mapIts(position){  
	lon = position.coords.longitude; 
	lat = position.coords.latitude; 
	var gxwzUrl = "/ipad/addusercoorinate.json";
	var userId = window.sessionStorage.getItem("userId");
	if(lon!=""&&lat!=""){
		$.ajax({
			url:wsHost+gxwzUrl,
			dateType:'json',
			type:'GET',
			//是否异步		
			//			async:false,
			data:{
				lat:lat,
				lon:lon,
				userId:userId,
			},
			success:function (json){
				var obj = $.evalJSON(json);
				alert(obj.message);
			}

		})

	}else{
		alert("无法获取当前位置，请检查网络连接和GPS权限"); 

	}
}

//单次位置请求执行的函数              
function getLocation(){ 
	navigator.geolocation.getCurrentPosition(mapIt,locationError); 
} 
//定位成功时，执行的函数 
function mapIt(position){  
	lon = position.coords.longitude; 
	lat = position.coords.latitude; 
	

    //alert("您位置的经度是："+lon+" 纬度是："+lat); 
	var map = new BMap.Map("allmap"); 
	var point = new BMap.Point(""+lon+"",""+lat+""); 
	map.centerAndZoom(point,19); 
	var gc = new BMap.Geocoder(); 
	translateCallback = function (point){ 
		var marker = new BMap.Marker(point);
		var infoWindow;
		map.addOverlay(marker); 
		map.setCenter(point); 
		gc.getLocation(point, function(rs){ 
			var addComp = rs.addressComponents; 
			if(addComp.province!==addComp.city){ 
				var sContent = 
					"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>你当前的位置是：</h4>" +  
					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
					"</div>";} 
			else{ 
				var sContent = 
					"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>你当前的位置是：</h4>" +  
					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+ addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
					"</div>"; 
			} 
			infoWindow = new BMap.InfoWindow(sContent); 
			map.openInfoWindow(infoWindow,point); 
		});  
		 marker.addEventListener("click", function () {  
			
	         map.openInfoWindow(infoWindow,point);  
	         
	     }); 
	}                     
	BMap.Convertor.translate(point,0,translateCallback); 
   
} 
//定位失败时，执行的函数 
function locationError(error) 
{ 
	switch(error.code) 
	{ 
	case error.PERMISSION_DENIED: 
		alert("无法完成定位请求"); 
		break; 
	case error.POSITION_UNAVAILABLE: 
		alert("位置信息不可用"); 
		break; 
	case error.TIMEOUT: 
		alert("请求超时"); 
		break; 
	case error.UNKNOWN_ERROR: 
		alert("位置错误发生了"); 
		break; 
	} 
} 
function showInformation(marker,updatetime,point,map){
	 var gc = new BMap.Geocoder(); 
	 marker.addEventListener("click", function(){
			 gc.getLocation(point, function(rs){ 
	 			var addComp = rs.addressComponents; 
	 			if(addComp.province!==addComp.city){ 
	 				var sContent = 
	 					"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>该项目经理在:"+updatetime+"的位置是：</h4>" +  
	 					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
	 					"</div>";} 
	 			else{ 
	 				var sContent = 
	 					"<div><h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+"位置是：</h4>" +  
	 					"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+ addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber+"</p>" +  
	 					"</div>"; 
	 			} 
	 			var infoWindow = new BMap.InfoWindow(sContent); 
	 			map.openInfoWindow(infoWindow,point);
	 		});
	 })
}
