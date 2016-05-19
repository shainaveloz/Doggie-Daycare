
  var config = {
    apiKey: "AIzaSyC_q6gMjWo-6vJ2L1e0ckEBSRyiB_GVTxY",
    authDomain: "doggie-daycare.firebaseapp.com",
    databaseURL: "https://doggie-daycare.firebaseio.com",
    storageBucket: "gs://doggie-daycare.appspot.com/",
  };
  firebase.initializeApp(config);


var storage = firebase.storage();


var storageRef = storage.ref();


//Getting a snapshot of the database before
storageRef.createUser({
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

storageRef.on("value", function(snapshot) {



}, function (errorObject) {

   	console.log("The read failed: " + errorObject.code);

 });

