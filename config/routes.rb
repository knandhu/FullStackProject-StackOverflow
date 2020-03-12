Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get :search, controller: :main
  get :tag_search, controller: :main
   namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :tags, only: [:index]
    resources :questions do
      resources :answers, only: [:create, :index, :show]
    end
   end
end
