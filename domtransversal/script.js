// const cross = document.querySelectorAll('.close')

// for (let i = 0; i<cross.length; i++){
//     cross[i].addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none'
//     })
// }

// cross.forEach(function(el){ //el adalah cross[i]
//     el.addEventListener('click', function(e){
//         konfirmasi = confirm('Apakah anda yakin menghapus kontak ini?')
//         if(konfirmasi === true){
//         e.target.parentElement.style.display = 'none'
//         }
//         e.stopPropagation()
//     })
// })

const container = document.querySelector('.container')

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none'
    }
})