# MEAN-stack


## The Mission

Remaking the animalDB Angular form and adding MongoDB with some personal touches.
Project is about animal data and storing them in our ZOO. All animals will be maped and taken their picture when they arrive. 😁

##TO DO :

[x] * Form in html
[x] * Form validation
[x] * Error reporting
[x] * binding the data to the form

[x] * Form : two-way data-binding
* Server side functionality:
  [x] * post our data to a server
  [] * send data to MongoDB
    - don't have any error but somehow I get wrong type of connection string and can not send data, display them in Mongo Atlas DB **TO DO!!!**
  [x] * submitting the form, the animal has been added to the list
  [x] * displaying the newly updated animal list on page
[] * Add angular side button update and delete (have the server side)!! **TO DO!!!**
     

### Must-have features

[x] * A Friend class on the client with some fields that you find interesting to keep in a friend book
[x] * A Friend schema on the server to make it easy for you to get data from the client to the database and vice versa
[x] * A Friend model to contain your friends data on the server
[x] * Using the mongoose queries, make a CRUD system to create, update, read and delete friends on your database
  * I didn't make folders, so it looks a bit messy...
[] * Make it look visually pleasing and add responsiveness
    * have old css from last assigment, didn't make any changes

### Project Plan

[x] 1. Create a repo and share access. Setup Git rules (no random pushing) 

[x] 2. Find a project idea, setup to dos and update readme 

[x] 3. Divide up tasks in smaller units 

[x] 4. Setup boilerplate for project

[x] 5. Create basic HTML form structure

[x] 6. Create animal class and export

[x] 7. Bind data to form

[x] 8. Form validation

[x] 9. Error reporting

[x] 10. Added a flip animation for cards

[x] 11. Displaying all our saved animal data in cards

[] 12. Submitting the data to the server

  * doesn't work with this link 'mongodb+srv://new-animal:zivotinja1234@cluster0.khkyf.mongodb.net/test', and coach told me that the link supposed
to look like this: 'mongodb://username:password@host:port/database?options...'
    * I deleted and reinstalled Atlas and Compass all over again but again I get this type of link which is DNS Seed List Connection Format
  according to MongoDB documentation. I actually need Standard Connection String Format but can not figure it out how to get it by default,
      because if I try to write in standard form on Compass connection doesn't work at all... 🤔

[x] 13. Connected 
  * get the connection, but I can not see data in DB


## These are just snapshots of finished project, CSS can be better for sure, will work on it. 

![Finished project](/images/animals.png)
![Finished project](/images/back.png)