// RANDOM IMAGES DISPLAYED ON CLICK OF LIGHT SWITCH
var pic_rand = ["brazil/brazil1.jpg", "brazil/brazil2.jpg", "brazil/brazil3.jpg", "brazil/brazil4.jpg", "brazil/brazil5.jpg", "brazil/brazil6.jpg", "brazil/brazil7.jpg", "brazil/brazil8.jpg", "brazil/brazil9.jpg", "brazil/brazil10.jpg"];
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