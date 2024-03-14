class Api::JobsController < ApplicationController

    def index 
        @jobs = Job.all
        render json: @jobs
    end

  
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
        @job = Job.find_by(job_code: params[:job_code])
        if @job 
            @job.destroy
            render json: {message: "Job #{@job} has been deleted"  }, status: 200
        else
            render json: {errors: 'job not found'}, status: 404

        end

      end
    
  
  
      private
      def job_params
        # frontend ideally wants to dispatch { job_code: 'job_code', }
        # backend expects { job: { job_code 'job_code', }}
        # params.permit(:job_code,:job_code_description,:job_function_description,:job_function_code,)
        params.require(:job).permit(:job_code,:job_code_description,:job_function_description,:job_function_code,)
      end

    end  