class SongSerializer < ActiveModel::Serializer
  attributes :id, :artist, :title, :year, :cover
end
