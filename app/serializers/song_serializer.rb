class SongSerializer < ActiveModel::Serializer
  attributes :id, :song, :artist, :album
end
