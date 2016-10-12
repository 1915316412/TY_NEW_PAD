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
	$.get(wsHost+cpxxurl,callbackresult);
	
	function callbackresult(json){
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
                            "<div class='step2'>选择资料类型</div>"+
                            "<div class='step2'>信息录入</div>"+
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
var allobj={};
function myjjgl2(productInfo){
	
	var cpxxurl="/ipad/addIntoPieces/browseCustomer.json";
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                         
    "<th></th>"+                 
    "<th>中文姓名</th>"+  
    "<th>身份证</th>"+
    "<th>证件号码</th>"+ 
"</tr>";
	$.get(wsHost+cpxxurl,{userId:userId,productId:productInfo.productId},callbackresult);
	
	function callbackresult(json){
		var obj = $.evalJSON(json);
		for(var i = 0;i<obj.items.length;i++){
			
			if(obj.items[i].cardType=="0"){
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
//                        "<input type='text' style='margin:13px 40px;' placeholder='搜索' onkeyup='searchTR(this)'/>" +
            		"</div>"+  
					"<div class='content'>" +
    					"<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>"+productInfo.productName+"</div>"+
                            "<div class='step3'>选择客户</div>"+
                            "<div class='step2'>选择资料类型</div>"+
                            "<div class='step2'>信息录入</div>"+
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
			allobj.chineseName = values[2];
			newUser1(productInfo);
		}else{
			alert("请选择一行");
			}
		
		})
	} 
}
//新建进件
function newUser1(addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
                            "<div class='step3'>选择资料类型</div>"+
                            "<div class='step2'>信息录入</div>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<div class='box jjgl' id = 'diaocmb' style='margin-left:400px;margin-right:50px;display:inline-block;'>" +
                                "<img src='images/xxzl.png'/>" +
                                "<span>客户信息调查模板</span>"+
                            "</div>"+
                            "<div class='box jjgl' id='yxzlxx' style='float:none;display:inline-block;'>" +
                                "<img src='images/yxzl.png' />" +
                                "<span>客户影像资料采集</span>"+
                            "</div>"+
						"</div>"+
					"</div>");
    $(".right").hide();
    $("#mainPage").show();
    
    $("#khxxlb").click(function(){
    	
    	myjjgl2(addIntopiece);
    })
    $("#mjjgl2").click(function(){
    	
    	myjjgl2(addIntopiece);
    })
    
    $("#diaocmb").click(function(){
    	
    	dcmbadd(addIntopiece);
    })
    
    $("#yxzlxx").click(function(){
    	
    	yxzladd(addIntopiece);
    })
}

