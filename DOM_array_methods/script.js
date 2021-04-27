const addUser = document.getElementById('add-user')
const double = document.getElementById('double')
const showMillionaires = document.getElementById('show-millionaires')
const sort = document.getElementById('sort')
const totalWealth = document.getElementById('total-wealth')

let data = []

getUsers()


addUser.addEventListener('click', getUsers)
double.addEventListener('click', doubleMoney)
sort.addEventListener('click', sorted)


 async function getUsers() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: `£ ${Math.floor(Math.random()*1000000)}`
  };

  addData(newUser)
}

  function addData(obj) {
    data.push(obj);

    updateDOM();
  }

  function doubleMoney() {
    data = data.map(user => {
      return {...user, money: user.money * 2}

      updateDOM();
    })
 }

 function sorted() {
   data.sort((a,b) => b.money - a.money);

  updateDOM();
 };

  function updateDOM(providedData = data) {
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'
    providedData.forEach(user => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<strong>${user.name}</strong> ${user.money}`
      main.appendChild(element);
    });
  }

  function changeNumberToCurrency(num) {
     return parseFloat(num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }





