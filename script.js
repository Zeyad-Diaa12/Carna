let active = document.querySelector('.nav').querySelectorAll('li');

let element=document.body;

let header=document.querySelector('.header_light');

active.forEach(element =>{
    element.addEventListener('click',function(){
        active.forEach(nav=>nav.classList.remove('active'))

        this.classList.add('active')
    })
})

function dark_mode(){
    element.classList.add("dark_mode");
    header.classList.remove("header_light");
    header.classList.add("header_dark");
}

function light_mode(){
    element.classList.remove("dark_mode");
    header.classList.remove("header_dark");
    header.classList.add("header_light");
}


