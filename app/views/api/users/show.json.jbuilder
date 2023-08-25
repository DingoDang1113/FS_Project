# json.user do
    json.extract! @user, :id, :employee_id, :first_name, :middle_name, :last_name, :employee_status, :job_code, :level_code, :position_id, :manager_id, :start_date, :termination_date
    # json.name [@user.first_name, @user.last_name]
    
    if @user.job 
        json.job_code_description @user.job.job_code_description
    end
    if @user.level 
        json.level_description @user.level.level_description
    end
    if @user.position 
        json.position_description @user.position.position_description
        json.mgr_position_code   @user.position.mgr_position_code  
        # json.position   @user.position.mgr_position_code  
    end
    if @user.manager
        # json.manager_first_name @user.manager.first_name
        # json.manager_last_name @user.manager.last_name
        json.manager @user.manager.first_name + ' '+  @user.manager.last_name
    end
    if @user.team_members
        json.team_members @user.team_members.map {|member| member.employee_id}
        # json.manager_last_name @user.manager.last_name
        # json.team_members @user.team_members.first_name + ' '+  @user.team_members.last_name
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
