class MixesController < ApplicationController
    #GET
    def index
        mixes = Mix.all
        render json: mixes, status: :ok
    end

    #GET 
    def show
        mix = Mix.find_by(id: params[:id])
        if mix 
            render json: mix, status: :ok
        else
            render json: {error: "Mix Not Found"}, status: :not_found
        end
    end

    #CREATE
    def create
        mix = Mix.create(user_id: params[:user_id], song_id: params[:song_id], mix_name: params[:mix_name], cover_art: params[:cover_art])
        render json: mix, status: :created
    end

    #PATCH
    def update 
        mix = Mix.find_by(id: params[:id])
        if mix
            mix.update(user_id: params[:user_id], song_id: params[:song_id], mix_name: params[:mix_name], cover_art: params[:cover_art])
            render json: mix, status: :ok
        else
            render json: {error: "Mix Not Found"}, status: :not_found
        end
    end

    #DELETE
    def destroy
        mix = Mix.find_by(id: params[:id])
        if mix
            mix.destroy
            render json: {}, status: :ok 
        else
            render json: {error: "Mix Not Found"}, status: :not_found
        end
    end

end
