//资产负债表-资产状况
function zczk_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>资产状况</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:90px;'>现金</td>"+          
                                "<td><input type='text'/></td>"+
                                "<td>银行存款</td>"+  
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>应收账款</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>预付账款</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>存货</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>固定资产</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>待摊租金</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>预付押金</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他预付款</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>备注</td>"+    
                                "<td><textarea></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
function zczk_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>资产状况</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:90px;'>现金</td>"+          
                                "<td><input type='text' value='12900'/></td>"+
                                "<td>银行存款</td>"+  
                                "<td><input type='text' value='25162'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>应收账款</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                                "<td>预付账款</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>存货</td>"+    
                                "<td><input type='text' value='1810'/></td>"+
                                "<td>固定资产</td>"+    
                                "<td><input type='text' value='20050'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>待摊租金</td>"+    
                                "<td><input type='text' value='4,444'/></td>"+
                                "<td>预付押金</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他预付款</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                                "<td>备注</td>"+    
                                "<td><textarea></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
//资产负债表-负债情况
function fzqk_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>负债情况</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:110px;'>应付账款</td>"+          
                                "<td><input type='text'/></td>"+
                                "<td>其他应付账款</td>"+  
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>信用卡透支</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>其他机构借款</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>个人借贷</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>长期负债</td>"+    
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他负债</td>"+    
                                "<td><input type='text'/></td>"+
                                "<td>备注</td>"+    
                                "<td><textarea></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
function fzqk_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>负债情况</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:90px;'>应付账款</td>"+          
                                "<td><input type='text' value='17,193'/></td>"+
                                "<td>其他应付账款</td>"+  
                                "<td><input type='text' value='0'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>信用卡透支</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                                "<td>其他机构借款</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>个人借贷</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                                "<td>长期负债</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>其他负债</td>"+    
                                "<td><input type='text' value='0'/></td>"+
                                "<td>备注</td>"+    
                                "<td><textarea></textarea></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
//资产负债表-权益状况
function qyzk_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>权益状况</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table class='cpTable' id='csqy'>"+
                                "<tr>"+                             
                                    "<th style='width:20%;'>初始权益</th>"+                         
                                    "<th style='text-align:left;padding-top:20px;'>" +
                                        "<button class='add-button' onclick='addTd(\"csqy\")'><img src='images/add.png'/></button>" +
                                        "<button class='add-button' onclick='removeTd(\"csqy\")'><img src='images/del.png'/></button>" +
                                    "</th>"+    
                                    "<th style='width:20%;'>期内利润</th>"+ 
                                    "<th style='text-align:left;padding-top:20px;'>" +
                                        "<button class='add-button' onclick='addTd(\"csqy\")'><img src='images/add.png'/></button>" +
                                        "<button class='add-button' onclick='removeTd(\"csqy\")'><img src='images/del.png'/></button>" +
                                    "</th>"+   
                                "</tr>"+  
                            "</table>"+
                            "<table class='cpTable' id='dxzc'>"+
                                "<tr>"+                            
									"<th style='width:20%;'>期间内的资本注入</th>"+ 
									"<th style='text-align:left;padding-top:20px;'>" +
										"<button class='add-button' onclick='addTd(\"dxzc\")'><img src='images/add.png'/></button>" +
										"<button class='add-button' onclick='removeTd(\"dxzc\")'><img src='images/del.png'/></button>" +
									"</th>"+  
									"<th style='width:20%;'>期内提取的资金</th>"+                         
									"<th style='text-align:left;padding-top:20px;'>" +
										"<button class='add-button' onclick='addTd(\"dxzc\")'><img src='images/add.png'/></button>" +
										"<button class='add-button' onclick='removeTd(\"dxzc\")'><img src='images/del.png'/></button>" +
									"</th>"+
                                "</tr>"+  
                            "</table>"+
                            "<table class='cpTable' id='szzj'>"+
                                "<tr>"+  
                                    "<th style='width:20%;'>折旧/升值(-/+)</th>"+ 
                                    "<th style='text-align:left;padding-top:20px;'>" +
                                        "<button class='add-button' onclick='addTd(\"szzj\")'><img src='images/add.png'/></button>" +
                                        "<button class='add-button' onclick='removeTd(\"szzj\")'><img src='images/del.png'/></button>" +
                                    "</th>"+  
                                "</tr>"+
                            "</table>"+
                        "</div>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
