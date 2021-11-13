function createPage() {
	$.ajax({
	type:'post',
	url:'/DOM/php/createPage.php',
	success: function (result) {
			window.location.href = "http://localhost:8082/DOM/html/articles/page"+result+"/page"+result+".html";
		}
	});
}


