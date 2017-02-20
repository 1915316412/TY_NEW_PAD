
//登录
function dl(){
	//工厂模式
    /*var data = JSON.stringify({
        "user_name": $("#user_name").val(),
        "pass_word": $("#user_name").val()
    });
    var post = crud.dom.factory("POST");
    post.doPost("/ipad/user/JnLogin.json",data,checkLoginCallback,"登陆失败！");*/

//  测试用
/*	var user_name = "yangjinglin";  
    var pass_word = "111111";*/
//  上线用
  var user_name = $("#name").val();
  var pass_word = $("#password").val();
	var wsLoginUrl = "/ipad/user/JnLogin.json"+"?login="+user_name+"&password="+pass_word;
    var xval=getBusyOverlay('viewport',{color:'white', opacity:0.75, text:'正在登录，请稍后......', style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},{color:'#ff0', size:100, type:'o'});  
    setTimeout(function() {
    $.ajax({
        url:wsHost+ wsLoginUrl,
        type: "GET",
        dataType:'json',
        beforeSend:function(){ 
        	if(xval) {               
        	xval.settext("正在登录，请稍后......");                      
        	}              
        	}, 
        	
        success: function (json) {
        	xval.remove(); 
        	var objs = $.evalJSON(json);
        	if(objs.result.status == 'success'){
        		checkLoginCallback(json);
            	$(".left").show();
        	}else{
        		alert(objs.result.reason);
        	}
        },
        error: function(xhr){
        	 alert("登录失败!");
        }
    });
    }, 400);
}
//回调
function checkLoginCallback(json){
	alert(json);
    var obj = $.evalJSON(json);
    var result = obj.result.status;
//    alert("result:"+result);
    if(result == "fail"){
    	$(".errorMessage").css('display','block');
    	return;
    }
    var session = window.sessionStorage;//有些不支持sessionStorage，而是globalStroage.
    var manggerListt = managerList();
    var manggerList=manggerListt.manager;
   
    if(obj.Time==null){
    	 session.setItem("time","对不起，您今天还没有登陆!!");
    }else {
    	 session.setItem("time",obj.Time);
    }

    //alert(obj.result.user.id);
    session.setItem("userId",obj.result.user.id);
    session.setItem("hktxStr",obj.repay);
    session.setItem("userType",obj.result.user.userType);
    session.setItem("managerList",manggerList);
    session.setItem("qxckUser",json);
    session.setItem("zw",obj.zw);
    //定时定位
   // var location = window.setInterval(getLocations,1000*60*5);

    //alert("getItem:"+session.getItem("id"));
    //alert(sssion.getItem("user_id"));
    //$("#page1").show();
    $("#login").hide();
    $("#mainPage").show();
    $("#index").click();
}
function show_dcts(){//显示登出提示
    $("#text").html("<div class='display-div' id='xdyss'>"+
                        "<div class='dialog-head'>"+
                           "<h4>提示</h4>"+
                        "</div>"+
                        "<div class='dialog-content'>"+
                           " 你确定要退出系统吗？"+
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-default' onclick='hide_dcts()'>取消</button>"+
                           "<button type='button' class='btn btn-danger' onclick='dc();hide_dcts()'>确定</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text").animate({top:"0px"},"500");
}
function hide_dcts(){//隐藏登出提示
   // $(".display-div").animate({marginTop:"-250px"},"500");
    $("#text").animate({top:"-800px"},"500");
}    
//登出
function dc(){
    $("#login").show();
    $(".right").hide();
    $(".left .nav li").css("background","#009fe7");
    $(".left").hide();
}

function hktx(){//显示登出提示
	var Str=window.sessionStorage.getItem("hktxStr");
	var hk;
	if(Str=="" || window.sessionStorage.getItem("userType")==2){
		hk="暂无";
	}else{
		hk=Str;
	}
    $("#text1").html("<div class='display-div' id='xdyss'>"+
                        "<div class='dialog-head'>"+
                           "<h4>还款提醒</h4>"+
                        "</div>"+
                        "<div class='dialog-content'>"+
                        hk+
                        "</div>"+
                        "<div class='dialog-bottom'>"+
                           "<button type='button' class='btn btn-danger' id='hktx'>确定</button>"+
                        "</div>"+
                    "</div><!-- /display-div -->");
    $("#text1").animate({top:"0px"},"500");
    $("#text1").show();
    $("#hktx").click(function(){
    	  $("#text1").hide();
    })
}


