const search = document.getElementById('search');
const submitBut = document.getElementById('submit')
const randomBut = document.getElementById('random')
const results = document.getElementById('result-heading')
const mealsEl = document.getElementById('meals-el')


function searchMeal(e) {
 e.preventDefault()
 const term = search.value

 if (term.trim()) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    results.innerHTML = `<h2>Search results for ${term}</h2>`
    if (data.meals === null) {
      results.innerHTML = `<h2>Sorry but we could not find what you are looking for</h2>`
    } else {
      mealsEl.innerHTML = data.meals.map(meal =>

        `<div class="meal">
          <img src="${meal.strMealThumb}" alt="${meal}image">
          <div class="meal-info" data-mealID="${meal.idMeal}">
            <h3>${meal.strMeal}</h3>
          </div>
        </div>`
      )
      .join(" ")
    }
  });

  search.value = ""
  } else {
   alert("Please enter in a valid search!");
 }
}

   submitBut.addEventListener('submit', searchMeal)
