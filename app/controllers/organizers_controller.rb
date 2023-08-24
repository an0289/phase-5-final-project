class OrganizersController < ApplicationController
    def index
        render json: Organizer.all 
    end 
end
