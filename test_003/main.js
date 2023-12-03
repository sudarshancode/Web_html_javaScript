var image= document.createElement("img");
image.style.width="300px";
image.style.height="300px";


function cat()
{
    image.src="img/cat.jpg";
    document.getElementById("img-div").appendChild(image);
}
function laptop()
{
    image.src= "img/laptop.jpg";
    document.getElementById("img-div").appendChild(image);
}