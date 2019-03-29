function decide() {
  var input_username = document.getElementById("input_username");
  var input_userpass = document.getElementById("input_userpass");
  var input_truepass = document.getElementById("input_truepass");
  var input_userphone = document.getElementById("input_userphone");
  var form_registered = document.getElementById("form_registered");

  if(input_username.value.length == 0 || input_username.value.length > 10){
    form_registered.action = "";
    input_username.style.color = "#000000";
    input_username.value = "您输入用户名长度不符合规范，必须在0~9哥字符之间";
  }

  if(isNaN(input_userphone.value) || input_username.value.length!=11){
    form_registered.action = "";
    input_userphone.style.color = "#ff0000";
    input_userphone.value = "您输入用户名长度不符合规范，必须在0~9哥字符之间";
  }

}
