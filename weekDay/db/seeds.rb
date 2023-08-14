# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Seed data for Companies
companies = [
  { company_id: 'MFLO', company_name: 'May Flower LLC' },
  { company_id: 'AAPP', company_name: 'Aapp' },
]
companies.each do |company|
  Company.create!(company)
end

# Seed data for Jobs
jobs = [
  { job_code: 'IT001', job_code_description: 'Software Engineer', job_function_code: 'IT', job_function_description: 'Information Technology' },
  { job_code: 'IT002', job_code_description: 'Senior Software Engineer', job_function_code: 'IT', job_function_description: 'Information Technology' }, 
  { job_code: 'IT003', job_code_description: 'Software Engineer Manager', job_function_code: 'IT', job_function_description: 'Information Technology' },
  { job_code: 'IT004', job_code_description: 'Software Engineer Director', job_function_code: 'IT', job_function_description: 'Information Technology' },
  { job_code: 'EXE01', job_code_description: 'CEO', job_function_code: 'EXEC', job_function_description: 'EXECUTIVES' }
]
jobs.each do |job|
  Job.create!(job)
end

# Seed data for Levels
levels = [
  { level_code: '101', level_description: 'Level 1 - Entry Level' },
  { level_code: '201', level_description: 'Level 2 - Senior Level' },
  { level_code: '301', level_description: 'Level 3 - Manager Level' },
  { level_code: '401', level_description: 'Level 4 - Director Level' },
  { level_code: '501', level_description: 'Level 5 - Executive Level' }
]
levels.each do |level|
  Level.create!(level)
end

# Seed data for Org Hierarchies
org_hierarchies = [
  { position_code: 'P001', position_description: 'CEO', mgr_position_code: 'MGR1', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010101', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CEO' }

]
org_hierarchies.each do |org_hierarchy|
  OrgHierarchy.create!(org_hierarchy)
end

# Seed data for Users
def generate_employee_id 
    random_letter = ('A'..'Z').to_a.sample 
    random_number = rand(100..999).to_s 
    employee_id = (random_letter + random_number)
    return employee_id
end

users = [
  { first_name: 'Francis', middle_name: '', last_name: 'Geary', employee_status: 'Active', employee_id: generate_employee_id, job_code: 'EXE01', level_code: '501', company_code: 'MFLO', position_id: 'P001', manager_id: 1 }
  { first_name: 'Darren', middle_name: '', last_name: 'Eid', employee_status: 'Active', employee_id: generate_employee_id, job_code: 'IT004', level_code: '401', company_code: 'MFLO', position_id: 'P002', manager_id: 1 }

]
users.each do |user|
  User.create!(user)
end

# Seed data for Case Requests
case_requests = [
  { request_title: 'Request A', request_category: 'Category A', requester_id: 1, request: 'Request Details', request_status: false }
]
case_requests.each do |case_request|
  CaseRequest.create!(case_request)
end

# Seed data for Case Comments
case_comments = [
  { case_id: 1, parent_comment_id: nil, user_id: 1, receiver_comment: 'Comment A' }
]
case_comments.each do |case_comment|
  CaseComment.create!(case_comment)
end

# Seed data for User Effective Dates
user_effective_dates = [
  { user_id: 1, field_name: 'first_name', old_value: 'John', new_value: 'Johnny', effective_date: Date.today }
]
user_effective_dates.each do |user_effective_date|
  UserEffectiveDate.create!(user_effective_date)
end
