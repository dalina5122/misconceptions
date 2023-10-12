// RAISING HAND
function onHover()
{
    $("#am").attr('src', 'img/america1.png');
}

function offHover()
{
    $("#am").attr('src', 'img/america2.png');
}

// function enlarge(x){
//     x.style.height="340px";
//     x.style.width="260px";
//     x.style.top="1140px";
// }

// function size(y){
//     y.style.height="240px";
//     y.style.width="160px";
//     y.style.top="1240px";
// }

// FOR AUDIO
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#audio').remove()
}
else {
    $('#audio2').remove() // just to make sure that it will not have 2x audio in the background 
}
