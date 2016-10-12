//损益表-利润表标准表
function lrbbzb_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>利润表标准表</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content' style='width:95%;'>"+
                            "<tr>"+                             
                                "<td style='width:235px;'>主营业务收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td colspan='2' rowspan='8' style='vertical-align:top;'>"+   
                                    "营业费用&nbsp;&nbsp;&nbsp;&nbsp;"+
                                    "<button class='add-button' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
                                    "<button class='add-button' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
                                    "<table class='cpTable' id='yyfy'>" +
                                        "<tr>" +
                                            "<th>序号</th>"+
                                            "<th>费用名称</th>" +
                                            "<th>费用金额</th>" +
                                        "<tr>" +
                                        "</tr>" +
                                            "<td>1</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                            "<td><input type='text' value=''/></td>" +
                                        "</tr>" +
                                    "</table>"+       
                                "</td>"+
                            "</tr>"+
                            "<tr>"+     
                                "<td>可变成本（成本率<input type='text' value='' style='width:50px;'/>）</td>"+          
                                "<td><input type='text' value=''/></td>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期还款（经营）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期付款（私人用途）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td></td>"+          
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
function lrbbzb_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>利润表标准表</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<p><input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/></p>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content' style='width:95%;'>"+
                            "<tr>"+                             
                                "<td style='width:235px;'>主营业务收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td colspan='2' rowspan='8' style='vertical-align:top;'>"+   
                                    "营业费用&nbsp;&nbsp;&nbsp;&nbsp;"+
                                    "<button class='add-button' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
                                    "<button class='add-button' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
                                    "<table class='cpTable' id='yyfy'>" +
                                        "<tr>" +
                                            "<th>序号</th>"+
                                            "<th>费用名称</th>" +
                                            "<th>费用金额</th>" +
                                        "<tr>" +
                                        "</tr>" +
                                            "<td>1</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                            "<td><input type='text' value=''/></td>" +
                                        "</tr>" +
                                    "</table>"+       
                                "</td>"+
                            "</tr>"+
                            "<tr>"+     
                                "<td>可变成本（成本率<input type='text' value='' style='width:50px;'/>）</td>"+          
                                "<td><input type='text' value=''/></td>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期还款（经营）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期付款（私人用途）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td></td>"+          
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
//损益表-利润表简表
function lrbjb_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
							"<div class='step3' onclick='khxxzlcj()'>利润表简表</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content' style='width:95%;'>"+
							"<tr>"+                             
								"<td style='width:235px;'>主营业务收入</td>"+          
								"<td><input type='text' value=''/></td>"+
								"<td colspan='2' rowspan='8' style='vertical-align:top;'>"+   
									"营业费用&nbsp;&nbsp;&nbsp;&nbsp;"+
									"<button class='add-button' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
									"<button class='add-button' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
									"<table class='cpTable' id='yyfy'>" +
										"<tr>" +
											"<th>序号</th>"+
											"<th>费用名称</th>" +
											"<th>费用金额</th>" +
										"<tr>" +
										"</tr>" +
											"<td>1</td>" +
											"<td><input type='text' value=''/></td>" +
											"<td><input type='text' value=''/></td>" +
										"</tr>" +
									"</table>"+       
								"</td>"+
							"</tr>"+
							"<tr>"+     
								"<td>可变成本（成本率<input type='text' value='' style='width:50px;'/>）</td>"+          
								"<td><input type='text' value=''/></td>"+ 
							"</tr>"+
							"<tr>"+                             
								"<td>分期还款（经营）</td>"+          
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>家庭开支</td>"+          
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>分期付款（私人用途）</td>"+          
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>其它开支</td>"+          
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>其它收入</td>"+          
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td></td>"+          
								"<td></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
}
function lrbjb_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>利润表简表</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content' style='width:95%;'>"+
                            "<tr>"+                             
                                "<td style='width:235px;'>主营业务收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                                "<td colspan='2' rowspan='8' style='vertical-align:top;'>"+   
                                    "营业费用&nbsp;&nbsp;&nbsp;&nbsp;"+
                                    "<button class='add-button' onclick='addTd(\"yyfy\")'><img src='images/add.png'/></button>" +
                                    "<button class='add-button' onclick='removeTd(\"yyfy\")'><img src='images/del.png'/></button>" +
                                    "<table class='cpTable' id='yyfy'>" +
                                        "<tr>" +
                                            "<th>序号</th>"+
                                            "<th>费用名称</th>" +
                                            "<th>费用金额</th>" +
                                        "<tr>" +
                                        "</tr>" +
                                            "<td>1</td>" +
                                            "<td><input type='text' value=''/></td>" +
                                            "<td><input type='text' value=''/></td>" +
                                        "</tr>" +
                                    "</table>"+       
                                "</td>"+
                            "</tr>"+
                            "<tr>"+     
                                "<td>可变成本（成本率<input type='text' value='' style='width:50px;'/>）</td>"+          
                                "<td><input type='text' value=''/></td>"+ 
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期还款（经营）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>分期付款（私人用途）</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它开支</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其它收入</td>"+          
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td></td>"+          
                                "<td></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
//损益表-其他信息
function syqtxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>其他信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:230px;'>其它影响现金流的因素、 未来12个月的支出/收入计划:</td>"+          
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>主营业务收入详述</td>"+              
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>可变成本详述</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他收入分析</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支及其他开支详情</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>利润表其他介绍</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
function syqtxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>其他信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:230px;'>其它影响现金流的因素、 未来12个月的支出/收入计划:</td>"+          
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>主营业务收入详述</td>"+              
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>可变成本详述</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他收入分析</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>家庭开支及其他开支详情</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>利润表其他介绍</td>"+                  
                                "<td><textarea style='width:80%;'></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}