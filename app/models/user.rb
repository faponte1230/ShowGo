class User < ApplicationRecord
    has_secure_password
    has_many :favorite_bands
    has_many :bands, through: :favorite_bands
    has_many :attendees
    has_many :events, through: :attendees

    #add validations
    validates :username, presence: true, uniqueness: true
end
