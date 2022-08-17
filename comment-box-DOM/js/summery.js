//1. add event listener for post-button
document.getElementById('btn-post').addEventListener('click', function(){
     // 2. get the comment inside the textera
     const commentBox = document.getElementById('new-comment');
      const newComment = commentBox.value;
     //3. set the comment inside the comment section
     //1. get the comment container 
     //2. creat the new element( p tag) 
     //3. set the comment as inner text of the p tag
     //4. add the p tag appendchaild
     const commentContainer = document.getElementById('comment-section');
     const p = document.createElement('p');
     p.innerText = newComment;
     commentContainer.appendChild(p)
     //4.clear the text area
     commentBox.value = '';
});