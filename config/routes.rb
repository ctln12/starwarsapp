Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/people', to: 'pages#people'
  get '/planets', to: 'pages#planets'
  get '/films', to: 'pages#films'
  get '/species', to: 'pages#species'
  get '/vehicles', to: 'pages#vehicles'
  get '/starships', to: 'pages#starships'
  # others
  get '/resources', to: 'resources#index', as: :resources
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
