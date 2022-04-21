let active = document.querySelector('.nav').querySelectorAll('li');
let element=document.body;
let header=document.querySelector('.header_light');
let member_card=document.querySelectorAll('.member-light');
let github=document.querySelectorAll('.github-light');


console.log(github);
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
    for(let i =0;i<member_card.length;i++){
        member_card[i].classList.remove("member-light");
        member_card[i].classList.add("member-dark");
        github[i].classList.remove("github-light");
        github[i].classList.add("github-dark");
    }
}

function light_mode(){
    element.classList.remove("dark_mode");
    header.classList.remove("header_dark");
    header.classList.add("header_light");
    for(let i =0;i<member_card.length;i++){
        member_card[i].classList.remove("member-dark");
        member_card[i].classList.add("member-light");
        github[i].classList.remove("github-dark");
        github[i].classList.add("github-light");
    }
}


