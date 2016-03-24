require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase

  test '#update' do

    put :update, format: :json, id: Idea.first.id, idea: {title: 'new_title'}

    assert_response :success
    assert_equal Idea.count, 3
    assert_equal Idea.first.title, 'new_title'
    assert_equal Idea.last.title, 'idea_1'
  end

end