////客户信息资料采集
//function khxxzlcj(addIntopiece){
//	alert(addIntopiece.productName);
//window.scrollTo(0,0);//滚动条回到顶端
//$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='newUser1()'/>进件管理</div>"+  
//                    "<div class='content'>" +
//                        "<div class='jjstep'>" +
//                            "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
//                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
//                            "<div class='step3' id='xxzlcj'>信息资料采集</div>"+
//                            "<div class='step3'>客户信息调查模板</div>"+
////                            "<div class='step2'>信息录入</div>"+
//                        "</div><div class='line'></div>"+
//                        "<div class='bottom-content'>"+
//                            "<table id='message1' class='cpTable'>"+
//                                "<tr>"+                             
//                                    "<th colspan='6'>客户基本信息</th>"+ 
//                                "</tr>"+
//                                "<tr>"+                             
//                                    "<td>个人信息<span class='label label-success'>已录入</span></td>"+             
//                                    "<td>房产信息<span class='label label-success'>已录入</span></td>"+
//                                    "<td>家庭信息<span class='label label-success'>已录入</span></td>"+ 
//                                    "<td>车产信息<span class='label label-important'>未录入</span></td>"+ 
//                                    "<td>联系人信息<span class='label label-important'>未录入</span></td>"+ 
//                                    "<td>居住信息<span class='label label-success'>已录入</span></td>"+
//                                "</tr>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='grxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='grxx_edit()'/>" +
//                                    "</td>"+         
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='fcxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='fcxx_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='jtxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='jtxx_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='ccxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='ccxx_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='lxrxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='lxrxx_edit()'/>" +
//                                    "</td>"+   
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='jzxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='jzxx_edit()'/>" +
//                                    "</td>"+
//                                "</tr>"+                           
//                            "</table>"+
//                            "<table id='message2' class='cpTable'>"+
//                                "<tr>"+                             
//                                    "<th colspan='5'>客户经营信息</th>"+ 
//                                "</tr>"+
//                                "<tr>"+                             
//                                    "<td>企业基本信息<span class='label label-success'>已录入</span></td>"+             
//                                    "<td>企业业务信息<span class='label label-success'>已录入</span></td>"+            
//                                    "<td>企业店铺信息<span class='label label-success'>已录入</span></td>"+            
//                                    "<td>企业开户信息<span class='label label-success'>已录入</span></td>"+            
//                                    "<td>其他信息<span class='label label-success'>已录入</span></td>"+     
//                                "</tr>"+
//                                "<tr>"+                             
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='qyjbxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='qyjbxx_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='qyywxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='qyywxx_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='qydpxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='qydpxx_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='qykhxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='qykhxx_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='qyqtxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='qyqtxx_edit()'/>" +
//                                    "</td>"+
//                                "</tr>"+
//                            "</table>"+
//                            "<table id='message3' class='cpTable'>"+
//                                "<tr>"+                             
//                                    "<th colspan='6'>客户财务信息</th>"+ 
//                                "</tr>"+
//                                "<tr>"+                             
//                                    "<td rowspan='2'>资产负债表</td>"+              
//                                    "<td>资产状况<span class='label label-success'>已录入</span></td>"+                  
//                                    "<td>负债情况<span class='label label-success'>已录入</span></td>"+             
//                                    "<td>权益状况<span class='label label-important'>未录入</span></td>"+             
//                                    "<td>其他信息<span class='label label-important'>未录入</span></td>"+            
//                                    "<td></td>"+ 
//                                "</tr>"+
//                                "<tr>"+
//    								"<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='zczk_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='zczk_edit()'/>" +
//                                    "</td>"+
//    								"<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='fzqk_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='fzqk_edit()'/>" +
//                                    "</td>"+								
//    								"<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='qyzk_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='qyzk_edit()'/>" +
//                                    "</td>"+															
//    								"<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='zcfzqtxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='zcfzqtxx_edit()'/>" +
//                                    "</td>"+           
//                                    "<td></td>"+ 
//                                "</tr>"+
//                                "<tr>"+   								
//                                    "<td rowspan='2'>损益表</td>"+              
//                                    "<td>利润表简表<span class='label label-important'>未录入</span></td>"+                  
//                                    "<td>利润表标准表<span class='label label-important'>未录入</span></td>"+             
//                                    "<td>其他信息<span class='label label-important'>未录入</span></td>"+                 
//                                    "<td></td>"+            
//                                    "<td></td>"+ 
//                                "</tr>"+
//                                "<tr>"+
//    								"<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='lrbjb_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='lrbjb_edit()'/>" +
//                                    "</td>"+
//    								"<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='lrbbzb_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='lrbbzb_edit()'/>" +
//                                    "</td>"+								
//    								"<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='syqtxx_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='syqtxx_edit()'/>" +
//                                    "</td>"+           
//                                    "<td></td>"+            
//                                    "<td></td>"+ 
//                                "</tr>"+	
//                                "<tr>"+          
//                                    "<td>现金流表<span class='label label-important'>未录入</span></td>"+            
//                                    "<td>点货单<span class='label label-success'>已录入</span></td>"+            
//                                    "<td>固定资产清单<span class='label label-success'>已录入</span></td>"+        
//                                    "<td>应收预付清单<span class='label label-important'>未录入</span></td>"+      
//                                    "<td>应付预收清单<span class='label label-important'>未录入</span></td>"+      
//                                    "<td>负债项目明细清单<span class='label label-important'>未录入</span></td>"+   
//                                "</tr>"+
//                                "<tr>"+  
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='xjlb_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='xjlb_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='dhd_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='dhd_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='gdzcqd_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='gdzcqd_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='ysyfqd_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='ysyfqd_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='yfysqd_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='yfysqd_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='fzxmmxqd_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='fzxmmxqd_edit()'/>" +
//                                    "</td>"+
//                                "</tr>"+
//                            "</table>"+ 
//                        "</div>"+
//                    "</div>");
//    $(".right").hide();
//    $("#mainPage").show();
//  $("#khxxlb").click(function(){
//    	
//    	myjjgl2(addIntopiece);
//    })
//    $("#xxzlcj").click(function(){
//    	
//    	newUser1(addIntopiece);
//    })
//}

