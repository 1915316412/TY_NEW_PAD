function sdhsw(){
	//进件初审
		var sdrwurl="/ipad/selectSDHSP.json";
		var userId = window.sessionStorage.getItem("userId");
		var tmp ="";
		var result={};
		var page=1;
		var j = 1;
		var head ="<tr>"+                         
		"<th></th>"+                 
		"<th>客户名称</th>"+  
		"<th>证件号码</th>"+
		"<th>申请金额</th>"+
		"<th>申请产品</th>"+
		"<th>申请时间</th>"+
		"<th>所属客户经理</th>"+
		"</tr>";
		$.ajax({
			url:wsHost+sdrwurl,
			type: "GET",
			dataType:'json',
			data:{
				userId:userId,
			},
			success: function (json){
				var obj = $.evalJSON(json);
				for(var i = 0;i<obj.size;i++){
					tmp=tmp+"<tr onclick='check(this)'><td><span class='radio'> <input type='radio' name='checkbox' value='"+obj.result[i].id+"@"+
					obj.result[i].customerId+"@"+
					obj.result[i].productId+"@"+
					obj.result[i].cardId+"@"+
					obj.result[i].applyQuota+"@"+
					obj.result[i].productName+"@"+
					obj.result[i].PRODCREDITRANGE+"@"+
					obj.result[i].chineseName+"'/>"+"</span></td>"+  
					"<td>"+obj.result[i].chineseName+"</td>"+
					"<td>"+obj.result[i].cardId+"</td>"+
					"<td>"+obj.result[i].applyQuota+"</td>"+
					"<td>"+obj.result[i].productName+"</td>"+
					"<td>"+obj.result[i].creatime+"</td>"+
					"<td>"+obj.result[i].displayName+"</td>";		
					if((i+1)%10==0){
						result[j]=tmp;
						j++;
						tmp="";
					}
				}

				result[j]=tmp;

				window.scrollTo(0,0);//滚动条回到顶端
				$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()'/>审贷会</div>"+  
						"<div class='content' >"+ 
						"<table id='cslb' class='cpTable jjTable' style='text-align:center;'>"+
						head+result[page]+
						"</table>"+
						"<p><input type='button' class='btn btn-large btn-primary' value='上一页' id = 'syy' />"+
						"<input type='button' class='btn btn-large btn-primary' value='下一页' id = 'xyy'/>"+
						"<input type='button' class='btn btn-large btn-primary' value='调查模板' id ='xszlxx'/>"+
						"<input type='button' class='btn btn-large btn-primary' value='影像资料' id ='xsyxzl'/>"+
						"<input type='button' class='btn btn-large btn-primary' value='额度评估' id ='pged'/>"+
						"<input type='button' class='btn btn-primary btn-large' value='初审结论' id='csjl'/>"+
						"<input type='button' class='btn btn-large' value='返回' onclick='myshsp()'/></p>"+
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
				$("#syy").click(function(){
					page=page-1; 
					if(result[page]){
						$("#cslb").html(head+result[page]);
					}else{
						alert("当前已经是第一页");
						page = page+1;
					}
				})

				$("#csjl").click(function() {
					if ($("input[type='radio']").is(':checked')) {

						var values =$('input[name="checkbox"]:checked').attr("value").split("@");
						var res ={};
						res.id = values[0];
						res.customerId = values[1];
						res.productId =values[2];
						res.applyQuota = values[4];
						res.sxqj= values[6];
						res.pname= values[5];
						res.name= values[7];
						xssdjy(res);
					}else{
						alert("请选择一行");
					}
				})
				$("#xsyxzl").click(function() {
					if ($("input[type='radio']").is(':checked')) {
						var values =$('input[name="checkbox"]:checked').attr("value").split("@");
						var res ={};
						res.customerId = values[1];
						res.productId =values[2];
						
						sdckyxzl(res);
					}else{
						alert("请选择一行");
					}
				})
				$("#xszlxx").click(function() {
					if ($("input[type='radio']").is(':checked')) {
						$("#xszlxx").attr('disabled',"true");
						var values =$('input[name="checkbox"]:checked').attr("value").split("@");
						if(values[5]=='融耀卡'){
							alert('对不起，此产品无此表!!');
						}else{
							var res={};
							res.customerId = values[1];
							res.productId =values[2];
							dcmb(res);
						}
					}else{
						alert("请选择一行");
					}
				})
					$("#pged").click(function() {
					if ($("input[type='radio']").is(':checked')) {
						var values =$('input[name="checkbox"]:checked').attr("value").split("@");
						var res ={};
						res.cardid=values[3];
						sdedpg(res);
					}else{
						alert("请选择一行");
					}
				})
			}
		})
}






