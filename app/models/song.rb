class Song < ApplicationRecord
    has_many :mixes
    has_many :users, through: :mixes
end
