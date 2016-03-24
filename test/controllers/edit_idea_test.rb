require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase

  test '#update-title' do

    put :update, format: :json, id: Idea.first.id, idea: {title: 'new_title'}

    assert_response :success
    assert_equal Idea.count, 3
    assert_equal Idea.first.title, 'new_title'
    assert_equal Idea.last.title, 'idea_1'

  end

  test '#update-body' do

    put :update, format: :json, id: Idea.first.id, idea: {body: 'new_body'}

    assert_response :success
    assert_equal Idea.count, 3
    assert_equal Idea.first.body, 'new_body'
    assert_equal Idea.last.body, 'body_1'

  end

end
