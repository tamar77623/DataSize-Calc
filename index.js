let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let btn = document.getElementById('btn')
let inp4 = document.getElementById('inp4');
let h2 = document.getElementById('h2');
let clear = document.getElementById('clear')
let btn2 = document.getElementById('btn2')
let btne = document.getElementById('btne')
inp2.oninput = function(){
        let mb = Number(inp2.value)*1024;
        let tb = Number(inp2.value) / 1024;
        inp3.value = mb;
        inp1.value = tb;
        btn.style.display = 'none'
        clear.style.display = 'inline-block'
}
inp3.oninput = function(){
    let GB = Number(inp3.value) /1024;
    let TB = Number(inp3.value) /(1024 *1024)
    inp2.value = GB;
    inp1.value = TB;
    btn.style.display = 'none'
    clear.style.display = 'inline-block'
}
inp1.oninput = function(){
    let MBBASE = Number(inp1.value) * 1024 *1024;
    let GBBASE =  Number(inp1.value) * 1024;
    inp3.value = MBBASE;
    inp2.value = GBBASE;
    btn.style.display = 'none'
    clear.style.display = 'inline-block'
}
btn.onclick = function(){
    inp1.style.display = 'none';
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    btn.style.display = 'none';
    inp4.style.display = 'block';
    btn2.style.display = 'inline-block';
}
function v(){
    setTimeout(() => {
        h2.innerText ='';
    }, 1000);
}
btn2.onclick = function(){
    if(inp4.value === ""){
        h2.innerText = 'Please Enter your internet speed in Mbps';
        v();
        return;
    }else{
        let Internetspeed = Number(inp4.value) / 8;
        h2.innerText = 'Expected download speed: ' + Math.round(Internetspeed);
    }
    inp4.value = '';
    btne.style.display = 'inline-block';
}
clear.onclick = function(){
    inp1.value = '';
    inp2.value ='';
    inp3.value = '';
    clear.style.display = 'none'
    btn.style.display = 'inline-block';
}
btne.onclick = function(){
    location.reload();
}