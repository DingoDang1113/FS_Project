class Api::SessionsController < ApplicationController
    # before_action :require_logged_in, only: [:destroy]
    # before_action :require_logged_out, only: [:create]
  
    def show
      @user = current_user
      if @user
        render 'api/users/show'
      else
        render json: { user: nil }
      end
    end
  
    def create
      employee_id = params[:employee_id]
      password = params[:password]
      @user = User.find_by_credentials(employee_id, password)
      # debugger 
      if @user
        login(@user)

        render 'api/users/show'
      else 
        render json: { errors: ['invalid employeeId/password'] }, status: 422
      end
    end
  
    def destroy
      logout if current_user
      head :no_content
    end
  end