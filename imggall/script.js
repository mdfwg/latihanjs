const thumbnail = document.querySelector('.thumbnail')
const hero = document.querySelector('.hero')
const card = document.querySelectorAll('.card')

thumbnail.addEventListener('click', function(e,i){
    if(e.target.className == 'card'){
        hero.setAttribute('src', e.target.getAttribute('src'))    
        hero.classList.toggle('fade')
        setTimeout(() => {
            hero.classList.remove('fade')
        }, 500);

        card.forEach(function(card){
            card.classList.remove('active')
        })

        e.target.classList.add('active')
    }
})