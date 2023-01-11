var audio = new Audio('../Main/MP3/Nyan.mp3');

function agree() {
    document.getElementById('welcome').style.display = "none";
    audio.play();
    setInterval(agree, 216000)
}

function aud1() {
    audio.pause();

}

function aud2() {
    audio.play();

}