function attach_tag(){

	var childnum = document.getElementById("tag_list").childNodes.length;
	if(childnum>20){
		alert("已经有20个标签了，不能再添加啦！");
		return;
	}

	var string = document.getElementById("tag_input").value;
	if(string!=null&&string!=""){
		var ul = document.getElementById("tag_list");
		var li = document.createElement("li");
		var num = ul.childNodes.length;
		li.innerHTML = string + "<a class=\"close\" onclick=\"delete_tag("+num+")\">&times;</a>";
		li.setAttribute('class','label label-success');
		li.setAttribute('id','label'+num);
		n=1;
		for(var i=0;i<num;i++){
			if(n==-1) ul.appendChild(li);
			else if(i==n-1) ul.insertBefore(li,ul.childNodes[i]);
		}
		document.getElementById("tag_input").value = "";
	}

}

function delete_tag(n){
  	var ul=document.getElementById('tag_list');
  	var li=document.getElementById('label'+n);
  	if(li!=null)
  		ul.removeChild(li);
}