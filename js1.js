function alternar() {
    document.getElementById("banner").src ='banner1.jpg';
    setTimeout("alternar1()", 2.5 * 1000)
}
function alternar1() {
    document.getElementById("banner").src ='dica.jpg';
    setTimeout("alternar2()", 2.5 * 1000)
}
function alternar2() {
    document.getElementById("banner").src ='dica1.jpg';
    setTimeout("alternar3()", 2.5 * 1000)
}
function alternar3() {
    document.getElementById("banner").src ='dica2.jpg';
    setTimeout("alternar4()", 2.5 * 1000)
}
function alternar4() {
    document.getElementById("banner").src ='dica3.jpg';
    setTimeout("alternar5()", 2.5 * 1000)
}
function alternar5() {
    document.getElementById("banner").src ='dica4.jpg';
    setTimeout("alternar6()", 2.5 * 1000)
}

function alternar6() {
    document.getElementById("banner").src ='dica5.jpg';
    setTimeout("alternar()", 2.5 * 1000)
}

function mouseEmCima(imagem) {
    document.getElementById('menu2').src="3menu.png";
    } 
function mouseFora(imagem) {
    document.getElementById('menu2').src="3menu-2.png";
    }
function abrirMenu() {
    document.getElementById('mobile').style.display="none";
    document.getElementById('menum').style.display="block";
    } 
function fecharMenu() {
    document.getElementById('mobile').style.display="block";
    document.getElementById('menum').style.display="none";
    } 
