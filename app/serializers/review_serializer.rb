class MixSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :rating

end
