
//个人信息
function grxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
							"<div class='step3' onclick='khxxzlcj()'>个人信息</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+   
							"<tr>"+                             
								"<td style='width:110px;'>申请人性别</td>"+         
								"<td>" +
									"<label onclick='checkRadio(this)' class='radio'><input type='radio' name='sex'/>女</label>" +
									"<label onclick='checkRadio(this)' class='radio'><input type='radio' name='sex'/>男</laabel>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>婚姻状况</td>"+         
								"<td>" +
									"<select>" +
										"<option>已婚</option>" +
										"<option>未婚</option>" +
									"</select>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>户籍所在地</td>"+          
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>户籍详细地址</td>"+  
								"<td><input type='text' class='long'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>家庭住址</td>"+    
								"<td><input type='text' class='long'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>最高学位学历</td>"+           
								"<td>" +
									"<select>" +
										"<option>本科</option>" +
										"<option>高中</option>" +
									"</select>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>固定电话</td>"+    
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>移动电话</td>"+    
								"<td><input type='text'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function grxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>个人信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:110px;'>申请人性别</td>"+         
                                "<td>" +
                                    "<label onclick='checkRadio(this)' class='radio'><input type='radio' name='sex'/>女</label>" +
                                    "<label onclick='checkRadio(this)' class='radio radio_checked'><input type='radio' name='sex' checked/>男</laabel>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>婚姻状况</td>"+         
                                "<td>" +
                                    "<select>" +
                                        "<option selected>已婚</option>" +
                                        "<option>未婚</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>户籍所在地</td>"+          
                                "<td><input type='text' value='山西省太原市'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>户籍详细地址</td>"+  
                                "<td><input type='text' class='long' value='太原市柏杨树北二巷3栋3单元22号'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭住址</td>"+    
                                "<td><input type='text' class='long' value='太原市万柏林区卧虎山公路钢中路口裕丰惠泽园10号楼-3单元-604'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>最高学位学历</td>"+           
                                "<td>" +
                                    "<select>" +
                                        "<option>本科</option>" +
                                        "<option selected>高中</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>固定电话</td>"+    
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>移动电话</td>"+    
                                "<td><input type='text' value='15535178821'/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
//家庭信息
function jtxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>家庭信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:145px;'>家庭成员</td>"+         
                                "<td><input type='text'/></td>"+                        
                                "<td>家庭和睦</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>是</option>" +
                                        "<option >否</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经济依赖人数</td>"+  
                                "<td><input type='text'/></td>"+
                                "<td>配偶姓名</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶证件号码</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>配偶工作单位</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶年收入</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>配偶电话</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶其他状况说明</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>子女工作状态</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>子女教育状态</td>"+    
                                "<td colspan='3'><input type='text'/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
function jtxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>家庭信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:145px'>家庭成员</td>"+         
                                "<td><input type='text' value=''/></td>"+
                                "<td>家庭和睦</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option selected>是</option>" +
                                        "<option >否</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经济依赖人数</td>"+  
                                "<td><input type='text' value='3'/></td>"+
                                "<td>配偶姓名</td>"+    
                                "<td><input type='text' value='阎育强'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶证件号码</td>"+    
                                "<td><input type='text' value='320404198002356125'/></td>"+
                                "<td>配偶工作单位</td>"+    
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶年收入</td>"+    
                                "<td><input type='text' value='328916元'/></td>"+
                                "<td>配偶电话</td>"+    
                                "<td><input type='text' value='13327466941'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>配偶其他状况说明</td>"+    
                                "<td><input type='text' value=''/></td>"+
                                "<td>子女工作状态</td>"+    
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>子女教育状态</td>"+    
                                "<td colspan='3'><input type='text' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
//车产信息
function ccxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>车产信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
    						"<table id='ccxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>汽车车型</th>"+
                                    "<th>汽车车牌号</th>"+
                                    "<th>购买日期</th>"+
                                    "<th>购买价格</th>"+
                                    "<th>现值（公允值）</th>"+
                                    "<th>购置方式</th>"+
                                    "<th>备注</th>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>1</td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td><input type='date' class='addinput'/></td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td>" +
                                        "<select>" +
                                            "<option>现金</option>" +
                                        "</select>" +
                                    "</td>"+
    								"<td><input type='text' class='addinput'/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"ccxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"ccxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
					"</div>");
	$(".right").hide();
	$("#mainPage").show();
}
function ccxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>车产信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table id='ccxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>汽车车型</th>"+
                                    "<th>汽车车牌号</th>"+
                                    "<th>购买日期</th>"+
                                    "<th>购买价格</th>"+
                                    "<th>现值（公允值）</th>"+
                                    "<th>购置方式</th>"+
                                    "<th>备注</th>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>1</td>"+
                                    "<td><input type='text' class='addinput'/></td>"+
                                    "<td><input type='text' class='addinput'/></td>"+
                                    "<td><input type='date' class='addinput'/></td>"+
                                    "<td><input type='text' class='addinput'/></td>"+
                                    "<td><input type='text' class='addinput'/></td>"+
                                    "<td>" +
                                        "<select>" +
                                            "<option>现金</option>" +
                                        "</select>" +
                                    "</td>"+
                                    "<td><input type='text' class='addinput'/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"ccxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"ccxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}
