var comment_id = 0;

function commentAppear(comment) {
    comment_html =
        '\
			<p><b><a href="' + comment.author_url + '">' + comment.author + '</b></p\
			<p>' + comment.content + '</p>\
			<p>' + comment.reputation + '</p>\
		'
    let new_comment = document.createElement("div");
    new_comment.setAttribute("class", "comment");
    new_comment.innerHTML = comment_html;
    document.getElementById("comments").appendChild(new_comment);
}

function loadComments(numToLoad) {
    window.removeEventListener("scroll", scrollHandler)
    req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            response_json = JSON.parse(req.responseText);
            if (response_json.author != 0) {
                commentAppear(response_json);
                comment_id++;
                if (numToLoad != 0)
                    loadComments(--numToLoad);
            }
        }
    }
    req.open("GET", get_comment_url + "?comment_id=" + comment_id);
    req.send();
}

var scrollHandler = function() {
    if (window.scrollY + window.innerHeight >= document.body.clientHeight - 50) {
        loadComments(2);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener("scroll", scrollHandler);
});