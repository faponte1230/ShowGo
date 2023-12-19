Rails.application.routes.draw do
  
  resources :venues, only: [:index, :create, :show, :update, :destroy]
  resources :bands, only: [:index, :create, :show]
  resources :events, only: [:index, :create, :show, :update, :destroy] #add destroy
  resources :attendees, only: [:create, :show, :destroy]
  resources :favorite_bands, only: [:create, :destroy]

  #Log in/out routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  #Create & Read route for User
  get '/me', to: "users#show"
  post '/signup', to: "users#create"

  # #get image
  # get '/users/get_avatar/:id', to: 'users#get_avatar'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
