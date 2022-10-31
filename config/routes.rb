Rails.application.routes.draw do
  resources :reviews
  resources :albums, only: [:index, :show, :create]
  resources :users #, only: [:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
 
  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  post "/signup", to: "users#create"
  post "/all-reviews", to: "reviews#create"
  post "/create-review", to: "reviews#create"

end
