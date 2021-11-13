document.addEventListener("DOMContentLoaded", () => {
    let headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    headers.forEach(function(header, index) {
        let name = header.textContent;
        let headerID = 'header' + index;
        header.setAttribute('id', headerID);
        let header_div = document.createElement("div");
        header_div.innerHTML = '<a href="#' + headerID + '">' + name + '</a>';
        document.getElementById("nav").appendChild(header_div)
    });
})