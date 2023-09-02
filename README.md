# My Phase 5 Project (CapStone): Eventful Encounters - An Event creation and signup app

## Overview 

Eventful Encounters is an Event creation and signup website specializing in cosmic events found in FromSoftware's Bloodborne. Upon signup, users will declare if they 'Organizers' or 'Attendees' and this will dictate how they interact with the website. Logged in Organizers are able to create, edit, and delete events. Logged in Attendees are to view all events, purchase tickets to events, and cancel any tickets they've purchased.  

All users will receive an email upon signup and Attendees, upon purchase of a ticket, will receive an email confirming the purchase providing the event details. 

## Programming Languages 

This app was created using React.js for the frontend and Ruby on Rails for the backend, and sqlite3 is used to manage the database  

## Installation

Run the following commands in two separate consoles to install all the necessary packages and dependencies: 

Backend (Ruby on Rails):

```bash
bundle install 
rails db:create db:migrate db:seed 
rails s 
```

Frontend (React.js): 

Navigate into the client folder and run:

```bash
npm install 
npm start 
```

## Usage  

Login or Signup to view the events

![Login](/eventful_encounters_login.png)

![Signup](/eventful_encounters_signup.png)

### Organizers

Organizers can create, edit, and delete events 

![AddEvent](/eventful_encounters_create.png)

![EditDeleteEvent](/eventful_encounters_edit_delete.png)

### Attendees 

Attendees can purchase and cancel tickets to events 

![PurchaseTicket](/eventful_encounters_purchase.png)
 
![CancelTicket](/eventful_encounters_cancel.png)

## Requirements 

- Ruby 2.7.4
- NodeJS (v16) and npm

## Contributing
Thank you to [Create React App](https://github.com/facebook/create-react-app) for providing the starter code for my app

Thank you to [Semantic UI React](https://react.semantic-ui.com/) for the webpage design

Thank you to [FAVPNG](https://favpng.com/) for the Amygdala Sprite 

Thank you to [Wallpaper Abyss](https://wall.alphacoders.com/) for the background image

Finally, thank you to [FromSoftware](https://www.fromsoftware.jp/ww/) for the concepts used for these events

## License

[MIT](https://choosealicense.com/licenses/mit/)