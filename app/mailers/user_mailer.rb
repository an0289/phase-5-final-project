class UserMailer < ApplicationMailer
  default from: 'eventfulencounters@gmail.com'
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.new_user_email.subject
  #
  def new_user_email
    @user = params[:user]

    mail(to: @user.email, subject: "Welcome to Eventful Encounters!")
  end
end
