// Link to Firebase
var doggieData = new Firebase("https://doggie-daycare.firebaseio.com/");


//Getting a snapshot of the database before
doggieData.on("value", function(snapshot) {



}, function (errorObject) {

   	console.log("The read failed: " + errorObject.code);

 });

