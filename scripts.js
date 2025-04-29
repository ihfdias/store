const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const itens = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total = itens.length
let timer;


function update(direction) {

}

prevButton.addEventListener('click', function() {
    update(-1)
})

nextButton.addEventListener('click', function() {
    update(+1)
})