require "rails_helper"

RSpec.describe UserMailer, type: :mailer do
  describe "new_user_email" do
    let(:mail) { UserMailer.new_user_email }

    it "renders the headers" do
      expect(mail.subject).to eq("New user email")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end
