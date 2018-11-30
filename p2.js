function book(a,b,c,d,z,y,w) {
"use strict";		 
var w=prompt("enter your identifier number");
if(w<100000000000000)
	alert("number incomplete");
else{
var a=prompt("enter your name");
var b=prompt("enter your type of the train");
if((b!="vip")&&(b!="commuter")&&(b!="centre"))
	alert("error type");
else{
var c=prompt("enter your starting station");
var d=prompt("enter your destination station");
var z=prompt("enter your suitale date");
if(z<=15)
		alert("it is booked,try another appointment");
	else{
var y=prompt("enter your number of train");
if((y!=123) && (y!=2009)&&(y!=168) && (y!=585)&& (y!=1142) && (y!=162)&&(y!=2000) && (y!=190)&&(y!=777) && (y!=158)&&(y!=150) && (y!=143))
	alert("error number");
else{
    alert("book is done");
}
}
}
}
}





	function cancelbook(e,f,g)
	{
		"use strict";
	var e=prompt("enter your identifier number");
	if(e<100000000000000)
	alert("number incomplete");
else{
    var f=prompt("enter your name");
	alert("cancel book is done");
}
}

function delaybook(h,i,j)
{
	var h=prompt("enter your identifier number")
	if(h<100000000000000)
	alert("number incomplete");
else{
    var i=prompt("enter your name");
    var j=prompt("enter your new appointment of book");
	if(j<=15)
		alert("it is booked,try another appointment");
	else{
	alert("delaybook book is done");
	}
}
}