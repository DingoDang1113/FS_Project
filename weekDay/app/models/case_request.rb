# == Schema Information
#
# Table name: case_requests
#
#  id               :bigint           not null, primary key
#  request_title    :string           not null
#  request_category :string           not null
#  requester_id     :bigint           not null
#  request          :text             not null
#  request_status   :boolean          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

CATEGORY = ['PTO Request', 'Benefits - General', 'Benefits - Leave', 'Payslip']

class CaseRequest < ApplicationRecord
    validates :request_title, :request, presence:true
    validates :request_category, presence: true, inclusion: {in: CATEGORY}

    belongs_to :requester, class_name: :User
    has_many :case_comments



end
