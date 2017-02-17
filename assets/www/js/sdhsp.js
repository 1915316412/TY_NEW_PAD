function sdhjy(objs,userId1){
	var userId = window.sessionStorage.getItem("userId");
	var jjcxurl="/ipad/findCsSd.json";
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			id: objs.id,
		},
		success: function (json) {
			obj = $.evalJSON(json);
$("#mainPage").html("<div class='title'><img src='images/back.png' id='back'/>审贷纪要</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请人：</th>"+
					"<td><input type ='text' value='"+objs.chineseName+"' readonly = 'true'>"+
					"</td>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+objs.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					/*"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+res.sxqj+"' readonly = 'true'/>"+
					"</td>"+*/
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+objs.productName+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>初审信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审批金额：</th>"+
					"<td><input type ='text' value='"+obj.result.examineAmount+"' readonly = 'true'>"+
					"</td>"+
					"<th>审批利率：</th>"+
					"<td><input type ='text' value='"+obj.result.examineLv+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>审批期限：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.result.qx+"' readonly = 'true'/>"+
					"</td>"+
					"<th>审批人一：</th>"+
					"<td><input type = 'text' value='"+obj.result.name1+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+
					"<th>审批人二：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.result.name2+"' readonly = 'true'/>"+
					"</td>"+
					"<th>审批人三：</th>"+
					"<td><input type = 'text' value='"+obj.result.name3+"' readonly = 'true'></td>"+
					"</tr>"+
					
					"<tr>"+
					"<th>记录员：</th>"+
					"<td><input type = 'text' value='"+obj.result.name4+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审贷决议</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议结论：</th>"+
					"<td>通过"+
					"</td>"+
					"<th>授信额度：</th>"+
					"<td><input type='text' value='"+obj.result.SDJE+"' id ='sxed' name='decision_amount'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>利率</th>"+
					"<td><input id='decisionRate' value='"+obj.result.SDLV+"' type='text' name='decision_rate'/>"+
					"</td>"+
					"<th>审贷委一：</th>"+
					"<td><input type = 'text' value='"+obj.result.SDWUSER1+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+
					"<th>审贷委二：</th>"+
					"<td><input type = 'text' value='"+obj.result.SDWUSER2+"' readonly = 'true'></td>"+
					"<th>审贷委三：</th>"+
					"<td><input type = 'text' value='"+obj.result.SDWUSER3+"' readonly = 'true'></td>"+
					"</tr>"+
					
					"<tr >"+
					"<th>期限：</th>"+
					"<td><input type = 'text' value='"+obj.result.SDQX+"' readonly = 'true'></td>"+
					"<tr >"+
					"<th><label id ='sdw11' for=reason>审贷委一意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw1'>"+obj.result.SDWUSER1YJ+"</textarea>" +
					"</td>" +
					"<th><label id ='sdw11' for=reason>审贷委二意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw2'>"+obj.result.SDWUSER1YJ+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr >"+
					"<th><label id ='sdw31' for=reason>审贷委三意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw3'>"+obj.result.SDWUSER1YJ+"</textarea>" +
					"</td>" +
					"</tr>"+
				/*	"<tr style='display :none'>"+
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'></textarea>" +
					"</td>" +
					"</tr>"+*/
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-large' value='返回' id='backk'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#backk").click(function(){
				if(userId1==null){
					tgkhlb();
				}else{
					khskcg(userId1);
				}
			})
			$("#back").click(function(){
				if(userId1==null){
					tgkhlb();
				}else{
					khskcg(userId1);
				}
			})
		}})
}


