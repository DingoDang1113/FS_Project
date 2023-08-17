json.user do
    json.extract! @user, :id, :employee_id, :first_name, :last_name, :job_code, :manager_id, :start_date
    if @user.job 
        json.job_code_description @user.job.job_code_description
    else nil 
    end


end 