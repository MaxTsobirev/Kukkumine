var x=147, y=25, r=25, ysamm=1;
var ysamm=1, ykiirendus=0.4;
var y1=10;
var y2=10;
var x1=140;
var x2=153;
var t, g; //tahvel, graafiline kontekst
//liigutab palli liigu funktsiooniga
// 100 - tähendab 10 korda sekundis

function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 50);
}
//joonistab palli
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="blue";
    g.fillStyle="lightblue";
    g.beginPath();
    g.arc(x, y, r, 0, 2*Math.PI,true);
    g.stroke();//joon
    g.fill();//taust

    g.fillStyle="white";
    g.beginPath();
    g.arc(x1, y-10, 5, 0, 2*Math.PI,true);
    g.stroke();
    g.fill();

    g.fillStyle="yellow";
    g.beginPath();
    g.arc(x2, y-10, 5, 0, 2*Math.PI,true);
    g.stroke();
    g.fill();

    if(y > t.height){
        y = 0;
    }
}
//kuukumine alla
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    y1+=ysamm;
    y2+=ysamm;
    joonista();
}
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    x1=hx-7;
    x2=hx-(-6);

    ysamm=0;
}




