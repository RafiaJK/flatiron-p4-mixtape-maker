class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :rating
  belongs_to :album
  belongs_to :user
end
