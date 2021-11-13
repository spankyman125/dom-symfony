function exit() {
  // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // document.cookie = "PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
  $.ajax({
    type:'get',
    url:"{% url 'logout' %}",
    success: function (result) {
        location.reload();
    }
  });

}