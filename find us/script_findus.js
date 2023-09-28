// STICKY NAVBAR

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

// LOCATION

var btn_supermal = document.getElementById("map-supermal");
var btn_palembang = document.getElementById("map-palembang");
var btn_surabaya = document.getElementById("map-surabaya");
var btn_semarang = document.getElementById("map-semarang");

var content_supermal = document.getElementById("supermal");
var content_palembang = document.getElementById("palembang");
var content_surabaya = document.getElementById("surabaya");
var content_semarang = document.getElementById("semarang");

var img_supermal = document.getElementById("map1-supermal");
var img_palembang = document.getElementById("map1-palembang");
var img_surabaya = document.getElementById("map1-surabaya");
var img_semarang = document.getElementById("map1-semarang");

btn_supermal.addEventListener('click', ()=>{
    content_palembang.style.display = 'none';
    img_palembang.style.scale = '100%'
    content_surabaya.style.display = 'none';
    img_surabaya.style.scale = '100%'
    content_supermal.style.display = 'flex';
    img_supermal.style.scale = '100%'
    content_semarang.style.display = 'none';
    img_semarang.style.scale = '100%'
});

btn_palembang.addEventListener('click', ()=>{
    content_palembang.style.display = 'flex';
    img_palembang.style.scale = '150%'
    content_surabaya.style.display = 'none';
    img_surabaya.style.scale = '100%'
    content_supermal.style.display = 'none';
    img_supermal.style.scale = '50%'
    content_semarang.style.display = 'none';
    img_semarang.style.scale = '100%'
});

btn_surabaya.addEventListener('click', ()=>{
    content_palembang.style.display = 'none';
    img_palembang.style.scale = '100%'
    content_surabaya.style.display = 'flex';
    img_surabaya.style.scale = '150%'
    content_supermal.style.display = 'none';
    img_supermal.style.scale = '50%'
    content_semarang.style.display = 'none';
    img_semarang.style.scale = '100%'
});

btn_semarang.addEventListener('click', ()=>{
    content_palembang.style.display = 'none';
    img_palembang.style.scale = '100%'
    content_surabaya.style.display = 'none';
    img_surabaya.style.scale = '100%'
    content_supermal.style.display = 'none';
    img_supermal.style.scale = '50%'
    content_semarang.style.display = 'flex';
    img_semarang.style.scale = '150%'
});