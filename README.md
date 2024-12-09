Project Name-TaskApi

For setting the project copy the reposetory.
Download NodeJs mongodb. 
Install nodemon as npm install nodemon -g(install it globally)
Provide the database connection link for a cloud database
For a local database keep it as it is.
Just initialize the program database will automaticlly get created as name taskList
unless you chnage the name of database in provided link
Before you run the programme in terminal write npm install(so all the dependicies will get install)
or you can install manully dependicies as given the project.json file
as example npm install express cors dotenv 

Create a .env file for the environment provide your PORT and HOST
after all the conncetion test the APIs
Here is the list all apis

Post Task-http://127.0.0.1:3000/api/task/add
**make sure to provide taks as per the task model

Get Task 
api for all tasks-http://127.0.0.1:3000/api/task/all

find task by id-http://127.0.0.1:3000/api/task/find/tid
** in place of tid provide task id
as example http://127.0.0.1:3000/api/task/find/675696d4e552ec185db56af6

api for find pending task-http://127.0.0.1:3000/api/task/findPending/

api for find completed task-http://127.0.0.1:3000/api/task/findCompleted/

api for get high priority task-http://127.0.0.1:3000/api/task/findHigh/

api for get low priority task-http://127.0.0.1:3000/api/task/findLow/

api for updating any task-http://127.0.0.1:3000/api/task/update/tid/
**here provide the task id in place of tid
**make sure to provide the update details for the current task

api for deleting any task-http://127.0.0.1:3000/api/task/delete/tid/
** here provide the task id in place of tid

As a bonus Sign up and Sign in is added and token middleware is added for Authentication 

api for sign up-http://127.0.0.1:3000/api/user/signup
api for sign in-http://127.0.0.1:3000/api/user/signin

*** token is only added to the get all task api so before checking the all task need to send the tokwn via headers
token you will get by signing in
you can sign up as in the given api provide name, email phone and password
Password are kept safe by hash password
as a demo you can login with email-joy@gmail.com and password-J@123


***ALL THE GIVEN APIS ARE RUNNING SUCCESFULLY***
