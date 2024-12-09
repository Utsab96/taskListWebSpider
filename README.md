Project Name-TaskApi

For setting the project copy the reposetory.
Create a database as taskList
Provide the database connection link for a cloud database
For a local database keep it as it is.

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

***ALL THE GIVEN APIS ARE RUNNING SUCCESFULLY***