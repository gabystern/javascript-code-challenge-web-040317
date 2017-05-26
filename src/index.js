$(document).ready(function(){
  submitForm()
})

function submitForm(){
  let newCommentList = new CommentList()
  $('form#note-form').submit(function(event){
    event.preventDefault()
    newCommentList.addComment($('input#content').val())
    $('#comment-list').html(`${newCommentList.render()}`)
    $('input#content').val('')
  })
}
