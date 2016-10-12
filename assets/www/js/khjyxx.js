
//企业基本信息
function qyjbxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
							"<div class='step3' onclick='khxxzlcj()'>企业基本信息</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+
							"<tr>"+                             
								"<td style='width:110px;'>企业名称</td>"+          
								"<td><input type='text'/></td>"+
								"<td>组织类型</td>"+  
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>法人代表</td>"+    
								"<td><input type='text'/></td>"+
								"<td>实际控制人</td>"+    
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>股东股份情况</td>"+    
								"<td><input type='text'/></td>"+
								"<td>营业执照</td>"+           
								"<td>" +
									"<select>" +
										"<option>有</option>" +
										"<option>无</option>" +
									"</select>" +
								"</td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>经营起始时间</td>"+    
								"<td><input type='date'/></td>"+
								"<td>经营年限</td>"+    
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>地址</td>"+    
								"<td><input type='text' class='long'/></td>"+
								"<td>电话</td>"+    
								"<td><input type='text'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function qyjbxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>企业基本信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:110px;'>企业名称</td>"+          
                                "<td><input type='text' value='味香村'/></td>"+
                                "<td>组织类型</td>"+  
                                "<td><input type='text' value='个体工商户'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>法人代表</td>"+    
                                "<td><input type='text' value='刘丽云'/></td>"+
                                "<td>实际控制人</td>"+    
                                "<td><input type='text' value='刘丽云、阎育强'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>股东股份情况</td>"+    
                                "<td><input type='text' value='无'/></td>"+
                                "<td>营业执照</td>"+           
                                "<td>" +
                                    "<select>" +
                                        "<option>有</option>" +
                                        "<option>无</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>经营起始时间</td>"+    
                                "<td><input type='date' value='2015-03-15'/></td>"+
                                "<td>经营年限</td>"+    
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>地址</td>"+    
                                "<td><input type='text' class='long' value='尖草坪街48号（北院）128幢五单元1号房'/></td>"+
                                "<td>电话</td>"+    
                                "<td><input type='text' value=''/></td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
//企业业务信息
function qyywxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
							"<div class='step3' onclick='khxxzlcj()'>企业业务信息</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+
							"<tr>"+                             
								"<td style='width:110px;'>主要业务范围</td>"+          
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>主要经营模式</td>"+  
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>组织架构</td>"+    
								"<td><input type='text'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>业务流程</td>"+    
								"<td><input type='text'/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
}
function qyywxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
							"<div class='step3' onclick='khxxzlcj()'>企业业务信息</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
						"</div><div class='line'></div>"+
						"<table class='cpTable no-border bottom-content'>"+
							"<tr>"+                             
								"<td style='width:110px;'>主要业务范围</td>"+          
								"<td><input type='text' value='中餐'/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>主要经营模式</td>"+  
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>组织架构</td>"+    
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
							"<tr>"+                             
								"<td>业务流程</td>"+    
								"<td><input type='text' value=''/></td>"+
							"</tr>"+
						"</table>"+
					"</div>");
