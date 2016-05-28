var config = {
    apiKey: "AIzaSyBgYSM4Czn3dm0zULiwhfnMUR4FEBOFEnQ",
    authDomain: "doggie-daycare.firebaseapp.com",
    databaseURL: "https://doggie-daycare.firebaseio.com",
    storageBucket: "gs://doggie-daycare.appspot.com/",
  };
  firebase.initializeApp(config);


var storage = firebase.storage();


var storageRef = storage.ref();

$('#loginButton').on('click', function(){

  var names = $('#username');
  var pwds = $('#password');
  var email = $('#email');
  if (username == names && password == pwds && email == email) {
      storageRef.set({
        names: username
      })
      storageRef.child('names').set({
        pwds: password,
        email:email
      })
    // loads to backend user page
    window.location.replace("http://index.html");

  } else if(username !== names && password !== pwds && email !== email) {
    storageRef.push({
        names: username
    })
    storageRef.child('names').push({
        pwds: password,
        email: email
    })
  }
  
});

//listener for 'enter' in username input
$('#username').keypress(function(e) {
  if (e.keyCode == 13 && $('#username').val() !== "") {
    username = capitalize($('#username').val());
    password = capitalize($('#password').val());
    email = capitalize($('#email').val());
    window.location.replace("http://index.html");
  }
});

//Function to capitalize usernames
function capitalize(name) {
  return names.charAt(0).toUpperCase() + names.slice(1);
}


storageRef.on('value', function(snapshot){
  var names = $('#username').val().trim();
  var email = $('#email').val().trim();
  var pwds = $('#password').val().trim;
 
})
