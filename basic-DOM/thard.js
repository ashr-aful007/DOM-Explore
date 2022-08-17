const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1> my dynamic section</h1>
<p>how to work dom Explore</p>
<u>
     <li>first item</li>
     <li>first item</li>
     <li>first item</li>
     <li>first item</li>
</u>

`

section.style.backgroundColor = 'gray';
section.style.padding = '20px';
section.style.color = 'white';
section.style.marginBottom = '20px';



main.appendChild(section)

