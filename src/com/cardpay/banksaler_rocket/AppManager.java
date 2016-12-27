package com.cardpay.banksaler_rocket;

import android.app.Activity;
import android.app.Application;

import java.util.LinkedList;
import java.util.List;

/**
 * activity堆栈式管理
 *
 * @author FireAnt（http://my.oschina.net/LittleDY）
 * @created 2014年10月30日 下午6:22:05
 *
 */
public class AppManager extends Application{
    public static List<Activity> mList = new LinkedList<Activity>();
    public static AppManager instance;

    private AppManager() {
    }
    public synchronized static AppManager getInstance() {
        if (null == instance) {
            instance = new AppManager();
        }
        return instance;
    }
    // add Activity
    public void addActivity(Activity activity) {
        mList.add(activity);
    }

    public void exit() {
        try {
            for (Activity activity : mList) {
                if (activity != null)
                    activity.finish();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            System.exit(0);
        }
    }
    public void onLowMemory() {
        super.onLowMemory();
        System.gc();
    }
}

