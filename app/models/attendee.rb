class Attendee < User
    self.table_name = 'users' 
    has_many :tickets, foreign_key: "user_id"
    has_many :events, through: :tickets  
end
