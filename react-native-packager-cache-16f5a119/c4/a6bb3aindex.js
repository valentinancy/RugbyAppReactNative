Object.defineProperty(exports,"__esModule",{value:true});exports.dirs=undefined;exports.


















takeSnapshot=takeSnapshot;var _reactNative=require("react-native");var RNViewShot=_reactNative.NativeModules.RNViewShot;var dirs=exports.dirs={CacheDir:RNViewShot.CacheDir,DocumentDir:RNViewShot.DocumentDir,MainBundleDir:RNViewShot.MainBundleDir,MovieDir:RNViewShot.MovieDir,MusicDir:RNViewShot.MusicDir,PictureDir:RNViewShot.PictureDir,DCIMDir:RNViewShot.DCIMDir,DownloadDir:RNViewShot.DownloadDir,RingtoneDir:RNViewShot.RingtoneDir,SDCardDir:RNViewShot.SDCardDir};function takeSnapshot(
view)









{var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
if(typeof view!=="number"){
var node=(0,_reactNative.findNodeHandle)(view);
if(!node)return Promise.reject(new Error("findNodeHandle failed to resolve view="+String(view)));
view=node;
}
return RNViewShot.takeSnapshot(view,options);
}exports.default=

{takeSnapshot:takeSnapshot,dirs:dirs};