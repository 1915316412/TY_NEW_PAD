//我的计划
function mywdjh(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'>计划管理</div>"+  
			"<div class='content'>" +
			//"<div class='box jhgl' onclick='khwhjhlb()'><img src='images/khwhjh.png' style='margin-left:-15px;'/><span>客户维护计划</span></div>"+
			"<div class='box jhgl' onclick='khcsjh()'><img src='images/khcsjh.png' style='margin-left:-15px;'/><span>客户催收计划</span></div>"+
			"<div class='box jhgl' onclick='pxjh()'><img src='images/pxjh.png' style='margin-left:-15px;'/><span>培训计划</span></div>"+
			//"<div class='box jhgl' onclick='gzjh()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>工作计划</span></div>"+                       
			"<div class='box jhgl' onclick='yjjdlr()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>业绩进度录入</span></div>"+ 
			"<div class='box jhgl' onclick='yjjdcx()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>业绩进度查看</span></div>"+ 
			"<div class='box jhgl' onclick='myshsp()'><img src='images/gzjh.png' style='margin-left:-15px;'/><span>审核审批</span></div>"+ 
			"<div class='box jhgl' onclick='sqryk()'><img src='images/xxzl.png' style='margin-left:-15px;'/><span>融耀卡申请</span></div>"+ 
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
var sqry={};
var sousuok={};
//申请融耀卡
function sqryk(){
	var userId = window.sessionStorage.getItem("userId");
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var obj;
	var head ="<tr>"+   
	"<th></th>"+ 
	"<th>客户姓名</th>"+
	"<th>证件号码</th>"+
	//"<th>电话号码</th>"+
	"</tr>";

	var khwhurl="/ipad/product/selectByserIdOnRy.json"+"?userId="+userId
	$.ajax({
		url:wsHost + khwhurl,
		type: "GET",
		dataType:'json',
		success: function (json) {
			obj = $.evalJSON(json);
			sousuok.productId=obj.result[0].productId;
			for(var i = 0;i<obj.size;i++){
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].chineseName+"@"+obj.result[i].cardId+
				"@"+obj.result[i].id+"@"+obj.result[i].productId+"'"+"/>"+"</span></td>"+
				"<td>"+obj.result[i].chineseName+"</td>"+
				"<td>"+obj.result[i].cardId+"</td>"+
				//"<td>"+obj.result[i].productId+"</td>"+
				"</tr>";
			
			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
			}
		result[j]=tmp;
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>融耀卡申请"+  
				  "<input type='text' id='kexm' style='margin:13px 40px;' placeholder='输入姓氏或姓名' onchange='ssuo(this)'/></div>"+
				"<div class='content'>"+
				"<div class='jjstep'>" +
				"<div class='step1' >荣耀卡申请</div>"+
				"<div class='step3' onclick='myjjgl()'>选择客户</div>"+
				   "<div class='step2'>调查照</div>"+
                   "<div class='step2'>确认调查照</div>"+
                "</div>"+
                "<div class='line'></div>"+
                "<div class='bottom-content'>"+
				"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
				head+result[page]+
				"</table>"+

				"<p>"+
				"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='申请融耀卡' id = 'sqsave'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='mywdjh()'/></p>"+
				"</div>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();
		  $("#xyy").click(function(){
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
					objs.chineseName = values[0];
					objs.CardId = values[1];
					objs.customerId = values[2];
					objs.productId = values[3];
					objs.userId = window.sessionStorage.getItem("userId");
					var fxsxurl ="/ipad/NotifictionMessage/managerbrowse.json";
					var fxsxurl1 ="/ipad/customer/selectByCardId3.json?cardId="+objs.CardId;
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
								if(objs.customerId==obj.result[i].customerId){
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
								alert("对不起,该客户时在风险客户名单里面,不能申请!!!!")
							}else if(custormerid1==1){
								alert("对不起,该客户时在黑名单里面,不能申请!!!!")
							}else if(custormerid1!=1 & custormerid!=1){
								newUser61(objs);
							}
							}})
					
				}else{
					alert("请选择一行");
				}
			})
			
		}})
}

