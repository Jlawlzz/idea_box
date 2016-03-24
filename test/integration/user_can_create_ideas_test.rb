require 'test_helper'

require "selenium-webdriver"

class UserCanCreateIdeasTest < ActionDispatch::IntegrationTest

  def test_user_can_create_ideas

    Capybara.current_driver = :selenium

    visit "/"
    fill_in "title", with: 'idea_4'
    fill_in "description", with: 'body_4'
    click_button 'create'

    assert page.has_content? 'idea_4'
    assert page.has_content? 'body_4'

  end

end
