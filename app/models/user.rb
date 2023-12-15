class User < ApplicationRecord
    has_secure_password
    has_many :favorite_bands
    has_many :bands, through: :favorite_bands
    has_many :attendees
    has_many :events, through: :attendees
    after_create :set_first_user_as_admin
    #add validations
    validates :username, presence: true, uniqueness: true

    private
    def set_first_user_as_admin
        if User.where(is_admin: true).count > 1
          update_column(:is_admin, false)
        elsif User.where(is_admin: true).count.zero?
          update_column(:is_admin, true)
        end
    end
end
