# Preview all emails at http://localhost:3000/rails/mailers/ticket_confirmation_mailer
class TicketConfirmationMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/ticket_confirmation_mailer/ticket_purchased_email
  def ticket_purchased_email
    TicketConfirmationMailer.ticket_purchased_email
  end

end
