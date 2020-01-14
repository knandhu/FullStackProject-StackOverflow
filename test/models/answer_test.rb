# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  response    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :integer          not null
#  question_id :integer          not null
#
# Indexes
#
#  index_answers_on_owner_id     (owner_id)
#  index_answers_on_question_id  (question_id)
#

require 'test_helper'

class AnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
