document.addEventListener('DOMContentLoaded', (event) => {
    var content_area = document.getElementById("article_markdown");
    var editor = new EasyMDE({
        element: content_area,
        initialValue: content_area.textContent,
    });
    var editor_container = document.getElementsByClassName("EasyMDEContainer")[0];
    var content_div = document.getElementById("article_html");
    editor_container.style.display = 'none';
    content_div.innerHTML = editor.markdown(editor.value());
});