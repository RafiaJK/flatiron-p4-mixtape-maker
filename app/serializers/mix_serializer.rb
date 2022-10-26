class MixSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song_id, :mix_name
end
