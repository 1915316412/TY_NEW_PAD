//我的计划
function mywdjh(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'>计划管理</div>"+  
			"<div class='content'>" +
			"<div class='box jhgl' onclick='khwhjhlb()'><img src='images/khwhjh.png' style='margin-left:-15px;'/><span>客户维护计划</span></div>"+
			"<div class='box jhgl' onclick='khcsjh()'><img src='images/khcsjh.png' style='margin-left:-15px;'/><span>客户催收计划</span></div>"+
			"<div class='box jhgl' onclick='pxjh()'><img src='images/pxjh.png' style='margin-left:-15px;'/><span>培训计划</span></div>"+
			"<div class='box jhgl' onclick='gzjh()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>工作计划</span></div>"+                       
			"<div class='box jhgl' onclick='yjjdlr()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>业绩进度录入</span></div>"+ 
			"<div class='box jhgl' onclick='yjjdcx()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>业绩进度查看</span></div>"+ 
			"<div class='box jhgl' onclick='myshsp()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>审核审批</span></div>"+ 
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
//客户维护计划
function khwhjhlb(){
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
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户维护-客户维护列表</div>"+  
					"<div class='content'>"+
					"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+

					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='添加维护计划' id = 'tjwhjh'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='mywdjh()'/></p>"+
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
					objs.currentlo="khwhjhlb()";
					tjkhwhjh(objs);
				}else{
					alert("请选择一行");
				}
			})
		}
	})


}
//function mykhwhjh(){
//window.scrollTo(0,0);//滚动条回到顶端
//$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户维护计划</div>"+ 
//"<div class='content'>"+
//"<table class='cpTable' style='text-align:center;'>"+
//"<tr>"+                             
//"<th>序号</th>"+  
//"<th>客户姓名</th>"+
//"<th>客户身份标识</th>"+
//"<th>产品标识</th>"+
//"<th>贷款金额</th>"+
//"<th>还款状态</th>"+
//"<th>贷款余额</th>"+
//"<th width='10%'>维护方式</th>"+
//"<th width='10%'>维护目标</th>"+
//"<th>维护时间</th>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label'>还款中</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-warning'>已逾期</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-success'>已还款</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-important'>已拒绝</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"<tr>"+    
//"<td>1</td>"+
//"<td>郝俊芝</td>"+
//"<td></td>"+
//"<td></td>"+
//"<td>100000</td>"+
//"<td><span class='label label-inverse'>已关闭</span></td>"+
//"<td>50000</td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='text' class='addinput'/></td>"+
//"<td><input type='date' class='addinput'/></td>"+
//"</tr>"+
//"</table>"+
//"<p><input type='button' class='btn btn-large btn-primary' value='保存' onclick='mywdjh()'/></p>"+
//"</div>");
//$(".right").hide();
//$("#mainPage").show();
//}   
//客户催收计划
function khcsjh(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户催收计划</div>"+ 
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
			"<th width='10%'>催收方式</th>"+
			"<th width='10%'>催收目标</th>"+
			"<th>催收时间</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td>郝俊芝</td>"+
			"<td></td>"+
			"<td></td>"+
			"<td>100000</td>"+
			"<td><font class='red'>3000<font></td>"+
			"<td>1</td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"<td><input type='date' class='addinput'/></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存' onclick='mywdjh()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}   