function jjsdhjy(objs,userId1){
	var obj;
	var userId = window.sessionStorage.getItem("userId");
	var jjcxurl="/ipad/findCsSdRefuse.json";
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			id: objs.id,
		},
		success: function (json) {
			obj = $.evalJSON(json);
			if(obj.result==null & obj.result1==null){
				alert('该进件未通过初审，无审贷纪要!!');
			}else{
				$("#mainPage").html("<div class='title'><img src='images/back.png' id='back'/>审贷纪要</div>"+  
						"<div class='content'>" +
						"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
						"<tr>"+                        
						"<th colspan='4'>进件申请信息</th>"+  
						"</tr>"+
						"<tr>"+
						"<th>申请人：</th>"+
						"<td><input type ='text' value='"+objs.chineseName+"' readonly = 'true'>"+
						"</td>"+
						"<th>申请金额：</th>"+
						"<td><input type ='text' value='"+objs.applyQuota+"' readonly = 'true'>"+
						"</td>"+
						"</tr>"+
						"<tr>"+
						/*"<th>产品授信区间：</th>"+
						"<td><input type='text' id='sxqj' value='"+res.sxqj+"' readonly = 'true'/>"+
						"</td>"+*/
						"<th>产品名称：</th>"+
						"<td><input type = 'text' value='"+objs.productName+"' readonly = 'true'></td>"+
						"</tr>"+
						"<tr>"+                        
						"<th colspan='4'>初审信息</th>"+  
						"</tr>"+
						"<tr>"+
						"<th>审批金额：</th>"+
						"<td><input type ='text' value='"+obj.result.examineAmount+"' readonly = 'true'>"+
						"</td>"+
						"<th>审批利率：</th>"+
						"<td><input type ='text' value='"+obj.result.examineLv+"' readonly = 'true'>"+
						"</td>"+
						"</tr>"+
						"<tr>"+
						"<th>审批期限：</th>"+
						"<td><input type='text' id='sxqj' value='"+obj.result.qx+"' readonly = 'true'/>"+
						"</td>"+
						"<th>审批人一：</th>"+
						"<td><input type = 'text' value='"+obj.result1.name1+"' readonly = 'true'></td>"+
						"</tr>"+
						"<tr>"+
						"<th>审批人二：</th>"+
						"<td><input type='text' id='sxqj' value='"+obj.result1.name2+"' readonly = 'true'/>"+
						"</td>"+
						"<th>审批人三：</th>"+
						"<td><input type = 'text' value='"+obj.result1.name3+"' readonly = 'true'></td>"+
						"</tr>"+
						
						"<tr>"+
						"<th>记录员：</th>"+
						"<td><input type = 'text' value='"+obj.result1.name4+"' readonly = 'true'></td>"+
						"</tr>"+
						"<tr>"+                        
						"<th colspan='4'>审贷决议</th>"+  
						"</tr>"+
						"<tr>"+
						"<th>审议结论：</th>"+
						"<td>拒绝"+
						"</td>"+
						"</tr>"+
						"<tr>"+
						"<th>审贷委一：</th>"+
						"<td><input type = 'text' value='"+obj.result1.SDWUSER1+"' readonly = 'true'></td>"+
						"</tr>"+
						"<tr>"+
						"<th>审贷委二：</th>"+
						"<td><input type = 'text' value='"+obj.result1.SDWUSER2+"' readonly = 'true'></td>"+
						"<th>审贷委三：</th>"+
						"<td><input type = 'text' value='"+obj.result1.SDWUSER3+"' readonly = 'true'></td>"+
						"</tr>"+
						
						"<tr >"+
						"<th><label id ='sdw11' for=reason>审贷委一意见:</label></th>"+
						"<td><textarea name='decisionRefusereason' id='sdw1'>"+obj.result.SDWUSER1YJ+"</textarea>" +
						"</td>" +
						"<th><label id ='sdw11' for=reason>审贷委二意见:</label></th>"+
						"<td><textarea name='decisionRefusereason' id='sdw2'>"+obj.result.SDWUSER1YJ+"</textarea>" +
						"</td>" +
						"</tr>"+
						"<tr >"+
						"<th><label id ='sdw31' for=reason>审贷委三意见:</label></th>"+
						"<td><textarea name='decisionRefusereason' id='sdw3'>"+obj.result.SDWUSER1YJ+"</textarea>" +
						"</td>" +
						"<th><label id ='reason' for=reason>原因:</label></th>"+
						"<td><textarea name='decisionRefusereason' id='decisionRefusereason'>"+obj.result.refusalreaso+"</textarea>" +
						"</td>" +
						"</tr>"+
						"</table>"+
						"<p>" +
						"<input type='button' class='btn btn-large' value='返回' id='backk'/>" +
						"</p>"+
				"</div>");
				$(".right").hide();
				$("#mainPage").show();
				$("#backk").click(function(){
					if(userId1==null){
						jjkhlb();
					}else{
						jjkelbcx(userId1);
					}
				})
				$("#back").click(function(){
					if(userId1==null){
						jjkhlb();
					}else{
						jjkelbcx(userId1);
					}
				})
			}
		}})
}


