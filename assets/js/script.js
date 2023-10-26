'use strict';

const addEvenOnElem = function(elem, type, callback){
    if(elem.length>1){
        for(let i=0;i<elem.length;i++){
            elem[i].addEventListener(type, callback);
        }
    }
    else{
        elem.addEventListener(type, callback);
    }
}




const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEvenOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
    document.body.classList.remove("active");
}

addEvenOnElem(navbarLinks, "click", closeNavbar);

const header=document.querySelector("[data-header]");

const activeheader = function(){
    if(window.scrollY>300){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}

addEvenOnElem(window, "scroll", activeheader);

const sections=document.querySelectorAll("[data-section]");
const scrollReveal = function()
{
    for(let i=0;i<sections.length;i++){
        if(sections[i].getBoundingClientRect().top<window.innerHeight/1.5){
            sections[i].classList.add("active");
        }
        else{
            sections[i].classList.remove("active");
        }
    }
}

scrollReveal();
addEvenOnElem(window, "Scroll", scrollReveal);
