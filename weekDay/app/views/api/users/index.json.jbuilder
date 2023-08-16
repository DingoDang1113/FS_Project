@users.each do |user|
    json.set! user.id do 
        json.employee_id user.employee_id
        json.first_name user.first_name
        json.last_name user.last_name
        json.employee_status user.employee_status
        json.job_code user.job_code
        json.level_code user.level_code
        json.position_id user.position_id
        json.manager_id user.manager_id
    end
end
