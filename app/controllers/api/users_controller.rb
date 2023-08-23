class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password', 'firstName', 'middleName', 'lastName', 'employeeId']

    
    def index 
      @users = User.all

      if params[:search_first_name]
        @users = @users.where("first_name ILIKE ?", "%#{params[:search_first_name]}%")
      end

      if params[:search_last_name]
        @users = @users.where("last_name ILIKE ?", "%#{params[:search_last_name]}%")
      end

      if params[:search_employee_id]
        @users = @users.where("employee_id ILIKE ?", "%#{params[:search_employee_id]}%")
      end



      render :index
      # render json: @users 
    end

    def show 
      @user = User.find_by(employee_id: params[:employee_id]) 
      if @user 
        render :show
      else 
        render json: {error: 'user not found'}, status: 404
      end
    end

    def create
      @user = User.new(user_params)
      @user.employee_id = generate_employee_id
      @user.employee_status = 'Active'
      @user.job_code = 'IT001'
      @user.level_code = '101'
      @user.company_code = 'MFLO'
      @user.position_id = 'P131'
      @user.start_date = Date.today
      
      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def update
      @user = User.find_by(employee_id: params[:employee_id])
      if @user && @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def destroy 
      @user = nil 
    end
  


    private
    def user_params
      # frontend ideally wants to dispatch { employee_id: 'employee_id', password: 'password'}
      # backend expects { user: { employee_id: 'employee_id', password: 'password' }}
      params.require(:user).permit(:employee_id, :first_name, :middle_name, :last_name, :password)
    end


    # Seed data for Users
    def generate_employee_id 
      loop do 
          random_letter = ('A'..'Z').to_a.sample 
          random_number = (rand(0..9999).to_s).rjust(4, '0')
          employee_id = (random_letter + random_number)
          return employee_id unless  User.exists?(employee_id: employee_id)
        end
    end
  end