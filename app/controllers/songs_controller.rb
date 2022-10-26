class SongsController < ApplicationController
    #GET
    def index
        songs = Song.all
        render json: songs, status: :ok
    end

    #GET 
    def show
        song = Song.find_by(id: params[:id])
        if song 
            render json: song, status: :ok
        else
            render json: {error: "Song Not Found"}, status: :not_found
        end
    end

    #CREATE
    def create
        song = Song.create(song: params[:song], artist: params[:artist], album: params[:album])
        render json: song, status: :created
    end

end
