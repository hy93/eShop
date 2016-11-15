function attach_tag(){
	var string = document.getElementById("tag_input").value;
	if(string!=null&&string!=""){
		var ul = document.getElementById("tag_list");
		var li = document.createElement("li");
		var num = ul.childNodes.length;
		li.innerHTML = string;
		n=1;
		for(var i=0;i<num;i++){
			if(n==-1) ul.appendChild(li);
			else if(i==n-1) ul.insertBefore(li,ul.childNodes[i]);
		}

	}

}