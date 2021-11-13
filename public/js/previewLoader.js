var preview_id = 0;

function previewAppear(data) {
    preview_html =
    '\
		<p><b><a href="' + data.article.url + '">' + data.article.title + '</a></b></p>\
		<p><a href="'+data.article.author.url+'">'+data.article.author.name+'</a></p>\
        <p>' + data.article.preview.description + '</p>\
		<p><img src="'+data.article.preview.image_url+'">' + data.article.update_date + '</p>\
	'
    let new_preview = document.createElement("article");
    // new_preview.setAttribute("class", "preview");
    new_preview.innerHTML = preview_html;
    document.getElementById("previews").appendChild(new_preview);
}

function loadPreviews(numToLoad) {
    window.removeEventListener("scroll", scrollHandler)
    req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            response_json = JSON.parse(req.responseText);
            if (response_json.author != 0) {
                previewAppear(response_json);
                preview_id++;
                if (numToLoad != 0)
                    loadPreviews(--numToLoad);
            }
        }
    }
    req.open("GET", load_preview_url + "?preview_num=" + preview_id);
    req.send();
}

var scrollHandler = function() {
    if (window.scrollY + window.innerHeight >= document.body.clientHeight - 50) {
        loadPreviews(2);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener("scroll", scrollHandler);
        loadPreviews(3);

});