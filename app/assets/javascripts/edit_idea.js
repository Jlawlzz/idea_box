$(document).ready(function(){

  $('.ideas-index').on('click', '.title-idea', function(){
      this.contentEditable = true;
      $(this).siblings('.btn-update-idea').remove()
      $(this).closest('.idea').append(
      '<button type="button" class="btn btn-update-idea btn-success">' +
      'Update Idea' + '</button>' + '</div>')
      $(this).siblings('.btn-delete-idea').remove()
    })

  $('.ideas-index').on('click', '.body-idea', function(){
    this.contentEditable = true;
    $(this).siblings('.btn-update-idea').remove()
    $(this).closest('.idea').append(
    '<button type="button" class="btn btn-update-idea btn-success">' +
    'Update Idea' + '</button>' + '</div>')
    $(this).siblings('.btn-delete-idea').remove()
  })

  $('.ideas-index').on('click', '.btn-update-idea', function(){
    updateIdea(this.closest('.idea').id, { title: $(this).siblings('h2').html(),
                                           body: $(this).siblings('p').html()
                                         })
    $(this).closest('.idea').append('<button type="button" class="btn btn-delete-idea btn-danger">' +
    'Delete Idea' + '</button>' + '</div>')
    $(this).remove()
  })

})

var updateIdea = function(idea, updatedAttr) {
  console.log(updatedAttr)
  $.ajax({
    url: '/api/v1/ideas/' + idea,
    type: 'patch',
    data: {idea: updatedAttr},
    success: function(response){
      fetchIdeas()
    }
  })

}
