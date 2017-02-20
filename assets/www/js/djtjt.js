function djtjt(){
	$("#mainPage").html("<div class='spinner'>"+
			  "<div class='bounce1'></div>"+
			" <div class='bounce2'></div>"+
			  "<div class='bounce2'></div></div>");
$("#mainPage").show();
  $('.spinner').show();
	var dj;
	var djurl = "/ipad/customerIntopiece/selectByYF.json";
	 if(window.sessionStorage.getItem("zw")=='客户经理主管'){
		dj="<p>"+
		"<input type='button' class='btn btn-large btn-primary' value='月度小组进件数量统计' id = 'xzjjsl'/>"+
		"<input type='button' class='btn btn-large btn-primary' value='月度小组用信额度统计' id = 'xzyxed'/>";
	}else if(window.sessionStorage.getItem("zw")=='区域经理'){
		dj="<p>"+
		"<input type='button' class='btn btn-large btn-primary' value='月度区域进件数量统计' id = 'xzjjsl'/>"+
		"<input type='button' class='btn btn-large btn-primary' value='月度区域用信额度统计' id = 'xzyxed'/>";
	}
	$.ajax({
		url:wsHost + djurl,
		type: "GET",
		dataType:'json',
		data:{userId:window.sessionStorage.getItem("userId"),userdj:window.sessionStorage.getItem("zw")},
		success: function (json) {
			  $('.spinner').hide();
			var djobjs = $.evalJSON(json);
			$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='ckqttjt()'/>小组/区域统计图</div>"+  
					"<div class='content'>" +
					"<div class='zingchartt' id='container' ></div>"+
					dj+
					"<input type='button' class='btn btn-large' value='返回' onclick='ckqttjt()'/></p>"+
			"</div>");
			$(".right").hide();
			$("#mainPage").show();
			$("#xzjjsl").click();
			var xzyxed = {
					"type": "bar", 
					"series": [ 
					           {"text":"用信额度","values":[djobjs.ylist1,djobjs.ylist2,djobjs.ylist3,djobjs.ylist4,djobjs.ylist5,djobjs.ylist6,djobjs.ylist7,djobjs.ylist8,djobjs.ylist9,djobjs.ylist10,djobjs.ylist11,djobjs.ylist12]},
					           
					           
					           ],
					           "scale-x":{ 
					        	   "values":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
					           },
					           "scale-y":{ 
					        	   "zooming":false,
//					        	   "zoom-to":[0,5]
					           },
					           "title": {
					        	   "text":"统计当前小组(区域)每月用信额度(单位：百万)"
					           },
					           "legend":{

					           }
			};
			var ydjj = {
					"type": "bar", 
					"series": [ 
					           {"text":"通过进件数量","values":[Number(djobjs.list1),Number(djobjs.list2),Number(djobjs.list3),Number(djobjs.list4),Number(djobjs.list5),Number(djobjs.list6),Number(djobjs.list7),Number(djobjs.list8),Number(djobjs.list9),Number(djobjs.list10),Number(djobjs.list11),Number(djobjs.list12)]},
					           {"text":"拒绝进件数量","values":[Number(djobjs.clist1),Number(djobjs.clist2),Number(djobjs.clist3),Number(djobjs.clist4),Number(djobjs.clist5),Number(djobjs.clist6),Number(djobjs.clist7),Number(djobjs.clist8),Number(djobjs.clist9),Number(djobjs.clist10),Number(djobjs.clist11),Number(djobjs.clist12)]}
					           
					           
					           ],
					           "scale-x":{ 
					        	   "values":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
					           },
					           "scale-y":{ 
					        	   "zooming":false,
//					        	   "zoom-to":[0,5]
					           },
					           "title": {
					        	   "text":"统计当前小组(区域)每月已拒绝和通过的进件数量"
					           },
					           "legend":{

					           }
			};
			 zingchart.render({ 
				            id: "container",    
				            height: 500,       
				            width: 700,        
				            data: ydjj
				        });
		$("#xzjjsl").click(function(){
			zingchart.render({ 
				            id: "container",    
				            height: 500,       
				            width: 700,        
				            data: ydjj
				        });
			})
			
			$("#xzyxed").click(function(){
			zingchart.render({ 
			id: "container",    
			height: 500,       
			width: 700,        
			data: xzyxed
			});

			})
		}})
}