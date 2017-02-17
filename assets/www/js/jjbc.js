

//补充照片
var val;
var bcObj={};
function bczl(addIntopiece){
	bcObj=addIntopiece;
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png' />图库选择补充照片("+bcObj.name+")</div>"+  
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
               	 "<div class='spinner'>"+
				  "<div class='bounce1'></div>"+
				" <div class='bounce2'></div>"+
				  "<div class='bounce2'></div></div>"+
				  
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
						  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						"<input type='button' class='btn btn-large btn-primary' value='下一步' id = 'xyb'/>"+
						 "</div></p>");
    $(".right").hide();
    $("#mainPage").show();
    $('.spinner').hide();
    $("#jycs").click(function(){
    	var content=1;
    	var tel;
    	var size;
    	window.plugins.message.send(bcsuccess,error,tel,content,size);
    })
      $("#jyqs").click(function(){
    		var content=2;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
    	
    })
      $("#qtsr").click(function(){
    	  var content=6;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
    })
      $("#sfzm").click(function(){
    	  var content=7;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
    	
    })
      $("#grzc").click(function(){
    	  var content=8;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
    })
      $("#jf").click(function(){
    	  var content=9;
        	var tel;
        	var size;
        	var url;
        	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
    })
      $("#db").click(function(){
    	  var content=10;
      	var tel;
      	var size;
    	var url;
    	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
    })
    
    
    
    
    
    
	$("#mjjgl2").click(function(){
		thkhlb();
	});
	$("#xyb").click(function(){
		cksyIma (addIntopiece);
	});
	
	$("#jydj").click(function(){
		window.scrollTo(0,0);//滚动条回到顶端
		$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>补充资料</div>"+  
		                    "<div class='content'>" +
		                        
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
								 "<div class='spinner'>"+
								  "<div class='bounce1'></div>"+
								" <div class='bounce2'></div>"+
								  "<div class='bounce2'></div>"+
						"</div>");
		    $(".right").hide();
		    $("#mainPage").show();
		    $('.spinner').hide();
		    $("#ljjc").click(function(){
		    	  var content=3;
		      	var tel;
		      	var size;
		    	var url;
	        	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
		    })
		      $("#zcfz").click(function(){
		    	  var content=4;
		        	var tel;
		        	var size;
		        	var url;
		        	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
		    })
		      $("#sy").click(function(){
		    	  var content=5;
		      	var tel;
		      	var size;
		    	var url;
	        	window.plugins.message.send(bcsuccess,error,tel,content,size,url);
		    })
		    $("#mjjgl2").click(function(){
		    	bczl(addIntopiece);
		    });
		    $("#xyb").click(function(){
		    	bczl(addIntopiece);
		    });
	});
}
var countc=0;
var objIma=[];
var objsIma=[];
var bcsuccess=function(data){
	if(data.size==0){
		alert("对不起,您pad该类照片文件夹没有照片!!");
	}else{alert("选择了"+data.size+"张照片进行上传!!");
	phone_type=data.content;
	var aa=data.target;
	aa=aa.replace("[", "");
	aa=aa.replace("]", "");
	objIma=aa.split(",");
	var aa1=data.url;
	aa1=aa1.replace("[", "");
	aa1=aa1.replace("]", "");
	objsIma=aa1.split(",");
	var applicationId=null;
	$('.spinner').show();
	
		for(var ab=0;ab<data.size;ab++){
			 var fileURI ="file://"+objsIma[ab].trim();
	    	 var fileName =objIma[ab].trim();
	    	 var options = new FileUploadOptions();  
	    	    options.fileKey = "file";  
	    	    options.fileName = fileName; 
	    	    options.mimeType = "multipart/form-data";  
	    	    options.chunkedMode = false;  
	    	    ft = new FileTransfer();  
	    	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+bcObj.productId+"&customerId="+bcObj.customerId+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type);  
	    	    ft.upload(fileURI,uploadUrl,bcSuccesss1, uploadFailed, options); 
		}
	    	    
	}
};
var error=function(){
};
function bcSuccesss1() {  
	countc=countc+1;
	if(countc==objIma.length){
		$('.spinner').hide();
		alert('上传成功');
		countc=0;
	}
}














