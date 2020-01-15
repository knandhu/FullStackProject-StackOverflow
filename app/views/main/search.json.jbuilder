



  json.array!(@questions) do |question|
    json.title question.title
    json.id question.id
  end
