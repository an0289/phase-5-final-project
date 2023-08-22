class Organizer < User
    self.table_name = 'users'
    has_many :events 
end
