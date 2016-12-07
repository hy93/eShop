		var isLogin = false;
		function login(){
			isLogin = true;
			$('#loginModal').modal('hide');
			document.getElementById("bar-login").style.display="none";
			document.getElementById("bar-user").style.display="block";
			console.log("登录成功");
		}

		function logout(){
			isLogin = false;
			document.getElementById('bar-login').style.display='block';
			document.getElementById('bar-user').style.display='none';
			document.getElementById('user-panel').style.height='0px';
		}

		function cart_logout(){
			isLogin = false;
			window.location.href="../index.html";
		}

		function turn_login(){
			window.location.href="index.html";
		}