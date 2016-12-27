package com.cardpay.banksaler_rocket;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.phonegap.api.LOG;
import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.telephony.gsm.SmsManager;


public class ImaList extends Plugin{
	private static final String SEND="send1";
	static String str;
	@Override
	public PluginResult execute(String action, JSONArray data, String callbackId) {
			try {
				 str= (String) data.get(0);
				 SendActivity activity=(SendActivity)AppManager.mList.get(1);
				 Bundle b = new Bundle();
				 b.putString("name", "2");
				Intent i=new Intent(activity,SendActivity.class);
				 i.putExtras(b);
				activity.startActivity(i);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	
	}
	public static String getIma(){
		return str;
	}

}