$(".right").hide();
$("#mainPage").show();
}
//企业店铺信息
function qydpxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>企业店铺信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:150px;'>营业场所类型</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+         
                            "<tr>"+                                             
                                "<td>装修情况</td>"+          
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
                                "<td><input type='text'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
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
                                "<td>启用起始年月</td>"+    
                                "<td><input type='date'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td>" +
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
function qydpxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>企业店铺信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<table class='cpTable no-border bottom-content'>"+
                            "<tr>"+                             
                                "<td style='width:150px;'>营业场所类型</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>自有</option>" +
                                        "<option>自建</option>" +
                                        "<option>住经营场所</option>" +
                                        "<option selected>租住</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+  
                            "<tr>"+                                                    
                                "<td>装修情况</td>"+          
                                "<td>" +
                                    "<select>" +
                                        "<option>好</option>" +
                                        "<option selected>中</option>" +
                                        "<option>差</option>" +
                                        "<option>其他</option>" +
                                    "</select>" +
                                 "</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>住房面积</td>"+  
                                "<td><input type='text' value='93㎡'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
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
                                "<td>启用起始年月</td>"+    
                                "<td><input type='date' value='2015-03-15'/></td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>居住场所调查方式</td>"+    
                                "<td>" +
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
//企业开户信息
function qykhxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
					"<div class='content'>"+
						"<div class='jjstep'>" +
							"<div class='step1' onclick='myjjgl()'>税信通</div>"+
							"<div class='step3' onclick='myjjgl2()'>许建军</div>"+
							"<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
							"<div class='step3' onclick='khxxzlcj()'>企业开户信息</div>"+
							"<div class='step3'>信息录入</div>"+
							"<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
						"</div><div class='line'></div>"+
						"<div class='bottom-content'>"+
							"<table id='khxx' class='cpTable' style='text-align:center;'>"+
								"<tr>"+      
									"<th style='width:40px;'>序号</th>"+  
									"<th>开户行</th>"+          
									"<th>账号</th>"+
								"</tr>"+
								"<tr>"+                          
									"<td>1</td>"+                   
									"<td><input type='text'/></td>"+  
									"<td><input type='text' class='addinput'/></td>"+
								"</tr>"+
							"</table>"+
							"<p class='Left'>" +
								"<button class='add-button' onclick='addTd(\"khxx\")'><img src='images/add.png'/></button>" +
								"<button class='add-button' onclick='removeTd(\"khxx\")'><img src='images/del.png'/></button>" +
							"</p>"+
						"</div>"+
					"</div>");
  $(".right").hide();
  $("#mainPage").show();
}
function qykhxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>企业开户信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<div class='bottom-content'>"+
                            "<table id='khxx' class='cpTable' style='text-align:center;'>"+
                                "<tr>"+      
                                    "<th style='width:40px;'>序号</th>"+  
                                    "<th>开户行</th>"+          
                                    "<th>账号</th>"+
                                "</tr>"+
                                "<tr>"+                    
                                    "<td>1</td>"+                         
                                    "<td><input type='text' value='农村信用社'/></td>"+  
                                    "<td><input type='text' class='addinput' value='101341010100002497889'/></td>"+
                                "</tr>"+
                                "<tr>"+              
                                    "<td>2</td>"+                    
                                    "<td><input type='text' value='邮政储蓄'/></td>"+    
                                    "<td><input type='text' class='addinput' value='601610166200091962'/></td>"+
                                "</tr>"+
                            "</table>"+
                            "<p class='Left'>" +
                                "<button class='add-button' onclick='addTd(\"khxx\")'><img src='images/add.png'/></button>" +
                                "<button class='add-button' onclick='removeTd(\"khxx\")'><img src='images/del.png'/></button>" +
                            "</p>"+
                        "</div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
  }
//企业其他信息
function qyqtxx_add(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>企业其他信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<textarea placeholder='请在文本框内记录相关情况'  class='bottom-content' style='width:95%;margin-left:2.5%;margin-top:20px;height:25em;'></textarea>"+
                        
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    }
function qyqtxx_edit(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='khxxzlcj()'/>进件管理</div>"+  
                    "<div class='content'>"+
                        "<div class='jjstep'>" +
                            "<div class='step1' onclick='myjjgl()'>税信通</div>"+
                            "<div class='step3' onclick='myjjgl2()'>许建军</div>"+
                            "<div class='step3' onclick='newUser1()'>信息资料采集</div>"+
                            "<div class='step3' onclick='khxxzlcj()'>企业其他信息</div>"+
                            "<div class='step3'>信息录入</div>"+
                            "<input type='button' class='btn btn-large btn-primary next' value='保存' onclick='khxxzlcj()'/>"+
                        "</div><div class='line'></div>"+
                        "<textarea placeholder='请在文本框内记录相关情况' class='bottom-content' style='width:95%;margin-left:2.5%;margin-top:20px;height:25em;'>1999-2000年 于太钢六校对面经营熟肉店；2002-2004 将熟食店变更为小饭店（赚4、5万）；2004春-2004夏 于漪汾桥西开饭店（投入10万，几乎全赔，余5000元）；2004夏-2005年中 回清徐；2005.8-2007年 于晋安门口小饭馆（转让费1万6，房租1万5，赚了5、6万，炒股花去3万，余2万元）；2007年 盘下旁边理发店，扩大经营；2007-2010买房用完积蓄（至2010年赚50万，买房30万，装修、家具等，几乎花光）；2012-2013：赚5、6万；2013-2014：赚3、4万（共余9万）；2014-2015：赚10-11万；（共余：195000元）2015.3月：与合伙人两家盘下现较大店面经营味香村，转让费10万元，初始运营资金2万元，共12万。几天后两家协商由客户刘丽云独立经营，付清合伙人投资部分，并多给合伙人2万元将生意转为己有（因此客户转让初始共支出14万，装修2万7，请客1万多，余18000元）。可证实盘下味香村时资金为自有。</textarea>"+
                        
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    }