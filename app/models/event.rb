class Event < ApplicationRecord
    belongs_to :band
    belongs_to :venue
    has_many :attendees
    has_many :users, through: :attendees

    #add validation
    validates :event_name, presence: true, uniqueness: true
end
