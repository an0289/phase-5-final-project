class AttendeesController < ApplicationController
    def index
        render json: Attendee.all 
    end 
end
