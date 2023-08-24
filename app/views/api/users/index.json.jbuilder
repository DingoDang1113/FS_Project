@users.each do |user|
    json.set! user.employee_id do 
        json.employee_id user.employee_id
        json.first_name user.first_name
        json.last_name user.last_name
        json.employee_status user.employee_status
        json.job_code user.job_code
        json.level_code user.level_code
        json.position_id user.position_id
        json.manager_id user.manager_id

        if user.position
            json.position_description user.position.position_description
        end
      
    end

end


# data output format 

# {
#     '1':{
#         'employee_id': 'E1711',
#         "first_name": "Francis",
#         "last_name": "Geary",
#         "employee_status": "Active",
#         "job_code": "EXE01",
#         "level_code": "L1",
#         "position_id": "P101",
#         "manager_id": null
#     },
#      '2':{

#      }
#     }