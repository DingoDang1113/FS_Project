# == Schema Information
#
# Table name: jobs
#
#  id                       :bigint           not null, primary key
#  job_code                 :string           not null
#  job_code_description     :string           not null
#  job_function_code        :string           not null
#  job_function_description :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#
class Job < ApplicationRecord
    validates :job_code, length:{minimum: 5},  presence:true 
    validates :job_code_description, :job_function_description,:job_function_code,  presence: true

    has_many :users 

end
