class Venue < ApplicationRecord
    has_many :events, dependent: :destroy
    has_many :bands, through: :events

    #add validation
    validates :venue_name, presence: true, uniqueness: true
    validates :location, presence:  true
end
