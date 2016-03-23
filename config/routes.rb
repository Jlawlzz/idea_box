Rails.application.routes.draw do

  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :ideas
      resources :idea_standings, only: [:update]
    end
  end

  get '/', to: 'home#index'

end
