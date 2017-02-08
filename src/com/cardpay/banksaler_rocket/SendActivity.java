package com.cardpay.banksaler_rocket;


import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.squareup.picasso.Picasso;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.util.Log;
import android.view.GestureDetector;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.widget.ImageView;
/*	@descript 实现滑动切换图片
 *  @Date 2014-8-4
 *  @come：http://www.cnblogs.com/tinyphp/p/3890769.html
 */
import android.widget.Toast;

public class SendActivity extends Activity implements  android.view.GestureDetector.OnGestureListener{
private ViewPager viewPager;
private ArrayList<View> pageview;
List list =new ArrayList();
private  String ImaURL="http://192.168.191.2:8080/PCCredit/ipad/JnpadImageBrowse/downLoadYxzlJn.json?id=";
ImageView images;
//定义手势检测器实例
	GestureDetector detector;
	Integer imaCount=0;
	String[] imagesUrl;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //设置无标题栏
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_send);
        String name = (String) getIntent().getExtras().get("name");
		String b="1";
		if(!name.equals(b)){
         images=(ImageView) findViewById(R.id.imagess);
         String url=ImaList.getIma();
         imagesUrl=url.split(",");
         for(int a=0;a<imagesUrl.length;a++){
        	 list.add(imagesUrl[a]) ;
         }
        String imageUrl=(String) list.get(0);
        Picasso.with(this).load(ImaURL+imageUrl)
        .into(images);
        //创建手势检测器
        detector = new GestureDetector(this,this); }else{
        	AppManager.getInstance().addActivity(this);
			finish();
        }
    }

  
    //将该activity上的触碰事件交给GestureDetector处理
    public boolean onTouchEvent(MotionEvent me){
    	return detector.onTouchEvent(me);
    }
    
	@Override
	public boolean onDown(MotionEvent arg0) {
		return false;
	}

	/**
	 * 滑屏监测
	 * 
	 */
	@Override
	public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX,
			float velocityY) {
		float minMove = 120;         //最小滑动距离
		float minVelocity = 0;      //最小滑动速度
		float beginX = e1.getX();     
		float endX = e2.getX();
		float beginY = e1.getY();     
		float endY = e2.getY();

			if(beginX-endX>minMove&&Math.abs(velocityX)>minVelocity){
				
				//左滑
				if(imaCount<=list.size()-2){
					imaCount=imaCount+1;
					 String imageUrl=(String) list.get(imaCount);
					 Picasso.with(this).load(ImaURL+imageUrl)
				        .into(images);}else{
				        	imaCount=list.size()-1;
				        	String imageUrl=(String) list.get(imaCount);
				        	 Picasso.with(this).load(ImaURL+imageUrl)
				             .into(images);
				        	Toast.makeText(this, "最后一张",Toast.LENGTH_SHORT).show();
				        }
			}else if(endX-beginX>minMove&&Math.abs(velocityX)>minVelocity){   //右滑
			if(imaCount>=1){
				imaCount=imaCount-1;
				 String imageUrl=(String) list.get(imaCount);
				 Picasso.with(this).load(ImaURL+imageUrl)
			        .into(images);;
			}else{
				 String imageUrl=(String) list.get(0);
				 Picasso.with(this).load(ImaURL+imageUrl)
			        .into(images);
			        Toast.makeText(this,"第一张",Toast.LENGTH_SHORT).show();
			}
			}else if(beginY-endY>minMove&&Math.abs(velocityY)>minVelocity){   //上滑
				if(imaCount<=list.size()-2){
					imaCount=imaCount+1;
					 String imageUrl=(String) list.get(imaCount);
					 Picasso.with(this).load(ImaURL+imageUrl)
				        .into(images);}else{
				        	imaCount=list.size()-1;
				        	String imageUrl=(String) list.get(imaCount);
				        	 Picasso.with(this).load(ImaURL+imageUrl)
				             .into(images);
				        	Toast.makeText(this, "最后一张",Toast.LENGTH_SHORT).show();
				        }
			}else if(endY-beginY>minMove&&Math.abs(velocityY)>minVelocity){   //下滑
				if(imaCount>=1){
					imaCount=imaCount-1;
					 String imageUrl=(String) list.get(imaCount);
					 Picasso.with(this).load(ImaURL+imageUrl)
				        .into(images);;
				}else{
					 String imageUrl=(String) list.get(0);
					 Picasso.with(this).load(ImaURL+imageUrl)
				        .into(images);
				        Toast.makeText(this,"第一张",Toast.LENGTH_SHORT).show();
				}
			}
		
		
		return false;
	}

	@Override
	public void onShowPress(MotionEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean onSingleTapUp(MotionEvent arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void onLongPress(MotionEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean onScroll(MotionEvent e1, MotionEvent e2, float velocityX,
			float velocityY) {
	
		return false;
	}


}
