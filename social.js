if(document.images){
mouseOverArray = new Array();
// preload image 1
mouseOverArray["icon_ut2_off"] = new Image(95,45);
mouseOverArray["icon_ut2_off"].src = "/images/icon_ut2_off.png";
mouseOverArray["icon_ut2_on"] = new Image(95,45);
mouseOverArray["icon_ut2_on"].src = "/images/icon_ut2_on.png";
mouseOverArray["icon_ut2_text"] = "Commercial";
// preload image 2
mouseOverArray["icon_f2_off"] = new Image(95,45);
mouseOverArray["icon_f2_off"].src = "/images/icon_f2_off.png";
mouseOverArray["icon_f2_on"] = new Image(95,45);
mouseOverArray["icon_f2_on"].src = "/images/icon_f2_on.png";
mouseOverArray["icon_f2_text"] = "Residential";
// preload image 3
mouseOverArray["icon_ist2_off"] = new Image(81,45);
mouseOverArray["icon_ist2_off"].src = "/images/icon_ist2_off.png";
mouseOverArray["icon_ist2_on"] = new Image(81,45);
mouseOverArray["icon_ist2_on"].src = "/images/icon_ist2_on.png";
mouseOverArray["icon_ist2_text"] = "Cellular";
// preload image 4
mouseOverArray["icon_home_off"] = new Image(90,45);
mouseOverArray["icon_home_off"].src = "/images/icon_home_off.png";
mouseOverArray["icon_home_on"] = new Image(90,45);
mouseOverArray["icon_home_on"].src = "/images/icon_home_on.png";
mouseOverArray["icon_home_text"] = "Broadband";
}

function doMouseOver( imgName, state ) {
if ( !document.images )
return false;
document.images[ imgName ].src = mouseOverArray[ imgName + "_" + state ].src;
if ( mouseOverArray[ imgName + "_text" ] != "" ) {
if ( state != "off" ) {
window.status = mouseOverArray[ imgName + "_text" ];
return true;
} else {
window.status = "";
return false;
}
}
return false;
}