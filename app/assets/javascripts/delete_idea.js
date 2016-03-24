$(document).ready(function(){

$('.ideas-index').on('click', '.btn-delete-idea', function(){
    deleteIdea(this.closest('.idea-total').id)
  })
})

var deleteIdea = function(idea) {

  $.ajax({
    url: '/api/v1/ideas/' + idea,
    type: 'delete',
    success: function(response){
      fetchIdeas()
    }
  })

}
