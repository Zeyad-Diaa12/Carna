let active = document.querySelector('.nav').querySelectorAll('li');
let element=document.body;
let header=document.querySelector('.header_light');
let member_card=document.querySelectorAll('.member-light');
let github=document.querySelectorAll('.github-light');
let anchor=document.querySelector('.nav').querySelectorAll('a');


// Typing Effect

const text =['Welcome to CARNA Not only a car shop!','Created by students of Computer and Artificial Intelligence','2022 IT Project is done!'];
let i = 0;
let counter = 0;
let currentText = '';
let letter = '';

function type(){
	if(counter == text.length){
		counter=0;
	}

	currentText = text[counter];
	letter = currentText.slice(0,++i)
	
	document.querySelector('.type').innerHTML = letter;


	if(letter.length == currentText.length){
		counter++;
		i=0;
	}
	setTimeout(type,130);
}

type();


// Function for active anchor

active.forEach(element =>{
    
    element.addEventListener('click',function(){
        active.forEach(nav=>nav.classList.remove('active'))
        this.classList.add('active')
    })

})


// Function Dark mode
function dark_mode(){

    element.classList.remove("light_mode");
    element.classList.add("dark_mode");
    header.classList.remove("header_light");
    header.classList.add("header_dark");

    for(let i =0;i<member_card.length;i++){
        member_card[i].classList.remove("member-light");
        member_card[i].classList.add("member-dark");
        github[i].classList.remove("github-light");
        github[i].classList.add("github-dark");
    }

    for(let i=0;i<anchor.length;i++){
        anchor[i].classList.remove("light-mode");
        anchor[i].classList.add("dark-mode");
    }

    //Add the theme to the local storage
    localStorage.setItem('bodyTheme','dark_mode');
    localStorage.setItem('headerTheme','header_dark');
    localStorage.setItem('teamCardtheme','member-dark');
    localStorage.setItem('gitHubTheme','github-dark');
    localStorage.setItem('anchorTheme','dark-mode');
}
