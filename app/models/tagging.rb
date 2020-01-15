# == Schema Information
#
# Table name: taggings
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer          not null
#  tag_id      :integer          not null
#
# Indexes
#
#  index_taggings_on_question_id  (question_id)
#  index_taggings_on_tag_id       (tag_id)
#

class Tagging < ApplicationRecord
    belongs_to :question
    belongs_to :tag
end
