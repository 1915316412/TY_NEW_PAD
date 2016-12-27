var b;
function aaaa(productInfo){
	b=productInfo;
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='back'><img src='images/back.png' onclick='sqryk()'/>荣耀卡申请</div>"+  
	                    "<div class='content'>" +
	                        "<div class='jjstep'>" +
	        				"<div class='step1'></div>"+
	                        "<div class='step3'>客户证件照</div>"+
	                        "<div class='step2'>场景照片</div>"+
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
	    									"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"1\");' value='选择文件'/></td>"+
	    								"</tr>"+
	    								"<tr>"+  
    									"<td>2</td>"+
    									"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"2\");' value='选择文件'/></td>"+
    								"</tr>"+
    								"<tr>"+  
									"<td>3</td>"+
									"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"3\");' value='选择文件'/></td>"+
								"</tr>"+
								"<tr>"+  
								"<td>4</td>"+
								"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"4\");' value='选择文件'/></td>"+
							"</tr>"+
							"<tr>"+  
							"<td>5</td>"+
							"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"5\");' value='选择文件'/></td>"+
						"</tr>"+
						"<tr>"+  
						"<td>6</td>"+
						"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"6\");' value='选择文件'/></td>"+
					"</tr>"+
					"<tr>"+  
					"<td>7</td>"+
					"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"7\");' value='选择文件'/></td>"+
				"</tr>"+
				"<tr>"+  
				"<td>8</td>"+
				"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"8\");' value='选择文件'/></td>"+
			"</tr>"+
			"<tr>"+  
			"<td>9</td>"+
			"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"9\");' value='选择文件'/></td>"+
		"</tr>"+
		"<td>10</td>"+
		"<td><input type='text' id='qtyxzl_sheet1' name='imageuri' uri='' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\",\"imageuri\",\"1\",\"10\");' value='选择文件'/></td>"+
	"</tr>"+
	    							"</table>"+
	    							"<p class='Left'>" +
	    							"<button class='add-button' onclick='addTd(\"qtyxzl\")'><img src='images/add.png'/></button>" +
	    							"<button class='add-button' onclick='removeTd(\"qtyxzl\")'><img src='images/del.png'/></button>" +
	    							"</p>"+
	    							"<p>"+
		    						//"<input type='button' class='btn btn-large btn-primary' value='上传图片' id = 'sure'/>"+
		    						//"<input type='button' class='btn btn-large btn-primary' value='下一步' id = 'xyb'/>"+
		    						//"<input type='button' class='btn btn-large btn-primary' value='查看已上传证件照' id = 'zjz'/></br><span class='tongzhi'>"+obj.size+"</br></span>" +
		    						"</p>"+
	    						"</div>"+
	    					"</div>");
	      $(".right").hide();
	      $("#mainPage").show();
	      $("#xyb").click(function(){
	    	  if(obj.size==0){
	    		  alert('请上传客户证件照');
	    	  }else{
	    		  sq1(objs);
	    	  }
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
//	    	    //获取上传进度  
//	    	    ft.onprogress = uploadProcessing;  
//	    	    //显示进度条  
////	    	    $('.upload_process_bar,#process_info').show(); 
	      })
	    }
function bbbb(phoneIma,phone_type){
	var applicationId = null;
	 var fileURI = document.getElementsByName("imageuri")[0].getAttribute("uri");
	 var fileName = phoneIma;
	 var options = new FileUploadOptions();  
	    options.fileKey = "file";  
	    options.fileName = fileName; 
	    options.mimeType = "multipart/form-data";  
	    options.chunkedMode = false;  
	    ft = new FileTransfer();  
	    var uploadUrl=encodeURI(wsHost+"/ipad/addIntopieces/imageImport.json?productId="+b.productId+"&customerId="+b.customerId+"&fileName="+options.fileName+"&applicationId="+applicationId+"&phone_type="+phone_type);  
	    ft.upload(fileURI,uploadUrl,uploadSsuccessuccess1, uploadFailed, options); 
}
function uploadSsuccessuccess1() { 
	alert('上传成功');
}