class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  belongs_to :user
  belongs_to :event, serializer: EventSerializer
  
end