@answers.each do |ans|
    json.set! ans.id do
        json.extract! ans , :id, :response, :question_id, :owner_id
    end
end
