
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
//	var user_name = "wenjian123";  
//    var pass_word = "111111";
//  上线用
  var user_name = $("#name").val();
  var pass_word = $("#password").val()
	var wsLoginUrl = "/ipad/user/JnLogin.json"+"?login="+user_name+"&password="+pass_word;
    $.ajax({
        url:wsHost + wsLoginUrl,
        type: "GET",
        dataType:'json',
        success: function (json) {
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
}
//回调
function checkLoginCallback(json){
    var obj = $.evalJSON(json);
    var result = obj.result.status;
//    alert("result:"+result);
    if(result == "fail"){
    	$(".errorMessage").css('display','block');
    	return;
    }
    var session = window.sessionStorage;//有些不支持sessionStorage，而是globalStroage.
    var manggerList = managerList();
    if(obj.noTime=="无"){
    	 session.setItem("time","对不起，您今天还没有登陆!!");
    }else if(obj.noTime=="有"){
    	 session.setItem("time",obj.time);
    }

    //alert(obj.result.user.id);
    session.setItem("userId",obj.result.user.id);
    session.setItem("userType",obj.result.user.userType);
    session.setItem("managerList",manggerList);
    //定时定位
    var location = window.setInterval(getLocations,1000*60*5);

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




