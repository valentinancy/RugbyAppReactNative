










'use strict';

var ReactNativeStyleAttributes=require('ReactNativeStyleAttributes');

var ReactNativeViewAttributes={};

ReactNativeViewAttributes.UIView={
pointerEvents:true,
accessible:true,
accessibilityLabel:true,
accessibilityComponentType:true,
accessibilityLiveRegion:true,
accessibilityTraits:true,
importantForAccessibility:true,
testID:true,
renderToHardwareTextureAndroid:true,
shouldRasterizeIOS:true,
onLayout:true,
onAccessibilityTap:true,
onMagicTap:true,
collapsable:true,
needsOffscreenAlphaCompositing:true,
style:ReactNativeStyleAttributes};


ReactNativeViewAttributes.RCTView=babelHelpers.extends({},
ReactNativeViewAttributes.UIView,{






removeClippedSubviews:true});


module.exports=ReactNativeViewAttributes;