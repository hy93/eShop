function show_opt_img(){
	var check = document.getElementById("opt_img_check");
	if(check.checked){
		document.getElementById("opt_img").style.display = "block";
	}else{
		document.getElementById("opt_img").style.display = "none";
	}
}