//调查模板
function dcmb(res){
	var dcmburl="/ipad/user/ckdcmb.json";
	$.ajax({
		url:wsHost+dcmburl,
		type: "GET",
		dataType:'json',
		data:{
			customerId:res.customerId ,
			productId:res.productId ,
		},
		success: function (json){
			var obj = $.evalJSON(json);
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='sdhsw()'/>调查模板</div>"+  
					"<div class='content'>" +
					"<div class='tabplace'>"+
					"<ul class='com-tab' >"+
					"<li class='tab' id ='jyb'>调查表</li>"+
					"<li class='tab' id ='jbzkb'>月份损溢表</li>"+
					"<li class='tab' id = 'ysyfb'>应收预付</li>"+
					"<li class='tab' id = 'dhd'>点货单</li>"+
					"<li class='tab' id = 'gzb'>固资</li>"+
					"<li class='tab' id = 'yfysb'>应付预收</li>"+
					"<li class='tab' id = 'xjlb'>现金流</li>"+
					"</ul></div>"+
					"<div id = 'resultshow'>"+
					obj.tableContentjyb+
					"</div>"+
					"<p><input type='button' class='btn btn-large' value='返回' onclick='sdhsw()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			//建议表
			$("#jyb").click(function(){
				$("#resultshow").html(obj.tableContentjyb);
			})

			//月份损溢表
			$("#jbzkb").click(function(){
				$("#resultshow").html(obj.tableContentjbzkb);
			})



			//现金流
			$("#xjlb").click(function(){
				$("#resultshow").html(obj.tableContentxjlb);
			})

			//固资
			$("#gzb").click(function(){
				$("#resultshow").html(obj.tableContentxgzb);
			})

			//应付预收
			$("#yfysb").click(function(){
				$("#resultshow").html(obj.tableContentyfysb);
			})

			//应收预付
			$("#ysyfb").click(function(){
				$("#resultshow").html(obj.tableContentysyfb);
			})

			
			$("#dhd").click(function(){
				$("#resultshow").html(obj.tableContentdhd);
			})
		},
		error:function(json){
			var obj = $.evalJSON(json);
			alert(obj.mess);
		}
	})
}


function sdckyxzl(res){
	 var objs;
	 var yxzlur1l="/ipad/JnpadImageBrowse/findLocalImageByType1.json";
		$.get(wsHost+yxzlur1l,{customerId:res.customerId,productId:res.productId},callbackfunction);
		function  callbackfunction (json){
			objs = $.evalJSON(json);
	window.scrollTo(0,0);//滚动条回到顶端
	$("#mainPage").html("<div class='title' id='back'><img src='images/back.png'/>审贷影像资料审核</div>"+  
			  "<div style='padding-top:20px'>" +
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
	"</div>");
	$(".right").hide();
	$("#mainPage").show(); 
	 $("#back").click(function(){
		 sdhsw();
	 });
	  $("#jycs").click(function(){
		  var phone_type=1;
		  sdyxzlck(res,phone_type)
	  });
	  $("#jyqs").click(function(){
		  var phone_type=2;
		  sdyxzlck(res,phone_type)
	  });
	  $("#qtsr").click(function(){
		  var phone_type=6;
		  sdyxzlck(res,phone_type)
	  });
	  $("#sfzm").click(function(){
		  var phone_type=7;
		  sdyxzlck(res,phone_type)
	  });
	  $("#grzc").click(function(){
		  var phone_type=8;
		  sdyxzlck(res,phone_type)
	  });
	  $("#jf").click(function(){
		  var phone_type=9;
		  sdyxzlck(res,phone_type)
	  });
	  $("#db").click(function(){
		  var phone_type=10;
		  sdyxzlck(res,phone_type)
	  });
	  $("#jydj").click(function(){
		  window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'  id='back'><img src='images/back.png'/>经营权属</div>"+  
					"<div style='padding-top:100px'>" +
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
							"</div>");
			    $(".right").hide();
			    $("#mainPage").show();
			    $("#back").click(function(){
			    	sdckyxzl(res);
				});
				$("#ljjc").click(function(){
					var phone_type=3;
					sdyxzlck(res,phone_type)
				});$("#zcfz").click(function(){
					var phone_type=4;
					sdyxzlck(res,phone_type)
				});$("#sy").click(function(){
					var phone_type=5;
					sdyxzlck(res,phone_type)
				});
	  });
		}}

