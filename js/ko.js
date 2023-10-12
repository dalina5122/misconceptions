// RANDOM IMAGES DISPLAYED ON CLICK OF LIGHT SWITCH
var pic_rand = ["korea/korea1.png", "korea/korea2.png", "korea/korea3.png", "korea/korea4.png", "korea/korea5.png", "korea/korea6.png", "korea/korea7.png", "korea/korea8.png", "korea/korea9.png", "korea/korea10.jpg"];
var rand_three = [];

    for(i = 0; i < 3; i++){
        rand_three.push(pic_rand.splice(Math.floor(Math.random() * pic_rand.length), 1));
        if(pic_rand[i] == rand_three[i]){
            i--;
        }
    }

function randomp(){
    var randomNum = Math.floor(Math.random() * rand_three.length);
    document.getElementById("projector").src = rand_three[randomNum];
}

// FOR AUDIO
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#audio').remove()
}
else {
    $('#audio2').remove() // just to make sure that it will not have 2x audio in the background 
}

function play(){
    var audio = document.getElementById("audio2");
    audio.play();
}