//退回客户列表
function ckqtthkhlb(userId){
	var jjcxurl="/ipad/customerIntopiece/browse2.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>客户姓名</th>"+
	"<th>产品名称</th>"+
	"<th>申请金额</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>节点名称</th>"+
	"<th>退回原因</th>"+
	"<th>所属客户经理</th>"+
	"</tr>";
	var thkh='';
	var abc={};
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			userId: userId,
		},
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				if(obj.list[i].status=="returnedToFirst"){
					obj.list[i].status="退回至客户经理";
				}
				if(obj.list[i].status=="nopass_replenish"){
					obj.list[i].status="退回至客户经理";
				}
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.list[i].customerId+"@"+
				obj.list[i].productId+"@"+
				obj.list[i].chineseName+"@"+
				obj.list[i].id+"@"+
				obj.list[i].productName+"'"+"/>"+"</span></td>"+
				"<td>"+obj.list[i].chineseName+"</td>"+
				"<td>"+obj.list[i].productName+"</td>"+
				"<td>"+obj.list[i].applyQuota+"</td>"+
				"<td>"+obj.list[i].cardId+"</td>"+
				"<td>"+obj.list[i].status+"</td>"+
				"<td>审批结束</td>"+
				"<td>"+obj.list[i].fallBackReason+"</td>"+
				"<td>"+obj.list[i].displayName+"</td>"+
				"</tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='thkhlb()'/>重新调查客户" +
					"</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='审贷会纪要' id = 'sdhjy'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='thkhlb()'/></p>"+
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
			$("#sdhjy").click(function(){
					if ($("input[type='radio']").is(':checked')) {
						var values =$('input[name="checkbox"]:checked').attr("value").split("@");
						var objs={};
						objs. chineseName=values[2];
						objs. productName=values[4];
						objs. applyQuota=values[5];
						objs. id=values[3];
						thysdhjy(objs,userId);
					}else{
						alert('请选择一行!!!');
					}
				})
		}
	})
}   





function khskcg(userId){
	var jjcxurl="/ipad/customerIntopiece/browse3.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var fkje;
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
	"<th>所属客户经理</th>"+
	//"<th>退回原因</th>"+
	//"<th>拒绝原因</th>"+
	"</tr>";
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			userId: userId,
		},
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				
				if(obj.list[i].actual_quote==""){
					fkje="<td>"+obj.list[i].actual_quote+"</td>";
					obj.list[i].status="准备放款";
				}else{
					fkje="<td>"+obj.list[i].actual_quote+"</td>";
					obj.list[i].status="放款完成";
				}
		
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox'  value='"+obj.list[i].productId+"@"+
				obj.list[i].customerId+"@"+
				i+"@"+
				obj.list[i].chineseName+"@"+
				obj.list[i].productName+"@"+
				obj.list[i].applyQuota+"@"+
				obj.list[i].id+"'"+"/>"+"</span></td>"+
				"<td>"+obj.list[i].chineseName+"</td>"+
				"<td>"+obj.list[i].productName+"</td>"+
				"<td>"+obj.list[i].applyQuota+"</td>"+
				"<td>"+obj.list[i].final_approval+"</td>"+
				fkje+
				"<td>"+obj.list[i].cardId+"</td>"+
				"<td>"+obj.list[i].status+"</td>"+
				"<td>审批结束</td>"+
				"<td>"+obj.list[i].displayName+"</td>"+
				//"<td>"+obj.list[i].fallBackReason+"</td>"+
				//"<td>"+obj.list[i].refusqlReason+"</td>"+
				"</tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='tgkhlb()'/>通过客户" +
					"</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='审贷会纪要' id = 'sdhjy'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='tgkhlb()'/></p>"+
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
			$("#sdhjy").click(function(){
				if ($("input[type='radio']").is(':checked')) {
					var values =$('input[name="checkbox"]:checked').attr("value").split("@");
					var objs={};
					objs. chineseName=values[3];
					objs. productName=values[4];
					objs. applyQuota=values[5];
					objs. id=values[6];
					sdhjy(objs,userId);
				}else{
					alert('请选择一行!!!');
				}
			})
		}
	})
}




//拒绝客户列表
function jjkelbcx(userId){
	var jjcxurl="/ipad/customerIntopiece/browse1.json";
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                             
	"<th></th>"+  
	"<th>客户姓名</th>"+
	"<th>产品名称</th>"+
	"<th>申请金额</th>"+
	//"<th>审贷金额</th>"+
	//"<th>合同金额</th>"+
	"<th>证件号码</th>"+
	"<th>审核状态</th>"+
	"<th>节点名称</th>"+
	//"<th>退回原因</th>"+
	"<th>拒绝原因</th>"+
	"<th>所属客户经理</th>"+
	"</tr>";
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			userId: userId,
		},
		success: function (json) {
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
			/*	if(obj.items[i].status=="save"){
					obj.items[i].status="未申请";
				}else if(obj.items[i].status=="audit"){
					obj.items[i].status="已申请";
				}else if(obj.items[i].status=="returnedToFirst"){
					obj.items[i].status="退回至客户经理";
				}else if(obj.items[i].status=="end"){
					obj.items[i].status="放款成功";
				}else if(obj.items[i].status=="nopass"){
					obj.items[i].status="申请未通过";
				}*/ if(obj.list[i].status=="refuse"){
					obj.list[i].status="被拒接";
				}/*else if(obj.items[i].status=="approved"){
					obj.items[i].status="审批结束";
				}else if(obj.items[i].status=="succeed"){
					obj.items[i].status="申请成功";
				}*/
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.list[i].chineseName+"@"+
				obj.list[i].productName+"@"+
				obj.list[i].applyQuota+"@"+
				obj.list[i].id+"'"+"/>"+"</span></td>"+
				"<td>"+obj.list[i].chineseName+"</td>"+
				"<td>"+obj.list[i].productName+"</td>"+
				"<td>"+obj.list[i].applyQuota+"</td>"+
				//"<td>"+obj.list[i].finalApproval+"</td>"+
				//"<td>"+obj.list[i].reqlmt+"</td>"+
				"<td>"+obj.list[i].cardId+"</td>"+
				"<td>"+obj.list[i].status+"</td>"+
				"<td>审批结束</td>"+
				//"<td>"+obj.list[i].fallBackReason+"</td>"+
				"<td>"+obj.list[i].refusqlReason+"</td>"+
				"<td>"+obj.list[i].displayName+"</td>"+
				"</tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='jjkhlb()'/>拒绝客户</div>"+ 
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='审贷会纪要' id = 'sdhjy'/>"+
					"<input type='button' class='btn btn-large' value='返回' onclick='jjkhlb()'/></p>"+
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
			$("#sdhjy").click(function(){
					if ($("input[type='radio']").is(':checked')) {
						var values =$('input[name="checkbox"]:checked').attr("value").split("@");
						var objs={};
						objs. chineseName=values[0];
						objs. productName=values[1];
						objs. applyQuota=values[2];
						objs. id=values[3];
						jjsdhjy(objs,userId);
					}else{
						alert('请选择一行!!!');
					}
				})
		}
	})
}  