//培训计划
function pxjh(){

	var pxjhurl ="/ipad/NotifictionMessage/browse.json";
	var userId = window.sessionStorage.getItem("userId") ;
	var tmp="";
	var result=[];
	var page=1;
	var j=1;
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>序号</th>"+  
	"<th>通知标题</th>"+
	"<th>通知内容</th>"+
	"<th>是否查看</th>"+
	"</tr>";
	$.ajax({
		url:wsHost+pxjhurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
		},
		success:function(json){
			var obj = $.evalJSON(json);
			for(var i =0;i<obj.result.items.length;i++){

				if(obj.result.items[i].isCheck=="0"){
					obj.result.items[i].isCheck ="未查看";
				}
				tmp += "<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result.items[i].id+"@"+obj.result.items[i].userId+"'/></span></td>"
					+"<td>"+(Number(i)+1)+"</td>"+
					"<td>"+obj.result.items[i].noticeTitle+"</td>"+
					"<td>"+obj.result.items[i].noticeContent+"</td>"+
					"<td>"+obj.result.items[i].isCheck+"</td></tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					tmp="";
					j++;
				}
			}
			result[j]=tmp;

			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tz()'/>培训通知</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='已查看' id = 'yck'/>"+
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
			$("#yck").click(function(){
				
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var xgjhurl="/ipad/NotifictionMessage/delete.json";
					$.ajax({
						url:wsHost+xgjhurl,
						type: "GET",
						dataType:'json',
						data:{
							id:values[0],
						},
						success:function(json){
							var obj = $.evalJSON(json);
							alert(obj.mess);
							pxjh();
						}
					})
				}else{
					alert("请选择一行");
				}
				
			})
		}
	})




}   
//工作计划
function gzjh(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>工作计划</div>"+ 
			"<div class='content'>"+
			"<table id='gzjh' class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th style='width:100px;'>序号</th>"+  
			"<th>工作事项描述</th>"+
			"<th>地点</th>"+
			"<th>时间</th>"+
			"<th>实施状态</th>"+
			"<th>实施描述</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>1</td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"<td><input type='date' class='addinput'/></td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"<td><input type='text' class='addinput'/></td>"+
			"</tr>"+
			"</table>"+
			"<p class='Left'>" +
			"<button class='add-button' onclick='addTd(\"gzjh\")'><img src='images/add.png'/></button>" +
			"<button class='add-button' onclick='removeTd(\"gzjh\")'><img src='images/del.png'/></button>" +
			"</p>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存' onclick='mywdjh()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}  
function yjjdlr(){

	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>业绩进度录入</div>"+  
			"<div class='content' >"+ 
			"<table id='cslb' class='cpTable jjTable' style='text-align:center;'>"+

			"<tr>"+                             
			"<th style='width:100px;'>拜访数</th>"+  
			"<td><input type='text' class='yejijindu' id='visitcount' name='visitcount' value='0' onfocus='onfocuss' onblur=alert('qqqqq')/></td>"+
			"<th style='width:100px;'>申请数</th>"+  
			"<td><input type='text' class='yejijindu' value='0' id='applycount' name='applycount'/></td>"+
			"<th style='width:100px;'>申请拒绝数</th>"+  
			"<td><input type='text' class='yejijindu' value='0' id='applyrefuse' name='applyrefuse'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>征信数</th>"+  
			"<td><input type='text' class='' value='0' id='creditcount' name='creditcount'/></td>"+
//			"<td><input type='text' class='addinput' value='0' id='creditcount' name='creditcount'/></td>"+
			"<th style='width:100px;'>征询拒绝数</th>"+  
			"<td><input type='text' class='' value='0' id='creditrefuse' name='creditrefuse'/></td>"+
			"<th style='width:100px;'>实调数</th>"+  
			"<td><input type='text' class='' value='0' id='realycount' name='realycount'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>报告数</th>"+  
			"<td><input type='text' class='' value='0' id='reportcount' name='reportcount'/></td>"+
			"<th style='width:100px;'>内审数</th>"+  
			"<td><input type='text' class='' value='0' id='internalcount' name='internalcount'/></td>"+
			"<th style='width:100px;'>上会数</th>"+  
			"<td><input type='text' class='' value='0' id='meetingcout' name='meetingcout'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>通过数</th>"+  
			"<td><input type='text' class='' value='0' id='passcount' name='passcount'/></td>"+
			"<th style='width:100px;'>签约数</th>"+  
			"<td><input type='text' class='' value='0' id='signcount' name='signcount'/></td>"+
			"<th style='width:100px;'>放款数</th>"+  
			"<td><input type='text' class='' value='0' id='givemoneycount' name='givemoneycount' /></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存' id = 'save' />"+
			"<input type='button' class='btn btn-large' value='返回' onclick='mywdjh()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();  
	$("#save").click(function (){
		var yjjdurl="/ipad/performmance/update.json";
		$.ajax({
			url:wsHost+yjjdurl,
			type: "GET",
			dataType:'json',
			data:{
				userId:window.sessionStorage.getItem("userId"),
				visitcount:$("#visitcount").val(),
				applycount:$("#applycount").val(),
				applyrefuse:$("#applyrefuse").val(),
				creditcount:$("#creditcount").val(),
				creditrefuse:$("#creditrefuse").val(),
				realycount:$("#realycount").val(),
				reportcount:$("#reportcount").val(),
				internalcount:$("#internalcount").val(),
				meetingcout:$("#meetingcout").val(),
				passcount:$("#passcount").val(),
				signcount:$("#signcount").val(),
				givemoneycount:$("#givemoneycount").val(),
			},
			success: function (json){
				var obj = $.evalJSON(json);
				alert(obj.mess);
			}
		})
	})
	
}

function yjjdcx(){
	var jdcxurl ="/ipad/performmance/browse.page";
	var body ="";
	$.get(wsHost+jdcxurl,callbackInfor);
	
	function callbackInfor(json){
		var obj = $.evalJSON(json);
		for(var i=0;i<obj.result.length;i++){
			
			if(obj.result[i].managerName=="小计" || obj.result[i].managerName=="总计"){
				
				body=body+"<tr><th>"+obj.result[i].name+"</th>"+
				"<th>"+obj.result[i].managerName+"</th>"+
				"<th>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</th>"+
				"<th>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</th>"+
				"<th>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</th>"+
				"<th>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</th>"+
				"<th>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</th>"+
				"<th>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</th>"+
				"<th>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</th>"+
				"<th>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</th>"+
				"<th>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</th>"+
				"<th>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</th>"+
				"<th>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</th>"+
				"<th>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</th></tr>";
				
			}else{
				
				body=body+"<tr><td>"+obj.result[i].name+"</td>"+
				"<td>"+obj.result[i].managerName+"</td>"+
				"<td>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</td>"+
				"<td>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</td>"+
				"<td>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</td>"+
				"<td>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</td>"+
				"<td>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</td>"+
				"<td>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</td>"+
				"<td>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</td>"+
				"<td>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</td>"+
				"<td>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</td>"+
				"<td>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</td>"+
				"<td>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</td>"+
				"<td>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</td></tr>";
				
			}
			
		}
		var head ="<tr>"+
		"<th>管辖行:</th>"+
		"<th>客户经理:</th>"+
		"<th>拜访数:</th>"+
		"<th>申请数:</th>"+
		"<th>申请拒绝数:</th>"+
		"<th>征信数:</th>"+
		"<th>征信拒绝数:</th>"+
		"<th>实调数:</th>"+
		"<th>报告数:</th>"+
		"<th>内审数:</th>"+
		"<th>上会数:</th>"+
		"<th>通过数:</th>"+
		"<th>签约数:</th>"+
		"<th>放款数:</th></tr>";
		
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>业绩进度查询</div>"+  
				"<div class='content' >"+ 
				"<span>开始日期:&nbsp;<input type ='date' id='satrtDate'/></span>"+
				"<span>结束日期:&nbsp;<input type ='date' id='endDate'/></span>"+
				"<input type='button' class='btn btn-large btn-primary next' value='确定' id='sure'/>" +
				"<table id='sslb' class='cpTable jjTable' style='text-align:center;'>"+
				
				head+body+
				"</table>"+
				"<p><input type='button' class='btn btn-large btn-primary' value='修改业绩进度' id = 'save' onclick='yjjdxg()' />"+
				"<input type='button' class='btn btn-large' value='返回' onclick='mywdjh()'/></p>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show(); 
		
		$("#sure").click(function(){
			$.ajax({
				url:wsHost+jdcxurl,
				type: "GET",
				dataType:'json',
				data:{
					startdate:$("#satrtDate").val(),
					enddate:$("#endDate").val(),
				},
				success: function (json){
					var obj = $.evalJSON(json);
					var booo="";
					for(var i=0;i<obj.result.length;i++){
						
						if(obj.result[i].managerName=="小计" || obj.result[i].managerName=="总计"){
							
							booo=booo+"<tr><th>"+obj.result[i].name+"</th>"+
							"<th>"+obj.result[i].managerName+"</th>"+
							"<th>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</th>"+
							"<th>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</th>"+
							"<th>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</th>"+
							"<th>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</th>"+
							"<th>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</th>"+
							"<th>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</th>"+
							"<th>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</th>"+
							"<th>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</th>"+
							"<th>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</th>"+
							"<th>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</th>"+
							"<th>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</th>"+
							"<th>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</th></tr>";
							
						}else{
							
							booo=booo+"<tr><td>"+obj.result[i].name+"</td>"+
							"<td>"+obj.result[i].managerName+"</td>"+
							"<td>"+obj.result[i].visitcount_s+"("+obj.result[i].visitcount+")"+"</td>"+
							"<td>"+obj.result[i].applycount_s+"("+obj.result[i].applycount+")"+"</td>"+
							"<td>"+obj.result[i].applyrefuse_s+"("+obj.result[i].applyrefuse+")"+"</td>"+
							"<td>"+obj.result[i].creditcount_s+"("+obj.result[i].creditcount+")"+"</td>"+
							"<td>"+obj.result[i].creditrefuse_s+"("+obj.result[i].creditrefuse+")"+"</td>"+
							"<td>"+obj.result[i].realycount_s+"("+obj.result[i].realycount+")"+"</td>"+
							"<td>"+obj.result[i].reportcount_s+"("+obj.result[i].reportcount+")"+"</td>"+
							"<td>"+obj.result[i].internalcount_s+"("+obj.result[i].internalcount+")"+"</td>"+
							"<td>"+obj.result[i].meetingcout_s+"("+obj.result[i].meetingcout+")"+"</td>"+
							"<td>"+obj.result[i].passcount_s+"("+obj.result[i].passcount+")"+"</td>"+
							"<td>"+obj.result[i].signcount_s+"("+obj.result[i].signcount+")"+"</td>"+
							"<td>"+obj.result[i].givemoneycount_s+"("+obj.result[i].givemoneycount+")"+"</td></tr>";
							
						}
						
					}
					$("#sslb").html(head+booo);
				}
			})
			
		})
	}
}
function yjjdxg(){
	var	managerList=window.sessionStorage.getItem("managerList");
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>业绩进度修改</div>"+  
			"<div class='content' >"+ 
			"<table id='cslb' class='cpTable jjTable' style='text-align:center;'>"+
			"<tr>"+ 
			"<th style='width:100px;'>指定日期</th>"+  
			"<td><input class='addinput' type ='date' id='changeDate'/></td>"+
			"<th style='width:100px;'>客户经理</th>"+  
			"<td><select id ='manager_id_s' name='manager_id' >"+"<option value = '0'>请选择</option>"
			+managerList+
			"</select></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>拜访数</th>"+  
			"<td><input type='text' class='addinput' id='visitcount' name='visitcount' value='0' onfocus='onfocuss' onblur=alert('qqqqq')/></td>"+
			"<th style='width:100px;'>申请数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='applycount' name='applycount'/></td>"+
			"<th style='width:100px;'>申请拒绝数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='applyrefuse' name='applyrefuse'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>征信数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='creditcount' name='creditcount'/></td>"+
			"<th style='width:100px;'>征询拒绝数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='creditrefuse' name='creditrefuse'/></td>"+
			"<th style='width:100px;'>实调数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='realycount' name='realycount'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>报告数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='reportcount' name='reportcount'/></td>"+
			"<th style='width:100px;'>内审数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='internalcount' name='internalcount'/></td>"+
			"<th style='width:100px;'>上会数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='meetingcout' name='meetingcout'/></td>"+
			"</tr>"+
			"<tr>"+                             
			"<th style='width:100px;'>通过数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='passcount' name='passcount'/></td>"+
			"<th style='width:100px;'>签约数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='signcount' name='signcount'/></td>"+
			"<th style='width:100px;'>放款数</th>"+  
			"<td><input type='text' class='addinput' value='0' id='givemoneycount' name='givemoneycount' /></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存' id = 'save' />"+
			"<input type='button' class='btn btn-large' value='返回' onclick='yjjdcx()'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();  
	$("#save").click(function (){
		var yjjdurl="/ipad/performmance/performUpdate.json";
		 var managerId = $("#manager_id").val();
		 var changedate = $("#changedate").val();
		$.ajax({
			url:wsHost+yjjdurl,
			type: "GET",
			dataType:'json',
			data:{
				userId:window.sessionStorage.getItem("userId"),
				visitcount:$("#visitcount").val(),
				applycount:$("#applycount").val(),
				applyrefuse:$("#applyrefuse").val(),
				creditcount:$("#creditcount").val(),
				creditrefuse:$("#creditrefuse").val(),
				realycount:$("#realycount").val(),
				reportcount:$("#reportcount").val(),
				internalcount:$("#internalcount").val(),
				meetingcout:$("#meetingcout").val(),
				passcount:$("#passcount").val(),
				signcount:$("#signcount").val(),
				givemoneycount:$("#givemoneycount").val(),
				manager_id:$("#manager_id_s").val(),
				changedate:$("#changeDate").val(),
			},
			success: function (json){
				var obj = $.evalJSON(json);
				alert(obj.mess);
			}
		})
		
	})
	 $("#manager_id_s").on("change",function(){
		 var managerId = $("#manager_id_s").val();
		 var changedate = $("#changeDate").val();
		 if(changedate==null||changedate==""){
			 alert("请先选择修改日期！");
			 yjjdxg();
		 }else{
		 var xgjdurl ="/ipad/performmance/performselect.json"
		 $.ajax({
				url : wsHost+xgjdurl,
				type : "get",
				dataType:'json',
				data : {"managerId":managerId,"changedate":changedate},
				success : function(data) {
					if(data!="null"){
					var obj = jQuery.parseJSON(data);
					$("#visitcount").val(obj.visitcount);
					$("#applycount").val(obj.applycount);
					$("#applyrefuse").val(obj.applyrefuse);
					$("#creditcount").val(obj.creditcount);
					$("#creditrefuse").val(obj.creditrefuse);
					$("#realycount").val(obj.realycount);
					$("#reportcount").val(obj.reportcount);
					$("#internalcount").val(obj.internalcount);
					$("#meetingcout").val(obj.meetingcout);
					$("#passcount").val(obj.passcount);
					$("#signcount").val(obj.signcount);
					$("#givemoneycount").val(obj.givemoneycount);
					yjjdxg();
					}else{
						$("#visitcount").val("0");
						$("#applycount").val("0");
						$("#applyrefuse").val("0");
						$("#creditcount").val("0");
						$("#creditrefuse").val("0");
						$("#realycount").val("0");
						$("#reportcount").val("0");
						$("#internalcount").val("0");
						$("#meetingcout").val("0");
						$("#passcount").val("0");
						$("#signcount").val("0");
						$("#givemoneycount").val("0");
					}
				}
			});
		 }
	 });
}