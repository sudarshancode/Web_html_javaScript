var count = 0;
var img=document.getElementById("image");
function textShow(){
    count++;
    let txt= document.getElementById("button-msg");
    txt.innerHTML="Button is clicked "+count;
}
function cat()
{
    img.src="img/cat.jpg";
}
function laptop()
{
    img.src= "img/laptop.jpg";
}