# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/new_user_email
  def new_user_email
    UserMailer.with(user: User.first)new_user_email
  end

end
