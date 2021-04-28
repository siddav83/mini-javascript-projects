const search = document.getElementById('search');
const submitBut = document.getElementById('submit')
const randomBut = document.getElementById('random')


function searchMeal(e) {
 e.preventDefault()
 const term = search.value
 console.log(term)
}


submitBut.addEventListener('submit', searchMeal)
