function myzbgl(){
	
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'>众包管理</div>"+  
			"<div class='content'>" +
			"<div class='box shsp1' onclick='zbjjlb()'>" +                            
			"<span>众包进件</span>"+
			"</div>"+
			"<div class='box shsp2' onclick='zbglxx()'>" +
			"<span>众包管理</span>"+
			"</div>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	
}
function zbjjlb(){
	
	var userId = window.sessionStorage.getItem("userId");
	var obj = null;
	var wsLoginUrl = "/ipad/product/zhongbaocustomerbrower.json"+"?userId="+userId;
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
	//"<th>是否可以抢单</th>"+
	"</tr>";  
	var qd;
	var get = crud.dom.factory("GET");
	get.doGet(wsLoginUrl,callbackInfor,"加载抢单列表信息失败！");
//			if(obj.custInfo!=null){
			function callbackInfor(json){
			
				var obj = $.evalJSON(json);
			for(var i = 0;i<obj.list.length;i++){
				if(obj.list[i].cardType=="0"){
					obj.list[i].cardType="身份证";
				}else if(obj.list[i].cardType=="1"){
					obj.list[i].cardType="军官证";
				}else if(obj.list[i].cardType=="2"){
					obj.list[i].cardType="护照";
				}else if(obj.list[i].cardType=="3"){
					obj.list[i].cardType="香港身份证";
				}else if(obj.list[i].cardType=="4"){
					obj.list[i].cardType="澳门身份证";
				}else if(obj.list[i].cardType=="5"){
					obj.list[i].cardType="台湾身份证";
				} if(obj.list[i].createdBy==userId){
					qd="<td><label class='label' style='background:#7a867f;'>否</label></td>"
				}else{
					qd="<td><label class='label' style='background:#B87333  '>是</label></td>";
				}
				tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.list[i].createdBy+"@"+
				obj.list[i].applyQuota+"@"+obj.list[i].customerId+"@"+obj.list[i].id+
				"@"+obj.list[i].status+"@"+obj.list[i].examineAmount+"'/>"+"</span></td>"+  
				"<td>"+obj.list[i].chineseName+"</td>"+
				//"<td>"+obj.list[i].applyQuota+"</td>"+
				"<td>"+obj.list[i].cardType+"</td>"+
				"<td>"+obj.list[i].cardId+"</td>"+
				"<td>"+obj.list[i].telephone+"</td>"+
				//qd+
				"</tr>"

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
				window.scrollTo(0,0);//滚动条回到顶端
				$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myzbgl()'/>客户管理-众包进件</div>"+  
						"<div class='content'>"+
						"<table class='cpTable' id = 'cslb' style='text-align:center;'>"+
						head +result[page]+
						"</table>"+
						"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
						"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
						"<input type='button' class='btn btn-large btn-primary' onclick ='zbjjxx()' value='发布进件'/>"+ 
						"<input type='button' id ='sure' class='btn btn-large btn-primary' value='抢单'/>"+ 
						"<input type='button' class='btn btn-large'' value='返回' onclick='myzbgl()'/></p>"+
				"</div>");
				$(".right").hide();
				$("#mainPage").show();
				$("#xyy").click(function(){
					page=page+1;
					if(result[page]){
						$("#cslb").html(head+result[page]);
					}else{
						alert("当前已经是最后一页");
						page=page-1;
					}
				})
				
				$("#sure").click(function(){
					if ($("input[type='radio']").is(':checked')) {

						var values =$('input[name="checkbox"]:checked').attr("value").split("@");
						var userId = window.sessionStorage.getItem("userId");
						var cteatedBy =values[0];
						var customerId = values[3];
						if(userId==cteatedBy){
							alert("不能抢自己的单");
						}else{
						var userType = window.sessionStorage.getItem("userType");
						if(userType!=1){
							alert("您的角色不能抢单");
						}else{
						var qiangUrl="/ipad/product/getcustomerbrower.json?customerId="+customerId+"&userId="+userId;
						get.doGet(qiangUrl,qiangdancallbackInfor,"抢单超时！");
						
						function qiangdancallbackInfor(json){
							var obj = $.evalJSON(json);
							alert(obj.mess);
							zbjjlb();
						}
						}
					}
					}else{
						alert("请选择一行");
					}
				})
				
				$("#syy").click(function(){
					page=page-1; 
					if(result[page]){
						$("#cslb").html(head+result[page]);
					}else{
						alert("当前已经是第一页");
						page = page+1;
					}
				})
			
//			}else{ 
//				alert("暂无可抢单列表");
//			}




}
	
	
}
function zbjjxx(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='zbjjlb()'/>众包管理-众包进件</div>"+  
	                    "<div class='content' style='height:320px;padding-top:80px;background:url(images/book.jpg) no-repeat center center;'>" +
	                        "<p>客户姓名:<input type='text' id ='khname'/></p>"+
	                        "<p>证件类型:<select id ='cardType'>" +
	                        "<option value='0'>身份证</option>" +
	                        "<option value='1'>军官证</option>"+
	                        "<option value='2'>护照</option>"+
	                        "<option value='3'>香港身份证</option>"+
	                        "<option value='4'>澳门身份证</option>"+
	                        "<option value='5'>台湾身份证</option>"+
	                        "</select></p>"+
	                        "<p>证件号码:<input type='text' id = 'cardId'/></p>"+
	                        "<p>手机号码:<input type='text' id = 'phone'/></p>"+
	                        "<p>" +
	                            "<input type='button' id ='sure' class='btn btn-large btn-primary' value='发布'/>"+  
	                            "<input type='button' class='btn btn-large' value='返回' onclick='zbjjlb()'/>"+
	                            "</p>" +
	                    "</div>");
	    $(".right").hide();
	    $("#mainPage").show();    
	//点击确定插入
		$("#sure").click(function() {
			var chineseName = $("#khname").val();
			var cardId = $("#cardId").val();
			var cardType = $("#cardType").val();
			var tel = $("#phone").val();
			var userId = window.sessionStorage.getItem("userId");
			if(cardId==""||cardId==null||chineseName==""||chineseName==null){
				alert("证件号码或姓名不能为空");
			}else{
				var wsLoginUrl = "/ipad/product/zhongbaocustomerInsert.json"+"?cardId="+cardId+"&chineseName="+chineseName+"&cardType="+cardType+"&userId="+userId+"&phoneNumber="+tel;
				
				$.ajax({
			        url:wsHost + wsLoginUrl,
			        type: "GET",
			        dataType:'json',
			        success: function (json) {
			        	var objs = $.evalJSON(json);
			        	alert(objs.message);
			        	document.getElementById("khname").value = ""
			        	document.getElementById("cardId").value = ""
			        	document.getElementById("phone").value = ""
			        }
				})
			}
		})
}

function zbglxx(){
	var zbglxxurl ="/ipad/zhongbaocustomerIntopiece/browse.json";
	var userId = window.sessionStorage.getItem("userId");
	var userType = window.sessionStorage.getItem("userType");
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
		url:wsHost + zbglxxurl,
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
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myzbgl()'/>客户进件信息-进件详情</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='myzbgl()'/></p>"+
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
