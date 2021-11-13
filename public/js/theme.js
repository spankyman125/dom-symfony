// function getCookie(cname) {
//   var name = cname + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i <ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function setUserTheme()	 {
// 	var dark =getCookie("dark");
// 	if(dark==0)
// 	{
// 		$(":root").css({
// 			"--font-color-main": "#444444",
// 			"--background-color": "#EBEBEB",
// 			"--background-color-article": "#dedede",
// 			"--border-color": "#bababa",
// 			"--attention-green-color": "#2bbc8a"
// 		});
// 	}
// 	else {
// 		$(":root").css({
// 			"--font-color-main": "#bbbbbb",
// 			"--background-color": "#141414",
// 			"--background-color-article": "#212121",
// 			"--border-color": "#454545",
// 			"--attention-green-color": "#2bbc8a"
// 		});
// 	}
// }

// function changeTheme()
// {
// 	var dark =getCookie("dark");
// 	if(dark==0)
// 		document.cookie = "dark=1;path=/;";
// 	else
// 		document.cookie = "dark=0;path=/;";
// 	setUserTheme();
// }
// setUserTheme();