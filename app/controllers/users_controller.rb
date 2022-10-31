class UsersController < ApplicationController
    before_action :authorize, only: [:show]
    #GET
    def index
        users = User.all
        render json: users, status: :ok
    end

    #GET 
    def show
        user = User.find_by(id: session[:user_id])
        render json: user
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
        session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    #password not password digest bc coming from the frontend
    def user_params
        params.permit(:username, :password, :password_confirmation)
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
