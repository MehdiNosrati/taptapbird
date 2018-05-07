var x = 0;
var l = 400;
var interv = setInterval(function(){
		l += 10;
		document.getElementById("b").style.left = l+'px' ;
		window.scrollTo(l, 0);
	},20);
function funcJump() {
	document.getElementById("b").style.top = "100px";
	document.getElementById("b").style.transition = "top .3s";
	
	setTimeout(function(){
		
		document.getElementById("b").style.top = "320px";
		document.getElementById("b").style.transition = "top .3s";
		
	}, 200);
	
}
function funcT(event){
	if (event.altKey){
		clearInterval(interv);
		}
	else if (event.ctrlKey){
		
		interv = setInterval(function(){
		l += 10;
		document.getElementById("b").style.left = l+'px' ;
		window.scrollTo(l, 0);
	},20);
	}
	else alert("kk")
}