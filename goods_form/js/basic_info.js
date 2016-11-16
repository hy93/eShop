function choose(info){

	var string1 = info.innerHTML;
	document.getElementById("choosed_type").value=string1;
}

function stime_show(r){
	var d = document.getElementById("stimediv")
	var v = r.value;
	if(v==1){
		document.getElementById("stimediv").style.display = "none";
	}
	else if(v==2)
		document.getElementById("stimediv").style.display = "block";
}