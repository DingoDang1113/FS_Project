# == Schema Information
#
# Table name: org_hierachies
#
#  id                          :bigint           not null, primary key
#  position_code               :string           not null
#  position_description        :string           not null
#  mgr_position_code           :string           not null
#  org_level_one_id            :string           not null
#  org_level_two_id            :string           not null
#  org_level_three_id          :string           not null
#  org_level_one_description   :string           not null
#  org_level_two_description   :string           not null
#  org_level_three_description :string           not null
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#
class OrgHierachy < ApplicationRecord
    validates :position_code, presence: true, uniqueness: true
    validates :position_description, presence:true
    validates :mgr_position_code, presence:true

    # has_many :users, foreign_key: :position_id
    # belongs_to :manager_position, class_name: :OrgHierarchy, foreign_key: :mgr_position_code





end
