class User < ApplicationRecord 
    
    has_secure_password 

    validates :type, inclusion: { in: %w[Organizer Attendee], message: "must be either Organizer or Attendee"}

    # has_many :events 
    # has_many :tickets
    # has_many :events, through: :tickets
end
