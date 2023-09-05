class Organizer < User
    self.table_name = 'users'
    has_many :events, foreign_key: "user_id"

    validates :type, presence: true 
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :name, presence: true 
    
end


