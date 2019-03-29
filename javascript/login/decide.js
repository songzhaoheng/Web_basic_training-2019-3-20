function decide() {
  var input_username = document.getElementById("input_username");
  var input_userpass = document.getElementById("input_userpass");
  var form_registered = document.getElementById("form_registered");

  if(input_username.value != "admin123" && input_userpass.value !="admin123"){
    form_registered.action = "";
    input_username.style.color = "#000000";
    input_username.value = "您输入的用户名不正确";
    input_userpass.style.color = "000000";
    input_userpass.value = "您输入的密码不正确";
    alert("您输入的用户名和密码不正确（密码和用户名都是admin123）");
  }

}
