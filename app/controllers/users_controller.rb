class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def index
        render json: User.all 
    end 

    def create
        # case params[:type]
        # when (params[:type] === 'Attendee')
        #     @user = Attendee.create!(user_params)
        #     UserMailer.with(user: @user).new_user_email.deliver_later
        # when (params[:type] === 'Organizer')
        #     @user = Organizer.create!(user_params)
        #     UserMailer.with(user: @user).new_user_email.deliver_later
        # end 
        @user = User.create!(user_params)
        session[:user_id] = @user.id
        render json: @user, status: :created 
    end 

    def show
        render json: @current_user
    end 

    private 

    def user_params
        params.permit(:email, :password, :password_confirmation, :name, :image_url, :type)
    end 
end
