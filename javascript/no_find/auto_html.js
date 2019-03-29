function auto_html() {
  var second = document.getElementById('backimg').textContent;
  if (navigator.appName.indexOf("Explorer") > -1)  //判断是IE浏览器还是Firefox浏览器，采用相应措施取得秒数
  {
    second = document.getElementById('totalSecond').innerText;
  } else
  {
    second = document.getElementById('totalSecond').textContent;
  }
  setInterval("redirect()", 1000);  //每1秒钟调用redirect()方法一次
  function redirect()
  {
    if (second < 0)
    {
      location.href = "../html/index.html";
    } else
    {
      if (navigator.appName.indexOf("Explorer") > -1)
      {
        document.getElementById('totalSecond').innerText = second--;
      } else
      {
        document.getElementById('totalSecond').textContent = second--;
      }
    }
  }
}
function delayURL(){
  setTimeout('../html/index.html',3000)
}
window.onload(
  function () {
    setTimeout("../html/index.html",3000)
  }
);
