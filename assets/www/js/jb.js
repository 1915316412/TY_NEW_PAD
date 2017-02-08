function ckqtjj(){
	var csjlurl="/ipad/customer/selectqujl.json";
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost+csjlurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId
		},
		success: function (json){
			var obj = $.evalJSON(json);
			if(obj.b==0){
				alert("对不起，无权限访问");
			}else if(obj.b==1){
				qyck(obj);
			}
			else if(obj.b==2){
				var type=1;
				xzcy(obj,type);
			}	
		}})
}

//如果是区域经理
function qyck(obj){
	var tmp ="";
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>小组名称</th>"+
	"<th>区域</th>"+
	"</tr>";
	for(var i=0;i<obj.size;i++){
		tmp=tmp+"<tr onclick='check(this)'>"+
		"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.depart[i].name+"@"+
		obj.depart[i].id+"'"+"/>"+"</span></td>"+
		"<td>"+obj.depart[i].name+"</td>"+
		"<td>"+obj.depart[i].qname+"</td>"+
		"</tr>";
	}
			
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' id='back'/>"+obj.depart[0].qname+"</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' id='llll' style='text-align:center;'>"+
			head+tmp+
			"</table>"+
			"<p>" +
			"<input type='button' class='btn btn-large' value='查看小组' id ='see'/></p>"+
				"</p>" +
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#back").click(function(){
		tz();
	})
	$("#see").click(function(){
		 $("#see").attr('disabled',true);
		if ($("input[type='radio']").is(':checked')) {
			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			var id=values[1];
			var url="/ipad/customer/selectDUser.json";
			$.ajax({
				url:wsHost+url,
				type: "GET",
				dataType:'json',
				data:{
					id:id
				},
				success: function (json){
					var obj = $.evalJSON(json);
					var type=2;
					 xzcy(obj,type);
				}})
			
		}else{
			alert('请选择一行')
		}
	})
}
var objs={};
var obj1={};
var displayName;
//小组成员
function xzcy(obj,type){
	obj1=obj;
	var tmp ="";
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>小组成员</th>"+
	"<th>小组名称</th>"+
	"</tr>";
	for(var i=0;i<obj.size;i++){
		tmp=tmp+"<tr onclick='check(this)'>"+
		"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].displayName+"@"+
		obj.result[i].id+"'"+"/>"+"</span></td>"+
		"<td>"+obj.result[i].displayName+"</td>"+
		"<td>"+obj.result[i].name+"</td>"+
		"</tr>";
	}
			
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' id='back'/>"+obj.result[0].name+"</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' id='llll' style='text-align:center;'>"+
			head+tmp+
			"</table>"+
			"<p>" +
			"<input type='button' class='btn btn-large' value='查看进件详情' id ='see'/></p>"+
				"</p>" +
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#back").click(function(){
		if(type==1){
			tz();	
		}else{
			ckqtjj();
		}
	})
	$("#see").click(function(){
		 $("#see").attr('disabled',true);
		if ($("input[type='radio']").is(':checked')) {
			var values =$('input[name="checkbox"]:checked').attr("value").split("@");
			 displayName=values[0];
			var id=values[1];
			var url="/ipad/customer/selectAllcustormerId.json";
			$.ajax({
				url:wsHost+url,
				type: "GET",
				dataType:'json',
				data:{
					userId:id
				},
				success: function (json){
					var obj = $.evalJSON(json);
					objs=obj;
					 tjtxs(obj,type);
					 jjtju1();
				}})
			
		}else{
			alert('请选择一行')
		}
	})
}
function jjtju1(){
	var ex1 = {                         
			"type": "pie",
			"legend":{},
			"backgroundColor":"#fff",
			"series": [
			           {   
			        	   "backgroundColor":"#f9294b","text": "拒绝进件数量  "+objs.resufeCount,"values": [objs.resufeCount]
			           },
			           {   
			        	   "backgroundColor":"#578ef3","text": "审核通过数量  "+objs.successCount,"values": [objs.successCount]
			           },
			           {   
			        	   "backgroundColor":"#f4b726","text": "未申请进件数量  "+objs.Nosq,"values": [objs.Nosq]
			           },
			           {   
			        	   "backgroundColor":"#fe7215","text": "待审批进件数量  "+objs.NospCount,"values": [objs.NospCount]
			           },
			           {   
			        	   "backgroundColor":"#4e74c0","text": "退回进件数量  "+objs.BackCount,"values": [objs.BackCount]
			           }
			           ]
	};
	// render example one
	$('#ex_1').zingchart({
		data:ex1
	}); 
}
function tjtxs(obj,type){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'>"+displayName+"</div>"+  
			"<div class='content'>" +
			"<div id='ex_1' class='zingchart'></div>"+ 
			"<div class='ban'></div>"+
			"<p>" +
		"<input type='button' class='tab-button' value='返回' id='backk'/>" +
			"</p>" +
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#backk").click(function(){
		 $("#backk").attr('disabled',true);
		xzcy(obj1,type);
	})
}
