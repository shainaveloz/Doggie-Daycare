
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
//firebase.auth().onAuthStateChanged(function(user) {
//  if (user) {
    // User is signed in.
//  } else {
    // No user is signed in.
//  }
//})
//
//var user = firebase.auth().currentUser;
//console.log(user, "this is user var line 27")
//if (user) {
  // User is signed in.
//} else {
  // No user is signed in.
//}
//
//var name, email, photoUrl, uid;
//
//if (user != null) {
//  name = user.displayName;
//  email = user.email;
//  photoUrl = user.photoURL;
//  uid = user.uid;
//}
//
//
//if (user != null) {
//  user.providerData.forEach(function (profile) {
//    console.log("Sign-in provider: "+profile.providerId);
//    console.log("  Provider-specific UID: "+profile.uid);
//    console.log("  Name: "+profile.displayName);
//    console.log("  Email: "+profile.email);
//    console.log("  Photo URL: "+profile.photoURL);
//  });
//}
//
//storageRef.set({
//    user : user
//    });


//user.updateProfile({
//  displayName: "Jane Q. User",
//  photoURL: "https://example.com/jane-q-user/profile.jpg"
//}).then(function() {
  // Update successful.
//}, function(error) {
  // An error happened.
//});
//
//
//user.updateEmail("user@example.com").then(function() {
  // Update successful.
//}, function(error) {
  // An error happened.
//});
//
//var newPassword = getASecureRandomPassword();
//
//user.updatePassword(newPassword).then(function() {
  // Update successful.
//}, function(error) {
  // An error happened.
//});
//
//var auth = firebase.auth();
//var emailAddress = "user@example.com";
//
//auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
//}, function(error) {
  // An error happened.
//});


//user.delete().then(function() {
  // User deleted.
//}, function(error) {
  // An error happened.
//});
//
//var credential;

// Prompt the user to re-provide their sign-in credentials

//user.reauthenticate(credential).then(function() {
//  // User re-authenticated.
//}, function(error) {
//  // An error happened.
//});



//Meetup API

//var meetKey = 4a1e561d7323254a5232128494a5934;
var queryURL = "https://api.meetup.com/find/groups?photo-host=public&location=Orlando%2C+FL&page=20&text=pets&sig_id=205737583&category=26&sig=7b2b0507a806d0cde91e74f6c7c25969bf44625c";

$.ajax({url: queryURL, method: 'GET'})
		.done(function(response) {
		    var meetUrl = response;
            var meetBox = $("<div>");
            meetBox.attr('src', meetUrl);
            meetBox.attr('alt', 'meet div');
            $('#list').prepend(meetBox);
		})
//			var meetUrl = response;
//			var meetBox = $("<div>");
//			meetBox.attr('src', meetUrl);
//            meetBox.attr('alt', 'meet div');
//              $('#list').prepend(meetBox);


//    $.ajax({url: queryURL, method: 'GET'})
//     .done(function(response) {
//         var results = response.data;
//
//         for(var i=0; i < results.length; i++){
//             var animalDiv = $('<div class="animal-item">')
//
//             var rating = results[i].rating;
//
//             var p = $('<p>').text( "Rating: " + rating);
//
//             var animated = results[i].images.fixed_height.url;
//             var still = results[i].images.fixed_height_still.url;
//
//             var animalImage = $('<img>');
//             animalImage.attr('src', still);
//             animalImage.attr('data-still', still);
//             animalImage.attr('data-animate', animated);
//             animalImage.attr('data-state', 'still')
//             animalImage.addClass('animalImage');
//
//             animalDiv.append(p)
//             animalDiv.append(animalImage)
//
//             $('#animals').append(animalDiv);
//         }
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

