class Event < ApplicationRecord
  belongs_to :organizer, foreign_key: "user_id"
  has_many :tickets, dependent: :destroy
  has_many :attendees, through: :tickets  
  
  validates :title, presence: true, uniqueness: true 
  validates :description, presence: true 
  validates :location, presence: true 
  validates :image_url, presence: true 
  validates :date, presence: true
  validate :date_must_be_in_the_future, on: :create
  validates :available_seats, presence: true, numericality: { only_integer: true, greater_than: 0 }

  def organizer_name
    self.organizer.name
  end 

  def seats
    (self.available_seats - self.tickets.length)
  end 

  private 

  def date_must_be_in_the_future
    if date.present?
    errors.add(:date, "can't be in the past!") unless date.future?
    end 
  end 
end
