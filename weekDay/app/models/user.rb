# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  first_name       :string           not null
#  middle_name      :string           not null
#  last_name        :string           not null
#  employee_status  :string           not null
#  employee_id      :string           not null
#  start_date       :date             not null
#  termination_date :date
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  job_code         :string           not null
#  level_code       :string           not null
#  company_code     :string           not null
#  position_id      :string           not null
#  manager_id       :bigint           not null
#

class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token 

    validates :first_name, :middle_name, :last_name, :employee_status,:job_code, :level_code, :company_code, :position_id, :manager_id, presence:true 
    validates :employee_id, :session_token, uniqueness: true, presence:true
    validates :password, length: {minimum: 6}, allow_nil: true

    belongs_to :company, foreign_key: :company_code
    belongs_to :job, foreign_key: :job_code
    belongs_to :level, foreign_key: :level_code
    belongs_to :position, class_name: :OrgHierachy, foreign_key: :position_id 
    belongs_to :manager, class_name: :User, foreign_key: :manager_id

    has_many :case_requests, foreign_key: :requester_id
    has_many :case_comments
    has_many :user_effective_dates

    def self.field_names 
        column_names - ['id','created_at', 'updated_at']
    end


    def self.find_by_credentials(username, password)
        user = User.find_by(employee_id: employee_id)
        
        if user && user.authenticate(password)
            user 
        else 
            nil 
        end
    end

    def reset_session_token! 
        self.session_token ||= generate_unique_session_token
    end

    private 
    def generate_unique_session_token
        loop do 
        token = SecureRandom.urlsafe_base64 
        return token unless User.exists?(session_token: token)
        end
    end
end
