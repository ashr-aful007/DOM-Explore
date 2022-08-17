// document.getElementById('text-fild').addEventListener('focus',function(){
//      console.log('Event trigged inside the fild')
// });
// document.getElementById('text-fild').addEventListener('blur',function(){
//      console.log('Event trigged inside the fild blur')
// });
// document.getElementById('text-fild').addEventListener('keydown',function(event){
//      console.log(event.target.value)
// });
// document.getElementById('text-fild').addEventListener('keypress',function(event){
//      console.log(event.target.value)
// });
document.getElementById('text-fild').addEventListener('keyup',function(event){
     console.log(event.target.value)
});


//mouseenter,mousemove,
document.getElementById('btn-more').addEventListener('mousemove', function(){
     console.log('even tigger')
});