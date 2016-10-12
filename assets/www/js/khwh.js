//客户维护-客户资料查询
function khzlcx(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户管理-客户资料查询</div>"+  
			"<div class='content' style='height:280px;padding-top:80px;background:url(images/book.jpg) no-repeat center center;'>" +
			"<p>客户姓名:<input type='text' id ='customerName'/></p>"+
			"<p>证件类型:<select><option>身份证</option></select></p>"+
			"<p>证件号码:<input type='text' id ='cardId'/></p>"+
			"<p><input type='button' id = 'select' class='btn btn-large btn-primary' value='查询'/></p>" +
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#select").click(function() {
		var customerName = $("#customerName").val();
		var cardId = $("#cardId").val();
		if(cardId!=""||customerName!=""){
			var objs={};
			objs.chineseName=customerName;
			objs.cardId=cardId;
			khcx(objs);
		}else{
			alert("请输入证件号码或姓名");
		}
	})
}
//客户维护-客户资料查询-查询
function khcx(objs){
	var userId = window.sessionStorage.getItem("userId");
	var obj = null;
	var wsLoginUrl = "/ipad/product/selectCustomerInfoByCardId.json"+"?cardId="+objs.cardId+"&chineseName="+objs.chineseName+"&userId="+userId;
	$.ajax({
		url:wsHost + wsLoginUrl,
		type: "GET",
		dataType:'json',
		success: function (json) {
			obj = $.evalJSON(json);
			if(obj.custInfo!=null){
				window.scrollTo(0,0);//滚动条回到顶端
//				$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khzlcx()'/>客户管理-客户资料查询</div>"+  
//				"<div class='content'>" +
//				"<table class='cpTable'>"+
//				"<tr>"+                             
//				"<th colspan='2' id ='top'> "+obj.chineseName+"&nbsp;&nbsp;&nbsp;&nbsp;"+obj.cardId+"</td>"+  
//				"</tr>"+
//				"<tr>"+                             
//				"<td style='width:25%;'>贷款进度</td>"+          
//				"<td>审核中</td>"+
//				"</tr>"+
//				"<tr>"+                             
//				"<td>还款状态</td>"+  
//				"<td>已放款</td>"+
//				"</tr>"+
//				"</table>"+
//				"<p><input type='button' class='btn btn-large btn-primary' value='客户资料查询' id = 'khzlcx'/></p>" +
//				"</div>");
				$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khzlcx()'/>客户管理-客户资料查询-客户原始信息</div>"+  
						"<div class='content'>"+
						"<table class='cpTable' style='text-align:center;'>"+
						"<tr>"+                             
						"<th>客户姓名</th>"+
						"<th>证件类型</th>"+
						"<th>证件号码</th>"+
						"<th>手机</th>"+
						"</tr>"+
						obj.custInfo +
						"</table>"+
						"<p><input type='button' class='btn btn-large btn-primary' value='返回' onclick='khzlcx()'/></p>"+
				"</div>");
				$(".right").hide();
				$("#mainPage").show();

				$("#khzlcx").click(function(){

					khysxx(obj);

				})
			}else{ 
				alert("查询失败，无此人信息或不是您的客户");
			}

		}
	})

}
//客户维护-客户维护列表---
function khwhlb(){
	window.scrollTo(0,0);//滚动条回到顶端	
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var obj;
	var head ="<tr>"+   
	"<th></th>"+ 
	"<th>序号</th>"+  
	"<th>客户姓名</th>"+
	"<th>证件号码</th>"+
	"<th>产品名称</th>"+
	"<th>客户经理</th>"+"</tr>";

	var khwhurl="/ipad/product/getMaintenanceList.json"+"?userId="+userId+"&userType="+userType;
	$.ajax({
		url:wsHost + khwhurl,
		type: "GET",
		dataType:'json',
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				tmp=tmp+"<tr onclick='check(this)'>"+
                "<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].chineseName+"@"+
                obj.result[i].productName+"@"+obj.result[i].cardId+
                "@"+obj.result[i].customerId+"@"+obj.result[i].appId+"'"+"/>"+"</span></td>"+
				"<td>"+i+"</td>"+
				"<td>"+obj.result[i].chineseName+"</td>"+
				"<td>"+obj.result[i].cardId+"</td>"+
				"<td>"+obj.result[i].productName+"</td>"+
				"<td>"+obj.result[i].userName+"</td>"+
				"</tr>";
				
				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户维护-客户维护列表</div>"+  
					"<div class='content'>"+
					"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+

					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='添加维护计划' id = 'tjwhjh'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='editUser()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xyy").click(function(){
				page=page+1;
				if(obj[page]){
					$("#whlb").html(head+result[page]);
				}else{
					alert("当前已经是最后一页");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1;
				if(obj[page]){
					$("#whlb").html(head+result[page]);
				}else{
					alert("当前已经是第一页");
					page = page+1;
				}
			})
			$("#tjwhjh").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var objs={};
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					objs.chineseName = values[0];
					objs.productName = values[1];
					objs.getCardId = values[2];
					objs.customerId = values[3];
					objs.appId = values[4];
					objs.currentlo="khwhlb()";
					tjkhwhjh(objs);
				}else{
					alert("请选择一行");
				}
			})
		}
	})


}
//客户维护-添加客户维护计划
function tjkhwhjh(objs){
	var khwejhxzurl = "/ipad/custAppInfo/insertMaintenance.json";
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick = '"+objs.currentlo+"'/>客户维护-客户维护列表-添加客户维护计划</div>"+  
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>产品标识</th>"+
			"<th>证件号码</th>"+
//			"<th>贷款金额</th>"+
//			"<th>还款状态</th>"+
//			"<th>贷款余额</th>"+
			"<th>维护方式</th>"+
			"<th style='width:15%;'>维护目标</th>"+
			"<th style='width:15%;'>维护天数</th>"+
//			"<th style='width:15%;'>维护时间</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td id = 'customerName'>"+objs.chineseName+"</td>"+
			"<td id = 'product'>"+objs.productName+"</td>"+
			"<td id = 'product'>"+objs.getCardId+"</td>"+
//			"<td id = 'money'>100000</td>"+
//			"<td id = 'state'>还款中</td>"+
//			"<td id = 'dkye'>50000</td>"+
//			"<td><input type='text' class='addinput' id = 'whfs'/></td>"+
			"<td><select style='width:75%;' id ='whfs'>" +
			"<option value='01'>电话</option>" +
			"<option value='02'>短信</option>" +
			"<option value='03'>上门</option>" +
			"</select></td>"+

			"<td><input type='text' class='addinput' id = 'whmb'/></td>"+
			"<td><input type='text' class='addinput' id = 'whsj'/></td>"+
//			"<td><input type='date' class='addinput' id = 'whsj'/></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' id = 'save'/>" +
			"<input type='button' class='btn btn-large btn-primary' value='返回' onclick = '"+objs.currentlo+"'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();

	var userId = window.sessionStorage.getItem("userId");
	$("#save").click(function(){
		var number =/^\d+$/;
		if($("#whsj").val()!=""&&number.test( $("#whsj").val())){
			$.ajax({
				url:wsHost + khwejhxzurl,
				type: "GET",
				dataType:'json',
				data:{
					customerManagerId: userId,
					customerId:objs.customerId,
					appId:objs.appId,
					createWay : $("#whfs").val(),
					maintenanceGoal : $("#whmb").val(),
					maintenanceDay : $("#whsj").val()
				},
				success: function (json) {
					obj = $.evalJSON(json);
					alert(obj.result);
					khwhlb();
				}
			})
		}else{
			alert("维护天数格式不正确或为空");
		}
	})
}   
//客户维护-客户维护日志
function khwhrz(){

	var khwhrz ="/ipad/product/getMaintenance.json";
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var sumpage;
	var head = "<tr>"+                             
	"<th></th>"+  
	"<th>客户姓名</th>"+
	"<th>证件号码</th>"+
	"<th>产品名称</th>"+
	"<th>所属客户经理</th>"+			
	"</tr>";
	$.ajax({
		url:wsHost + khwhrz,
		type: "GET",
		dataType:'json',
		data:{
			userId: userId,
			userType:userType,
		},
		success: function (json) {
			var obj = $.evalJSON(json);
			for(var i = 0;i<obj.totalCount;i++){
				tmp=tmp+"<tr onclick='check(this)'>"+"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].chineseName+"@"+
				obj.items[i].cardId+"@"+obj.items[i].productName+"@"+obj.items[i].productId+
				"@"+obj.items[i].userName+"@"+obj.items[i].id+"'/>"+"</span></td>"+  
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].cardId+"</td>"+
				"<td>"+obj.items[i].productName+"</td>"+
				"<td>"+obj.items[i].userName+"</td>"+			
				"</tr>"
				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			
			/*	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户维护日志</div>"+  
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>维护方式</th>"+
			"<th>维护时间</th>"+
			"<th>实施效果</th>"+
			"<th>是否变更维护计划</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td>2015-12-12</td>"+
			"<td></td>"+
			"<td><input type='button' onclick='tjkhwhjh()' class='btn btn-warning' value='是'/></td>"+
			"</tr>"+
			"</table>"+
			"<textarea placeholder='客户维护实施描述' style='height:15em;'></textarea>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='editUser()'/></p>"+
	"</div>");
			 */	
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户维护-客户维护日志</div>"+  
					"<div class='content'>"+
					"<table id = 'rzlb' class='cpTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='维护计划列表' id = 'whrzlb'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='editUser()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#rzlb").html(head+result[page]);
				}else{
					alert("当前已经是最后一页");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#rzlb").html(head+result[page]);
				}else{
					alert("当前已经是第一页");
					page = page+1;
				}
			})
			$("#whrzlb").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var objs={};
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					objs.productId = values[3];
					objs.customerId = values[5];

					whrzlb(objs);
				}else{
					alert("请选择一行");
				}
			})

		}
	})
}   
//客户维护-客户维护日志-维护计划列表
function whrzlb(objs){
	var whrzlbUrl ="/ipad/product/MaintenanceLogInfo.json";
	var body="";
	$.ajax({
		url:wsHost + whrzlbUrl,
		type: "GET",
		dataType:'json',
		data:{
			productId: objs.productId,
			customerId:objs.customerId
		},
		success: function (json) {
			obj = $.evalJSON(json);
			if(obj.result.totalCount!=0){
				for(var i = 0;i<obj.result.totalCount;i++){
					body=body+"<tr onclick='check(this)'>"+"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result.items[i].chineseName+"@"+
					obj.result.items[i].cardId+"@"+obj.result.items[i].appId+"@"+obj.result.items[i].id+"@"+obj.result.items[i].productName+"@"+obj.result.items[i].productId+
					"@"+obj.result.items[i].userName+"'/>"+"</span></td>"+  
					"<td>"+obj.result.items[i].chineseName+"</td>"+
					"<td>"+obj.result.items[i].cardId+"</td>"+
					"<td>"+obj.result.items[i].productName+"</td>"+
					"<td>"+obj.result.items[i].startDay+"--"+obj.result.items[i].endDay+"</td>"+
					"<td>"+obj.result.items[i].userName+"</td>"+			
					"</tr>"
				}
			}else{
				body="<tr></tr>"
			}
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khwhrz()'/>客户维护-客户维护日志-维护计划列表</div>"+  
					"<div class='content'>"+
					"<table class='cpTable' style='text-align:center;'>"+
					"<tr>"+                             
					"<th></th>"+  
					"<th>客户姓名</th>"+
					"<th>证件号码</th>"+
					"<th>产品名称</th>"+
					"<th>维护时间</th>"+
					"<th>客户经理</th>"+
					"</tr>"+
					body+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='显示' id='rzxs'/>" +
					"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='khwhrz()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();

			$("#rzxs").click(function() {
				if ($("input[type='radio']").is(':checked')) {
					var obj={};
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					obj.appId = values[2];
					obj.maintenanceId = values[3];
					obj.productId=objs.productId,
					obj.customerId=objs.customerId
					whrzxs(obj);
				}else{
					alert("请选择一行");
				}
			})


		}
	})
}
//客户维护-客户维护日志-维护计划列表-计划信息显示
function whrzxs(objs){
	var whrzxsurl ="/ipad/product/MaintenanceLogInfo_brower.json";

	$.ajax({
		url:wsHost + whrzxsurl,
		type: "GET",
		dataType:'json',
		data:{
			appId: objs.appId,
			maintenanceId:objs.maintenanceId,
		},
		success: function (json) {
			obj = $.evalJSON(json);
			var ob = {};
			ob.chineseName = obj.maintenance.chineseName;
			ob.productName = obj.maintenance.productName;
			ob.getCardId = obj.maintenance.cardId;
			ob.customerId =obj.maintenance.customerId;
			ob.appId = objs.appId;
			ob.maintenanceId = objs.maintenanceId;
			ob.productId = objs.productId;
			$("#mainPage").html("<div class='title'><img src='images/back.png' id = 'whrzlb'/>客户维护-客户维护日志-维护计划列表-计划信息显示</div>"+  
					"<div class='content'>"+
					"<table class='cpTable' style='text-align:center;'>"+
					"<tr>"+                             
					"<th>序号</th>"+  
					"<th>客户姓名</th>"+
					"<th>产品名称</th>"+
					"<th>维护方式</th>"+
					"<th>维护时间</th>"+
					"<th>维护目标</th>"+
					"<th>还款状态</th>"+
					"<th>授信金额</th>"+
					"<th>维护变更</th>"+
					"</tr>"+
					"<tr>"+    
					"<td>1</td>"+
					"<td>"+obj.maintenance.chineseName+"</td>"+
					"<td>"+obj.maintenance.productName+"</td>"+
					"<td>"+obj.maintenance.maintenanceWay+"</td>"+
					"<td>"+obj.maintenance.maintenanceDay+"</td>"+
					"<td>"+obj.maintenance.maintenanceGoal+"</td>"+
					"<td>"+obj.maintenance.repayStatus+"</td>"+
					"<td>"+obj.maintenance.actualQuote+"</td>"+
					"<td><input type='button' onclick='tjkhwhjh()' class='btn btn-warning' value='是' id='gxwhjh'/></td>"+
					"</tr>"+
					"</table>"+
//					"<textarea placeholder='客户维护实施描述' style='height:15em;'></textarea>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='返回主页面' onclick='editUser()'/>" +
					"<input type='button' class='btn btn-large btn-primary' value='返回上一步' id='whrzlbb'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();

			$("#gxwhjh").click(function(){
				gxkhwhjh(ob);
			})
			$("#whrzlb").click(function(){
				whrzlb(objs);
			})
			$("#whrzlbb").click(function(){
				whrzlb(objs);
			})
		}
	})
}
//客户维护-客户维护日志-维护计划列表-计划信息显示-变更维护计划
function gxkhwhjh(objs){
	window.scrollTo(0,0);//滚动条回到顶端
	var khwhjhxgurl =  "/ipad/product/Maintenanceupdate.json";
	$("#mainPage").html("<div class='title'><img src='images/back.png' id = 'whrzxss'/>客户维护-客户维护日志-维护计划列表-计划信息显示-变更维护计划</div>"+  
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>产品标识</th>"+
			"<th>证件号码</th>"+
//			"<th>贷款金额</th>"+
//			"<th>还款状态</th>"+
//			"<th>贷款余额</th>"+
			"<th>维护方式</th>"+
			"<th style='width:15%;'>维护目标</th>"+
			"<th style='width:15%;'>维护天数</th>"+
//			"<th style='width:15%;'>维护时间</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td id = 'customerName'>"+objs.chineseName+"</td>"+
			"<td id = 'product'>"+objs.productName+"</td>"+
			"<td id = 'product'>"+objs.getCardId+"</td>"+
//			"<td id = 'money'>100000</td>"+
//			"<td id = 'state'>还款中</td>"+
//			"<td id = 'dkye'>50000</td>"+
//			"<td><input type='text' class='addinput' id = 'whfs'/></td>"+
			"<td><select style='width:75%;' id ='whfs'>" +
			"<option value='01'>电话</option>" +
			"<option value='02'>短信</option>" +
			"<option value='03'>上门</option>" +
			"</select></td>"+

			"<td><input type='text' class='addinput' id = 'whmb'/></td>"+
			"<td><input type='text' class='addinput' id = 'whsj'/></td>"+
//			"<td><input type='date' class='addinput' id = 'whsj'/></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' id = 'save'/>" +
			"<input type='button' class='btn btn-large btn-primary' value='返回' id = 'whrzxs'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();

	var userId = window.sessionStorage.getItem("userId");
	var obb ={};
	obb.appId = objs.appId;
	obb.maintenanceId = objs.maintenanceId;
	obb.maintenanceId = objs.maintenanceId;
	obb.productId = objs.productId;
	obb.customerId = objs.customerId;

	$("#whrzxs").click(function(){

		whrzxs(obb);
	})
	$("#whrzxss").click(function(){

		whrzxs(obb);
	})
	$("#save").click(function(){
		var number =/^\d+$/;
		if($("#whsj").val()!=""&&number.test( $("#whsj").val())){
			$.ajax({
				url:wsHost + khwhjhxgurl,
				type: "GET",
				dataType:'json',
				data:{
					maintenanceId:objs.maintenanceId,
					customerManagerId: userId,
					customerId:objs.customerId,
					appId:objs.appId,
					createWay : $("#whfs").val(),
					maintenanceGoal : $("#whmb").val(),
					maintenanceDay : $("#whsj").val()
				},
				success: function (json) {
					obj = $.evalJSON(json);
					alert(obj.messages.globalMessages[0].message);
					whrzxs(obb);
				}
			})
		}else{
			alert("维护天数格式不正确或为空");
		}
	})
}   
//客户维护-客户催收日志
function khcsrz(){
	var userId = window.sessionStorage.getItem("userId");
	var wsLoginUrl = "/ipad/product/findRiskCustomerCollectionPlansByFilter.json"+"?userId="+userId;
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	$.ajax({
		url:wsHost + wsLoginUrl,
		type: "GET",
		dataType:'json',
		success: function (json){
			obj = $.evalJSON(json);

			for(var i = 0;i<obj.totalCount;i++){
				if(obj.items[i].collectionMethod=="01"){
					obj.items[i].collectionMethod="电话";
				}else if(obj.items[i].collectionMethod=="02"){
					obj.items[i].collectionMethod="短信";
				}else if(obj.items[i].collectionMethod=="03"){
					obj.items[i].collectionMethod="上门";
				}

				if(obj.items[i].endResult=="collection"){
					obj.items[i].endResult="催收中";
				}else if(obj.items[i].endResult=="repaymentcommitments"){
					obj.items[i].endResult="承诺还款";
				}else if(obj.items[i].endResult=="losecontact"){
					obj.items[i].endResult="失联";
				}else if(obj.items[i].endResult=="reject"){
					obj.items[i].endResult="拒绝";
				}else if(obj.items[i].endResult=="hang"){
					obj.items[i].endResult="挂起";
				}else if(obj.items[i].endResult=="continuecollection"){
					obj.items[i].endResult="继续催收";
				}else if(obj.items[i].endResult=="complete"){
					obj.items[i].endResult="催收完成";
				}
				tmp=tmp+"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.items[i].id+"@"+obj.items[i].chineseName+"@"+
				obj.items[i].productName+"@"+obj.items[i].collectionMethod+"@"+obj.items[i].implementationObjective+"@"+obj.items[i].collectionTime+"@"+obj.items[i].endResult+
				"@"+obj.items[i].size+"'/>"+"</span></td>"+
				"<td>"+obj.items[i].chineseName+"</td>"+
				"<td>"+obj.items[i].productName+"</td>"+
				"<td>"+obj.items[i].collectionMethod+"</td>"+
				"<td>"+obj.items[i].implementationObjective+"</td>"+
				"<td>"+obj.items[i].collectionTime+"</td>"+
				"<td>"+obj.items[i].endResult+"</td>"+
				"<td>"+obj.items[i].size+"</td>"
				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp

			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>客户维护-客户催收日志</div>"+  
					"<div class='content'>"+
					"<table class='cpTable' style='text-align:center;'>"+
					"<tr>"+  
					"<th>序号</th>"+  
					"<th>客户姓名</th>"+
					"<th>产品名称</th>"+
					"<th>催收方式</th>"+
					"<th>催收目标</th>"+
					"<th>催收天数</th>"+
					"<th>催收结果</th>"+
					"<th>实施记录数目</th>"+
//					"<th>序号</th>"+  
//					"<th>客户姓名</th>"+
//					"<th>客户身份标识</th>"+
//					"<th>催收方式</th>"+
//					"<th>催收时间</th>"+
//					"<th>实施效果</th>"+
//					"<th>承诺还款金额</th>"+
//					"<th>承诺还款时间</th>"+
//					"<th>是否变更催收计划</th>"+
					"</tr>"+
					"<tr id = 'cslb' onclick='check(this)'>"+   
					result[page]+
//					"<td></td>"+
//					"<td>郝俊芝</td>"+
//					"<td></td>"+
//					"<td>电话</td>"+
//					"<td>2015-12-12</td>"+
//					"<td></td>"+
//					"<td>3000</td>"+
//					"<td>2015-12-12</td>"+
//					"<td><input type='button' onclick='bgcsjh()' class='btn btn-warning' value='是'/></td>"+
					"</tr>"+
					"</table>"+
//					"<textarea placeholder='客户催收实施描述' style='height:15em;'></textarea>"+
					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='显示' id = 'csxs'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='返回' onclick = 'editUser()' id = 'fh'/>"+
//					"<input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='editUser()'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xyy").click(function(){
				page=page+1;
				if(result[page]){
					$("#cslb").html(result[page]);
				}else{
					alert("当前已经是最后一页");
					page=page-1;
				}
			})
			$("#syy").click(function(){
				page=page-1; 
				if(result[page]){
					$("#cslb").html(result[page]);
				}else{
					alert("当前已经是第一页");
					page = page+1;
				}
			})
			$("#csxs").click(function(){
			if ($("input[type='radio']").is(':checked')) {
				var values =$('input[name="checkbox"]:checked').attr("value").split("@");
				var id = values[0];
				xscsjh(id);
			}else{
				alert("请选择一行");
			}
			})
		}
	})
} 

function xscsjh(id){
	
	var csjhxx = "/ipad/product/browerRiskcustomer.json";
	$.ajax({
		url:wsHost + csjhxx,
		type: "GET",
		dataType:'json',
		data:{
			collectionPlanId:id,
			},
		success: function (json){
		}
	
	})
	
}
//变更催收计划
function bgcsjh(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='editUser()'/>杨景琳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01010419</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>序号</th>"+  
			"<th>客户姓名</th>"+
			"<th>客户身份标识</th>"+
			"<th>产品标识</th>"+
			"<th>贷款金额</th>"+
			"<th>逾期金额</th>"+
			"<th>逾期期数</th>"+
			"<th>催收方式</th>"+
			"<th>催收目标</th>"+
			"<th>催收时间</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td>100000</td>"+
			"<td>3000</td>"+
			"<td>1</td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"<td><input type='date' class='addinput'/></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存并继续' onclick='editUser()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}   