//房产信息
function fcxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>房产信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
    						"<table id='fcxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>房产地址</th>"+
                                    "<th>面积</th>"+
                                    "<th>购买日期</th>"+
                                    "<th>购买价格</th>"+
                                    "<th>现值（公允值）</th>"+
                                    "<th>购置方式</th>"+
                                    "<th>备注</th>"+
                                "</tr>"+
                                "<tr>"+    
                                    "<td>1</td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td><input type='date' class='addinput'/></td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td><input type='text' class='addinput'/></td>"+
    								"<td>" +
                                        "<select>" +
                                            "<option>现金</option>" +
                                        "</select>" +
                                    "</td>"+
    								"<td><input type='text' class='addinput'/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"fcxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"fcxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
function fcxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
							"<div class='step3' onclick='khxxzlcj()'>房产信息</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='fcxx' class='cpTable' style='text-align:center;'>"+
								"<tr>"+                             
									"<th style='width:40px;'>序号</th>"+  
									"<th>房产地址</th>"+
									"<th>面积</th>"+
									"<th>购买日期</th>"+
									"<th>购买价格</th>"+
									"<th>现值（公允值）</th>"+
									"<th>购置方式</th>"+
									"<th>备注</th>"+
								"</tr>"+
								"<tr>"+    
									"<td>1</td>"+
									"<td><input type='text' class='addinput' value='太原市万柏林区卧虎山公路钢中路口裕丰惠泽园10号楼-3单元-604'/></td>"+
									"<td><input type='text' class='addinput' value='89.43㎡'/></td>"+
									"<td><input type='date' class='addinput' value='2014-04-13'/></td>"+
									"<td><input type='text' class='addinput' value='306566元'/></td>"+
									"<td><input type='text' class='addinput' value=''/></td>"+
									"<td>" +
										"<select>" +
											"<option>现金</option>" +
										"</select>" +
									"</td>"+
									"<td><input type='text' class='addinput' value=''/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"fcxx\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"fcxx\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
}
//联系人信息
function lxrxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>联系人信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table class='cpTable' id='lxrxx' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+                 
                                    "<th>联系人姓名</th>"+                   
                                    "<th>与客户关系</th>"+   
                                    "<th>联系人电话</th>"+  
                                "</tr>"+  
                                "<tr>"+  
                                    "<td>1</td>"+
                                    "<td><input type='text' value=''/></td>"+
                                    "<td><input type='text' value=''/></td>"+
                                    "<td><input type='text' value=''/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"lxrxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"lxrxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
function lxrxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>联系人信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table class='cpTable' id='lxrxx' style='text-align:center;'>"+
                                "<tr>"+                             
                                    "<th style='width:40px;'>序号</th>"+                 
                                    "<th>联系人姓名</th>"+                   
                                    "<th>与客户关系</th>"+   
                                    "<th>联系人电话</th>"+  
                                "</tr>"+  
                                "<tr>"+  
                                    "<td>1</td>"+
                                    "<td><input type='text' value=''/></td>"+
                                    "<td><input type='text' value=''/></td>"+
                                    "<td><input type='text' value=''/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"lxrxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"lxrxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
//居住信息
function jzxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>居住信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:145px'>居住类型</td>"+         
                                "<td>" +
                                    "<select>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+                 
                                "<td>住房装修情况</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>好</option>" +
                                        "<option>中</option>" +
                                        "<option>差</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房面积</td>"+  
                                "<td><input type='date'/></td>"+
                                "<td>住房格局</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>一室一厅</option>" +
                                        "<option>两室一厅</option>" +
                                        "<option>两室两厅</option>" +
                                        "<option>三室一厅</option>" +
                                        "<option>三室两厅</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住起始年月</td>"+    
                                "<td><input type='date'/></td>"+
                                "<td>是否按揭</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>是</option>" +
                                        "<option>否</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td colspan='3'>" +
                                    "<select>" +
                                        "<option>现场调查</option>" +
                                        "<option>外围调查</option>" +
                                        "<option>未调查</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
function jzxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>居住信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:145px;'>居住类型</td>"+         
                                "<td>" +
                                    "<select>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+              
                                "<td>住房装修情况</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>好</option>" +
                                        "<option>中</option>" +
                                        "<option>差</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房面积</td>"+  
                                "<td><input type='text' value='89.43㎡'/></td>"+
                                "<td>住房格局</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>一室一厅</option>" +
                                        "<option selected>两室一厅</option>" +
                                        "<option>两室两厅</option>" +
                                        "<option>三室一厅</option>" +
                                        "<option>三室两厅</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住起始年月</td>"+    
                                "<td><input type='date' value='2014-04-13'/></td>"+
                                "<td>是否按揭</td>"+    
                                "<td>" +
                                    "<select>" +
                                        "<option>是</option>" +
                                        "<option selected>否</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td colspan='3'>" +
                                    "<select>" +
                                        "<option>现场调查</option>" +
                                        "<option>外围调查</option>" +
                                        "<option>未调查</option>" +
                                    "</select>" +
                                "</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }