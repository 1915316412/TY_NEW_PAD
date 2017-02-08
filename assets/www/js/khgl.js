//客户管理
function mykhgl(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'>客户管理</div>"+  
                    "<div class='content'>" +
                        "<div class='box khgl' onclick='newUser()'><img src='images/xjkh.jpg'/><span>新建客户</span></div>"+
                        "<div class='box khgl' onclick='editUser()'><img src='images/khwh.jpg'/><span>客户维护</span></div>"+
                        "<div class='box wdsy5' id='edpggj'><img src='images/jljlxx.png'/><span>额度评估工具</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
    $("#edpggj").click(function(){
		  $("#edpggj").attr('disabled',"true");
		  edpggj();
	  });
}
//新建客户
function newUser(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mykhgl()'/>客户管理-新建客户</div>"+  
                    "<div class='content' style='height:320px;padding-top:80px;background:url(images/book.jpg) no-repeat center center;'>" +
                        "<p>客户姓名:<input type='text' id ='khname'/></p>"+
                        "<p>证件类型:<select id ='cardType'>" +
                        "<option value='CST0000000000A'>身份证</option>" +
                        "<option value='1'>军官证</option>"+
                        "<option value='2'>护照</option>"+
                        "<option value='3'>香港身份证</option>"+
                        "<option value='4'>澳门身份证</option>"+
                        "<option value='5'>台湾身份证</option>"+
                        "</select></p>"+
                        "<p>证件号码:<input type='text' id = 'cardId'/></p>"+
                        "<p>手机号码:<input type='text' id = 'phone'/></p>"+
                        "<p>" +
                            "<input type='button' id ='sure' class='btn btn-large btn-primary' value='确定'/>"+  
                            "<input type='button' class='btn btn-large' value='返回' onclick='mykhgl()'/>"+
                            "</p>" +
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();    
//点击确定插入
	$("#sure").click(function() {
		var chineseName = $("#khname").val();
		var cardId = $("#cardId").val();
		var cardType = $("#cardType").val();
		var tel = $("#phone").val();
		var userId = window.sessionStorage.getItem("userId");
		if(cardId==""||cardId==null||chineseName==""||chineseName==null){
			alert("证件号码或姓名不能为空");
		}else{
			var wsLoginUrl = "/ipad/product/customerInsert.json"+"?cardId="+cardId+"&chineseName="+chineseName+"&cardType="+cardType+"&userId="+userId+"&phoneNumber="+tel;
			
			$.ajax({
		        url:wsHost + wsLoginUrl,
		        type: "GET",
		        dataType:'json',
		        success: function (json) {
		        	var objs = $.evalJSON(json);
		        	alert(objs.message);
		        	/*document.getElementById("khname").value = ""*/
		        	document.getElementById("cardId").value = ""
		        	/*document.getElementById("phone").value = ""*/
		        }
			})
		}
	})

}

//客户维护
function editUser(){
window.scrollTo(0,0);//滚动条回到顶端
$("#mainPage").html("<div class='title'><img src='images/back.png' onclick='mykhgl()'/>客户管理-客户维护</div>"+  
                    "<div class='content'>" +
                        "<div class='khwh1' onclick='khzlcx()'><img src='images/khzlcx.png'/><span>客 户 资 料 查 询</span></div>"+
                        "<div class='khwh2' onclick='khwhlb()'><img src='images/khwhjh2.png'/><span>客<br/>户<br/>维<br/>护<br/>计<br/>划</span></div>"+
                        "<div class='khwh3' onclick='khwhrz()'><img src='images/khwhrz.png'/><span>客<br/>户<br/>维<br/>护<br/>日<br/>志</div>"+
                        "<div class='khwh4' onclick='khcsrz()'><img src='images/khcsrz.png'/><span>客 户 催 收 日 志</span></div>"+
                    "</div>");
    $(".right").hide();
    $("#mainPage").show();
}