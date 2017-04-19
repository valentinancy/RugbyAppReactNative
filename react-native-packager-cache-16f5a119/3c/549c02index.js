









'use strict';

var shallowEqual=require('fbjs/lib/shallowEqual');

module.exports={
shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){
return(
!shallowEqual(this.props,nextProps)||
!shallowEqual(this.state,nextState));

}};