function cksyIma (addIntopiece){
	var objs;
	 var yxzlur1l="/ipad/JnpadImageBrowse/findLocalImageByType1.json";
	$.get(wsHost+yxzlur1l,{customerId:addIntopiece.customerId,productId:addIntopiece.productId},callbackfunction);
	function  callbackfunction (json){
		objs = $.evalJSON(json);
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title' id='mjjgl2'><img src='images/back.png'/>查看已上传照片("+bcObj.name+")</div>"+  
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
                    "<div class='box jjgl' onclick='bczlgrzc()' style='float:none;display:inline-block;margin-right:50px;'>" +
                    "<img src='images/wenjian.png'  />" +
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
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
						"<input type='button' class='btn btn-large btn-primary' value='下一步' id = 'xyb'/>"+
						 "</div></p>");
    $(".right").hide();
    $("#mainPage").show();
	$("#xyb").click(function(){
		if(bcObj.name1=='融耀卡'){
			 $("#xyb").attr('disabled',true);
			cxsqjj();
		}else{
			
			bcdcmb(addIntopiece);
		}
	});
	
	$("#mjjgl2").click(function(){
		bczl(addIntopiece);
	});
	$("#jycs").click(function(){
		var phone_type=1;
		bcdeleteIma(addIntopiece,phone_type);
	});$("#jyqs").click(function(){
		var phone_type=2;
		bcdeleteIma(addIntopiece,phone_type);
	});$("#qtsr").click(function(){
		var phone_type=6;
		bcdeleteIma(addIntopiece,phone_type);
	});$("#sfzm").click(function(){
		var phone_type=7;
		bcdeleteIma(addIntopiece,phone_type);
	});$("grzc").click(function(){
		var phone_type=8;
		bcdeleteIma(addIntopiece,phone_type);
	});$("#jf").click(function(){
		var phone_type=9;
		bcdeleteIma(addIntopiece,phone_type);
	});$("#db").click(function(){
		var phone_type=10;
		bcdeleteIma(addIntopiece,phone_type);
	});
	
$("#jydj").click(function(){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='mjjgl2'>经营权属</div>"+  
	                    "<div class='content'>" +
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
	    	cksyIma(addIntopiece);
		});
		$("#ljjc").click(function(){
			var phone_type=3;
			bcdeleteIma(addIntopiece,phone_type);
		});$("#zcfz").click(function(){
			var phone_type=4;
			bcdeleteIma(addIntopiece,phone_type);
		});$("#sy").click(function(){
			var phone_type=5;
			bcdeleteIma(addIntopiece,phone_type);
		});
	});
}}
function bczlgrzc(){
	var phone_type=8;
	bcdeleteIma(bcObj,phone_type);
}
function bcdeleteIma(addIntopiece,phone_type){
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
				newUser1(addIntopiece);
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
					cksyIma(addIntopiece);
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
									bcdeleteIma(addIntopiece,phone_type);
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






function bcdcmb(addIntopiece){
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='newUsers1'><img src='images/back.png'/>补充调查模板采集("+bcObj.name+")</div>"+  
			"<div class='bottom-content'>"+
			"<table  class='cpTable' style='text-align:center;margin-top:40px;'>"+
			"<tr>"+                             
			"<th><input type='button' class='btn btn-primary btn-large next' id='bcsure' value='申请'/></th>"+
			"</tr>"+
			"</table>"+
			"<table id='fcz' class='cpTable' style='text-align:center;margin-top:20px;'>"+
			"<tr>"+                             
			"<th>文件路径</th>"+
			"</tr>"+
			"<tr>"+    
			"<td><input type='text' id='fcz_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' id='select' value='选择文件'/></td>"+
			"</tr>"+
			"</table>"+
			 "<div class='spinner'>"+
			  "<div class='bounce1'></div>"+
			" <div class='bounce2'></div>"+
			  "<div class='bounce2'></div></div>"+
			"</div>"+
			"<div class='upload_process_bar'>"+  
			"<div class='upload_current_process'></div>"+ 
			"<div id='process_info'></div>");
	$(".right").hide();
	$("#mainPage").show();
	 $('.spinner').hide();
	 $("#cjz").click(function(){
	    	newUser2(addIntopiece);
	    })
	     $("#khzj").click(function(){
	    	 newUser1(addIntopiece);
	    })
	    $("#qtz").click(function(){
	    	 newUser3(addIntopiece);
	    })
	document.addEventListener("deviceready", function(){  
	    $(function(){  
	         $('#upload_file_link').click(openFileSelector);  
	    });  
	}, false); 
	  $("#bcsure").click(function(){
		  $('.spinner').show();
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
			    ft.upload(fileURI,uploadUrl,bcuploadSuccess, uploadFailed, options); 
			  
			    //获取上传进度  
			    ft.onprogress = uploadProcessing;  
			    //显示进度条  
			    $('.upload_process_bar,#process_info').show(); 
		  })
		  
		  
		  $("#select").click(function(){
			  
			  openFileSelector("fcz_sheet1","imageuri");
		  })
		    $("#newUsers1").click(function(){
		    	cksyIma(addIntopiece);
		    })
}


function bcuploadSuccess(r) { 
	 $('.spinner').hide();
	var objjs;
	var obj = $.evalJSON(r.response);
	if(obj.success==false){
	if(obj.message=="001"){
		alert("调查模板不一致！导入失败！");
		 $("#bcsure").attr('disabled',false);
	}else{
		alert("导入失败！");
    $("#bcsure").attr('disabled',false);
    
	}
	}else{
		alert("导入成功！");
		cxsqjj();
	}
    clearProcess();  
} 
function cxsqjj(){
	var url="/ipad/user/updateJj.json?userId="+bcObj.id;
	$.ajax({
		url:wsHost + url,
		type: "GET",
		dataType:'json',
		async: false,
		success: function (json) {
			objjs = $.evalJSON(json);
			alert(objjs.result);
			thkhlb();
		}})
}