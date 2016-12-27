
var Imamessage=function(){};
Imamessage.prototype={
	
		send1:function(success,error,target){
			PhoneGap.exec(success,error,"ImaList","send1",[target]);
		}
};


