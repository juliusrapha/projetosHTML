/*!
 * @author: Julius Raphael 
 * @language: JavaScript ECMAS6
 * @library: jQuery
 * @version: v3.7.1
 * @Date: 26 / 12/ 2023
**/

var imagem = window.document.getElementById('fundo-banner');

$("#fundo-banner").ready(function() {
    img2();
})

const Banners = new Array(4)
Banners[0] = 'imagens/Banner-1.1-min-1-1600x600.png';
Banners[1] = 'imagens/Banner-2.1-min-1-1600x600.png';
Banners[2] = 'imagens/Banner-3.1-v2-min-1600x600.png';
Banners[3] = 'imagens/Banner-4.1-min-1600x600.png';

//muda para imagem banner-1.1 
function img1() {
    setTimeout(() => {
        $("#fundo-banner").fadeToggle(500);
        $("#fundo-banner").fadeToggle(500);
        setTimeout(()=>{
            imagem.src = Banners[0]
        },500);
        img2();
    }, 5000);
}

//muda para imagem banner-2.1 
function img2() {
    setTimeout(() => {
        $("#fundo-banner").fadeToggle(500);
        $("#fundo-banner").fadeToggle(500);
        setTimeout(()=>{
            imagem.src = Banners[1]
        },500);
        img3();
    }, 5000);
}

//muda para imagem banner-3.1 
function img3() {
    setTimeout(() => {
        $("#fundo-banner").fadeToggle(500);
        $("#fundo-banner").fadeToggle(500);
        setTimeout(() => {
            imagem.src = Banners[2]
        }, 500);
        img4();
    }, 5000);
}

//muda para imagem banner-4.1 
function img4() {
    setTimeout(() => {
        $("#fundo-banner").fadeToggle(500);
        $("#fundo-banner").fadeToggle(500);
        setTimeout(()=>{
            imagem.src = Banners[3]
        },500);
        img1();
    }, 5000);
}
