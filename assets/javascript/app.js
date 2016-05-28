
  var config = {
    apiKey: "AIzaSyC_q6gMjWo-6vJ2L1e0ckEBSRyiB_GVTxY",
    authDomain: "doggie-daycare.firebaseapp.com",
    databaseURL: "https://doggie-daycare.firebaseio.com",
    storageBucket: "gs://doggie-daycare.appspot.com/",
  };
  firebase.initializeApp(config);


var storage = firebase.storage();


var storageRef = storage.ref();

$('#loginButton').on('click', function(){

  var username = $('#username');
  var pw = $('#password');
  if (username == names && password == pwds) {
      storageRef.set({
        names: username,
        pwds: password
      })
    // loads to backend user page
    window.location.replace("http://index.html");

  } else if(username !== names && password !== pwds) {
    storageRef.push({
        names: username,
        pwds: password
    })
  }
  
});


// storageRef.on('value', function(snapshot){

//   // Getting a snapshot of the database before
//   firebase.auth().onAuthStateChanged(function(user) {
//    if (user) {
//       // User is signed in.
//    } else {
//       // No user is signed in.
//    }

//     var user = firebase.auth().currentUser;
//   })

// })

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
//
//
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



//
//storageRef.set({
//    user : user
//    });


//
//var updateProfile = storageRef.child('displayName').put(name);
//var updateEmail = storageRef.child('email').put(updateEmail);
//var updatePassword = storageRef.child('password').put(updatePassword);
//var sendPasswordResetEmail = storageRef.child('resetEmail').put(sendPasswordResetEmail);

//
//push({ (this is done if the user is not already there)
//    displayName: name,
//    Email: email
//
//})







