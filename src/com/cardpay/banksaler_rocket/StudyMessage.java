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


public class StudyMessage extends Plugin{
	private static final String SEND="send";
	@Override
	public PluginResult execute(String action, JSONArray data, String callbackId) {
		savaIma s=new savaIma();
		 List list = null;
		 List list1 = null;
		try {
			list = s.aaveIma(data.getString(1).toString());
			list1=s.saveIma(data.getString(1).toString());
		} catch (JSONException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		PluginResult result;
		if(SEND.equals(action)){
			try {
				JSONObject jsonObj=new JSONObject();
				String target=data.getString(0);
				String content=data.getString(1);
				jsonObj.put("target", list);
				jsonObj.put("content", data.get(1));
				jsonObj.put("size", list.size());
				jsonObj.put("url", list1);
				result=new PluginResult(PluginResult.Status.OK,jsonObj);
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				result=new PluginResult(PluginResult.Status.JSON_EXCEPTION);
			}
		}else{
			result=new PluginResult(PluginResult.Status.OK.INVALID_ACTION);
		}
		return result;
	}

}
