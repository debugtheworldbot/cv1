let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
let string2 = "";
let string = `/*你好呀,接下来看我操作就行了
首先我准备一个div
*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*接下来我把div变成一个太极图
watch out
先把div变成一个圆圈*/
#div1{
  border-radius:50%;
  box-shadow:0 0 30px green;
  border:none;
}
/*然后是黑白配>_<*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个风火轮*/
#div1::before{

  border-radius:50%;
  background:radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 75%, rgba(0,0,0,1) 75%);
}
#div1::after{
  
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(255,255,255,1) 75%);
}

`;

let step = () => {
  setTimeout(() => {
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 9999);
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    //如果是回车,直接换行，如果不是就照搬
    if (n < string.length) {
      n += 1; //如果n不是最后一个
      step();
    }
  }, 50);
};

step();
