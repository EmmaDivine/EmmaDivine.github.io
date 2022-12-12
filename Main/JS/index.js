function agree() {
    document.getElementById('welcome').style.display = "none";
    var audio = new Audio('../Main/MP3/Nyan.mp3');
    audio.play();
}

setInterval(agree, 216000)

function aud1() {
    var audio = new Audio('../Main/MP3/Nyan.mp3');
    audio.pause();

}

function aud2() {
    var audio = new Audio('../Main/MP3/Nyan.mp3');
    audio.play();

}