package com.last;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.mehcode.reactnative.splashscreen.SplashScreenPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.rngrp.RNGRPPackage;
import cl.json.RNSharePackage;

import java.util.Arrays;
import java.util.List;

/************TAMBAHAN DARI WEBVIEW************/
import com.github.alinz.reactnativewebviewbridge.WebViewBridgePackage;

import com.imagepicker.ImagePickerPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNViewShotPackage(),
          new SplashScreenPackage(),
          new ImagePickerPackage(),
          new WebViewBridgePackage(),
          new RNGRPPackage(),
          new RNSharePackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
