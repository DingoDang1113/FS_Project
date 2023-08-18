# json.user do
    json.extract! @user, :id, :employee_id, :first_name, :last_name, :job_code, :manager_id, :start_date
    if @user.job 
        json.job_code_description @user.job.job_code_description
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
