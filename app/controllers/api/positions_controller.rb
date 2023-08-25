class Api::PositionsController < ApplicationController
    wrap_parameters include: Position.attribute_names + ['positionCode', 'positionDescription', 'mgrPositionCode']

    
    def index 
      @positions = Position.all
      render :index
    end

    def show 
      @position = Position.find_by(position_code: params[:position_code]) 
      if @position 
        render :show
      else 
        render json: {error: 'position not found'}, status: 404
      end
    end

    def create      
      if @position.save
        @position.org_level_one_id = '001'
        @position.org_level_two_id = '00103'
        @position.org_level_three_id = '0010103'
        @position.org_level_one_description = 'MAY FLOWER'
        @position.org_level_two_description = 'NEW HIRE'
        @position.org_level_two_description = 'NEW HIRE'

        render :show
      else
        render json: @position.errors.full_messages, status: 422
      end
    end

    def update
        @position = Position.find_by(position_code: params[:position_code]) 

      if @position && @position.update(position_params)
        render :show
      else
        render json: @position.errors.full_messages, status: 422
      end
    end

    def destroy 
      @position = nil 
    end
  


    private
    def position_params
      params.require(:position).permit(:position_code, :position_description, :manager_position_code)
    end


    # Seed data for Users
    # def generate_employee_id 
    #   loop do 
    #       random_letter = ('A'..'Z').to_a.sample 
    #       random_number = (rand(0..9999).to_s).rjust(4, '0')
    #       employee_id = (random_letter + random_number)
    #       return employee_id unless  User.exists?(employee_id: employee_id)
    #     end
    # end
  end