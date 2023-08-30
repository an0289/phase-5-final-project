class User < ApplicationRecord 
    
    has_secure_password 

    validates :type, presence: true 
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :name, presence: true 
    # has_many :events 
    # has_many :tickets
    # has_many :events, through: :tickets
end
