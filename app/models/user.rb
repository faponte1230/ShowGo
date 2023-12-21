class User < ApplicationRecord
    has_secure_password
    has_many :favorite_bands
    has_many :bands, through: :favorite_bands
    has_many :attendees
    has_many :events, through: :attendees

    has_one_attached :avatar
    before_create :set_admin_status
   
    #add validations
    validates :username, presence: true, uniqueness: true

    validates :avatar, presence: true
    validate :validate_avatar_type, if: -> { avatar.attached? }
      
       
      
    private
      
    # Custom validation method to check the avatar file type
    def validate_avatar_type
        if avatar.content_type.present? && !avatar.content_type.in?(%w[image/jpeg image/png image/gif])
            errors.add(:avatar, 'must be a JPEG, PNG, or GIF file')
        end
    end

    def set_admin_status
        self.is_admin = User.count.zero? # Set is_admin to true only for the first user
    end

    def image_url
        Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached?
    end
end
