# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



#5,6,8,9,13,14
ApplicationRecord.transaction do
Question.delete_all
Question.create!(
    title:"Sklearn complains about one-column dataframes",
    body:"first seeded body",
    owner_id:5
)

Question.create!(
    title:"Make a grid system in React which changes the number of rows and columns?",
    body:"first seeded body",
    owner_id:7
)

Question.create!(
    title:"Executing Excel Workbook via Shortcuts or from the Directory is Causing Problems in Office 365",
    body:"first seeded body",
    owner_id:7
)

Question.create!(
    title:"How do I get data from a graph in a website that fetches data with API itself, using python?",
    body:"first seeded body",
    owner_id:9
)

Question.create!(
    title:"Downloading a file at a specified location through python and selenium using Chrome driver",
    body:"first seeded body",
    owner_id:13
)

Question.create!(
    title:"Javascript won't draw the animation taking value from HTML input element",
    body:"first seeded body",
    owner_id:14
)

Question.create!(
    title:"How can you switch data from an activity that appears only once to another one that always appears, you register once and than you only need to login",
    body:"first seeded body",
    owner_id:5
)

Question.create!(
    title:"Change One Attribute of ActiveRecord Associations CollectionProxy",
    body:"first seeded body",
    owner_id:6
)

Question.create!(
    title:"How to fill entire div with background color",
    body:"first seeded body",
    owner_id:8
)

Question.create!(
    title:"blocking logging messages with configured logging level",
    body:"first seeded body",
    owner_id:9
)

# 10.times do |i|
#   Question.create(title: "Question Title ##{i}", body: "Detailed question", owner_id:i)
# end
end

#