function mouseEmCimae(imagem) {
    imagem.src="esquerdah.png";
    } 
    function mouseForae(imagem) {
    imagem.src="esquerda.png";
    }

    function mouseEmCimad(imagem) {
    imagem.src="direitah.png";
    } 
    function mouseForad(imagem) {
    imagem.src="direita.png";
    }

    function passar1() {
        document.getElementById("video").src ='clientes.mp4';
        document.getElementById("setae").setAttribute('onclick','passar5()');
        document.getElementById("setad").setAttribute('onclick','passar2()');
        document.getElementById("h2").innerHTML ='Cliente';
        document.getElementById("texto").innerHTML ='No vídeo acima demonstramos como funciona o chatbot na visão do cliente (consumidor).';
    }

    function passar2() {
        document.getElementById("video").src ='restaurante.mp4';
        document.getElementById("setae").setAttribute('onclick','passar1()');
        document.getElementById("setad").setAttribute('onclick','passar3()');
        document.getElementById("h2").innerHTML ='Restaurante';
        document.getElementById("texto").innerHTML ='No vídeo acima demonstramos como funciona o chatbot na visão do restaurante (recebimento do pedido).';
    }

    function passar3() {
        document.getElementById("video").src ='entregador.mp4';
        document.getElementById("setae").setAttribute('onclick','passar2()');
        document.getElementById("setad").setAttribute('onclick','passar1()');
        document.getElementById("h2").innerHTML ='Entregador';
        document.getElementById("texto").innerHTML ='No vídeo acima demonstramos como funciona o chatbot na visão do motoboy (entregador).';
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
    