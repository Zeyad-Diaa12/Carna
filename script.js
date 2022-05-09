let active = document.querySelector('.nav').querySelectorAll('li');
let element=document.body;
let header=document.querySelector('.header_light');
let member_card=document.querySelectorAll('.member-light');
let github=document.querySelectorAll('.github-light');
let anchor=document.querySelector('.nav').querySelectorAll('a');


element.classList.add(localStorage.getItem('bodyTheme'));
header.classList.add(localStorage.getItem('headerTheme'));
for(let i =0;i<member_card.length;i++){
    member_card[i].classList.add(localStorage.getItem('teamCardtheme'));
    github[i].classList.add(localStorage.getItem('gitHubTheme'));
}
for(let i=0;i<anchor.length;i++){
    anchor[i].classList.add(localStorage.getItem('anchorTheme'));
}

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


// Function Light mode
function light_mode(){

    element.classList.remove("dark_mode");
    element.classList.add("light_mode");
    header.classList.remove("header_dark");
    header.classList.add("header_light");
    
    for(let i =0;i<member_card.length;i++){
        member_card[i].classList.remove("member-dark");
        member_card[i].classList.add("member-light");
        github[i].classList.remove("github-dark");
        github[i].classList.add("github-light");
    }

    for(let i=0;i<anchor.length;i++){
        anchor[i].classList.remove("dark-mode");
        anchor[i].classList.add("light-mode");
    }

    //Add the theme class to the local storage
    localStorage.setItem('bodyTheme','light_mode');
    localStorage.setItem('headerTheme','header_light');
    localStorage.setItem('teamCardtheme','member-light');
    localStorage.setItem('gitHubTheme','github-light');
    localStorage.setItem('anchorTheme','light-mode');
}


// Function to send email

function sendMail()
{

    let body=document.getElementById('#body_message');
    let subject=document.querySelector('.subject_message');
    
    // Opens email 
    window.location="mailto:zeyaddiaa2@gmail.com?subject="+subject.value+"&body="+body.value;
    
    // Clear data after sending email
    body.value='';
    subject.value='';
    
}

// 


// Login validation

function validate(){
    let email_input = document.querySelector('.email').querySelector('input');
    let password_input = document.querySelector('.password').querySelector('input');
    let email_compare = "zeyad@gmail.com";
    let password_compare = "itProject2022";

    if(email_input.value == email_compare && password_input.value == password_compare){
        window.location.href = 'index.html';
    }
    else{
        document.querySelector('.login-card').querySelector('p').style.display = "block";
        
        email_input.value = '';
        password_input.value = '';
    }
}


// Sign Up validation

function validate_input(){
    let password = document.querySelector('.password-value');
    let password_validate = document.querySelector('.password-renter-value');
    let first_name = document.querySelector('.first-name-value');
    let last_name = document.querySelector('.last-name-value');
    let e_mail = document.querySelector('.email-value');

    if((password_validate.value == password.value) && ((password.value !== null && password.value !== '' ) && (password_validate.value !== null && password_validate.value !== ''))){
        alert("You are now registered");
        window.location.href = 'index.html';
    }
    else if(((first_name.value == null) || (first_name.value == '')) || ((last_name.value == null) || (last_name.value == '')) || ((e_mail.value == null) || (e_mail.value == ''))){
        document.querySelector('.signup-card').querySelector('p').style.display = "block";
    }

}


// Play sound on logo carna

function playSound(sound){
    let sound_ = document.getElementById(sound);

    sound_.play();
}


function stopSound(sound){
    let stop_sound = document.getElementById(sound);

    stop_sound.pause();
}