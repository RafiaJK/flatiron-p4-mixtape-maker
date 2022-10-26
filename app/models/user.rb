class User < ApplicationRecord
    has_many :mixes
    has_many :songs, through: :mixeds
end
