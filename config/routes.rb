Rails.application.routes.draw do
  
  resources :venues, only: [:index, :create, :show, :update, :destroy]
  resources :bands, only: [:index, :create, :show]
  resources :events, only: [:index, :create, :destroy] #add update later
  resources :attendees, only: [:create, :update, :destroy]
  resources :favorite_bands, only: [:create, :update, :destroy]

  #Log in/out routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  #Create & Read route for User
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  #get '/me', to: "users#show"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
