function start (){

    let btn5 = document.getElementById('btn5');
    btn5.addEventListener('click', changeGrid, false);

}

function changeGrid(){

    let btnChanged = [
    document.getElementById('btn1').innerHTML, 
    document.getElementById('btn2').innerHTML, 
    document.getElementById('btn3').innerHTML, 
    document.getElementById('btn6').innerHTML, 
    document.getElementById('btn9').innerHTML, 
    document.getElementById('btn8').innerHTML, 
    document.getElementById('btn7').innerHTML, 
    document.getElementById('btn4').innerHTML
    ];
    
    btnChanged.unshift(btnChanged.pop());

    let btnToChange = [
    document.getElementById('btn1'), 
    document.getElementById('btn2'), 
    document.getElementById('btn3'), 
    document.getElementById('btn6'), 
    document.getElementById('btn9'), 
    document.getElementById('btn8'), 
    document.getElementById('btn7'), 
    document.getElementById('btn4')
    ];

    for(let i = 0; i < btnChanged.length; i++){
        btnToChange[i].innerHTML = btnChanged[i];
    }
}

window.addEventListener('load', start, false);

/*
https://ibb.co/6vH4wC1  https://i.ibb.co/YDctQsy/Screenshot-from-2023-02-10-14-16-41.png
https://ibb.co/Q6CGnS4  https://i.ibb.co/rZcJM8V/Screenshot-from-2023-02-10-14-16-59.png
https://ibb.co/xqdnN0j  https://i.ibb.co/hFwGSjW/Screenshot-from-2023-02-10-14-17-07.png
*/