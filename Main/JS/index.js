function agree() {
    document.getElementById('welcome').style.display = "none";
    var audio = new Audio('/MP3/Nyan.mp3');
audio.play();
}

setInterval(agree, 216000)