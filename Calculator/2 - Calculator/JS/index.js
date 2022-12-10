var ad = 1;

function test() {

    let a = document.getElementById('A').value;
    let b = document.getElementById('B').value;
    let text = document.getElementById('C');
    if (ad == 1) {
        var fin = +a + +b;
        text.innerHTML = fin;  
    }
    else if (ad == 2) {
        var fin = +a - +b;
        text.innerHTML = fin;  
    }
    else if (ad == 3) {
        var fin = +a / +b;
        text.innerHTML = fin;  
    }
    else if (ad == 4) {
        var fin = +a * +b;
        text.innerHTML = fin;  
    }
            text.innerHTML = fin;
}

function plus() {
    window['ad'] = 1;
    var n = document.getElementById('this');
    n.innerHTML = "+";

}

function minus() {
    window['ad'] = 2;
    var n = document.getElementById('this');
    n.innerHTML = "-";
}

function fraction() {
    window['ad'] = 3;
    var n = document.getElementById('this');
    n.innerHTML = "/";

}

function product() {
    window['ad'] = 4;
    var n = document.getElementById('this');
    n.innerHTML = "*";

}