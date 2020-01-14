class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :response, null:false
      t.integer :question_id, null:false
      t.integer :owner_id, null:false
      t.timestamps
    end
    add_index :answers, :question_id
    add_index :answers, :owner_id
  end
end
