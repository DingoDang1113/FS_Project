json.user do
    json.extract! @user, :id, :employee_id, :first_name, :last_name, :job_code, :manager_id, :created_at
end 