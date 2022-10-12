const submit = document.querySelector('.submit-btn')
const card_container_1 = document.querySelector('.card-container-1') 
const card_container_2 = document.querySelector('.card-container-2') 
const ratingBtns = document.querySelectorAll('.rating-btn')
const score = document.querySelector('.score')
let currentScore = 3

submit.addEventListener('click', onsubmit)
ratingBtns.forEach(btn => {
    btn.addEventListener('click', handleRatingBtn)
})
function onsubmit(){
  card_container_1.classList.add('hide');
  score.textContent = currentScore
  card_container_2.classList.remove('hide');
}

function handleRatingBtn(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active')
    })

    if(event.target.classList.contains('rating-btn')){
        event.target.classList.add('active')
    } else {
        event.target.parentElement.add('active')
    }
    currentScore = event.target.textContent
}