function qyzk_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>权益状况</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table class='cpTable' id='csqy'>"+
                                "<tr>"+                             
                                    "<th style='width:20%;'>初始权益</th>"+                         
                                    "<th style='text-align:left;padding-top:20px;'>" +
                                        "<button class='add-button' onclick='addTd(\"csqy\")'><img src='images/add.png'/></button>" +
                                        "<button class='add-button' onclick='removeTd(\"csqy\")'><img src='images/del.png'/></button>" +
                                    "</th>"+    
                                    "<th style='width:20%;'>期内利润</th>"+ 
                                    "<th style='text-align:left;padding-top:20px;'>" +
                                        "<button class='add-button' onclick='addTd(\"csqy\")'><img src='images/add.png'/></button>" +
                                        "<button class='add-button' onclick='removeTd(\"csqy\")'><img src='images/del.png'/></button>" +
                                    "</th>"+   
                                "</tr>"+  
                            "</table>"+
                            "<table class='cpTable' id='dxzc'>"+
                                "<tr>"+                           
									"<th style='width:20%;'>期间内的资本注入</th>"+ 
									"<th style='text-align:left;padding-top:20px;'>" +
										"<button class='add-button' onclick='addTd(\"dxzc\")'><img src='images/add.png'/></button>" +
										"<button class='add-button' onclick='removeTd(\"dxzc\")'><img src='images/del.png'/></button>" +
									"</th>"+  
									"<th style='width:20%;'>期内提取的资金</th>"+                         
									"<th style='text-align:left;padding-top:20px;'>" +
										"<button class='add-button' onclick='addTd(\"dxzc\")'><img src='images/add.png'/></button>" +
										"<button class='add-button' onclick='removeTd(\"dxzc\")'><img src='images/del.png'/></button>" +
									"</th>"+
                                "</tr>"+  
                            "</table>"+
                            "<table class='cpTable' id='szzj'>"+
                                "<tr>"+  
                                    "<th style='width:20%;'>折旧/升值(-/+)</th>"+ 
                                    "<th style='text-align:left;padding-top:20px;'>" +
                                        "<button class='add-button' onclick='addTd(\"szzj\")'><img src='images/add.png'/></button>" +
                                        "<button class='add-button' onclick='removeTd(\"szzj\")'><img src='images/del.png'/></button>" +
                                    "</th>"+  
                                "</tr>"+
                            "</table>"+
                        "</div>"+
                    "</div>");
$(".right").hide();
$("#mainPage").show();
}
//资产负债表-其他信息
function zcfzqtxx_add(){
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
								"<td style='width:170px;'>销售额交叉检验</td>"+ 
								"<td><textarea style='width:80%;'></textarea></td>"+
							"</tr>"+
							"<tr>"+                               
								"<td>毛利润/成本交叉检验</td>"+ 
								"<td><textarea style='width:80%;'></textarea></td>"+
							"</tr>"+
							"<tr>"+                               
								"<td>其他交叉检验</td>"+ 
								"<td><textarea style='width:80%;'></textarea></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();    
}
function zcfzqtxx_edit(){
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
								"<td style='width:170px;'>销售额交叉检验</td>"+ 
								"<td><textarea style='width:80%;'></textarea></td>"+
							"</tr>"+
							"<tr>"+                               
								"<td>毛利润/成本交叉检验</td>"+ 
								"<td><textarea style='width:80%;'></textarea></td>"+
							"</tr>"+
							"<tr>"+                               
								"<td>其他交叉检验</td>"+ 
								"<td><textarea style='width:80%;'></textarea></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();    
}