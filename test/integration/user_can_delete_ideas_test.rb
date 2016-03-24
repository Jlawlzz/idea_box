require 'test_helper'

require "selenium-webdriver"

class UserCanDeleteIdeasTest < ActionDispatch::IntegrationTest

  def test_user_can_delete_ideas

    Capybara.current_driver = :selenium

    visit "/"

    first('.idea').click_button('delete')

    assert page.has_content?('idea_1')
    assert page.has_content?('idea_2')
    refute page.has_content?('idea_3')

  end

end
