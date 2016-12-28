package com.cardpay.banksaler_rocket;
import org.json.JSONObject;

import com.phonegap.DroidGap;
import com.phonegap.api.LOG;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

public class MyPhoneGapActivity extends DroidGap {
	Intent intent;  
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
		//加载程序
		super.onCreate(savedInstanceState);
		AppManager.getInstance().addActivity(this);
		super.loadUrl("file:///android_asset/www/index.html");
		super.setIntegerProperty("loadUrlTimeoutValue", 20000);
		 Bundle b = new Bundle();
		 b.putString("name", "1");
		 Intent i=new Intent();
		 i.putExtras(b);
		 i.setClass(getApplicationContext(), SendActivity.class);
		 startActivity(i);
		
		//启动后台upload服务
		intent = new Intent(getApplicationContext(),UploadService.class);
		startService(intent);
	}
	
}
