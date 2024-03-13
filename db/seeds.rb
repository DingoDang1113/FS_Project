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
  { company_code: 'WSCO', company_name: 'Westeros Coporation' },
  { company_code: 'IVI', company_name: 'Ice Vanguard Innovations' },
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
  { job_code: 'L0000', job_code_description: 'Terminated', job_function_code: 'XX', job_function_description: 'Terms' },
  { job_code: 'NH000', job_code_description: 'New Hire', job_function_code: 'NH', job_function_description: 'New Hire' },



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
  { level_code: '501', level_description: 'Level 5 - Executive Level' },
  { level_code: '000', level_description: 'Unassigned' }
]
levels.each do |level|
  Level.create!(level)
end

# Seed data for Org Hierarchies
org_hierarchies = [
  { position_code: 'P001', position_description: 'Chief Executive Officer (King)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010101', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CEO' },
  { position_code: 'P002', position_description: 'Chief Financial Officer (Master of Coin)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010102', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CFO' },
  { position_code: 'P003', position_description: 'Chief Technology Officer (Master of Ships)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010103', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CTO' },
  { position_code: 'P004', position_description: 'Chief Human Resources Officer (Lord Commander of the Kingsguard)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CHRO' },
  { position_code: 'P005', position_description: 'Chief Operations Officer (Hand of the King)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF COO' },
  { position_code: 'P006', position_description: 'Chief Security Officer (Lord Commander of the Kingsguard)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CSO' },
  { position_code: 'P007', position_description: 'General Council (Mater of Laws)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF GC' },
  { position_code: 'P008', position_description: 'Chief Communications Officer (Master of Whisperers)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CCO' },
  { position_code: 'P009', position_description: 'Chief Science Officer (Grand Master)', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF CSO' },
 
  { position_code: 'P010', position_description: 'CEO of the North', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF the North' },
  { position_code: 'P011', position_description: 'CEO of the West', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF the West' },
  { position_code: 'P012', position_description: 'CEO of the Eyrie', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF the Eyrie' },
  { position_code: 'P013', position_description: 'CEO of the Targaryen', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010104', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'EXECUTIVE', org_level_three_description: 'OFFICE OF the Targaryen' },
 
  { position_code: 'P304', position_description: 'Director - TECH', mgr_position_code: 'P003', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010303', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'TECH', org_level_three_description: 'DEVELOPMENT' },
  { position_code: 'P303', position_description: 'Manager - TECH', mgr_position_code: 'P304', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010303', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'TECH', org_level_three_description: 'DEVELOPMENT' },
  { position_code: 'P302', position_description: 'Manager - TECH', mgr_position_code: 'P304', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010313', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'TECH', org_level_three_description: 'FULL STACK' },
  { position_code: 'P404', position_description: 'Director - HR', mgr_position_code: 'P004', org_level_one_id: '001', org_level_two_id: '00104', org_level_three_id: '0010314', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'HR', org_level_three_description: 'HRBP - TECH' },
  { position_code: 'P301', position_description: 'Developer', mgr_position_code: 'P302', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010303', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'TECH', org_level_three_description: 'DEVELOPEMENT' },
  { position_code: 'P204', position_description: 'Director - FIN', mgr_position_code: 'P002', org_level_one_id: '001', org_level_two_id: '00101', org_level_three_id: '0010102', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'FIN', org_level_three_description: 'FP&A' },
  
  { position_code: 'P999', position_description: 'New Hire', mgr_position_code: 'P001', org_level_one_id: '001', org_level_two_id: '00103', org_level_three_id: '0010303', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'NEWHIRE', org_level_three_description: 'NEWHIRE' },
  { position_code: 'P666', position_description: 'Terms', mgr_position_code: 'P001', org_level_one_id: '000', org_level_two_id: '0000', org_level_three_id: '00000', org_level_one_description: 'Westeros Coporation', org_level_two_description: 'TERMS', org_level_three_description: 'TERMS' },





]
org_hierarchies.each do |org_hierarchy|
  OrgHierarchy.create!(org_hierarchy)
end



users = [
  { first_name: 'Robert', middle_name: '', last_name: 'Baratheon', employee_status: 'Active', employee_id: 'E1711', password: '123456',job_code: 'EXE01', start_date:'2011-04-17', level_code: '501', company_code: 'WSCO', position_id: 'P001' },
  { first_name: 'Petyr', middle_name: '', last_name: 'Baelish', employee_status: 'Active', employee_id: 'W1529', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P002',manager_id: 'E1711'},
  { first_name: 'George', middle_name: 'R.R', last_name: 'Martin', employee_status: 'Active', employee_id: 'A0101', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P004', manager_id: 'E1711'},
  { first_name: 'Stannis', middle_name: '', last_name: 'Baratheon', employee_status: 'Active', employee_id: 'G4333', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P003', manager_id: 'E1711'},
  { first_name: 'Jon', middle_name: '', last_name: 'Arryn', employee_status: 'Active', employee_id: 'T9413', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P005',manager_id: 'E1711'},
  { first_name: 'Barristan', middle_name: '', last_name: 'Selmy', employee_status: 'Active', employee_id: 'G4682', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P006', manager_id: 'E1711'},
  { first_name: 'Renly', middle_name: '', last_name: 'Baratheon', employee_status: 'Active', employee_id: 'E1234', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',termination_date: '', level_code: '501', company_code: 'WSCO', position_id: 'P007', manager_id: 'E1711'},
  { first_name: 'Varys', middle_name: '', last_name: 'Spider', employee_status: 'Active', employee_id: 'R1357', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',termination_date: '', level_code: '501', company_code: 'WSCO', position_id: 'P008',manager_id: 'E1711'},
  { first_name: 'Pycelle', middle_name: '', last_name: 'Master', employee_status: 'Active', employee_id: 'R1234', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',termination_date: '', level_code: '501', company_code: 'WSCO', position_id: 'P009',manager_id: 'E1711'},

  { first_name: 'Eddard', middle_name: 'Ned', last_name: 'Stark', employee_status: 'Active', employee_id: 'R4402', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P010', manager_id: 'E1711'},
  { first_name: 'Tywin', middle_name: '', last_name: 'Lannister', employee_status: 'Active', employee_id: 'U4507', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P011',manager_id: 'E1711' },
  { first_name: 'Lysa', middle_name: '', last_name: 'Arryn', employee_status: 'Active', employee_id: 'W7821', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P012',manager_id: 'E1711' },
  { first_name: 'Viserys', middle_name: '', last_name: 'Targaryen', employee_status: 'Active', employee_id: 'W1357', password: '123456',job_code: 'EXE02', start_date:'2011-04-17',level_code: '501', company_code: 'WSCO', position_id: 'P013',manager_id: 'E1711' },


  { first_name: 'Shali', middle_name: '', last_name: 'Peng', employee_status: 'Active', employee_id: 'P8925', password: '123456',job_code: 'IT001', start_date:'2023-10-01',level_code: '101', company_code: 'WSCO', position_id: 'P301'},





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
