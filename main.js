var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var image="BirthdayImage.jpg";

function new_images(){
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        image=Img;
        image.scaleToWidth(700);
        image.scaleToHeight(700);
      image.set({
            top:0,left:0
        });
        canvas.add(image);
    });
}
             

function play(){
	x.play("bdayaudio.mp3");
}
