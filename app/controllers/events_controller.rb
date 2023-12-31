class EventsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Event.all 
    end 

    def create
        event = Event.create!(event_params)
        render json: event, status: :created 
    end 

    def show
        event = find_event 
        render json: event 
    end 

    def update
        event = @current_user.events.find(params[:id])
        event.update!(event_params)
        render json: event 
    end 

    def destroy
        event = find_event 
        event.destroy 
        render json: event  
    end 

    private 

    def find_event 
        Event.find(params[:id])
    end 

    def event_params
        params.permit(:title, :description, :date, :image_url, :location, :available_seats, :user_id)
    end 
end
