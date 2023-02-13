let screen;

function start() {

    screen = document.getElementById('res');
    let btn0 = document.getElementById('btn0');    
    let btn1 = document.getElementById('btn1');
    let btnClr = document.getElementById('btnClr');
    let btnSum = document.getElementById('btnSum');
    let btnSub = document.getElementById('btnSub');
    let btnMul = document.getElementById('btnMul');
    let btnDiv = document.getElementById('btnDiv');
    let btnEql = document.getElementById('btnEql');

    btn0.addEventListener('click', write0, false);
    btn1.addEventListener('click', write1, false);
    btnClr.addEventListener('click', clear, false);
    btnSum.addEventListener('click', opSum, false);
    btnSub.addEventListener('click', opSub, false);
    btnMul.addEventListener('click', opMul, false);
    btnDiv.addEventListener('click', opDiv, false);
    btnEql.addEventListener('click', solve, false);
}

function write0() {
    screen.innerHTML = `${screen.innerHTML+0}`;
}

function write1() {
    screen.innerHTML = `${screen.innerHTML+1}`;
}

function clear() {
    screen.innerHTML = '';
}

function opSum() {
    screen.innerHTML = `${screen.innerHTML}+`;
}

function opSub() {
    screen.innerHTML = `${screen.innerHTML}-`;
}

function opMul() {
    screen.innerHTML = `${screen.innerHTML}*`;
}

function opDiv() {
    screen.innerHTML = `${screen.innerHTML}/`;
}

function solve() {
    let regex = /(\d+)/g;
    let expression = screen.innerHTML;
    
    expression = expression.replace(regex, (match) => { 
        return parseInt(match, 2);
    })

    screen.innerHTML = Math.floor(eval(expression).toString(2));
}

window.addEventListener('load', start, false);