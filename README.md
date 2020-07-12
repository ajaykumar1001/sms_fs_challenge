#Steps to run the code:

1. Checkout code from github : https://github.com/ajaykumar1001/sms_fs_challenge.git

2. Go inside server folder and run command 'npm install' to install dependencies

3. Check whether mongodb running or not, If mongodb not running, start mongod

4. Go inside client foler and run command 'npm install' to install dependencies

5. Build the client code using command 'npm run-script build'

6. copy the dist folder content to public folder of server

7. Run ther server using command 'npm start'

8. Open broswer and hit url http://localhost:3000/


===================================================================================
# SMS fullstack challenge

### Your mission, should you choose to accept it

1. Setup a database of your choice and seed it from the `data.json`.
2. Write a backend that provides a RESTful interface to interact with this data
(CRUD).
3. Create a frontend that displays a table with the columns
**city**, **start date**, **end date**, **price**, **status**, **color**.
All columns should be sortable. The data is requested from the backend.
4. Above the grid, please add two date pickers to filter the object by date
range.

Though this is a small app, please pay attention to your application structure.
Host your code on github or bitbucket and include a README with instructions on
how to install and run your application. Bonus-points for providing a
docker-compose file to run your project :)
====================================================================================