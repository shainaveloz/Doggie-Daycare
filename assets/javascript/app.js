// Link to Firebase
var doggieData = new Firebase("https://doggie-daycare.firebaseio.com/");


// user creation function
doggieData.createUser({
  email: "bobtony@gmail.com",
  password: "correcthorsebatterystaple"
}, function(error, userData) {
  if (error) {
    switch (error.code) {
      case "EMAIL_TAKEN":
        console.log("The new user account cannot be created because the email is already in use.");
        break;
      case "INVALID_EMAIL":
        console.log("The specified email is not a valid email.");
        break;
      default:
        console.log("Error creating user:", error);
    }
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});

doggieData.on("value", function(snapshot) {



}, function (errorObject) {

   	console.log("The read failed: " + errorObject.code);

 });

