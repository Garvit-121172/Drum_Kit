var len= document.querySelectorAll(".drum").length;
var l;
for(var i=0;i< len;i++)
{  
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   	var audio= new Audio(this.innerText +".mp3");
   	audio.play();
   });
}

	document.addEventListener("keypress",function(event){
   	var audio= new Audio(event.key+".mp3");
   	audio.play();
   });

   document.querySelector(".random").addEventListener("click",function(){
    var r=Math.floor(Math.random()*3)+1;
   	//alert(r +"was generated");
   	var a=new Audio(r+".mp3");
   	a.play();
   });