function thysdhjy(objs,userId1){
	var obj;
	var userId = window.sessionStorage.getItem("userId");
	var jjcxurl="/ipad/findCsSdBlack.json";
	$.ajax({
		url:wsHost + jjcxurl,
		type: "GET",
		dataType:'json',
		data:{
			id: objs.id,
		},
		success: function (json) {
			obj = $.evalJSON(json);
			if(obj.result==null & obj.result1==null){
				alert('该进件未通过初审，无审贷纪要!!');
			}else{
$("#mainPage").html("<div class='title'><img src='images/back.png' id='back'/>审贷纪要</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请人：</th>"+
					"<td><input type ='text' value='"+objs.chineseName+"' readonly = 'true'>"+
					"</td>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+objs.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					/*"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+res.sxqj+"' readonly = 'true'/>"+
					"</td>"+*/
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+objs.productName+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>初审信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审批金额：</th>"+
					"<td><input type ='text' value='"+obj.result.examineAmount+"' readonly = 'true'>"+
					"</td>"+
					"<th>审批利率：</th>"+
					"<td><input type ='text' value='"+obj.result.examineLv+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>审批期限：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.result.qx+"' readonly = 'true'/>"+
					"</td>"+
					"<th>审批人一：</th>"+
					"<td><input type = 'text' value='"+obj.result1.name1+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+
					"<th>审批人二：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.result1.name2+"' readonly = 'true'/>"+
					"</td>"+
					"<th>审批人三：</th>"+
					"<td><input type = 'text' value='"+obj.result1.name3+"' readonly = 'true'></td>"+
					"</tr>"+
					
					"<tr>"+
					"<th>记录员：</th>"+
					"<td><input type = 'text' value='"+obj.result1.name4+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审贷决议</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议结论：</th>"+
					"<td>拒绝"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>审贷委一：</th>"+
					"<td><input type = 'text' value='"+obj.result1.SDWUSER1+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+
					"<th>审贷委二：</th>"+
					"<td><input type = 'text' value='"+obj.result1.SDWUSER2+"' readonly = 'true'></td>"+
					"<th>审贷委三：</th>"+
					"<td><input type = 'text' value='"+obj.result1.SDWUSER3+"' readonly = 'true'></td>"+
					"</tr>"+
					
					"<tr >"+
					"<th><label id ='sdw11' for=reason>审贷委一意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw1'>"+obj.result.SDWUSER1YJ+"</textarea>" +
					"</td>" +
					"<th><label id ='sdw11' for=reason>审贷委二意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw2'>"+obj.result.SDWUSER1YJ+"</textarea>" +
					"</td>" +
					"</tr>"+
					"<tr >"+
					"<th><label id ='sdw31' for=reason>审贷委三意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw3'>"+obj.result.SDWUSER1YJ+"</textarea>" +
					"</td>" +
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'>"+obj.result.FALLBACK_REASON+"</textarea>" +
					"</td>" +
					"</tr>"+
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-large' value='返回' id='backk'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#backk").click(function(){
				if(userId1==null){
					thkhlb();
				}else{
					thkhlb(userId1);
				}
			})
			$("#back").click(function(){
				if(userId1==null){
					thkhlb();
				}else{
					thkhlb(userId1);
				}
			})}
		}})
		
}