function ssuo(){
	var userId = window.sessionStorage.getItem("userId");
	var kexm=$("#kexm").val();
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var head ="<tr>"+                         
    "<th></th>"+                 
    "<th>中文姓名</th>"+  
    "<th>证件号码</th>"+ 
"</tr>";
	var edpgUrl="/ipad/addIntoPieces/sousCustomer.json";
	$.ajax({
		url:wsHost + edpgUrl,
		type: "GET",
		dataType:'json',
		data:{kexm:kexm,userId:userId,productId:sousuok.productId},
		success: function (json) {
			obj = $.evalJSON(json);
for(var i = 0;i<obj.size;i++){
				
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].chineseName+"@"+obj.result[i].cardId+
				"@"+obj.result[i].id+"'"+"/>"+"</span></td>"+
				"<td>"+obj.result[i].chineseName+"</td>"+
				"<td>"+obj.result[i].cardId+"</td>"+
				"</tr>";
			
			if((i+1)%5==0){
				result[j]=tmp;
				j++;
				tmp="";
			}
			}
		result[j]=tmp;
		$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>融耀卡申请"+
				  "<input type='text' id='kexm' style='margin:13px 40px;' placeholder='输入姓氏或姓名' onchange='ssuo(this)'/></div>"+  
				"<div class='content'>"+
				"<div class='jjstep'>" +
				"<div class='step1' >荣耀卡申请</div>"+
				"<div class='step3' onclick='myjjgl()'>选择客户</div>"+
				   "<div class='step2'>调查照</div>"+
                   "<div class='step2'>确认调查照</div>"+
                "</div>"+
                "<div class='line'></div>"+
                "<div class='bottom-content'>"+
				"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
				head+result[page]+
				"</table>"+

				"<p>"+
				"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='申请融耀卡' id = 'sqsave'/>"+
				"<input type='button' class='btn btn-large btn-primary' value='返回' onclick='mywdjh()'/></p>"+
				"</div>"+
		"</div>");
		$(".right").hide();
		$("#mainPage").show();
		  $("#xyy").click(function(){
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
					objs.chineseName = values[0];
					objs.CardId = values[1];
					objs.customerId = values[2];
					objs.productId = sousuok.productId;
					objs.userId = window.sessionStorage.getItem("userId");
					var fxsxurl ="/ipad/NotifictionMessage/managerbrowse.json";
					var fxsxurl1 ="/ipad/customer/selectByCardId3.json?cardId="+objs.CardId;
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
								if(objs.customerId==obj.result[i].customerId){
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
								alert("对不起,该客户时在风险客户名单里面,不能申请!!!!")
							}else if(custormerid1==1){
								alert("对不起,该客户时在黑名单里面,不能申请!!!!")
							}else if(custormerid1!=1 & custormerid!=1){
								newUser61(objs);
							}
							}})
					
				}else{
					alert("请选择一行");
				}
			})
			
			
			
			
			
		}})
		
}



var b;
function newUser61(addIntopiece){
	b=addIntopiece;
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>选择图片上传方式</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	                             "<div class='step1'>荣耀卡申请</div>"+
	                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
	                            "<div class='step3'>调查照</div>"+
	                            "<div class='step2'>确认调查照</div>"+
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
	    	 newUser71 (addIntopiece);
	     });
	     $("#yxzlxx").click(function(){
	    	 newUser81(addIntopiece);
	    })
	    $("#mjjgl2").click(function(){
	    	sqryk();
	    })
	}



