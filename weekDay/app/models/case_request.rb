# == Schema Information
#
# Table name: case_requests
#
#  id               :integer          not null, primary key
#  request_title    :string           not null
#  request_category :string           not null
#  requester_id     :integer          not null
#  request          :text             not null
#  request_status   :boolean          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class CaseRequest < ApplicationRecord
end
