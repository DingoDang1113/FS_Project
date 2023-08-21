# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



UserEffectiveDate.destroy_all
CaseComment.destroy_all
CaseRequest.destroy_all
User.destroy_all
OrgHierarchy.destroy_all
Level.destroy_all
Job.destroy_all
Company.destroy_all


ActiveRecord::Base.connection.reset_pk_sequence!('companies')
ActiveRecord::Base.connection.reset_pk_sequence!('jobs')
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('org_hierarchies')
ActiveRecord::Base.connection.reset_pk_sequence!('levels')
ActiveRecord::Base.connection.reset_pk_sequence!('case_requests')
ActiveRecord::Base.connection.reset_pk_sequence!('case_comments')
ActiveRecord::Base.connection.reset_pk_sequence!('user_effective_dates')





# Seed data for Companies
companies = [
  { company_code: 'MFLO', company_name: 'May Flower LLC' },
  { company_code: 'AAPP', company_name: 'Aapp Inc' },
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
  { job_code: 'EXE01', job_code_description: 'CEO', job_function_code: 'EXEC', job_function_description: 'EXECUTIVES' },
  { job_code: 'EXE02', job_code_description: 'C-LEVEL', job_function_code: 'EXEC', job_function_description: 'EXECUTIVES' },
  { job_code: 'HR003', job_code_description: 'HR Business Partner', job_function_code: 'HR', job_function_description: 'Human Resources' },

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
  { position_code: 'P001', position_description: 'CEO', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010101', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CEO' },
  { position_code: 'P002', position_description: 'CFO', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010102', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CFO' },
  { position_code: 'P003', position_description: 'CTO', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010103', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CTO' },
  { position_code: 'P004', position_description: 'CHRO', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CHRO' },
  { position_code: 'P013', position_description: 'Director - TECH', mgr_position_code: 'P003', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010303', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'TECH', org_level_three_description: 'DEVELOPMENT' },
  { position_code: 'P123', position_description: 'Manager - TECH', mgr_position_code: 'P013', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010303', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'TECH', org_level_three_description: 'DEVELOPMENT' },
  { position_code: 'P223', position_description: 'Manager - TECH', mgr_position_code: 'P013', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010313', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'TECH', org_level_three_description: 'FULL STACK' },
  { position_code: 'P014', position_description: 'Director - HR', mgr_position_code: 'P004', org_level_one_id: '001', org_level_two_id: '00104', org_level_three_id: '0010314', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'HR', org_level_three_description: 'HRBP - TECH' },
  { position_code: 'P131', position_description: 'Developer', mgr_position_code: 'P123', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010303', org_level_one_description: 'MAY FLOWER', org_level_two_description: 'TECH', org_level_three_description: 'DEVELOPEMENT' },



]
org_hierarchies.each do |org_hierarchy|
  OrgHierarchy.create!(org_hierarchy)
end



users = [
  { first_name: 'Francis', middle_name: '', last_name: 'Geary', employee_status: 'Active', employee_id: 'E1711', password: '123456',job_code: 'EXE01', start_date:'2021-08-14', level_code: '501', company_code: 'MFLO', position_id: 'P001' },
  { first_name: 'Marcus', middle_name: '', last_name: 'Geary', employee_status: 'Active', employee_id: 'R4402', password: '123456',job_code: 'EXE02', start_date:'2021-08-14',level_code: '501', company_code: 'MFLO', position_id: 'P002'},
  { first_name: 'Darren', middle_name: '', last_name: 'Eid', employee_status: 'Active', employee_id: 'U4507', password: '123456',job_code: 'IT004', start_date:'2021-08-14',level_code: '401', company_code: 'MFLO', position_id: 'P013' },
  { first_name: 'Taylor', middle_name: '', last_name: 'Musolf', employee_status: 'Active', employee_id: 'T9413', password: '123456',job_code: 'IT003', start_date:'2021-08-14',level_code: '301', company_code: 'MFLO', position_id: 'P123'},
  { first_name: 'Diego', middle_name: '', last_name: 'Chavez', employee_status: 'Active', employee_id: 'W1529', password: '123456',job_code: 'IT003', start_date:'2021-08-14',level_code: '301', company_code: 'MFLO', position_id: 'P223'},
  { first_name: 'HR', middle_name: '', last_name: 'HR', employee_status: 'Active', employee_id: 'G4333', password: '123456',job_code: 'HR003', start_date:'2021-08-14',level_code: '401', company_code: 'MFLO', position_id: 'P014'},
  { first_name: 'Shali', middle_name: '', last_name: 'Peng', employee_status: 'Active', employee_id: 'P8925', password: '123456',job_code: 'IT001', start_date:'2023-08-14',level_code: '101', company_code: 'MFLO', position_id: 'P131'},




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
