class Attendee < User
    self.table_name = 'users' 
    has_many :tickets, foreign_key: "user_id"
    has_many :events, through: :tickets  

    validates :type, presence: true 
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :name, presence: true 
end
