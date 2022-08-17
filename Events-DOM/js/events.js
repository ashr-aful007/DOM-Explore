//option 1: directly set on the HTML element
{/* <button onclick="console.log(50)">another button</button> */}

//option 2 onclick add function on the html element
/* <button onclick="makeRed()">Make red</button> */
//IMPORTANT WE WILL USE IT
function makeRed(){
     document.body.style.backgroundColor = 'red';
}

const makeBlueButton = document.getElementById('make-blue');

 makeBlueButton.onclick = makeBlue;
 function makeBlue(){
     document.body.style.backgroundColor = 'blue';
 }

//option: 3 another[we will use sometime]
const makepurpulButton = document.getElementById('make-purpul');
makepurpulButton.onclick = makepurpul;

function makepurpul(){
     document.body.style.backgroundColor = 'purple';
}

//option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makepink);


function makepink(){
     document.body.style.backgroundColor = 'pink';
}

//option 4 another 
const makeGreenbutton = document.getElementById('make-green');
makeGreenbutton.addEventListener('click',function makeGreen(){
     document.body.style.backgroundColor = 'green';
});

//another 4.final 
//IMPORTANT; we will use this sometimes
document.getElementById('make-goldenRod').addEventListener('click', function(){
     document.body.style.backgroundColor = 'goldenrod';
})
