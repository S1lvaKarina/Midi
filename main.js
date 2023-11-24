//tecla Pom
/* function tocaSomPom () {
document.querySelector("#Som_Tecla_Pom").play();

}
document.querySelector("tecla_pom").onclick = tocaSomPom;

//tecla clap
function tocaSomClap () {
    document.querySelector("#Som_Tecla_Clap").play();
    
    }
    document.querySelector("tecla_clap").onclick = tocaSomClap;
    
//tecla tim
function tocaSomTim () {
    document.querySelector("#Som_Tecla_Tim").play();
    
    }
    document.querySelector("tecla_tim").onclick = tocaSomTim;
    
//tecla puff
function tocaSomPuff () {
    document.querySelector("#Som_Tecla_Puff").play();
    
    }
    document.querySelector("tecla_puff").onclick = tocaSomPuff;
    
//tecla splash
function tocaSomSplash () {
    document.querySelector("#Som_Tecla_Splash").play()

    }
    document.querySelector("tecla_Splash").onclick = tocaSomSplash;
    
//tecla toino
function tocaSomToin () {
    document.querySelector("#Som_Tecla_Toin").play();
    
    }
    document.querySelector("tecla_toin").onclick = tocaSomToin;
    
//tecla psh
function tocaSomPsh () {
    document.querySelector("#Som_Tecla_Psh").play();
    
    }
    document.querySelector("tecla_psh").onclick = tocaSomPsh;
    
//tecla tic
function tocaSomTic () {
    document.querySelector("#Som_Tecla_Tic").play();
    
    }
    document.querySelector("tecla_tic").onclick = tocaSomTic;
    
//tecla tom
function tocaSomTom () {
    document.querySelector("#Som_Tecla_Tom").play();
    
    }
    document.querySelector("tecla_tom").onclick = tocaSomTom;
*/
//20/10 variáveis
/*function tocaSomPom () {
    document.querySelector("#Som_Tecla_pom").play();
    }

function tocaSomClap () {
    document.querySelector("#som_tecla_clap").play();
}

function tocaSomTim () {
    document.querySelector("#som_tecla_tim").play();
    }

function tocaSomPuff () {
    document.querySelector("#som_tecla_puff").play();
    }

function tocaSomSplash () {
    document.querySelector("#som_tecla_splash").play();
    }

function tocaSomToim () {
    document.querySelector("#som_tecla_toim").play();
    }

function tocaSomPsh () {
    document.querySelector("#som_tecla_psh").play();
    }

function tocaSomTic () {
    document.querySelector("#som_tecla_tic").play();
    }
function tocaSomTom () {
    document.querySelector("#som_tecla_tom").play();
    }


const  listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclik = tocaSomPom;
listaDeTeclas[1].onclik = tocaSomClap;
listaDeTeclas[2].onclik = tocaSomTim;
listaDeTeclas[3].onclik = tocaSomPuff;
listaDeTeclas[4].onclik = tocaSomSplash;
listaDeTeclas[5].onclik = tocaSomToim;
listaDeTeclas[6].onclik = tocaSomPsh;
listaDeTeclas[7].onclik = tocaSomtic;
listaDeTeclas[8].onclik = tocaSomTom;*/


function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

 //eventos do teclado onkeydowne onkeyup.
 //adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.   
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}













