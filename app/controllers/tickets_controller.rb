class TicketsController < ApplicationController
    def index 
        render json: Ticket.all 
    end 

    def show
        ticket = find_ticket
        render json: ticket 
    end 

    def create
        ticket = @current_user.tickets.create!(ticket_params)
        render json: ticket, status: :created 
    end 

    def destroy
        ticket = find_ticket
        ticket.destroy
        render json: ticket  
    end 

    private 

    def ticket_params
        params.permit(:event_id, :user_id)
    end 

    def find_ticket
        Ticket.find(params[:id])
    end 
end