//新建进件
function newUser71 (addIntopiece){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' >荣耀卡申请</div>"+
                            "<div class='step3' >"+addIntopiece.chineseName+"</div>"+
                            "<div class='step3'>图库选择</div>"+
                            "<div class='step2'>确认调查照</div>"+
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
    $("#jycs").click(function(){
    	var content=1;
    	var tel;
    	var size;
    	window.plugins.message.send(savesuccess,error,tel,content,size);
    
    })
      $("#jyqs").click(function(){
    		var content=2;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(savesuccess,error,tel,content,size,url);
    	
    })
      $("#qtsr").click(function(){
    	  var content=6;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(savesuccess,error,tel,content,size,url);
    })
      $("#sfzm").click(function(){
    	  var content=7;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(savesuccess,error,tel,content,size,url);
    	
    })
      $("#grzc").click(function(){
    	  var content=8;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(savesuccess,error,tel,content,size,url);
    })
      $("#jf").click(function(){
    	  var content=9;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(savesuccess,error,tel,content,size,url);
    })
      $("#db").click(function(){
    	  var content=10;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(savesuccess,error,tel,content,size,url);
    })
    
    
    
    
    
    
	$("#mjjgl2").click(function(){
		newUser61(addIntopiece);
	});
	$("#xyb").click(function(){
		newUser91 (addIntopiece);
	});
	
	$("#jydj").click(function(){
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
		                    "<div class='content'>" +
		                        "<div class='jjstep'>" +
		                            "<div class='step1'>荣耀卡申请</div>"+
		                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
		                            "<div class='step3'>调查照</div>"+
		                            "<div class='step3'>经营场所照</div>"+
		                            "<div class='step2'>确认调查照</div>"+
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
						"</div>");
		    $(".right").hide();
		    $("#mainPage").show();
		    $("#ljjc").click(function(){
		    	  var content=3;
		      	var tel;
		      	var size;
		    	var url;
	        	window.plugins.message.send(savesuccess,error,tel,content,size,url);
		    })
		      $("#zcfz").click(function(){
		    	  var content=4;
		        	var tel;
		        	var size;
		        	var url;
		        	window.plugins.message.send(savesuccess,error,tel,content,size,url);
		    })
		      $("#sy").click(function(){
		    	  var content=5;
		      	var tel;
		      	var size;
		    	var url;
	        	window.plugins.message.send(savesuccess,error,tel,content,size,url);
		    })
		    $("#xyb").click(function(){
		    	newUser71 (addIntopiece);
			});
		    $("#mjjgl2").click(function(){
		    	newUser71 (addIntopiece);
		    });
	});
}
var obj1=[];
var objs1=[];
var savesuccess=function(data){
	if(data.size==0){
		alert("对不起,您pad该类照片文件夹没有照片!!");
	}else{alert("选择了"+data.size+"张照片进行上传!!");
	phone_type=data.content;
	var aa=data.target;
	aa=aa.replace("[", "");
	aa=aa.replace("]", "");
	obj1=aa.split(",");
	var applicationId=null;
	
	var aa1=data.url;
	aa1=aa1.replace("[", "");
	aa1=aa1.replace("]", "");
	objs1=aa1.split(",");
	var applicationId=null;
	for(var ab=0;ab<data.size;ab++){
		 var fileURI ="file://"+objs1[ab].trim();
    	 var fileName =obj1[ab].trim();
    	 var options = new FileUploadOptions();  
    	    options.fileKey = "file";  
    	    options.fileName = fileName; 
    	    options.mimeType = "multipart/form-data";  
    	    options.chunkedMode = false;  
    	    ft = new FileTransfer();  
    	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+b.productId+"&customerId="+b.customerId+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type);  
    	    ft.upload(fileURI,uploadUrl,uSuccesss, uploadFailed, options); 
	}}
};
var error=function(){
};

function uSuccesss() {  
    alert('上传成功');
}



