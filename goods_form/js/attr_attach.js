function attach_attr(){
	var name = document.getElementById("attr_name").value;
	if(name!=null&&name!=""){
		var ul = document.getElementById("pre_attrs");
		var li = document.createElement("li");
		var id = ul.childNodes.length+1;
		li.innerHTML = name+"<input type= \"button\" value= \"添加选项\" id=\""+id+"\" onclick=\"attach_opt("+id+")\">";
		ul.appendChild(li);
	}
}

function attach_opt(n){
	document.getElementById("opt_dfn_frame").style.display="block";
}