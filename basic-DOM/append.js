//1. were to add
// const placesList =  document.getElementById('places-list');
//2. what to be added

// const li = document.createElement('li');
// li.innerText = 'paharttoli bon'

//3. add the child
// placesList.appendChild(li);


//practice more 
// const placesList = document.getElementById('places-list');
// const li = document.createElement('li');
// li.innerText = 'sundor bon'
// placesList.appendChild(li);

// const li2 = document.createElement('li');
// li2.innerText = 'bandor bon'
// placesList.appendChild(li2);

// const li3 = document.createElement('li');
// li3.innerText = 'kahakra chodi'
// placesList.appendChild(li3);

//1. where to add
const mainContainer = document.getElementById('main-container');

//2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'birayani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);

//3. add to the chaild
section.appendChild(ul)

//3. add to the chaild
mainContainer.appendChild(section);

//set innerHtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
     <li>T-shirt</li>
     <li>Lungi</li>
     <li>Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);