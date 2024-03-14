
@jobs.each do |job|
    
    json.set! job.job_code do 
        json.job_code job.job_code
        json.job_code_description job.job_code_description
        json.job_function_code job.job_function_code
        json.job_function_description job.job_function_description
    end



end