
//产品管理
function mycpgl(){
	window.scrollTo(0,0);//滚动条回到顶端
	
	var get = crud.dom.factory("GET");
	wsProduct ="/ipad/product/prodBrowse.json";
	var url = wsProduct;
	get.doGet(url,initProductManagerContentCallback,"加载产品信息失败！");
	function initProductManagerContentCallback(json){
		var objs = $.evalJSON(json);
		var content="";
		var contsnt="";
		var title = "<div class='title'>" +
		 			"<img src='images/back.png' onclick='mywdsy()'/>产品查询" +
//		 			"<input type='text' style='margin:13px 40px;' placeholder='搜索' onkeyup='search(this)'/>" +
		 			"</div>"+  
		 			"<div class='content' style='padding-bottom:60px;margin-top:160px;'>"+"";
		for(var i = 0;i<objs.totalCount;i++){
			contsnt = "<div class='cplb' >" +
					            "<img src='images/cp/jqt.png' title='集群通'/>" +
					            "<span class='dklx'>"+objs.result[i].productName+"</span>"+
					            "<span class='cpqx'>产品期限："+objs.result[i].prodLiTime+"</span>"+
					            "<span class='cpll'>产品利率(%)："+objs.result[i].rateRange+"</span>"+
					            "<img src='images/new.png' class='new'/>" +
					  "</div>"+"";
			content = content+contsnt;
		}
		 $("#mainPage").html(title + content+"</div>");
		 var oDiv=document.getElementsByClassName("cplb");
		 xxxx(objs);
		 window.parent.resizeFrame();
	}
/*$("#mainPage").html("<div class='title'>" +
    		            "<img src='images/back.png' onclick='mywdsy()'/>产品查询" +
    		            "<input type='text' style='margin:13px 40px;' placeholder='搜索' onkeyup='search(this)'/>" +
    		        "</div>"+  
                    "<div class='content' style='padding-bottom:60px;margin-top:160px;'>"+
                        "<div class='cplb' onclick='mycpxx1()'>" +
                            "<img src='images/cp/jqt.png' title='集群通'/>" +
                            "<span class='dklx'>经营性贷款</span>"+
                            "<span class='cpqx'>产品期限：2018-01-01</span>"+
                            "<span class='cpll'>产品利率：1.35%</span>"+
                            "<img src='images/new.png' class='new'/>" +
                        "</div>"+
                        "<div class='cplb' onclick='mycpxx2()'>" +
                            "<img src='images/cp/fxt.png' title='繁星通'/>" +
                            "<span class='dklx'>经营性贷款</span>"+
                            "<span class='cpqx'>产品期限：2018-01-01</span>"+
                            "<span class='cpll'>产品利率：1.35%</span>"+
                            "<img src='images/new.png' class='new'/>" +
                        "</div>"+
                        "<div class='cplb' onclick='mycpxx3()'>" +
                            "<img src='images/cp/xxt.png' title='信薪通'/>" +
                            "<span class='dklx'>消费性贷款</span>"+
                            "<span class='cpqx'>产品期限：2018-01-01</span>"+
                            "<span class='cpll'>产品利率：1.35%</span>"+
                        "</div>"+
                        "<div class='cplb' onclick='mycpxx4()'>" +
                            "<img src='images/cp/gst.png' title='个税通'/>" +
                            "<span class='dklx'>消费性贷款</span>"+
                            "<span class='cpqx'>产品期限：2018-01-01</span>"+
                            "<span class='cpll'>产品利率：1.35%</span>"+
                        "</div>"+
                        "<div class='cplb' onclick='mycpxx5()'>" +
                            "<img src='images/cp/sxt.png' title='税信通'/>" +
                            "<span class='dklx'>经营性贷款</span>"+
                            "<span class='cpqx'>产品期限：2018-01-01</span>"+
                            "<span class='cpll'>产品利率：1.35%</span>"+
                        "</div>"+
                        无用"<ul class='list' style='margin-top:-10px;'>"+
                            "<li onclick='mycpxx1()'>" +
                                "<img src='images/cp/jqt.png'/>" +
                                "<span>" +
                                    "集群通<br/>" +
                                    "<font>产品类别：<font class='blue'>经营性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx2()'>" +
                                "<img src='images/cp/fxt.png'/>" +
                                "<span>" +
                                    "繁星通<br/>" +
                                    "<font>产品类别：<font class='blue'>经营性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx3()'>" +
                                "<img src='images/cp/xxt.png'/>" +
                                "<span>" +
                                    "信薪通<br/>" +
                                    "<font>产品类别：<font class='blue'>消费性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx4()'>" +
                                "<img src='images/cp/gst.png'/>" +
                                "<span>" +
                                    "个税通<br/>" +
                                    "<font>产品类别：<font class='blue'>消费性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                            "<li onclick='mycpxx5()'>" +
                                "<img src='images/cp/sxt.png'/>" +
                                "<span>" +
                                    "税信通<br/>" +
                                    "<font>产品类别：<font class='blue'>经营性贷款</font></font>" +
                                    "<font>产品期限：<font class='blue'>2018-01-01</font></font>" +
                                    "<font>产品利率：<font class='red'>8%</font></font>" +
                                "</span>" +
                            "</li>"+
                        "</ul>"+
                    "</div>");*/
    $(".right").hide();
    $("#mainPage").show();
    
}
//双闭包为div添加onclick事件
function xxxx(objs){
	 var oDiv=document.getElementsByClassName("cplb");
	 for(var i=0;i<oDiv.length;i++){
		 oDiv[i].onclick=(function(i){
			 return function(){
				 mycpxx1(objs.result[i].productName)
			 }
		 })(i)
	 }
	
}
//产品信息
function mycpxx1(productName){
window.scrollTo(0,0);//滚动条回到顶端
var showinfor;

var diyidaiA="<td style='width:50%;padding:1% 2%;'>" +
"<div class='cpTitle'>产品类别:</div>"+
"<div class='cpMessage'>抵押类贷款</div>"+
"<div class='cpTitle'>产品名称:</div>"+
"<div class='cpMessage'>抵易贷A款</div>"+
"<div class='cpTitle'>贷款金额:</div>"+
"<div class='cpMessage'>最高500万（不超过抵押物的70%）</div>"+
"<div class='cpTitle'>还款方式:</div>"+
"<div class='cpMessage'>按月付息，到期还本或按月等额本息</div>"+
"<div class='cpTitle'>适用利率:</div>"+
"<div class='cpMessage'>按约定利率执行</div>"+
"<div class='cpTitle'>授信期限:</div>"+
"<div class='cpMessage'>1-3年</div>"+
"<div class='cpTitle'>担保方式:</div>"+
"<div class='cpMessage'>房产抵押</div>";

var diyidaiB="<td style='width:50%;padding:1% 2%;'>" +
"<div class='cpTitle'>产品类别:</div>"+
"<div class='cpMessage'>抵押类贷款</div>"+
"<div class='cpTitle'>产品名称:</div>"+
"<div class='cpMessage'>抵易贷B款</div>"+
"<div class='cpTitle'>贷款金额:</div>"+
"<div class='cpMessage'>最高500万（不超过抵押物的100%）</div>"+
"<div class='cpTitle'>还款方式:</div>"+
"<div class='cpMessage'>按月付息，到期还本或按月等额本息</div>"+
"<div class='cpTitle'>适用利率:</div>"+
"<div class='cpMessage'>按约定利率执行</div>"+
"<div class='cpTitle'>授信期限:</div>"+
"<div class='cpMessage'>1-3年</div>"+
"<div class='cpTitle'>担保方式:</div>"+
"<div class='cpMessage'>房产抵押+保证人担保</div>";

var baoyidai="<td style='width:50%;padding:1% 2%;'>" +
"<div class='cpTitle'>产品类别:</div>"+
"<div class='cpMessage'>保证类贷款</div>"+
"<div class='cpTitle'>产品名称:</div>"+
"<div class='cpMessage'>保易贷</div>"+
"<div class='cpTitle'>贷款金额:</div>"+
"<div class='cpMessage'>最高100万</div>"+
"<div class='cpTitle'>还款方式:</div>"+
"<div class='cpMessage'>按月付息，到期还本或按月等额本息</div>"+
"<div class='cpTitle'>适用利率:</div>"+
"<div class='cpMessage'>按约定利率执行</div>"+
"<div class='cpTitle'>授信期限:</div>"+
"<div class='cpMessage'>1-2年</div>"+
"<div class='cpTitle'>担保方式:</div>"+
"<div class='cpMessage'>保证人担保</div>";

var chengyidaiA="<td style='width:50%;padding:1% 2%;'>" +
"<div class='cpTitle'>产品类别:</div>"+
"<div class='cpMessage'>信用类贷款</div>"+
"<div class='cpTitle'>产品名称:</div>"+
"<div class='cpMessage'>诚易贷A款</div>"+
"<div class='cpTitle'>贷款金额:</div>"+
"<div class='cpMessage'>最高50</div>"+
"<div class='cpTitle'>还款方式:</div>"+
"<div class='cpMessage'>按月等额本息</div>"+
"<div class='cpTitle'>适用利率:</div>"+
"<div class='cpMessage'>按约定利率执行</div>"+
"<div class='cpTitle'>授信期限:</div>"+
"<div class='cpMessage'>1年</div>"+
"<div class='cpTitle'>担保方式:</div>"+
"<div class='cpMessage'>信用免担保</div>";

var chengyidaiB="<td style='width:50%;padding:1% 2%;'>" +
"<div class='cpTitle'>产品类别:</div>"+
"<div class='cpMessage'>信用类贷款</div>"+
"<div class='cpTitle'>产品名称:</div>"+
"<div class='cpMessage'>诚易贷B款</div>"+
"<div class='cpTitle'>贷款金额:</div>"+
"<div class='cpMessage'>最高50万</div>"+
"<div class='cpTitle'>还款方式:</div>"+
"<div class='cpMessage'>随借随还按日计息</div>"+
"<div class='cpTitle'>适用利率:</div>"+
"<div class='cpMessage'>按约定利率执行</div>"+
"<div class='cpTitle'>授信期限:</div>"+
"<div class='cpMessage'>1年</div>"+
"<div class='cpTitle'>担保方式:</div>"+
"<div class='cpMessage'>信用免担保</div>";

var posliushuidai="<td style='width:50%;padding:1% 2%;'>" +
"<div class='cpTitle'>产品类别:</div>"+
"<div class='cpMessage'>信用类贷款</div>"+
"<div class='cpTitle'>产品名称:</div>"+
"<div class='cpMessage'>POS流水贷</div>"+
"<div class='cpTitle'>适用人群:</div>"+
"<div class='cpMessage'>已安装本行POS机具的个体工商户或小微企业主</div>"+
"<div class='cpTitle'>贷款金额:</div>"+
"<div class='cpMessage'>最高50万</div>"+
"<div class='cpTitle'>还款方式:</div>"+
"<div class='cpMessage'>按月付息，到期还本或按月等额本息</div>"+
"<div class='cpTitle'>适用利率:</div>"+
"<div class='cpMessage'>按约定利率执行</div>"+
"<div class='cpTitle'>授信期限:</div>"+
"<div class='cpMessage'>1年</div>"+
"<div class='cpTitle'>担保方式:</div>"+
"<div class='cpMessage'>信用免担保</div>";
if(productName=="POS流水贷"){
	 showinfor=posliushuidai;
}else if(productName=="抵易贷A款"){
	 showinfor=diyidaiA;
}else if(productName=="抵易贷B款"){
	 showinfor=diyidaiB;
}else if(productName=="保易贷"){
	 showinfor=baoyidai;
}else if(productName=="诚易贷B款"){
	 showinfor=chengyidaiB;
}else if(productName=="诚易贷A款"){
	 showinfor=chengyidaiA;
}else{
	mycpgl();
	alert("无详细产品信息");
	 
}
	
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mycpgl()'/>集群通</div>"+  
                   "<div class='content' style='padding-bottom:1em'>"+
                       "<table>" +
                           "<tr>" +showinfor+
//                               "<td style='width:50%;padding:1% 2%;'>" +
//                                   "<div class='cpTitle'>产品类别:</div>"+
//                                   "<div class='cpMessage'>经营性贷款</div>"+
//                                   "<div class='cpTitle'>产品介绍:</div>"+
//                                   "<div class='cpMessage'>“集群通”是太原市城区农村信用合作联社小微金融事业部为适应太原市小微市场的需要，为满足太原市小微企业主的融资需求，基于小微企业主的经营情况，向在辖区专业市场内的、从事正当生意的小微企业主发放的用于满足其生产经营资金需求的贷款!</div>"+
//                                   "<div class='cpTitle'>适用对象:</div>"+
//                                   "<div class='cpMessage'>“集群通”的适用对象为辖区专业市场内有稳定收入的商户，包括但不限于商会、协会、市场、商场内的商户。</div>"+ 
//                                   "<div class='cpTip'>额度更高</div>"+
//                                   "<div class='cpMessage cpTd'>最低5000元，最高500万！</div>"+
//                                   "<div class='cpTip'>效率更高</div>"+
//                                   "<div class='cpMessage cpTd'>按照标准化流程，3-5个工作日内给客户一个满意答复。</div>"+
//                                   "<div class='cpTip'>门槛更低</div>"+
//                                   "<div class='cpMessage cpTd'>长期（1年）居住本地，且从事生产经营6个月以上，均可申请办理贷款。</div>"+
//                                   "<div class='cpTip'>担保更灵活</div>"+
//                                   "<div class='cpMessage cpTd'>注重第一还来源，并不过分关注担保人，只要求担保人长期居住本地且每月有稳定收入。</div>"+
//                               "</td>" +
                               "<td style='vertical-align:top;padding:1% 2%;'>" +
                                   "<div class='cpTitle'>办理流程:</div>"+
                                   "<img src='images/lc.png'/>"+
                               "</td>" +
                           "</tr>" +
                       "</table>"+
//                       "<table class='cpTable llTable1'>"+
//                           "<tr>"+                             
//                               "<th colspan='5'>经营性利率</th>"+  
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<th>期数</th>"+               
//                               "<th>每月还款</th>"+               
//                               "<th>利息</th>"+               
//                               "<th>本金</th>"+               
//                               "<th>剩余贷款金额</th>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>1</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>129.17</td>"+ 
//                               "<td>773.41</td>"+ 
//                               "<td>9226.59</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>2</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>119.18</td>"+ 
//                               "<td>783.40</td>"+ 
//                               "<td>8443.19</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>3</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>105.54</td>"+ 
//                               "<td>797.04</td>"+ 
//                               "<td>7646.15</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>4</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>89.76</td>"+ 
//                               "<td>803.82</td>"+ 
//                               "<td>6842.33</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>5</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>85.53</td>"+ 
//                               "<td>817.05</td>"+ 
//                               "<td>6025.28</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>6</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>77.83</td>"+ 
//                               "<td>824.75</td>"+ 
//                               "<td>5200.53</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>7</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>67.17</td>"+ 
//                               "<td>835.41</td>"+ 
//                               "<td>4365.12</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>8</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>50.93</td>"+ 
//                               "<td>851.65</td>"+ 
//                               "<td>3513.47</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>9</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>45.38</td>"+ 
//                               "<td>857.20</td>"+ 
//                               "<td>2656.27</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>10</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>33.20</td>"+ 
//                               "<td>869.38</td>"+ 
//                               "<td>1786.89</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>11</td>"+         
//                               "<td>902.58</td>"+   
//                               "<td>23.08</td>"+ 
//                               "<td>879.50</td>"+ 
//                               "<td>907.29</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<td>12</td>"+         
//                               "<td>918.35</td>"+   
//                               "<td>10.96</td>"+ 
//                               "<td>907.39</td>"+ 
//                               "<td>0.00</td>"+
//                           "</tr>"+
//                           "<tr>"+                             
//                               "<th>总计</th>"+               
//                               "<th>10846.73</th>"+               
//                               "<th>846.73</th>"+               
//                               "<th>10000</th>"+               
//                               "<th></th>"+
//                           "</tr>"+
//                       "</table>"+
                   "</div>");
   $(".right").hide();
   $("#mainPage").show();
}

