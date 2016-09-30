class CreateUsers < ActiveRecord::Migration
  def change
    create_table  :users do |t|
      t.string  :name, null: false
      t.string  :gender, null: false
      t.date    :birthday, null: false
      t.string  :username, null: false, uniqueness: true
      t.string  :email, null: false, uniqueness: true
      t.string  :password_digest

      t.timestamp(null: false)
    end
  end
end
