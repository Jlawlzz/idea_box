require 'test_helper'

require "selenium-webdriver"

class UserCanViewIdeasTest < ActionDispatch::IntegrationTest

  def test_user_can_view_ideas

    Capybara.current_driver = :selenium

    visit "/"
    fill_in "title", with: 'idea_1'
    fill_in "description", with: 'body_1'
    click_button 'create'

    3.times do |t|
      assert page.has_content? "idea_#{t + 1}"
      assert page.has_content? "body_#{t + 1}"
    end

  end

end
