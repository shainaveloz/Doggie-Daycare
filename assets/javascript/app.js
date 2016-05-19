
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
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
})

var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
  });
}

var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});

var user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});

var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});

var auth = firebase.auth();
var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}, function(error) {
  // An error happened.
});

var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}, function(error) {
  // An error happened.
});

var user = firebase.auth().currentUser;
var credential;

// Prompt the user to re-provide their sign-in credentials

user.reauthenticate(credential).then(function() {
  // User re-authenticated.
}, function(error) {
  // An error happened.
});

// storageRef.createUser({
//   email: "bobtony@gmail.com",
//   password: "correcthorsebatterystaple"
// }, function(error, userData) {
//   if (error) {
//     switch (error.code) {
//       case "EMAIL_TAKEN":
//         console.log("The new user account cannot be created because the email is already in use.");
//         break;
//       case "INVALID_EMAIL":
//         console.log("The specified email is not a valid email.");
//         break;
//       default:
//         console.log("Error creating user:", error);
//     }
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//   }
// });

// storageRef.on("value", function(snapshot) {



// }, function (errorObject) {

 //   	console.log("The read failed: " + errorObject.code);

 // });

