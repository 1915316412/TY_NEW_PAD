
//房产证信息
function fcz_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>房产证</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='确定' onclick='khyxzlcj()'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='fcz' class='cpTable' style='text-align:center;margin-top:20px;'>"+
								"<tr>"+                             
									"<th style='width:40px;'>序号</th>"+  
									"<th>房产证文件路径</th>"+
									"<th>操作</th>"+
								"</tr>"+
								"<tr>"+    
									"<td>1</td>"+
									"<td><input type='text' id='fcz_sheet1' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"fcz_sheet1\",\"img\");' value='选择文件'/></td>"+
									"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"fcz_sheet1\",\"img\");'/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"fcz\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"fcz\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function fcz_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
                            "<div class='step3' onclick='khyxzlcj()'>房产证</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-danger next' value='删除'/>" +
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<div class='imgbox' style='width:95%;margin-left:2.5%;margin-top:20px;clear:both;'>" +
                               "<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/5.jpg'/></div>"+
                               "<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/6.jpg'/></div>"+
                               "<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/7.jpg'/></div>"+
                            "</div>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
//结婚证信息
function jhz_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>结婚证</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='确定' onclick='khyxzlcj()'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='jhz' class='cpTable' style='text-align:center;margin-top:20px;'>"+
								"<tr>"+                             
									"<th style='width:40px;'>序号</th>"+  
									"<th>结婚证文件路径</th>"+
									"<th>操作</th>"+
								"</tr>"+
								"<tr>"+    
									"<td>1</td>"+
									"<td><input type='text' id='jhz_sheet1' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"jhz_sheet1\",\"img\");' value='选择文件'/></td>"+
									"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"jhz_sheet1\",\"img\");'/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"jhz\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"jhz\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function jhz_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
                            "<div class='step3' onclick='khyxzlcj()'>结婚证</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-danger next' value='删除'/>" +
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<div class='imgbox'>" +
                                "<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/8.jpg'/></div>"+
                            "</div>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
//征信报告信息
function zxbg_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>征信报告</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='确定' onclick='khyxzlcj()'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='zxbg' class='cpTable' style='text-align:center;margin-top:20px;'>"+
								"<tr>"+                             
									"<th style='width:40px;'>序号</th>"+  
									"<th>征信报告文件路径</th>"+
									"<th>操作</th>"+
								"</tr>"+
								"<tr>"+    
									"<td>1</td>"+
									"<td><input type='text' id='zxbg_sheet1' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"zxbg_sheet1\",\"img\");' value='选择文件'/></td>"+
									"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"zxbg_sheet1\",\"img\");'/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"zxbg\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"zxbg\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function zxbg_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>征信报告</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-danger next' value='删除'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<div class='imgbox'>" +
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/8.jpg'/></div>"+
							"</div>"+
						"</div>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
}
//银行流水信息
function yhls_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>银行流水</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='确定' onclick='khyxzlcj()'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='yhls' class='cpTable' style='text-align:center;margin-top:20px;'>"+
								"<tr>"+                             
									"<th style='width:40px;'>序号</th>"+  
									"<th>银行流水文件路径</th>"+
									"<th>操作</th>"+
								"</tr>"+
								"<tr>"+    
									"<td>1</td>"+
									"<td><input type='text' id='yhls_sheet1' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"yhls_sheet1\",\"img\");' value='选择文件'/></td>"+
									"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"yhls_sheet1\",\"img\");'/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"yhls\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"yhls\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function yhls_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>银行流水</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-danger next' value='删除'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<div class='imgbox'>" +
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/8.jpg'/></div>"+
							"</div>"+
						"</div>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
}
//其他影像资料
function qtyxzl_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>其他影像资料</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='确定' onclick='khyxzlcj()'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='qtyxzl' class='cpTable' style='text-align:center;margin-top:20px;'>"+
								"<tr>"+                             
									"<th style='width:40px;'>序号</th>"+  
									"<th>其他影像资料文件路径</th>"+
									"<th>操作</th>"+
								"</tr>"+
								"<tr>"+    
									"<td>1</td>"+
									"<td><input type='text' id='qtyxzl_sheet1' class='readonly' readonly='readonly'/><input type='button' class='btn' onclick='getMedia(\"qtyxzl_sheet1\",\"img\");' value='选择文件'/></td>"+
									"<td><img src='images/ugc_icon_type_photo.png' onclick='capture(\"qtyxzl_sheet1\",\"img\");'/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"qtyxzl\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"qtyxzl\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function qtyxzl_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khyxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>影像资料采集</div>"+
							"<div class='step3' onclick='khyxzlcj()'>其他影像资料</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-danger next' value='删除'/>" +
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<div class='imgbox'>" +
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/1.jpg'/></div>"+
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/2.jpg'/></div>"+
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/3.jpg'/></div>"+
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/4.jpg'/></div>"+
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/9.jpg'/></div>"+
								"<div class='images' onclick='checkimg(this)'><div class='zz'><img src='images/select.png'/></div><img src='images/zl/1/10.jpg'/></div>"+
							"</div>"+
						"</div>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
}