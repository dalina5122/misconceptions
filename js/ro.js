// RANDOM IMAGES DISPLAYED ON CLICK OF LIGHT SWITCH
var pic_rand = ["romania/romania1.png", "romania/romania2.png", "romania/romania3.png", "romania/romania4.png", "romania/romania5.png", "romania/romania6.png", "romania/romania7.png", "romania/romania8.png", "romania/romania9.png", "romania/romania10.jpg"];
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