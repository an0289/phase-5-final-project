class TicketConfirmationMailer < ApplicationMailer
  default from: 'eventfulencounters@gmail.com'
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.new_user_email.subject
  #
  def ticket_purchased_email
    @ticket = params[:ticket]

    mail(to: @ticket.user_email, subject: "Thank You For Your Ticket Purchase!")
  end
end
