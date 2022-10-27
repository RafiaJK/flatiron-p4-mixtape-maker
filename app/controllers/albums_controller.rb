class AlbumsController < ApplicationController
    #GET
    def index
        albums = Album.all
        render json: albums, status: :ok
    end

    #GET 
    def show
        album = Album.find_by(id: params[:id])
        if album 
            render json: album, status: :ok
        else
            render json: {error: "Album Not Found"}, status: :not_found
        end
    end

    #CREATE
    def create
        album = Album.create(artist: params[:artist], album: params[:album], year: params[:year], cover: params[:cover])
        render json: album, status: :created
    end

end