//客户影像资料采集
//function khyxzlcj(addIntopiece){
//window.scrollTo(0,0);//滚动条回到顶端
//$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='newUser1()'/>影像资料采集</div>"+  
//                    "<div class='content' style='text-align:center;'>" +  
//                        "<div class='jjstep'>" +
//                        "<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
//                        "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
//                        "<div class='step3' id='xxzlcj'>信息资料采集</div>"+
//                            "<div class='step3'>客户影像资料采集</div>"+
////                            "<div class='step2'>信息录入</div>"+
//                        "</div><div class='line'></div>"+
//                        "<div class='bottom-content'>"+
//                            "<table id='message1' class='cpTable' style='margin-top:20px;'>"+
//                                "<tr>"+                             
//                                    "<th colspan='6'>客户影像资料</th>"+ 
//                                "</tr>"+
//                                "<tr>"+                             
//                                    "<td>房产证<span class='label label-success'>已录入</span></td>"+             
//                                    "<td>结婚证<span class='label label-success'>已录入</span></td>"+
//                                    "<td>征信报告<span class='label label-important'>未录入</span></td>"+ 
//                                    "<td>银行流水<span class='label label-important'>未录入</span></td>"+            
//                                    "<td>其他影像资料<span class='label label-success'>已录入</span></td>"+
//                                "</tr>"+
//                                "<tr>"+       
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='fcz_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='fcz_edit()'/>" +
//                                    "</td>"+         
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='jhz_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='jhz_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='zxbg_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='zxbg_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                        "<input type='button' class='btn' value='添加' onclick='yhls_add()'/>" +
//                                        "<input type='button' class='btn' value='查看' onclick='yhls_edit()'/>" +
//                                    "</td>"+
//                                    "<td>" +
//                                    "<input type='button' class='btn' value='添加' onclick='qtyxzl_add()'/>" +
//                                    "<input type='button' class='btn' value='查看' onclick='qtyxzl_edit()'/>" +
//                                "</td>"+
//                                "</tr>"+                           
//                            "</table>"+ 
//                        "</div>"+
//                    "</div>");
//    $(".right").hide();
//    $("#mainPage").show();
//$("#khxxlb").click(function(){
//    	
//    	myjjgl2(addIntopiece);
//    })
//    $("#xxzlcj").click(function(){
//    	
//    	newUser1(addIntopiece);
//    })
//    
//    
//}

//调查模板 
function dcmbadd(addIntopiece){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='newUsers1'><img src='images/back.png'/>调查模板采集</div>"+  
			"<div class='content' style='text-align:center;'>" +  
			"<div class='jjstep'>" +
			"<div class='step1' onclick='myjjgl()'>"+addIntopiece.productName+"</div>"+
			"<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
			"<div class='step3' id='newUser1'>客户影像资料采集</div>"+
			"<div class='step3'>信息录入</div>"+
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
		    $("#newUser1").click(function(){
    	
		    	newUser1(addIntopiece);
		    })
		    $("#newUsers1").click(function(){
		    	
		    	newUser1(addIntopiece);
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
									"<td><img src='images/ugc_icon_type_photo.png' id ='takepucture'/></td>"+
//									"<td><img src='images/ugc_icon_type_photo.png' onclick='capturePhoto(\"fcz_sheet1\",\"img\",\"imageuri\");'/></td>"+
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
				//alert(json);
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
		pglr();
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
function pglr(){
	
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
			    $("#sure").click(function(){
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
							alert(json);
							obj = $.evalJSON(json);
							if(obj.a>0){
								alert('上传成功!');
								myjjgl();
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