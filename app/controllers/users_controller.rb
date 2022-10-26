class UsersController < ApplicationController
    #GET
    def index
        users = User.all
        render json: users, status: :ok
    end

    #GET 
    def show
        user = User.find_by(id: params[:id])
        if user 
            render json: user, status: :ok
        else
            render json: {error: "User Not Found"}, status: :not_found
        end
    end

    #CREATE
    def create
        user = User.create(username: params[:username], avatar: params[:avatar])
        render json: user, status: :created
    end

    #PATCH
    def update 
        user = User.find_by(id: params[:id])
        if user
            user.update(username: params[:username], avatar: params[:avatar])
            render json: user, status: :ok
        else
            render json: {error: "User Not Found"}, status: :not_found
        end
    end

    #DELETE
    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            render json: {}, status: :ok 
        else
            render json: {error: "User Not Found"}, status: :not_found
        end
    end
end
