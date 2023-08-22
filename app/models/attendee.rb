class Attendee < User
    self.table_name = 'users'
    has_many :tickets 
    has_many :events, through: :tickets 
end
