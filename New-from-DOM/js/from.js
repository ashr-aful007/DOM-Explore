
const commentAdd = document.getElementById('btn-post').addEventListener('click', function(){

         const newComment = document.getElementById('comment-from');
          const addComment = newComment.value;

          const setComment = document.getElementById('comment-section');
          const p = document.createElement('p');
           p.innerText = addComment;

           setComment.appendChild(p);
          
           newComment.value = '';
           
});