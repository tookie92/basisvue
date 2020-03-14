class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.string :gender
      t.string :phone
      t.string :exp1
      t.string :exp2
      t.string :exp3
      t.string :education
      t.string :extras
      t.string :description

      t.timestamps
    end
  end
end
