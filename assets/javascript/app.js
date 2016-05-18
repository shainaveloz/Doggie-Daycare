// Link to Firebase
var doggieData = new Firebase("ADD YOUR APP URL");


//Getting a snapshot of the database before
doggieData.on("value", function(snapshot) {



}, function (errorObject) {

   	console.log("The read failed: " + errorObject.code);

 });

