# == Schema Information
#
# Table name: case_comments
#
#  id                :integer          not null, primary key
#  case_id           :integer          not null
#  parent_comment_id :integer
#  user_id           :integer
#  receiver_comment  :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class CaseComment < ApplicationRecord
end