function sdyxzlck(res,phone_type){
	var yxzlurl="/ipad/JnpadImageBrowse/findLocalImageByType.json";
	var obj;
	var imas=[];
	$.get(wsHost+yxzlurl,{customerId:res.customerId,productId:res.productId,phone_type:phone_type},callbackfunction);
		function  callbackfunction (json){
			obj = $.evalJSON(json);
		
			for(var aa=0;aa<obj.size;aa++){
				imas+=obj.imagerList[aa].id+",";
			}
			var target=imas;
			window.plugins.imamessage.send1(success,error,target);
		};
		}




function sdedpg(res){
	   var edpgurl="/ipad/selectAllCustomerApprais.json";
	var obj;
	var zfqk;
	var zcqk;
	var yyqk;
	var dwxz;
	var dwgl;
	var jzsj;
	var hyzk;
	var hjzk;
	var jycd;
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
	var cykh;
	$.get(wsHost+edpgurl,{cardid:res.cardid},callbackfunction);
		function  callbackfunction (json){
			obj = $.evalJSON(json);
		
			if(obj.result.zfqk=='A11'){
				zfqk='自置房屋(无贷款)';
			}
			if(obj.result.zfqk=='B7'){
				zfqk='自置房屋(有贷款)';
			}
			if(obj.result.zfqk=='C5'){
				zfqk='与父母同住';
			}
			if(obj.result.zfqk=='D4'){
				zfqk='租房';
			}
			if(obj.result.zfqk=='E0'){
				zfqk='无房';
			}
			
			
			if(obj.result.zcqk=='A7'){
				zcqk='20万以上';
			}
			if(obj.result.zcqk=='B4'){
				zcqk='20万以下';
			}
			if(obj.result.zcqk=='C0'){
				zcqk='无';
			}

			
			if(obj.result.yyqk=='A5'){
				yyqk='完全产权车';
			}if(obj.result.yyqk=='B2'){
				yyqk='贷款购车';
			}if(obj.result.yyqk=='C0'){
				yyqk='无';
			}
			
			
			if(obj.result.dwxz=='A16'){
				dwxz='机关/事业单位';
			}if(obj.result.dwxz=='B14'){
				dwxz='国有';
			}if(obj.result.dwxz=='C13'){
				dwxz='独资';
			}if(obj.result.dwxz=='D10'){
				dwxz='合资';
			}if(obj.result.dwxz=='E6'){
				dwxz='股份制';
			}if(obj.result.dwxz=='F8'){
				dwxz='私营';
			}if(obj.result.dwxz=='G4'){
				dwxz='其他';
			}if(obj.result.dwxz=='H0'){
				dwxz='失业无社会救济';
			}
			
			
			if(obj.result.dwgl=='A3'){
				dwgl='10年以上';
			}if(obj.result.dwgl=='B2'){
				dwgl='5-10年';
			}if(obj.result.dwgl=='C1'){
				dwgl='1-5年';
			}if(obj.result.dwgl=='D0'){
				dwgl='一年以下';
			}
			
			if(obj.result.jzsj=='A7'){
				jzsj='6年以上';
			}if(obj.result.jzsj=='B5'){
				jzsj='2-6年';
			}if(obj.result.jzsj=='C2'){
				jzsj='2年以下';
			}
			
			if(obj.result.hyzk=='A8'){
				hyzk='已婚有子女';
			}if(obj.result.hyzk=='B5'){
				hyzk='已婚无子女';
			}if(obj.result.hyzk=='C3'){
				hyzk='未婚';
			}if(obj.result.hyzk=='D4'){
				hyzk='离婚';
			}if(obj.result.hyzk=='E5'){
				hyzk='再婚';
			}
			
			if(obj.result.hjzk=='A5'){
				hjzk='本地户口';
			}if(obj.result.hjzk=='B4'){
				hjzk='本地农户';
			}if(obj.result.hjzk=='C2'){
				hjzk='外地户口';
			}
			
			if(obj.result.jycd=='A5'){
				jycd='硕士及以上';
			}if(obj.result.jycd=='B4'){
				jycd='本科';
			}if(obj.result.jycd=='C3'){
				jycd='大专';
			}if(obj.result.jycd=='D1'){
				jycd='高中及中专';
			}if(obj.result.jycd=='E0'){
				jycd='初中及以下';
			}
			
			if(obj.result.zgzs=='A5'){
				zgzs='高级';
			}if(obj.result.zgzs=='B4'){
				zgzs='中级';
			}if(obj.result.zgzs=='C3'){
				zgzs='初级';
			}if(obj.result.zgzs=='D1'){
				zgzs='其他';
			}if(obj.result.zgzs=='E0'){
				zgzs='无';
			}
			
			if(obj.result.zc=='A5'){
				zc='高级';
			}if(obj.result.zc=='B4'){
				zc='中级';
			}if(obj.result.zc=='C3'){
				zc='初级';
			}if(obj.result.zc=='D1'){
				zc='其他';
			}
			
			if(obj.result.age=='A3'){
				age='18-30岁';
			}if(obj.result.age=='B5'){
				age='30-45岁';
			}if(obj.result.age=='C4'){
				age='45-55岁';
			}if(obj.result.age=='D2'){
				age='55岁以上';
			}
			
			
			if(obj.result.jkqk=='A10'){
				jkqk='良好';
			}if(obj.result.jkqk=='B5'){
				jkqk='一般';
			}if(obj.result.jkqk=='C0'){
				jkqk='差';
			}
			
			if(obj.result.ggjl=='A20'){
				ggjl='无';
			}if(obj.result.ggjl=='B-5'){
				ggjl='拖欠记录';
			}if(obj.result.ggjl=='C-7'){
				ggjl='不良诉讼记录';
			}if(obj.result.ggjl=='D-20'){
				ggjl='治安处罚记录';
			}if(obj.result.ggjl=='E-40'){
				ggjl='犯罪记录';
			}if(obj.result.ggjl=='F0'){
				ggjl='未确认';
			}
			
			
			if(obj.result.zw=='A10'){
				zw='厅局级及以上(公务员)';
			}if(obj.result.zw=='B7'){
				zw='处级(公务员)';
			}
			if(obj.result.zw=='C5'){
				zw='科级(公务员)';
			}if(obj.result.zw=='D3'){
				zw='一般干部(公务员)';
			}if(obj.result.zw=='E5'){
				zw='企业负责人';
			}if(obj.result.zw=='F3'){
				zw='中高层管理人员';
			}if(obj.result.zw=='G1'){
				zw='一般管理人员';
			}if(obj.result.zw=='H4'){
				zw='私营业主';
			}if(obj.result.zw=='I0'){
				zw='一般员工';
			}
			
			
			if(obj.result.grsr=='A26'){
				grsr='1万元以上';
			}if(obj.result.grsr=='B22'){
				grsr='0.8-1万元';
			}if(obj.result.grsr=='C18'){
				grsr='0.5-0.8万元';
			}if(obj.result.grsr=='D12'){
				grsr='0.3-0.5万元';
			}if(obj.result.grsr=='E7'){
				grsr='0.1-0.3万元';
			}if(obj.result.grsr=='F5'){
				grsr='0.1万元以下';
			}if(obj.result.grsr=='G0'){
				grsr='无';
			}
			
			if(obj.result.zwsrb=='A17'){
				zwsrb='0';
			}if(obj.result.zwsrb=='B13'){
				zwsrb='0-15%';
			}if(obj.result.zwsrb=='C10'){
				zwsrb='15-25%';
			}if(obj.result.zwsrb=='D7'){
				zwsrb='26-35%';
			}if(obj.result.zwsrb=='E2'){
				zwsrb='36-49%';
			}if(obj.result.zwsrb=='F0'){
				zwsrb='50%';
			}
			
			
			if(obj.result.syrk=='A5'){
				syrk='无';
			}if(obj.result.syrk=='B4'){
				syrk='1人';
			}if(obj.result.syrk=='C3'){
				syrk='2人';
			}if(obj.result.syrk=='D2'){
				syrk='3人';
			}if(obj.result.syrk=='E0'){
				syrk='3人以上';
			}
			
			if(obj.result.tjr=='A3'){
				tjr='本公司员工推荐';
			}if(obj.result.tjr=='B2'){
				tjr='其他中介推荐';
			}if(obj.result.tjr=='C5'){
				tjr='银行推荐';
			}if(obj.result.tjr=='D1'){
				tjr='已担保客户推荐';
			}if(obj.result.tjr=='E0'){
				tjr='无';
			}
			
			if(obj.result.cykh=="1"){
				cykh='是';
			}else if(obj.result.cykh=="0"){
				cykh='否';
			}
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' id='back'/>进件管理--审贷会--查看额度评估</div>"+  
			        "<div class='content'>"+
						                        "<table class='cpTable'>"+  
													"<tr>"+                     
						                                "<th colspan='2'>"+
															//"客户：<input type='text'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
															//"证件号码：<input type='text'/>"+
						                                "客户:"+obj.result.chinesename+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
						                                "证件号码:"+obj.result.cardid+
														"</th>"+ 
						                            "</tr>"+
						                            "<tr>"+                             
						                            "<th style='width:180px;'>住房情况</th>"+         
						                            "<td id='zfqk'>" +
						                         zfqk+
													"</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>金融资产情况（我行）</th>"+         
						                            "<td id='zcqk'>" +
						                         zcqk+
												    "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>大件消费品拥有情况</th>"+         
						                            "<td id='yyqk'>" +
						                         yyqk+
													"</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>单位性质</th>"+         
						                            "<td id='dwxz'>" +
						                         dwxz+
													"</td>"+ 
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>现工作单位工龄</th>"+         
						                            "<td id='dwgl'>" +
						                         dwgl+

													"</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>在现址居住时间</th>"+         
						                            "<td id='jzsj'>" +
						                         jzsj+
						                            "</td>"+ 
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>婚姻状况</th>"+         
						                            "<td id='hyzk'>" +
						                         hyzk+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>户籍情况</th>"+         
						                            "<td id='hjzk'>" +
						                         hjzk+
						                            "</td>"+ 
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>教育程度</th>"+         
						                            "<td id='jycd'>" +
						                         jycd+
						                            "</td>"+ 
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>职业资格证书拥有情况</th>"+         
						                            "<td id='zgzs'>" +
						                         zgzs+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>职称</th>"+         
						                            "<td id='zc'>" +
						                         zc+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>年龄</th>"+         
						                            "<td id='age'>" +
						                         age+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>健康情况</th>"+         
						                            "<td id='jkqk'>" +
						                         jkqk+
						                            "</td>"+  
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>公共记录</th>"+         
						                            "<td id='ggjl'>" +
						                         ggjl+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>职务</th>"+         
						                            "<td id='zw'>" +
						                         zw+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>个人月收入（税前）</th>"+         
						                            "<td id='grsr'>" +
						                         grsr+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>债务收入比</th>"+         
						                            "<td id='zwsrb'>" +
						                         zwsrb+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>赡养人口</th>"+         
						                            "<td id='syrk'>" +
						                         syrk+
						                            "</td>"+ 
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>推荐人</th>"+         
						                            "<td id='tjr'>" +
						                         tjr+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>客户经理主观印象</th>"+         
						                            "<td id='khjlzgyx'>" +
						                         obj.result.khjlzgyx+
						                            "</td>"+ 
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>客户单月可支配收入</th>"+         
						                            "<td >" +
						                         obj.result.khdysr+
						                            "</td>"+
						                        "</tr>"+
						                        "<tr>"+                             
						                            "<th>是否属于超优客户</th>"+         
						                            "<td >" +
						                         cykh+
						                            "</td>"+
						                        "</tr>"+
						                    "</table>"+
						                    "<table class='cpTable' style='margin-top:-20px;'>"+ 
						                        "<tr>"+    
													"<td style='width:33%;background:#fcd357;border:none;color:#fff;'>总分<font class='pf' >"+ obj.result.zf+"</font></td>"+
													"<td style='width:33%;background:#f49857;border:none;color:#fff;'>评分等级<font class='pf' id='pfdj'>"+ obj.result.pfdj+"</td>"+
													"<td style='background:#f26d6e;border:none;color:#fff;'>建议额度<font class='pf' id='jyed'>"+ obj.result.jyed+"</font></td>"+   
						                        "</tr>"+
						                    "</table>"+
						                   
						                "</div>");
						$(".right").hide();
						$("#mainPage").show();
					  $("#back").click(function(){
						  sdhsw();
					  })
		}
}








