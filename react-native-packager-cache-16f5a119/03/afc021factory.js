








'use strict';





var factory=require('./factoryWithTypeCheckers');
module.exports=function(isValidElement){

var throwOnDirectAccess=false;
return factory(isValidElement,throwOnDirectAccess);
};