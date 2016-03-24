$(document).ready(function(){

  $('.ideas-index').on('click', '.title-idea', function(){
      byForm = false
      this.contentEditable = true
      this.focus()
      $(this).siblings('.btn-update-idea').remove()
      $(this).closest('.idea').append(
      '<button type="button" class="btn btn-update-idea btn-success">' +
      'Update Idea' + '</button>' + '</div>')
      $(this).siblings('.btn-warning-idea').remove()
    })

  $('.ideas-index').on('click', '.body-idea', function(){
    byForm = false
    this.contentEditable = true
    this.focus()
    $(this).siblings('.btn-update-idea').remove()
    $(this).closest('.idea').append(
    '<button type="button" class="btn btn-update-idea btn-success">' +
    'Update Idea' + '</button>' + '</div>')
    $(this).siblings('.btn-warning-idea').remove()
  })

  $('.ideas-index').on('click', '.btn-warning-idea', function(){
    byForm = true
    var bodyText = $(this).siblings('.body-idea').html()
    $(this).siblings('.body-idea').replaceWith('<input type="text" class="form-control" id="editIdeaBody">')
    $('#editIdeaBody').val(bodyText)
    $(this).siblings('.title-idea')[0].contentEditable = true
    $(this).siblings('.title-idea')[0].focus()
    $(this).closest('.idea').append(
    '<button type="button" class="btn btn-update-idea btn-success">' +
    'Update Idea' + '</button>' + '</div>')
    $(this).remove()
  })

  $('.ideas-index').on('click', '.btn-update-idea', function(){
      updateIdea(this.closest('.idea-total').id, { title: $(this).siblings('h2').text(),
                                                   body: bodyCase(this)
                                                 })
      $(this).closest('.idea').append('<button type="button" class="btn btn-warning-idea btn-danger">' +
      'Edit Idea' + '</button>' + '</div>')
      $(this).remove()
  })
})

var byForm = false

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


var bodyCase = function(button){
  if (byForm) {
    return $(button).siblings('#editIdeaBody').val()
  } else {
    return $(button).siblings('p').text()
  }
}
