
var l = 400;
var ol = 2000;

var obs;
var i;
var oo = 0;


var interv = setInterval(function(){
		l += 1;
		document.getElementById("b").style.left = l+'px' ;
		window.scrollTo(l, 0);
		
		
	

		
	
	
	},1);
function funcJump() {
	document.getElementById("b").style.transform = "rotate(-35deg)";
	document.getElementById("b").style.top = "100px";
	document.getElementById("b").style.transition = "top .3s";
	
	setTimeout(function(){
		
		document.getElementById("b").style.top = "320px";
		document.getElementById("b").style.transition = "top .3s";
		document.getElementById("b").style.transform = "rotate(35deg)";
		setTimeout(function(){
			document.getElementById("b").style.transform = "rotate(0deg)";
		},10);
		
	}, 300);
	
}
function funcDJump(){
	document.getElementById("b").style.transform = "rotate(-35deg)";
	document.getElementById("b").style.top = "150px";
	document.getElementById("b").style.transition = "top .3s";
	
	setTimeout(function(){
		
		document.getElementById("b").style.top = "50px";
		document.getElementById("b").style.transition = "top .3s";
		document.getElementById("b").style.transform = "rotate(-35deg)"
		setTimeout(function(){
			document.getElementById("b").style.top = "320px";
		document.getElementById("b").style.transition = "top .3s";
		document.getElementById("b").style.transform = "rotate(0deg)"
		}, 300);
		
	}, 300);
	
}


setInterval(function(){
	var ob = document.createElement("div");
	ob.className = "obstacle";
	
	ol += Math.floor((Math.random() * 1000 + 500));
	ob.style.position = "relative";
	ob.style.width = "100px";
	ob.style.height = "250px";
	ob.style.left = ol+'px';
	ob.style.top = "200px";
	ob.style.display = "inline-block"; 
	ob.style.backgroundColor = "brown";
	ob.style.borderRadius = "40px 40px 0px 0px";
	document.getElementById("addo").appendChild(ob);
},1350);

