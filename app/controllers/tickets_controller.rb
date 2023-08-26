class TicketsController < ApplicationController
    def index 
        render json: Ticket.all 
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
        params.permit(:id)
    end 

    def find_ticket
        Ticket.find(params[:id])
    end 
end
