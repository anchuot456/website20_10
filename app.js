var title = document.getElementById("title");
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");

var x =setInterval(function(){
    var distance = 4;
    if (distance < 2) {
        title.className = "fadeOut";
    }else if (distance < 0){
        clearInterval(x);
        pic1.className = "fadeOut";
        pic2.className = "fadeOut";
    }
},1000);