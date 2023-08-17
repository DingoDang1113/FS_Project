class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    
    def index 
      @users = User.all 
      # hash = {}
      # @users.each do |user|
        # user.employee_id = generate_employee_id
        # hash[user.id] = user 
      # end
      # render json: hash # array of objects, change in 
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
      params.require(:user).permit(:employee_id, :password)
    end


    # Seed data for Users
    # def generate_employee_id 
    #     random_letter = ('A'..'Z').to_a.sample 
    #     random_number = rand(100..999).to_s 

    #     employee_id = (random_letter + random_number)
    #     return employee_id
    # end

    # ceo_employee_id = generate_employee_id
    # cto_employee_id = generate_employee_id
    # it_director_eid = generate_employee_id



  end