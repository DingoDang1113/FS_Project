# json.user do
    json.extract! @user, :id, :employee_id, :first_name, :last_name, :job_code, :level_code, :position_id, :manager_id, :start_date
    if @user.job 
        json.job_code_description @user.job.job_code_description
    else nil 
    end
    if @user.level 
        json.level_description @user.level.level_description
    else nil 
    end
    if @user.position 
        json.position_description @user.position.position_description
        json.mgr_position_code   @user.position.mgr_position_code  
        # json.position   @user.position.mgr_position_code  
    else nil 
    end
    if @user.manager
        json.manager @user.user.manager_id
    else nil 
    end


# end 

# data output 

# {
#   "user": {
#     "id": 1,
#     "employeeId": "E1711",
#     "firstName": "Francis",
#     "lastName": "Geary",
#     "jobCode": "EXE01",
#     "managerId": null,
#     "startDate": "2021-08-14",
#     "jobCodeDescription": "CEO"
#   }
# }
