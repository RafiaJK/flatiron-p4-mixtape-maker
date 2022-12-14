class ReviewsController < ApplicationController
    before_action :authorize

    #GET
    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    #GET 
    def show
        review = Review.find_by(id: params[:id])
        if review 
            render json: review, status: :ok
        else
            render json: {error: "Review Not Found"}, status: :not_found
        end
    end

    #CREATE
    def create
        review = Review.create(user_id: session[:user_id], album_id: params[:album_id], review: params[:review])
        render json: review, status: :created
    end

    #PATCH
    def update 
        review = Review.find_by(id: params[:id])
        if review
            review.update(user_id: session[:user_id], album_id: params[:album_id], review: params[:review])
            render json: review, status: :ok
        else
            render json: {error: "Review Not Found"}, status: :not_found
        end
    end

    #DELETE
    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            render json: {}, status: :ok 
        else
            render json: {error: "Review Not Found"}, status: :not_found
        end
    end

    private

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
