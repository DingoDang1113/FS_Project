Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index]
    get 'users/:employee_id', to: 'users#show', as: 'user_by_employee_id'
    put 'users/:employee_id', to: 'users#update'
    resource :session, only: [:show, :create, :destroy]

  end
  
  get '*path',
  to: 'static_pages#frontend',
  constraints: lambda {|req| !req.xhr? && req.format.html? }
  
  root to: 'static_pages#frontend'
  
end