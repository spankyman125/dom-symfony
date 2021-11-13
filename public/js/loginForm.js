function openForm() {
  document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
}

// function showRegDialog() {
//   $("form p").text("Регистрация");
//   $("#pw2").show();
//   $("#submit").show();
//   $("#closeRegDialog").show();
//   $("#showRegDialog").hide();
//   $("#submit").attr("onclick",'register()');
// }

// function closeRegDialog() {
//   $("form p").text("Вход");
//   $("#pw2").hide();
//   $("#closeRegDialog").hide();
//   $("#showRegDialog").show();
//   $("#submit").attr("onclick",'login()');
// }
// function login() {
//   $.ajax({
//       type:'post',
//       url:'/DOM/php/auth.php',
//       data: "username="+ $("#username").val() + "&pw1="+ $("#pw1").val(),
//       success: function (result) {
//         console.log(result);
//         if(result==1)
//             location.reload();
//         else
//           $("#loginForm p").text("Неверный логин или пароль");
//       }
//     });
// }

// function register() {
//   $.ajax({
//   type:'post',
//   url:'/DOM/php/auth.php',
//   data: "username="+ $("#username").val() + "&pw1="+ $("#pw1").val() + "&pw2="+ $("#pw2").val(),
//   success: function (result) {
//     console.log(result);
//     if(result==2)
//       $("#loginForm p").text("Пароли не совпадают");
//     else
//     {
//       if(result==1)
//         login();
//       else
//         $("#loginForm p").text("Выберите другое имя");
//     }
//   }
//   });
// }
