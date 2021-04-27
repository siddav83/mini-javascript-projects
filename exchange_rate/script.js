
const currencyOneEle = document.getElementById('currency-one')
const currencyTwoEle = document.getElementById('currency-two')
const amountOneEle = document.getElementById('amount-one')
const amountTwoEle = document.getElementById('amount-two')
const rateEl = document.getElementById('rate')
const swopBtn = document.getElementById('swop')


//functions

function fetchCurrency() {
 const currencyOneValue = currencyOneEle.value
 const currencyTwoValue = currencyTwoEle.value
fetch(`https://api.ratesapi.io/api/latest?base=${currencyOneValue}&symbols=${currencyTwoValue}`)
  .then(res => (res.json()))
  .then(data => {
    const rate = data.rates[currencyTwoValue]
    rateEl.innerText = `1 ${currencyOneValue} = ${rate}`


  })
}
    // console.log(rate)
    // console.log(currencyTwoValue)
    // const rate = data.rates[currencyTwoValue]
    // console.log(rate);



currencyOneEle.addEventListener('change',fetchCurrency);
currencyTwoEle.addEventListener('change', fetchCurrency);
amountOneEle.addEventListener('input', fetchCurrency);
amountTwoEle.addEventListener('input', fetchCurrency);
