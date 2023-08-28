class UsersController < ApplicationController
    def index
        render json: User.all 
    end 

    def create
        case params[:type]
        when 'Attendee'
            @current_user = Attendee.create!(user_params)
        when 'Organizer'
            @current_user = Organizer.create!(user_params)
        end 
        session[:user_id] = user.id
        render json: user, status: :created 
    end 

    def show
        render json: @current_user
    end 

    private 

    def user_params
        params.permit(:email, :password, :password_confirmation, :name, :image_url, :type)
    end 
end
