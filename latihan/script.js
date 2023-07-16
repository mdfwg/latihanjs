// DOM Selection
// document.getElementById('id') -> element
//document.getElementsByTagName('tag html') -> HTMLCollection
//document.getElementsByClassName('class') -> HTMLCollection
//document.querySelector('selector css') -> element (hanya 1)
//document.querySelectorAll('selector css') -> NodeList (bisa lebih dari 1)

// Manipulasi Element
// element.innerHTML -> mengubah isi html
// element.style.<propertyCSS> -> mengubah style css
// element.getAttribute() -> mengambil attribute
// element.setAttribute() -> mengubah attribute

// element.classList.add() -> menambah class
// element.classList.remove() -> menghapus class
// element.classList.toggle() -> menambah jika tidak ada, menghapus jika ada
// element.classList.item() -> mengetahui class pada index tertentu
// element.classList.contains() -> mengecek class tertentu
// element.classList.replace() -> mengganti class

// Manipulasi Node
// document.createElement() -> membuat element
// document.createTextNode() -> membuat text
// node.appendChild() -> menambahkan child
// node.insertBefore() -> menyisipkan sebelum child tertentu
// parentNode.removeChild() -> menghapus child
// parentNode.replaceChild() -> mengganti child


// first BT
const button = document.getElementById('tombol')

button.addEventListener('click', function(){
    document.body.classList.toggle('skyblue')
})

// 2nd BT
const newBt = document.createElement('button')
const newBtTeks = document.createTextNode('Random Color')

newBt.appendChild(newBtTeks)
button.after(newBt)

newBt.addEventListener('click', function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = "#" + randomColor
})

//kotak
const kotak = document.querySelector('.kotak')

// sliderR
const sliderR = document.querySelector('input[name=red]')
const sliderG = document.querySelector('input[name=green]')
const sliderB = document.querySelector('input[name=blue]')

sliderR.addEventListener('change', function(){
    const r = sliderR.value
    const g = sliderG.value
    const b = sliderB.value
    kotak.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
// sliderG
sliderG.addEventListener('change', function(){
    const r = sliderR.value
    const g = sliderG.value
    const b = sliderB.value
    kotak.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})
// sliderB
sliderB.addEventListener('change', function(){
    const r = sliderR.value
    const g = sliderG.value
    const b = sliderB.value
    kotak.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})
})

// mouse gerakan
const kotak1 = document.querySelector('.kotak1')
document.body.addEventListener('mousemove', function(e){
    const sbx = Math.floor((e.clientX/window.innerWidth)*255)
    const sby = Math.floor((e.clientY/window.innerHeight)*255)
    kotak1.style.backgroundColor = 'rgb('+sbx+','+sby+',100)'
})