document.addEventListener('DOMContentLoaded', (event) => {
    var content_area = document.getElementById("article_markdown");
    var editor = new EasyMDE({
        toolbar: [
            "bold", "italic", "strikethrough", "code", "quote",
            "|", "heading", "heading-smaller", "heading-bigger",
            "|", "unordered-list", "ordered-list",
            "|", "link", "upload-image", "table", "horizontal-rule",
            "|", "preview", "side-by-side", "fullscreen",
        ],
        element: content_area,
        initialValue: content_area.textContent,
        autofocus: true,
        previewImagesInEditor: true,
        uploadImage: true,
        imageUploadEndpoint: save_image_url,
        imagePathAbsolute: true,
        imageCSRFToken: csrf_token,
        spellChecker: false,
        nativeSpellcheck: false,
        styleSelectedText: false
    });
    var editor_container = document.getElementsByClassName("EasyMDEContainer")[0];
    var content_div = document.getElementById("article_html");
    var article_title = document.getElementById("article_title");
    var article_header = document.getElementById("article_header");
    var article_description = document.getElementById("description");
    var preview_image = document.getElementById("preview_image");


    editor_container.style.display = 'none';
    content_div.innerHTML = editor.markdown(editor.value());

    var edit_button = document.createElement("button");
    edit_button.textContent = "Edit";

    var input_title = document.createElement("input");
    input_title.setAttribute("type", "text");
    input_title.setAttribute("id", "input_title");
    input_title.setAttribute("required", "");
    input_title.setAttribute("placeholder", article_title.textContent);
    input_title.setAttribute("class", "article_title");
    input_title.style.display = 'none';
    input_title.value = article_title.textContent

    var input_image = document.createElement("input");
    input_image.setAttribute("type", "file");
    input_image.setAttribute("id", "input_image");
    input_image.style.display = 'none';

    article_header.insertBefore(input_title, article_title);
    article_header.appendChild(edit_button);
    article_header.appendChild(input_image);


    var isEditing = false;

    input_image.addEventListener("change", event => {
        form_data = new FormData();
        form_data.append("image", input_image.files[0]);
        post_ajax(save_image_preview_url, form_data, () => {
            response_json = JSON.parse(req.responseText);
            console.log(response_json.preview_url);
            preview_image.setAttribute("src", response_json.preview_url)
        });
    })
    edit_button.addEventListener("click", event => {

        if (!isEditing) {
            // TODO: Reload page instead of replacing content
            editor_container.style.display = 'block';
            content_div.style.display = 'none';
            input_title.style.display = 'block';
            input_image.style.display = 'block';
            article_title.style.display = 'none';
            edit_button.textContent = "Save";
            article_title.setAttribute("contentEditable", true);
            article_description.setAttribute("contentEditable", true);

            isEditing = true;
        } else {
            editor_container.style.display = 'none';
            content_div.style.display = 'block';
            input_title.style.display = 'none';
            input_image.style.display = 'none';
            article_title.style.display = 'block';
            edit_button.textContent = "Edit";
            isEditing = false;
            content_div.innerHTML = editor.markdown(editor.value()); // TODO: 
            article_title.setAttribute("contentEditable", false);
            article_description.setAttribute("contentEditable", false);
            json = JSON.stringify({
                "title": input_title.value,
                "content_markdown": editor.value(),
                "description": article_description.textContent
            });
            post_ajax(save_article_url, json, () => {});
        }
    })

});

function post_ajax(url, content, on_success) {
    req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            on_success();
        }
    }
    req.open("POST", url);
    req.setRequestHeader("X-CSRFToken", csrf_token);
    // req.setRequestHeader("Content-Type", content_type);
    req.send(content);
}