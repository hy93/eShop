function start(){
	document.getElementById("start").style.display="none";
	document.getElementById("step1").style.display="block";
}

function step2(){
	document.getElementById("start").style.display="none";
	document.getElementById("step1").style.display="none";
	document.getElementById("step2").style.display="block";	
}

function step3(){
	document.getElementById("step2").style.display="none";
	document.getElementById("step3").style.display="block";	
}

function over(){
	document.getElementById("step3").style.display="none";
	document.getElementById("over").style.display="block";	
}