function xdkh(){
	var userId = window.sessionStorage.getItem("userId");
	var khwhurl="/ipad/customer/selectUserXD.json";
	var tmp="";
	var result=[];
	var page=1;
	var j=1;
	var aaa;
	var head ="<tr>"+   
	/*"<th>业务编号</th>"+ */
	"<th>客户号</th>"+ 
	"<th>客户姓名</th>"+
	"<th>证件号码</th>"+
	"<th>电话号码</th>"+
	"<th>发款日期</th>"+ 
	"<th>到期日期</th>"+ 
	"<th>贷款期限</th>"+
	"<th>借款利率</th>"+
	"<th>放款金额</th>"+
	"<th>还款余额(加利息)</th>"+ 
	"<th>当期还款日期</th>"+ 
	"<th>状态</th>"+
	"<th>客户经理</th>"+
	"</tr>";
	$.ajax({
		url:wsHost+khwhurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
		},
		success:function(json){
			var obj = $.evalJSON(json);
			var a=window.sessionStorage.getItem("qxckUser");
			var objs = $.evalJSON(a);
			for(var i = 0;i<obj.size;i++){
				
				tmp=tmp+"<tr>"+
				/*"<td>"+obj.result[i].ywbh+"</td>"+*/
				"<td>"+obj.result[i].khh+"</td>"+
				"<td>"+obj.result[i].khmc+"</td>"+
				"<td>"+obj.result[i].zjhm+"</td>"+
				"<td>"+obj.result[i].sj+"</td>"+
				"<td>"+obj.result[i].loandate+"</td>"+
				"<td>"+obj.result[i].dqrq+"</td>"+
				"<td>"+obj.result[i].dkqx+"</td>"+
				"<td>"+obj.result[i].jzll+"</td>"+
				"<td>"+obj.result[i].reqlmt+"</td>"+
				"<td>"+obj.result[i].dkye+"</td>"+
				"<td>"+obj.result[i].ksqxrq+"</td>"+
				"<td>"+obj.result[i].hqys+"</td>"+
				"<td>"+obj.result[i].display+"</td>"+
				"</tr>";
			
			if((i+1)%10==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
			}
			for(var i=0;i<objs.listsize;i++){
				aaa=aaa+"<option id='userId' value ='"+objs.list[i].userId+"'>"+objs.list[i].displayName+"组"+objs.list[i].name+"</option>";
			}
		result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>信贷跟踪"+ 
					"<select id ='cyuser1'  onchange='ckxdxt(this)'><option value = '0'>其他客户经理信贷详情</option>"+
					aaa+
					"</select>"+
				"</div>"+
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"</p>"+
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


function cxxdlc(userId){
	var khwhurl="/ipad/customer/selectUserXD.json";
	var tmp="";
	var result=[];
	var page=1;
	var j=1;
	var aaa;
	var head ="<tr>"+   
	/*"<th>业务编号</th>"+ */
	"<th>客户号</th>"+ 
	"<th>客户姓名</th>"+
	"<th>证件号码</th>"+
	"<th>电话号码</th>"+
	"<th>发款日期</th>"+ 
	"<th>到期日期</th>"+ 
	"<th>贷款期限</th>"+
	"<th>借款利率</th>"+
	"<th>放款金额</th>"+
	"<th>还款余额(加利息)</th>"+ 
	"<th>当期还款日期</th>"+ 
	"<th>状态</th>"+
	"<th>客户经理</th>"+
	"</tr>";
	$.ajax({
		url:wsHost+khwhurl,
		type: "GET",
		dataType:'json',
		data:{
			userId:userId,
		},
		success:function(json){
			var obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				
				tmp=tmp+"<tr>"+
				/*"<td>"+obj.result[i].ywbh+"</td>"+*/
				"<td>"+obj.result[i].khh+"</td>"+
				"<td>"+obj.result[i].khmc+"</td>"+
				"<td>"+obj.result[i].zjhm+"</td>"+
				"<td>"+obj.result[i].sj+"</td>"+
				"<td>"+obj.result[i].loandate+"</td>"+
				"<td>"+obj.result[i].dqrq+"</td>"+
				"<td>"+obj.result[i].dkqx+"</td>"+
				"<td>"+obj.result[i].jzll+"</td>"+
				"<td>"+obj.result[i].reqlmt+"</td>"+
				"<td>"+obj.result[i].dkye+"</td>"+
				"<td>"+obj.result[i].ksqxrq+"</td>"+
				"<td>"+obj.result[i].hqys+"</td>"+
				"<td>"+obj.result[i].display+"</td>"+
				"</tr>";
			
			if((i+1)%10==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
			}
			
		result[j]=tmp;
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='xdkh()'/>信贷跟踪"+ 
					//"<select id ='cyuser1' onclick='ckxdxt(this)'>"+//"<option value = '0'>其他客户经理信贷详情</option>"+
					//aaa+
					//"</select>"+
				"</div>"+
					"<div class='content'>"+
					"<table class='cpTable' id='llll' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+
					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"</p>"+
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


function ckxdxt(){
	 if(window.sessionStorage.getItem("zw")!='客户经理'){
	if($("#cyuser1").val()!="0"){
		$("#cyuser1").attr('disabled',false);
		cxxdlc($("#cyuser1").val());
	}}else{
		alert('无权限访问');
	}
}

