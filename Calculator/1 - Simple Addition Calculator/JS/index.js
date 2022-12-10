function test() {

    let a = document.getElementById('A').value;
    let b = document.getElementById('B').value;
    var text = document.getElementById('C');
    var fin = +a + +b;
    text.innerHTML = fin;  
}