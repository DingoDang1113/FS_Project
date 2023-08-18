# == Schema Information
#
# Table name: case_comments
#
#  id                :bigint           not null, primary key
#  case_id           :bigint           not null
#  parent_comment_id :bigint
#  user_id           :bigint
#  receiver_comment  :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class CaseComment < ApplicationRecord
    validates :receiver_comment, presence:true

    belongs_to :case_request, foreign_key: :case_id
    belongs_to :user 
    belongs_to :parent_comment, class_name: :CaseComment, optional: true
    has_many :replies, class_name: :CaseComment, foreign_key: :parent_comment_id 
    
end