function newUser81 (addIntopiece){
	a=addIntopiece;
	var objs;
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' >荣耀卡申请</div>"+
                            "<div class='step3' >"+addIntopiece.chineseName+"</div>"+
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
		newUser61(addIntopiece);
	});
	$("#xyb").click(function(){
		newUser91 (addIntopiece);
	});
	
	$("#jydj").click(function(){
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
		                    "<div class='content'>" +
		                        "<div class='jjstep'>" +
		                            "<div class='step1' >荣耀卡申请</div>"+
		                            "<div class='step3' >"+addIntopiece.chineseName+"</div>"+
		                            "<div class='step3'>在线拍照</div>"+
		                            "<div class='step3'>经营场所照</div>"+
		                            "<div class='step2'>确认调查照</div>"+
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
		    	newUser81 (addIntopiece);
			});
		    $("#mjjgl2").click(function(){
		    	newUser81 (addIntopiece);
		    });
	});
}




function newUser91 (addIntopiece){
	var objs;
	 var yxzlur1l="/ipad/JnpadImageBrowse/findLocalImageByType1.json";
	$.get(wsHost+yxzlur1l,{customerId:addIntopiece.customerId,productId:addIntopiece.productId},callbackfunction);
	function  callbackfunction (json){
		objs = $.evalJSON(json);
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>进件管理</div>"+  
                    "<div class='content'>" +
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>荣耀卡申请</div>"+
                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
                            "<div class='step3'>调查照</div>"+
                            "<div class='step3'>确认调查照</div>"+
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
		sqrykk();
	});
	
	$("#mjjgl2").click(function(){
		newUser61 (addIntopiece);
	});
	$("#jycs").click(function(){
		var phone_type=1;
		deleteIma1(addIntopiece,phone_type);
	});$("#jyqs").click(function(){
		var phone_type=2;
		deleteIma1(addIntopiece,phone_type);
	});$("#qtsr").click(function(){
		var phone_type=6;
		deleteIma1(addIntopiece,phone_type);
	});$("#sfzm").click(function(){
		var phone_type=7;
		deleteIma1(addIntopiece,phone_type);
	});$("grzc").click(function(){
		var phone_type=8;
		deleteIma1(addIntopiece,phone_type);
	});$("#jf").click(function(){
		var phone_type=9;
		deleteIma1(addIntopiece,phone_type);
	});$("#db").click(function(){
		var phone_type=10;
		deleteIma1(addIntopiece,phone_type);
	});
	
