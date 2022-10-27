class SongSerializer < ActiveModel::Serializer
  attributes :id, :artist, :album, :year, :cover
end
