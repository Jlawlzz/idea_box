$(document).ready(function(){

  $('#newIdeaButton').click(function(){
    createIdea({ title: $('#newIdeaTitle').val(),
                 body: $('#newIdeaBody').val()
               })
  })
})

var createIdea = function(newIdea) {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'post',
    data: { idea: newIdea },
    success: function(response){
      $('#newIdeaTitle').val('')
      $('#newIdeaBody').val('')
      fetchIdeas()
    }
  })
}
