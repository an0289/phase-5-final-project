Rails.application.routes.draw do
  
  resources :attendees, only: [:index]
  resources :organizers, only: [:index]
  resources :tickets, only: [:index]
  resources :events, only: [:index]
  resources :users, only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
