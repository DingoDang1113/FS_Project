class Api::JobsController < ApplicationController

  
    def show 
        @job = Job.find_by(job_code: params[:job_code]) 
        if @job
          render :show
        else 
          render json: {errors: 'job not found'}, status: 404
        end
      end
  
      def create
        @job = Job.new(job_params)


        
        if @job.save
          render :show
        else
          render json: @job.errors.full_messages, status: 422
        end
      end
  
      def update
        @job = Job.find_by(job_code: params[:job_code])
        if @job && @job.update(job_params)
          render :show
        else
          render json: {errors: @job.errors.full_messages}, status: 422
        end
      end
  
      def destroy 
        @job = nil 
      end
    
  
  
      private
      def job_params
        # frontend ideally wants to dispatch { employee_id: 'employee_id', password: 'password'}
        # backend expects { user: { employee_id: 'employee_id', password: 'password' }}
        params.require(:job).permit(:job_code,:job_description,)
      end

    end  