//产品信息
function mycpxx2(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mycpgl()'/>繁星通</div>"+  
                    "<div class='content' style='padding-bottom:1em'>"+
                         "<table>" +
                            "<tr>" +
                                "<td style='width:50%;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>产品类别:</div>"+
                                    "<div class='cpMessage'>经营贷款</div>"+
                                    "<div class='cpTitle'>产品介绍:</div>"+
                                    "<div class='cpMessage'>“繁星通”是太原市城区农村信用合作联社小微金融事业部根据差异化、特色化发展战略要求，引进国际先进贷款技术进行本土化改造推出的一项贷款业务品种，专门为在辖区内非集群市场内的、从事正当生意的小微企业主提供5000元—500万元的资金支持。</div>"+
                                    "<div class='cpTitle'>适用对象:</div>"+
                                    "<div class='cpMessage'>繁星通”的适用对象为辖区专业市场外有稳定收入的商户。</div>"+ 
                                    "<div class='cpTip'>贷款额度高</div>"+
                                    "<div class='cpMessage cpTd'>5000元—500万元</div>"+
                                    "<div class='cpTip'>高效电子化</div>"+
                                    "<div class='cpMessage cpTd'>自主研发了小微企业信贷管理系统，与核心业务系统对接，实现小微贷款业务的全流程电子化处理，提升了小微贷款管理的专业化水平和效率。</div>"+
                                    "<div class='cpTip'>无手续费，易担保</div>"+
                                    "<div class='cpMessage cpTd'>注重第一还来源，并不过分关注担保人，只要求担保人长期居住本地且每月有稳定收入。</div>"+
                                    "<div class='cpTip'>专业团队量身定制</div>"+
                                    "<div class='cpMessage cpTd'>“业务精、品质优”的专业化信贷队伍，为您量身定制贷款方案。</div>"+
                                "</td>" +
                                "<td style='vertical-align:top;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>办理流程:</div>"+
                                    "<img src='images/lc.png'/>"+
                                "</td>" +
                            "</tr>" +
                        "</table>"+
						"<table class='cpTable llTable1'>"+
                            "<tr>"+                             
                                "<th colspan='5'>经营性利率</th>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<th>期数</th>"+               
                                "<th>每月还款</th>"+               
                                "<th>利息</th>"+               
                                "<th>本金</th>"+               
                                "<th>剩余贷款金额</th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>1</td>"+         
                                "<td>902.58</td>"+   
                                "<td>129.17</td>"+ 
                                "<td>773.41</td>"+ 
                                "<td>9226.59</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>2</td>"+         
                                "<td>902.58</td>"+   
                                "<td>119.18</td>"+ 
                                "<td>783.40</td>"+ 
                                "<td>8443.19</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>3</td>"+         
                                "<td>902.58</td>"+   
                                "<td>105.54</td>"+ 
                                "<td>797.04</td>"+ 
                                "<td>7646.15</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>4</td>"+         
                                "<td>902.58</td>"+   
                                "<td>89.76</td>"+ 
                                "<td>803.82</td>"+ 
                                "<td>6842.33</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>5</td>"+         
                                "<td>902.58</td>"+   
                                "<td>85.53</td>"+ 
                                "<td>817.05</td>"+ 
                                "<td>6025.28</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>6</td>"+         
                                "<td>902.58</td>"+   
                                "<td>77.83</td>"+ 
                                "<td>824.75</td>"+ 
                                "<td>5200.53</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>7</td>"+         
                                "<td>902.58</td>"+   
                                "<td>67.17</td>"+ 
                                "<td>835.41</td>"+ 
                                "<td>4365.12</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>8</td>"+         
                                "<td>902.58</td>"+   
                                "<td>50.93</td>"+ 
                                "<td>851.65</td>"+ 
                                "<td>3513.47</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>9</td>"+         
                                "<td>902.58</td>"+   
                                "<td>45.38</td>"+ 
                                "<td>857.20</td>"+ 
                                "<td>2656.27</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>10</td>"+         
                                "<td>902.58</td>"+   
                                "<td>33.20</td>"+ 
                                "<td>869.38</td>"+ 
                                "<td>1786.89</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>11</td>"+         
                                "<td>902.58</td>"+   
                                "<td>23.08</td>"+ 
                                "<td>879.50</td>"+ 
                                "<td>907.29</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>12</td>"+         
                                "<td>918.35</td>"+   
                                "<td>10.96</td>"+ 
                                "<td>907.39</td>"+ 
                                "<td>0.00</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<th>总计</th>"+               
                                "<th>10846.73</th>"+               
                                "<th>846.73</th>"+               
                                "<th>10000</th>"+               
                                "<th></th>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}//产品信息
function mycpxx3(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mycpgl()'/>信薪通</div>"+  
                    "<div class='content' style='padding-bottom:1em'>"+
                        "<table>" +
                            "<tr>" +
                                "<td style='width:50%;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>产品类别:</div>"+
                                    "<div class='cpMessage'>消费贷款</div>"+
                                    "<div class='cpTitle'>产品介绍:</div>"+
                                    "<div class='cpMessage'>“信薪通”是太原市城区农村信用合作联社小微金融事业部以辖区内消费者信用为基础，对辖区内有明确消费意向的自然人发放的用于购置耐用消费品或支付指定消费用途的贷款。</div>"+
                                    "<div class='cpTitle'>适用对象:</div>"+
                                    "<div class='cpMessage'>在太原地区稳定居住两年以上，当前单位工作满1年以上的国际机关工作人员、教师、医生、公用事业单位人员、电力企业工作人员、通讯企业工作人员、能源企业工作人员、银行工作人员等。</div>"+ 
                                    "<div class='cpTip'>更高额度</div>"+
                                    "<div class='cpMessage cpTd'>最低5000元，最高可达100万。</div>"+
                                    "<div class='cpTip'>更多用途</div>"+
                                    "<div class='cpMessage cpTd'>可用于出国留学、住房装修、旅游、缴纳税费、大额耐用消费品消费或其他个人或家庭所需消费。</div>"+
                                    "<div class='cpTip'>更灵活担保</div>"+
                                    "<div class='cpMessage cpTd'>可采用抵押、保证担保或信用免担保方式，不同的担保方式对应相应的利率水平，满足不同的消费人群所需。</div>"+
                                "</td>" +
                                "<td style='vertical-align:top;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>办理流程:</div>"+
                                    "<img src='images/lc.png'/>"+
                                "</td>" +
                            "</tr>" +
                        "</table>"+
						"<table class='cpTable llTable1'>"+
                            "<tr>"+                             
                                "<th colspan='5'>经营性利率</th>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<th>期数</th>"+               
                                "<th>每月还款</th>"+               
                                "<th>利息</th>"+               
                                "<th>本金</th>"+               
                                "<th>剩余贷款金额</th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>1</td>"+         
                                "<td>902.58</td>"+   
                                "<td>129.17</td>"+ 
                                "<td>773.41</td>"+ 
                                "<td>9226.59</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>2</td>"+         
                                "<td>902.58</td>"+   
                                "<td>119.18</td>"+ 
                                "<td>783.40</td>"+ 
                                "<td>8443.19</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>3</td>"+         
                                "<td>902.58</td>"+   
                                "<td>105.54</td>"+ 
                                "<td>797.04</td>"+ 
                                "<td>7646.15</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>4</td>"+         
                                "<td>902.58</td>"+   
                                "<td>89.76</td>"+ 
                                "<td>803.82</td>"+ 
                                "<td>6842.33</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>5</td>"+         
                                "<td>902.58</td>"+   
                                "<td>85.53</td>"+ 
                                "<td>817.05</td>"+ 
                                "<td>6025.28</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>6</td>"+         
                                "<td>902.58</td>"+   
                                "<td>77.83</td>"+ 
                                "<td>824.75</td>"+ 
                                "<td>5200.53</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>7</td>"+         
                                "<td>902.58</td>"+   
                                "<td>67.17</td>"+ 
                                "<td>835.41</td>"+ 
                                "<td>4365.12</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>8</td>"+         
                                "<td>902.58</td>"+   
                                "<td>50.93</td>"+ 
                                "<td>851.65</td>"+ 
                                "<td>3513.47</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>9</td>"+         
                                "<td>902.58</td>"+   
                                "<td>45.38</td>"+ 
                                "<td>857.20</td>"+ 
                                "<td>2656.27</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>10</td>"+         
                                "<td>902.58</td>"+   
                                "<td>33.20</td>"+ 
                                "<td>869.38</td>"+ 
                                "<td>1786.89</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>11</td>"+         
                                "<td>902.58</td>"+   
                                "<td>23.08</td>"+ 
                                "<td>879.50</td>"+ 
                                "<td>907.29</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>12</td>"+         
                                "<td>918.35</td>"+   
                                "<td>10.96</td>"+ 
                                "<td>907.39</td>"+ 
                                "<td>0.00</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<th>总计</th>"+               
                                "<th>10846.73</th>"+               
                                "<th>846.73</th>"+               
                                "<th>10000</th>"+               
                                "<th></th>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}//产品信息
function mycpxx4(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mycpgl()'/>个税通</div>"+  
                    "<div class='content' style='padding-bottom:1em'>"+
                        "<table>" +
                            "<tr>" +
                                "<td style='width:50%;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>产品类别:</div>"+
                                    "<div class='cpMessage'>消费贷款</div>"+
                                    "<div class='cpTitle'>产品介绍:</div>"+
                                    "<div class='cpMessage'>“个税通”是太原市城区农村信用合作联社小微金融事业部对按时缴纳个人所得税的个人发放的，用于个人或家庭消费、旅游、装修等可循环的人民币信用贷款业务。</div>"+
                                    "<div class='cpTitle'>适用对象:</div>"+
                                    "<div class='cpMessage'>申请人在所从事的单位（公司）工作满一年；近一年有稳定个人所得税纳税记录。</div>"+ 
                                    "<div class='cpTip'>额度更高</div>"+
                                    "<div class='cpMessage cpTd'>最低5000元，最高可达100万。</div>"+
                                    "<div class='cpTip'>用途更多</div>"+
                                    "<div class='cpMessage cpTd'>可用于出国留学、住房装修、旅游、缴纳税费、大额耐用消费品消费或其他个人或家庭所需消费。</div>"+
                                    "<div class='cpTip'>受众更广</div>"+
                                    "<div class='cpMessage cpTd'>为所有足额缴纳个人所得税的客户提供的消费信贷，满足了更多消费人群的需求。</div>"+
                                "</td>" +
                                "<td style='vertical-align:top;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>办理流程:</div>"+
                                    "<img src='images/lc.png'/>"+
                                "</td>" +
                            "</tr>" +
                        "</table>"+
						"<table class='cpTable llTable1'>"+
                            "<tr>"+                             
                                "<th colspan='5'>经营性利率</th>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<th>期数</th>"+               
                                "<th>每月还款</th>"+               
                                "<th>利息</th>"+               
                                "<th>本金</th>"+               
                                "<th>剩余贷款金额</th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>1</td>"+         
                                "<td>902.58</td>"+   
                                "<td>129.17</td>"+ 
                                "<td>773.41</td>"+ 
                                "<td>9226.59</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>2</td>"+         
                                "<td>902.58</td>"+   
                                "<td>119.18</td>"+ 
                                "<td>783.40</td>"+ 
                                "<td>8443.19</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>3</td>"+         
                                "<td>902.58</td>"+   
                                "<td>105.54</td>"+ 
                                "<td>797.04</td>"+ 
                                "<td>7646.15</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>4</td>"+         
                                "<td>902.58</td>"+   
                                "<td>89.76</td>"+ 
                                "<td>803.82</td>"+ 
                                "<td>6842.33</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>5</td>"+         
                                "<td>902.58</td>"+   
                                "<td>85.53</td>"+ 
                                "<td>817.05</td>"+ 
                                "<td>6025.28</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>6</td>"+         
                                "<td>902.58</td>"+   
                                "<td>77.83</td>"+ 
                                "<td>824.75</td>"+ 
                                "<td>5200.53</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>7</td>"+         
                                "<td>902.58</td>"+   
                                "<td>67.17</td>"+ 
                                "<td>835.41</td>"+ 
                                "<td>4365.12</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>8</td>"+         
                                "<td>902.58</td>"+   
                                "<td>50.93</td>"+ 
                                "<td>851.65</td>"+ 
                                "<td>3513.47</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>9</td>"+         
                                "<td>902.58</td>"+   
                                "<td>45.38</td>"+ 
                                "<td>857.20</td>"+ 
                                "<td>2656.27</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>10</td>"+         
                                "<td>902.58</td>"+   
                                "<td>33.20</td>"+ 
                                "<td>869.38</td>"+ 
                                "<td>1786.89</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>11</td>"+         
                                "<td>902.58</td>"+   
                                "<td>23.08</td>"+ 
                                "<td>879.50</td>"+ 
                                "<td>907.29</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>12</td>"+         
                                "<td>918.35</td>"+   
                                "<td>10.96</td>"+ 
                                "<td>907.39</td>"+ 
                                "<td>0.00</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<th>总计</th>"+               
                                "<th>10846.73</th>"+               
                                "<th>846.73</th>"+               
                                "<th>10000</th>"+               
                                "<th></th>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}//产品信息
function mycpxx5(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mycpgl()'/>税信通</div>"+  
                    "<div class='content' style='padding-bottom:1em'>"+
                        "<table>" +
                            "<tr>" +
                                "<td style='width:50%;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>产品类别:</div>"+
                                    "<div class='cpMessage'>经营性贷款</div>"+
                                    "<div class='cpTitle'>产品介绍:</div>"+
                                    "<div class='cpMessage'>“税信通”是太原市城区农村信用合作联社小微金融事业部根据税务局推荐，在综合评价小微企业经营情况及小微企业主纳税情况的基础上，对资信好的、按时足额纳税的小微企业客户发放的，用于短期生产经营周转的可循环使用的贷款业务。</div>"+
                                    "<div class='cpTitle'>适用对象:</div>"+
                                    "<div class='cpMessage'>申请人近1年按时足额缴税，无不良纳税记录，上一年度纳税总额在5万元（含）以上的小微客户。</div>"+ 
                                    "<div class='cpTip'>申请简便</div>"+
                                    "<div class='cpMessage cpTd'>该产品改变了银行以往只注重抵质押和法人担保的风险控制方法，注重对小微企业及小微企业主的信用纳税积累，在申请人足额纳税的前提下发放的贷款。</div>"+
                                    "<div class='cpTip'>效率更高</div>"+
                                    "<div class='cpMessage cpTd'>按照标准化流程，3-5个工作日内给客户一个满意答复。</div>"+
                                "</td>" +
                                "<td style='vertical-align:top;padding:1% 2%;'>" +
                                    "<div class='cpTitle'>办理流程:</div>"+
                                    "<img src='images/lc.png'/>"+
                                "</td>" +
                            "</tr>" +
                        "</table>"+ 
                        "<table class='cpTable llTable1'>"+
                            "<tr>"+                             
                                "<th colspan='5'>经营性利率</th>"+  
                            "</tr>"+
                            "<tr>"+                             
                                "<th>期数</th>"+               
                                "<th>每月还款</th>"+               
                                "<th>利息</th>"+               
                                "<th>本金</th>"+               
                                "<th>剩余贷款金额</th>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>1</td>"+         
                                "<td>902.58</td>"+   
                                "<td>129.17</td>"+ 
                                "<td>773.41</td>"+ 
                                "<td>9226.59</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>2</td>"+         
                                "<td>902.58</td>"+   
                                "<td>119.18</td>"+ 
                                "<td>783.40</td>"+ 
                                "<td>8443.19</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>3</td>"+         
                                "<td>902.58</td>"+   
                                "<td>105.54</td>"+ 
                                "<td>797.04</td>"+ 
                                "<td>7646.15</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>4</td>"+         
                                "<td>902.58</td>"+   
                                "<td>89.76</td>"+ 
                                "<td>803.82</td>"+ 
                                "<td>6842.33</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>5</td>"+         
                                "<td>902.58</td>"+   
                                "<td>85.53</td>"+ 
                                "<td>817.05</td>"+ 
                                "<td>6025.28</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>6</td>"+         
                                "<td>902.58</td>"+   
                                "<td>77.83</td>"+ 
                                "<td>824.75</td>"+ 
                                "<td>5200.53</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>7</td>"+         
                                "<td>902.58</td>"+   
                                "<td>67.17</td>"+ 
                                "<td>835.41</td>"+ 
                                "<td>4365.12</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>8</td>"+         
                                "<td>902.58</td>"+   
                                "<td>50.93</td>"+ 
                                "<td>851.65</td>"+ 
                                "<td>3513.47</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>9</td>"+         
                                "<td>902.58</td>"+   
                                "<td>45.38</td>"+ 
                                "<td>857.20</td>"+ 
                                "<td>2656.27</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>10</td>"+         
                                "<td>902.58</td>"+   
                                "<td>33.20</td>"+ 
                                "<td>869.38</td>"+ 
                                "<td>1786.89</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>11</td>"+         
                                "<td>902.58</td>"+   
                                "<td>23.08</td>"+ 
                                "<td>879.50</td>"+ 
                                "<td>907.29</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<td>12</td>"+         
                                "<td>918.35</td>"+   
                                "<td>10.96</td>"+ 
                                "<td>907.39</td>"+ 
                                "<td>0.00</td>"+
                            "</tr>"+
                            "<tr>"+                             
                                "<th>总计</th>"+               
                                "<th>10846.73</th>"+               
                                "<th>846.73</th>"+               
                                "<th>10000</th>"+               
                                "<th></th>"+
                            "</tr>"+
                        "</table>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}


