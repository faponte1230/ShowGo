class Band < ApplicationRecord
    has_many :events
    has_many :venues, through: :events
    has_many :favorite_bands
    has_many :users, through: :favorite_bands

    #add validations
    validates :band_name, presence: true, uniqueness: true
end