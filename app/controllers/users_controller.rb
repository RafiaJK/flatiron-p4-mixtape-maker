class UsersController < ApplicationController
    #GET
    def index
        users = User.all
        render json: users, status: :ok
    end

    #GET 
    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def me
        toke = request.headers['token']
        user_id = decode(token)
        user = User.find(user_id)
        render json: user
    end

    #CREATE
    def create
        user = User.create(user_params)
        if user.valid?
        render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def user_params
        params.permit(:username, :password)
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
