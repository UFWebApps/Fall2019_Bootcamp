/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema for the data in the listings.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
var listingSchema = new Schema({
  /* Your code for a schema here */ 
  //Check out - https://mongoosejs.com/docs/guide.html
	code: {type: String, required: true},
	name: {type: String, required: true},
	coordinates: {
		latitude: Number, 
		longitude: Number
	},
	address: String,
	created_at: Date,
	update_at: Date
});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
listingSchema.pre('save', function(next) {
  /* your code here */
	if(!this.code || !this.name){
		throw Error;
	}
	var currentDate = new Date();
	this.update_at = currentDate;
	if(!this.created_at)
		this.created_at = currentDate;
	next();
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