function xssdjy(res){
	var	managerList=window.sessionStorage.getItem("managerList");
	var tjjlurl = "/ipad/insertsdjy.json";
	var csjlurl = "/ipad/selectCsXx.json";
	var userId = window.sessionStorage.getItem("userId");
	$.ajax({
		url:wsHost+csjlurl,
		type: "GET",
		dataType:'json',
		data:{
			id:res.id,
		},
		cache:false,
		success: function (json){
			var obj = $.evalJSON(json);
			window.scrollTo(0,0);//滚动条回到顶端
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='myshsp()()'/>进件初审结论</div>"+  
					"<div class='content'>" +
					"<table class='cpTable khjbxx' style='margin-top:20px;'>"+//审核审批任务信息
					"<tr>"+                        
					"<th colspan='4'>进件申请信息</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>申请人：</th>"+
					"<td><input type ='text' value='"+res.name+"' readonly = 'true'>"+
					"</td>"+
					"<th>申请金额：</th>"+
					"<td><input type ='text' value='"+res.applyQuota+"' readonly = 'true'>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>产品授信区间：</th>"+
					"<td><input type='text' id='sxqj' value='"+res.sxqj+"' readonly = 'true'/>"+
					"</td>"+
					"<th>产品名称：</th>"+
					"<td><input type = 'text' value='"+res.pname+"' readonly = 'true'></td>"+
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
					"<td><input type = 'text' value='"+obj.result.userId_1+"' readonly = 'true'></td>"+
					"</tr>"+
					
					"<tr>"+
					"<th>审批人二：</th>"+
					"<td><input type='text' id='sxqj' value='"+obj.result.userId_2+"' readonly = 'true'/>"+
					"</td>"+
					"<th>审批人三：</th>"+
					"<td><input type = 'text' value='"+obj.result.userId_3+"' readonly = 'true'></td>"+
					"</tr>"+
					
					"<tr>"+
					"<th>记录员：</th>"+
					"<td><input type = 'text' value='"+obj.result.userId_4+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+                        
					"<th colspan='4'>审贷决议</th>"+  
					"</tr>"+
					"<tr>"+
					"<th>审议结论：</th>"+
					"<td><select id ='auditresult' name = 'status'><option value = 'APPROVE'>通过</option>" +
					"<option value = 'REJECTAPPROVE'>拒绝</option>" +
					"<option value = 'RETURNAPPROVE'>退回</option>" +
					"</select>"+
					"</td>"+
					"</tr>"+
					
					"<tr>"+
					"<th>授信额度：</th>"+
					"<td><input type='text' id ='sxed' name='decision_amount'/>"+
					"</td>"+
					"</tr>"+
					"<tr>"+
					"<th>审贷委一：</th>"+
					"<td><input type = 'text' value='"+obj.result.name1+"' readonly = 'true'></td>"+
					"</tr>"+
					"<tr>"+
					"<th>审贷委二：</th>"+
					"<td><input type = 'text' value='"+obj.result.name2+"' readonly = 'true'></td>"+
					"<th>审贷委三：</th>"+
					"<td><input type = 'text' value='"+obj.result.name3+"' readonly = 'true'></td>"+
					"</tr>"+
					
					"<tr >"+
					"<th>利率</th>"+
					"<td><input id='decisionRate' type='text' name='decision_rate'/>"+
					"</td>"+
					"<th>期限：</th>"+
					"<td><select id='qx'>" +
					"<option value = '1'>1个月</option>" +
					"<option value = '2'>2个月</option>" +
					"<option value = '3'>3个月</option>" +
					"<option value = '4'>4个月</option>" +
					"<option value = '5'>5个月</option>" +
					"<option value = '6'>6个月</option>" +
					"<option value = '7'>7个月</option>" +
					"<option value = '8'>8个月</option>" +
					"<option value = '9'>9个月</option>" +
					"<option value = '10'>10个月</option>" +
					"<option value = '11'>11个月</option>" +
					"<option value = '12'>12个月</option>" +
					"<option value = '13'>13个月</option>" +
					"<option value = '14'>14个月</option>" +
					"<option value = '15'>15个月</option>" +
					"<option value = '16'>16个月</option>" +
					"<option value = '17'>17个月</option>" +
					"<option value = '18'>18个月</option>" +
					"<option value = '19'>19个月</option>" +
					"<option value = '20'>20个月</option>" +
					"<option value = '21'>21个月</option>" +
					"<option value = '22'>22个月</option>" +
					"<option value = '23'>23个月</option>" +
					"<option value = '24'>24个月</option>" +
					"<option value = '25'>25个月</option>" +
					"<option value = '26'>26个月</option>" +
					"<option value = '27'>27个月</option>" +
					"<option value = '28'>28个月</option>" +
					"<option value = '29'>29个月</option>" +
					"<option value = '30'>30个月</option>" +
					"<option value = '31'>31个月</option>" +
					"<option value = '32'>32个月</option>" +
					"<option value = '33'>33个月</option>" +
					"<option value = '34'>34个月</option>" +
					"<option value = '35'>35个月</option>" +
					"<option value = '36'>36个月</option>" +
					"</select>"+
					"</td>"+					"</tr>"+
					"<tr >"+
					"<th><label id ='sdw11' for=reason>审贷委一意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw1'></textarea>" +
					"</td>" +
					"<th><label id ='sdw11' for=reason>审贷委二意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw2'></textarea>" +
					"</td>" +
					"</tr>"+
					"<tr >"+
					"<th><label id ='sdw31' for=reason>审贷委三意见:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='sdw3'></textarea>" +
					"</td>" +
					"</tr>"+
					"<tr style='display :none'>"+
					"<th><label id ='reason' for=reason>原因:</label></th>"+
					"<td><textarea name='decisionRefusereason' id='decisionRefusereason'></textarea>" +
					"</td>" +
					"</tr>"+
					"</table>"+
					"<p>" +
					"<input type='button' class='btn btn-primary btn-large' value='保存' id='save'/>" +
					"<input type='button' class='btn btn-large' value='返回' onclick='sdhsw();'/>" +
					"</p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#save").click(function(){
				 $("#save").attr('disabled',false);
				var sxed= $("#sxed").val();
					$.ajax({
						url:wsHost+tjjlurl,
						dateType:'json',
						type:'GET',
						data:{
							cyUser1:$("#sdw1").val(),
							cyUser2:$("#sdw2").val(),
							fdUser:$("#sdw3").val(),
							lv:$("#decisionRate").val(),//利率
							id:res.id,
							status:$("#auditresult").val(),
							sxed:sxed,
							qx:$("#qx").val(),
							userId:userId,
							decisionRefusereason:$("#decisionRefusereason").val(),
							customerId:res.customerId,
							productId:res.productId,
							did:obj.result.did,
						},
						success:function(json){
							var mes = $.evalJSON(json);
							alert(mes.message);
							sdhsw();
						}
					})
			})

			$("#auditresult").change(function (){

				var status = $("select[name=status]").val();
				if( status == "APPROVE"){
					$("tr:eq(10)").show();
					$("tr:eq(13)").show();
					$("tr:eq(16)").hide();
				}

				if( status == "REJECTAPPROVE"){
					$("tr:eq(10)").hide();
					$("tr:eq(13)").hide();
					$("tr:eq(16)").show();
				}

				if( status == "RETURNAPPROVE"){
					$("tr:eq(10)").hide();
					$("tr:eq(13)").hide();
					$("tr:eq(16)").show();
				}

				if(status =='RETURNAPPROVE'){
					$("#reason").text("退回原因");	
				}else{
					$("#reason").text("拒绝原因");	
				} 
			});
		},
		error: function(){
			alert("请求超时");
		}
	})
}