$("#jydj").click(function(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='mjjgl2'>经营权属</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	                            "<div class='step3' id='khxxlb'>"+addIntopiece.chineseName+"</div>"+
	                            "<div class='step3'>调查照</div>"+
	                            "<div class='step3'>确认调查照</div>"+
	                            "<div class='step3'>经营权属</div>"+
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
	    	newUser91 (addIntopiece);
		});
		$("#ljjc").click(function(){
			var phone_type=3;
			deleteIma1(addIntopiece,phone_type);
		});$("#zcfz").click(function(){
			var phone_type=4;
			deleteIma1(addIntopiece,phone_type);
		});$("#sy").click(function(){
			var phone_type=5;
			deleteIma1(addIntopiece,phone_type);
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

function deleteIma1(addIntopiece,phone_type){
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
				newUser91(addIntopiece);
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
					newUser91 (addIntopiece);
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
									deleteIma1(addIntopiece,phone_type);
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

//荣耀卡提交申请
function sqrykk(){
	var khwhurl="/ipad/jnnaddIntopieces/imageImport.json"
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost + khwhurl,
		type: "GET",
		dataType:'json',
		data:{productId:b.productId,userId:userId,customerId:b.customerId},
		success: function (json) {
			obj = $.evalJSON(json);
			alert(obj.message);
			sqryk();
		}})}













































function sq1(objs){
	var phone_type=2;
	b=phone_type;
	var yxzlur1l="/ipad/JnpadImageBrowse/findLocalImageByType.json";
	$.get(wsHost+yxzlur1l,{customerId:objs.id,productId:objs.productId,phone_type:phone_type},callbackfunction);
	function  callbackfunction (json){
		obj = $.evalJSON(json);
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='back'><img src='images/back.png' id='back'/>荣耀卡申请</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	        				"<div class='step1' onclick='myjjgl()'>"+objs.chineseName+"</div>"+
	                        "<div class='step3'>客户证件照</div>"+
	                        "<div class='step3'>场景照片</div>"+
	                        "<div class='step2'>其他照片</div>"+
	    						"</div><div class='line'></div>"+
	    						"<div class='bottom-content'>"+
	    							"<table id='qtyxzl' class='cpTable' style='text-align:center;margin-top:20px;'>"+
	    								"<tr>"+    
	    									"<th style='width:40px;'>序号</th>"+ 
	    									"<th>图片路径</th>"+
	    									"<th>在线照相</th>"+
	    								"</tr>"+
	    								"<tr>"+  
	    									"<td>1</td>"+
	    									"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");' value='选择文件'/></td>"+
	    									"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");'/></td>"+
	    								"</tr>"+
	    							"</table>"+
	    							"<p class='Left'>" +
	    							"<button class='add-button' onclick='addTd(\"qtyxzl\")'><img src='images/add.png'/></button>" +
	    							"<button class='add-button' onclick='removeTd(\"qtyxzl\")'><img src='images/del.png'/></button>" +
	    							"</p>"+
	    							"<p>"+
		    						"<input type='button' class='btn btn-large btn-primary' value='上传图片' id = 'sure'/>"+
		    						"<input type='button' class='btn btn-large btn-primary' value='下一步' id = 'xyb'/>"+
		    						"<input type='button' class='btn btn-large btn-primary' value='查看已上传证件照' id = 'zjz'/></br><span class='tongzhi'>"+obj.size+"</br></span>" +
		    						"</p>"+
	    						"</div>"+
	    					"</div>");
	      $(".right").hide();
	      $("#mainPage").show();
	      $("#xyb").click(function(){
	    	  if(obj.size==0){
	    		  alert('请上传调查场景照');
	    	  }else{
	    		  sq2(objs);
	    	  }
	      })
	      $("#back").click(function(){
	    	  sq(objs);
	      })
	      $("#zjz").click(function(){
	    	  ckImage(objs,phone_type);

	      });
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
	    	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+objs.productId+"&customerId="+objs.id+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type);  
	    	    ft.upload(fileURI,uploadUrl,uploadSuccesss, uploadFailed, options); 
	    	  }
	      })
	    }}

function sq2(objs){
	var phone_type=3;
	b=phone_type;
	var yxzlur1l="/ipad/JnpadImageBrowse/findLocalImageByType.json";
	$.get(wsHost+yxzlur1l,{customerId:objs.id,productId:objs.productId,phone_type:phone_type},callbackfunction);
	function  callbackfunction (json){
		obj = $.evalJSON(json);
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='back'><img src='images/back.png' id='back'/>荣耀卡申请</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	        				"<div class='step1' onclick='myjjgl()'>"+objs.chineseName+"</div>"+
	                        "<div class='step3'>客户证件照</div>"+
	                        "<div class='step3'>场景照片</div>"+
	                        "<div class='step3'>其他照片</div>"+
	    						"</div><div class='line'></div>"+
	    						"<div class='bottom-content'>"+
	    							"<table id='qtyxzl' class='cpTable' style='text-align:center;margin-top:20px;'>"+
	    								"<tr>"+    
	    									"<th style='width:40px;'>序号</th>"+ 
	    									"<th>图片路径</th>"+
	    									"<th>在线照相</th>"+
	    								"</tr>"+
	    								"<tr>"+  
	    									"<td>1</td>"+
	    									"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");' value='选择文件'/></td>"+
	    									"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\");'/></td>"+
	    								"</tr>"+
	    							"</table>"+
	    							"<p class='Left'>" +
	    							"<button class='add-button' onclick='addTd(\"qtyxzl\")'><img src='images/add.png'/></button>" +
	    							"<button class='add-button' onclick='removeTd(\"qtyxzl\")'><img src='images/del.png'/></button>" +
	    							"</p>"+
	    							"<p>"+
		    						"<input type='button' class='btn btn-large btn-primary' value='上传图片' id = 'sure'/>"+
		    						"<input type='button' class='btn btn-large btn-primary' value='提交申请' id = 'xyb'/>"+
		    						"<input type='button' class='btn btn-large btn-primary' value='查看已上传证件照' id = 'zjz'/></br><span class='tongzhi'>"+obj.size+"</br></span>" +
		    						"</p>"+
	    						"</div>"+
	    					"</div>");
	      $(".right").hide();
	      $("#mainPage").show();
	      $("#xyb").click(function(){
	    	  if(obj.size==0){
	    		  $("#text").html("<div class='display-div' id='xdyss'>"+
	                        "<div class='dialog-head'>"+
	                           "<h4>提示</h4>"+
	                        "</div>"+
	                        "<div class='dialog-content'>"+
	                           " 您没有提交其他调查照片,确认提交申请吗？"+
	                        "</div>"+
	                        "<div class='dialog-bottom'>"+
	                           "<button type='button' class='btn btn-default' onclick='hide_dcts()'>取消</button>"+
	                           "<button type='button' class='btn btn-danger' onclick='hide_dcts();ryksq()'>确定</button>"+
	                        "</div>"+
	                    "</div><!-- /display-div -->");
	    $("#text").animate({top:"0px"},"500");
	    	  }else{
	    		  ryksq();
	    	  }
	      })
	        $("#back").click(function(){
	    	  sq1(objs);
	      })
	      $("#zjz").click(function(){
	    	  ckImage(objs,phone_type);

	      });
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
	    	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+objs.productId+"&customerId="+objs.id+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type);  
	    	    ft.upload(fileURI,uploadUrl,uploadSuccesss, uploadFailed, options); 
	    	  }
	      })
	    }}
