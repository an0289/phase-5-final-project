# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
# Events: thinking of doing something blood borne related events, or justs eldritch horror related events 
#  - Amygdala location at the Cathedral ward to witness the Hunter's Nightmare  
#  - Miclosh, host of the Nightmare 
#  - Rom, at Moonside Lake 
#  - Kos at Fishing Hamlet 
#  - Ludwig at the Nightmare Church (originally at the Healing Church and lead hunters)
# Don't have to do any reviews, but can add them if I want, will just have to create a rule that a review cannot be left if the event date is later than when the review is being left I guess 
# Tickets will be a bit easier since they do not have any components to them 
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: 'alexandraneff06@gmail.com' , password: 'wow123' , image_url: '../images/fox_avatar.png' , name: 'Alex' , type: 'Organizer' )
User.create!(email: 'alexandraneff@live.com' , password: 'cool123' , image_url: '../images/doberman_avatar.png', name: 'Alexa' , type: 'Attendee' )

Event.create!(title: 'Amygdala' , description: "The Amygdala shall grant us entry to the Hunter's Nightmare" , location: 'Cathedral Ward' , image_url: "../images/lesser-amygdala.jpg", date: '2023-08-31', available_seats: 20 , user_id: 1 )
Event.create!(title: 'Rom, The Vacuous Spider' , description: "Rom shall demonstrate how she has learned to gain audience with the Great Ones" , location: 'Moonside Lake in Brygenwerth' , image_url: "../images/romlake.jpg" , date: '2023-09-12' , available_seats: 20 , user_id: 1 )
Event.create!(title: 'Brain of Mensis' , description: "The Brain of Mensis shall be hoisted to Their permanent resting place" , location: 'School of Mensis' , image_url: "../images/bmensis.jpg" , date: '2023-09-02', available_seats: 20 , user_id: 1 )
Event.create!(title: 'Ebrietas, Daughter of the Cosmos' , description: "Join us as we bear witness to The One left behind" , location: 'Altar of Despair in the Grand Cathedral' , image_url: "../images/Bloodborne-ebrietas.png" , date: '2023-09-03' , available_seats: 20 , user_id: 1 )

Ticket.create!(id: 1 , user_id: 2 , event_id: 1 )
Ticket.create!(id: 2 , user_id: 2 , event_id: 2 )
Ticket.create!(id: 3 , user_id: 2 , event_id: 3 )
Ticket.create!(id: 4 , user_id: 2 , event_id: 4 )
