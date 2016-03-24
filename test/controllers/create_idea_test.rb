require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase

  test '#create' do

    post :create, format: :json, idea: { title: 'idea-title', body: 'idea-body' }

    assert_response 302
    assert_equal response.body, "<html><body>You are being <a href=\"http://test.host/api/v1/ideas\">redirected</a>.</body></html>"
    assert_equal Idea.count, 4
    assert_equal Idea.last.title, 'idea-title'
    assert_equal Idea.last.body, 'idea-body'
  end

  # test '#create_sad_no_title' do
  #
  #   post :create, format: :json, idea: { title: 'idea-title', body: 'idea-body' }
  #
  #   assert_response 302
  #   assert_equal response.body, "<html><body>You are being <a href=\"http://test.host/api/v1/ideas\">redirected</a>.</body></html>"
  #   assert_equal Idea.count, 4
  #   assert_equal Idea.last.title, 'idea-title'
  #   assert_equal Idea.last.body, 'idea-body'
  # end

end
