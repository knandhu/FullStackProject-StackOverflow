@questions.each do |ques|
    json.set! ques.id do
        json.extract! ques , :id, :title, :body, :owner_id, :tags
    end
end