function ckImage(objs,phone_type){
	var yxzlurl="/ipad/JnpadImageBrowse/findLocalImageByType.json";
	var obj;
	var id;
	var page = 0;
	var lltpurl;
	$.get(wsHost+yxzlurl,{customerId:objs.id,productId:objs.productId,phone_type:phone_type},callbackfunction);
		function  callbackfunction (json){
			obj = $.evalJSON(json);
			if(obj.size==0){
				if(phone_type==1){
					alert('无客户证件照');
					sq(objs);
				}else if(phone_type==2){
					alert('无调查场景照');
					sq1(objs);
				}else if(phone_type==3){
					alert('无其他照');
					sq3(objs);
				}
			}else{
				id=obj.imagerList[0].id;
				lltpurl="/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id="+id;
				
				
				$("#mainPage").html("<div class='title'><img src='images/back.png' id='backk'/>影像资料</div>"+
						"<div class='content'>" +
						"<div class='tabplace' id='imageBrowse' style='text-align:center;margin:0 auto;'>图片加载中..." +
						"</div>"+
						"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
								"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
								"<input type='button' class='btn btn-large btn-primary' value='删除' id = 'delete'/>"+
				"</div>");
				$(".right").hide();
				$("#mainPage").show();
				$("#imageBrowse").html(
						"<img id ='images' width='500px' style='text-align:center' src='"+wsHost+lltpurl+"' alt='' />"
				);
				$("#backk").click(function(){
					if(phone_type==1){
						sq(objs);
					}else if(phone_type==2){
						sq1(objs);
					}else{
						sq2(objs);
					}
					
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
									ckImage(objs,phone_type);
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

	    function openFileSelector(id,name) {  
	        var source = navigator.camera.PictureSourceType.PHOTOLIBRARY;  
	        //描述类型，取文件路径  
//	        var destinationType = navigator.camera.DestinationType.FILE_URI; 
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
	    			
//	    			window.plugins.imagePluginAPI.startActivity(testSuccess,testError, fpath);
//	    			function testSuccess(res){
	    				var url = document.getElementById(id);
	    				url.value = fpath;
	    				URI="file://"+fpath;
	    				var lll= document.getElementsByName("imageuri")[0].setAttribute("uri",URI);
//	    			}
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
//	    	    $("#text").html("<div class='display-div' id='xdyss'>"+
//	    	                        "<div class='dialog-head'>"+
//	    	                           "<h4>提示</h4>"+
//	    	                        "</div>"+
//	    	                        "<div class='upload_current_process'></div>"+ 
//	    	                        "<div class='dialog-content' id='process_info'>"+
//	    	                        "</div>"+
//	    	                        "<div class='dialog-bottom'>"+
//	    	                           "<button type='button' class='btn btn-default' onclick='hide_upload()'>取消</button>"+
//	    	                           "<button type='button' class='btn btn-danger' onclick='dc();hide_dcts()'>确定</button>"+
//	    	                        "</div>"+
//	    	                    "</div><!-- /display-div -->");
//	    	    $("#text").animate({top:"0px"},"500");
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
	     * 图片上传成功回调. 
	     * @param r 
	     */ 
	    function uploadSuccesss() {  
	        alert('上传成功');
	        if(b==1){
	        	 sq(a);	
	        }else   if(b==2){
	        	sq1(a);
	        }else   if(b==3){
	        	sq2(a);
	        }
	    }  
	    

	    /** 
	     * 上传失败回调. 
	     * @param error 
	     */  
	    function uploadFailed(error) {  
	        alert('上传失败了。');  
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
	    
	    function tjsq(objs){
	    	window.scrollTo(0,0);//滚动条回到顶端	
	    	var head ="<tr>"+   
	    	"<th>客户姓名</th>"+
	    	"<th>证件号码</th>"+
	    	"<th>产品名称</th>"+
	    	"</tr>";
	    	var chineseName=objs.chineseName;
	    	var cardId=objs.CardId;
	   		window.scrollTo(0,0);//滚动条回到顶端
    		$("#mainPage").html("<div class='title'><img src='images/back.png' id='backs'/>提交申请</div>"+  
    				"<div class='content'>" +                        
    				"<table id='bzsplb' class='cpTable jjTable' style='text-align:center;'>"+
    				head+
    				"<td>"+chineseName+"</td>"+
    				"<td>"+cardId+"</td>"+
    				"<td>融耀卡</td>"+
    				"</table>"+
    				"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
    				"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
    				"<input type='button' class='btn btn-primary btn-large' value='查看已上传图片列表' id='ckIma' />" +
    				"<input type='button' class='btn btn-primary btn-large' value='提交申请' id='save' />" +
    				"<input type='button' class='btn btn-large' value='返回' id='backk'/></p>"+
    		"</div>");
    		$(".right").hide();
    		$("#mainPage").show(); 
    		$("#ckIma").click(function(){
    			ckIma(objs);
    		})
    			$("#backs").click(function(){
    			sq(objs);
    		})
    		$("#backk").click(function(){
    			sq(objs);
    		})
    		$("#save").click(function(){
	    			ryksq(objs);
	    		})
	    	}
	

	  //荣耀卡提交申请
	    function ryksq(){
	    	var khwhurl="/ipad/jnnaddIntopieces/imageImport.json"
	    	$.ajax({
	    		url:wsHost + khwhurl,
	    		type: "GET",
	    		dataType:'json',
	    		data:{productId:a.productId,userId:a.userId,customerId:a.id},
	    		success: function (json) {
	    			obj = $.evalJSON(json);
	    			alert(obj.message);
	    			sqryk();
	    		}})}
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
	var tmp ="";
	var result={};
	var page=1;
	var j = 1;
	var obj;
	var head ="<tr>"+   
	"<th></th>"+ 
	"<th>逾期客户姓名</th>"+
	"<th>身份证号码</th>"+
	"<th>电话号码</th>"+
	//"<th>逾期金额</th>"+"</tr>";
	"<th>贷款总额</th>"+"</tr>";
	
	var userId = window.sessionStorage.getItem("userId");
	var khwhurl="/ipad/product/getCustomer.json"+"?userId="+userId;
	$.ajax({
		url:wsHost + khwhurl,
		type: "GET",
		dataType:'json',
		success: function (json) {
			alert(json);
			obj = $.evalJSON(json);
			for(var i = 0;i<obj.size;i++){
				tmp=tmp+"<tr onclick='check(this)'>"+
				"<td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].TypeCode+"@"+
				obj.result[i].typeName+"@"+obj.result[i].cardId+
				"@"+obj.result[i].tel+"'"+"/>"+"</span></td>"+
				"<td>"+obj.result[i].typeName+"</td>"+
				"<td>"+obj.result[i].cardId+"</td>"+
				"<td>"+obj.result[i].tel+"</td>"+
				//"<td>"+obj.result[i].yqMoney+"</td>"+
				"<td>"+obj.result[i].actual_quote+"</td>"+
				"</tr>";

				if((i+1)%5==0){
					result[j]=tmp;
					j++;
					tmp="";
				}
			}
			result[j]=tmp;
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>催收计划-逾期客户列表</div>"+  
					"<div class='content'>"+
					"<table id = 'whlb' class='cpTable' style='text-align:center;'>"+
					head+result[page]+
					"</table>"+

					"<p>"+
					"<input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
					"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
					"<input type='button' class='btn btn-large btn-primary' value='添加催收计划' id = 'tjwhjh'/>"+
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
					objs.TypeName = values[1];
					objs.cardId = values[2];
					objs.tel = values[3];
					objs.appId = values[0];
					tjcsjh(objs);
				}else{
					alert("请选择一行");
				}
			})
		}
	})
} 
function tjcsjh(objs){
	var userId = window.sessionStorage.getItem("userId");
	var khwhurl="/ipad/product/getCustomer.json"+"?userId="+userId;
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>客户催收计划</div>"+ 
			"<div class='content'>"+
			"<table class='cpTable' style='text-align:center;'>"+
			"<tr>"+                             
			"<th>客户姓名</th>"+
			"<th>身份证</th>"+
			"<th>电话</th>"+
			//"<th>客户身份标识</th>"+
			//"<th>产品标识</th>"+
			//"<th>贷款金额</th>"+
			//"<th>逾期金额</th>"+
			//"<th>逾期期数</th>"+
			"<th width='10%'>催收方式</th>"+
			"<th width='10%'>催收目标</th>"+
			"<th>催收天数</th>"+
			"</tr>"+
			"<tr>"+    
			"<td>"+objs.TypeName+"</td>"+
			"<td>"+objs.cardId+"</td>"+
			"<td>"+objs.tel+"</td>"+
			//"<td><font class='red'>"+YQmoney+"<font></td>"+
			"<td><select style='width:75%;' id ='whfs'>" +
			"<option value='01'>电话</option>" +
			"<option value='02'>短信</option>" +
			"<option value='03'>上门</option>" +
			"</select></td>"+
			"<td><input id='csmb' type='text' class='addinput'/></td>"+
			//"<td><input type='date' class='addinput'/></td>"+
			"<td><input  id='csts' type='text' class='addinput'/></td>"+
			"</tr>"+
			"</table>"+
			"<p><input type='button' class='btn btn-large btn-primary' value='保存' id='sava'/></p>"+
	"</div>");
	$(".right").hide();
	$("#mainPage").show();
	$("#sava").click(function() {
		var way=$("#whfs").val();
		var csmb=$("#csmb").val();
		var csts=$("#csts").val();
		if(way=="01"){
			way="电话"
		}
		if(way=="02"){
			way="短信"
		}
		if(way=="03"){
			way="上门"
		}
		var khwhurl="/ipad/product/insert.json"
		$.ajax({
			url:wsHost + khwhurl,
			type: "GET",
			dataType:'json',
			data:{customerId:objs.appId,productId:objs.productId,way:way,csmb:csmb,csts:csts,userId:userId},
			success: function (json) {
				obj = $.evalJSON(json);
				alert(obj.message);
				khcsjh();
			}})
	})
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
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mywdjh()'/>培训通知</div>"+ 
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