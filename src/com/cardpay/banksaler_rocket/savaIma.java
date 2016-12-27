package com.cardpay.banksaler_rocket;

import java.io.File;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import android.util.Log;

public class savaIma {
	List<String> mSelectedImage1=new ArrayList<String>();
	List<String> mSelectedImage3=new ArrayList<String>();
	List<File> mFileList;
	public List aaveIma(String pass){

		String path="";
			mFileList = new ArrayList<File>();
			if(pass.equals("1")){
				path="/storage/emulated/0/蜂巢WE贷/经营场所/";
			}
			if(pass.equals("2")){
				path="/storage/emulated/0/蜂巢WE贷/经营权属/";
			}
			if(pass.equals("3")){
				path="/storage/emulated/0/蜂巢WE贷/逻辑检验/";
			}
			if(pass.equals("4")){
				path="/storage/emulated/0/蜂巢WE贷/资产负债/";
			}
			if(pass.equals("5")){
				path="/storage/emulated/0/蜂巢WE贷/损益/";
			}
			if(pass.equals("6")){
				path="/storage/emulated/0/蜂巢WE贷/其他收入/";
			}
			if(pass.equals("7")){
				path="/storage/emulated/0/蜂巢WE贷/身份证明/";
			}
			if(pass.equals("8")){
				path="/storage/emulated/0/蜂巢WE贷/个人资产/";
			}
			if(pass.equals("9")){
				path="/storage/emulated/0/蜂巢WE贷/家访/";
			}
			if(pass.equals("10")){
				path="/storage/emulated/0/蜂巢WE贷/担保/";
			}
			if(mSelectedImage1.size()>0){
			for(int aa=0;aa<mSelectedImage1.size();aa++){
				mSelectedImage1.remove(aa);
			}}
			if(mSelectedImage3.size()>0){
				for(int aa=0;aa<mSelectedImage3.size();aa++){
					mSelectedImage3.remove(aa);
				}}
			File f = new File(path);
			List<File> fileList = getFile(f);
			for (int i = 0; i < fileList.size(); i++) {
				File file = fileList.get(i);
				mSelectedImage1.add(file.getName());
				mSelectedImage3.add(path+file.getName());
				}
		return mSelectedImage1;
		
	}
	public List<File> getFile(File file) {
		File[] fileArray = file.listFiles();
		for (File f : fileArray) {
		if (f.isFile()) {
		mFileList.add(f);
		} else {
		getFile(f);
		}
		}
		return mFileList;
		}
	public List saveIma(String pass){
		
		return mSelectedImage3;
	}
	

}
