let active = document.querySelector('.nav').querySelectorAll('li');
console.log(active)
active.forEach(element =>{
    element.addEventListener('click',function(){
        active.forEach(nav=>nav.classList.remove('active'))

        this.classList.add('active')
    })
})


