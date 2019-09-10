# Assignment 2: Persisting data using MongoDB and Mongoose

Our application at this point has an issue one majore issue... 
- Each time the server starts, we reload the data from the same JSON file. 
 
It would be better if the data was stored elsewhere in a *persistent* fashion so that even if the server were to crash, our data would remain unharmed.

In this assignment, we will focus on persisting data by moving the JSON file to a dedicated database.  In our case, we will be using [MongoDB](https://www.mongodb.org/), which stores data as **documents**. These documents are very similar to JSON objects, making MongoDB a good candidate for our web application. 

### Mongoose
If you take a look at MongoDB's [introductory documentation](https://docs.mongodb.org/getting-started/node/introduction/), you will notice there's quite a bit of code that has to be written to add, find, update, or delete data using their APIs. [Mongoose](https://mongoosejs.com/docs/index.html) simplifies the process of communicating with MongoDB and also provides tools to organize/model the data into [**schemas**](https://mongoosejs.com/docs/guide.html). Schemas are used to pre-define the data's attributes, and the type each attribute will have. [Read this tutorial that discusses how to use Mongoose with Node.js - uses callbacks](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications) or [uses promises](https://developerhandbook.com/mongodb/connect-mongo-atlas-mongoose/) before continuing with the assignment.

### MongoDB Atlas
MongoDB Atlas is an online service, Database as a services [(DBaaS)](https://www.techopedia.com/definition/29431/database-as-a-service-dbaas) that will host your database in the cloud. While you could just run a local instance of MongoDB, registering for an account with MongoDB Atlas removes hassles surrounding installing the database on your machine. Make sure to [register for an account](https://www.mongodb.com/cloud/atlas) before completing the assignment. 

### Assignment
To port the listing data to MongoDB, you will be doing the following: 
- Defining a schema for the 'Listing' collection 
- Create a script that converts the JSON entries into Mongo documents and saves the documents to your database
- Retrieve/update/delete documents through database queries.js

Instructions:
0. Make sure to [register for a MongoDB Atlas account](https://www.mongodb.com/cloud/atlas) before starting the assignment. 
1. Clone the repository  then install Mongoose and Initiate the repository
`npm install -g mongoose`
`npm init -y`
`npm i --save mongoose`
2. Define your schema in `ListingSchema.js`
3. Create a `config.js` file (based on `config.example.js`) and add the uri to your MongoDB Atlas database (See Step 0 above).
3. Ensure your schema passes the tests by running `mocha listing.model.test.js`
`npm install should` 
//[Should](https://shouldjs.github.io/) is a testing definition libary. Installation needed only the first time you run mocha
`mocha listing.model.test.js`
4. Fill out the `JSONtoMongo.js` script to add the listings to your database
- Once complete run `node JSONtoMongo.js` to add the json file of listings to your database
5. Complete the functions in `queries.js`
- Once complete run `node queries.js` //It should print out all the listings
