











'use strict';

var Platform={
OS:'android',
get Version(){
var AndroidConstants=require('NativeModules').AndroidConstants;
return AndroidConstants&&AndroidConstants.Version;
},
select:function select(obj){return obj.android;}};


module.exports=Platform;