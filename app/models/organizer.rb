class Organizer < User
    self.table_name = 'users'
    has_many :events, foreign_key: "user_id"
end
