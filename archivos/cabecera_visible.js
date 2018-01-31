/* cabecera_visible.js compiled from X 4.01 with XC 0.29b. Distributed under GNU LGPL. For copyrights, license, documentation and more visit Cross-Browser.com */
var xOp7Up,xOp6Dn,xIE4Up,xIE4,xIE5,xNN4,xUA=navigator.userAgent.toLowerCase();
if(window.opera){
	var i=xUA.indexOf('opera');
	if(i!=-1){
		var v=parseInt(xUA.charAt(i+6));
		xOp7Up=v>=7;xOp6Dn=v<7;
	}
}else if(navigator.vendor!='KDE' && document.all && xUA.indexOf('msie')!=-1){
		xIE4Up=parseFloat(navigator.appVersion)>=4;
		xIE4=xUA.indexOf('msie 4')!=-1;
		xIE5=xUA.indexOf('msie 5')!=-1;
}else if(document.layers){
	xNN4=true;
}
xMac=xUA.indexOf('mac')!=-1;
function xDef(){
	for(var i=0; i<arguments.length; ++i){
		if(typeof(arguments[i])=='undefined') return false;
	}
	return true;
}
function xGetElementById(e){
	if(typeof(e)=='string') {
		if(document.getElementById) e=document.getElementById(e);else if(document.all) e=document.all[e];else e=null;
	}return e;
}
function xLeft(e, iX){if(!(e=xGetElementById(e))) return 0;var css=xDef(e.style);if (css && xStr(e.style.left)) {if(xNum(iX)) e.style.left=iX+'px';else {iX=parseInt(e.style.left);if(isNaN(iX)) iX=0;}}else if(css && xDef(e.style.pixelLeft)) {if(xNum(iX)) e.style.pixelLeft=iX;else iX=e.style.pixelLeft;}return iX;}function xMoveTo(e,x,y){xLeft(e,x);xTop(e,y);}function xNum(){for(var i=0; i<arguments.length; ++i){if(isNaN(arguments[i]) || typeof(arguments[i])!='number') return false;}return true;}function xScrollTop(e, bWin){var offset=0;if (!xDef(e) || bWin || e == document || e.tagName.toLowerCase() == 'html' || e.tagName.toLowerCase() == 'body') {var w = window;if (bWin && e) w = e;if(w.document.documentElement && w.document.documentElement.scrollTop) offset=w.document.documentElement.scrollTop;else if(w.document.body && xDef(w.document.body.scrollTop)) offset=w.document.body.scrollTop;}else {e = xGetElementById(e);if (e && xNum(e.scrollTop)) offset = e.scrollTop;}return offset;}function xStr(s){for(var i=0; i<arguments.length; ++i){if(typeof(arguments[i])!='string') return false;}return true;}function xTop(e, iY){if(!(e=xGetElementById(e))) return 0;var css=xDef(e.style);if(css && xStr(e.style.top)) {if(xNum(iY)) e.style.top=iY+'px';else {iY=parseInt(e.style.top);if(isNaN(iY)) iY=0;}}else if(css && xDef(e.style.pixelTop)) {if(xNum(iY)) e.style.pixelTop=iY;else iY=e.style.pixelTop;}return iY;}