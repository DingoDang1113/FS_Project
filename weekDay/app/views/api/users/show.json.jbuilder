json.user do
    json.extract! @user, :id, :employee_id, :first_name, :last_name, :created_at
end 