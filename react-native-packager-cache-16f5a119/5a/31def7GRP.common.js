'use strict';




if(typeof self==='undefined'){
global.self=global;
}

var GRP=require('react-native').NativeModules.GRP;
var NativeAppEventEmitter=require('react-native').NativeAppEventEmitter;
var Promise=require('bluebird');

var _getRealPathFromURI=Promise.promisify(GRP.getRealPathFromURI);

var convertError=function convertError(err){
if(err.isOperational&&err.cause){
err=err.cause;
}

var error=new Error(err.description||err.message);
error.code=err.code;
throw error;
};

var RNGRP={
getRealPathFromURI:function getRealPathFromURI(fileUri){
return _getRealPathFromURI(fileUri).
then(function(path){return path;}).
catch(convertError);
}};


module.exports=RNGRP;