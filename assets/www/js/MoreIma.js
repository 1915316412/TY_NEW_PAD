var Message=function(){};
Message.prototype={
		send:function(success,error,target,content,size,url){
			PhoneGap.exec(success,error,"StudyMessage","send",[target,content,size]);
		}
};
PhoneGap.addConstructor(function(){

	PhoneGap.addPlugin("message",new  Message());
	PhoneGap.addPlugin("imamessage",new Imamessage());
})


