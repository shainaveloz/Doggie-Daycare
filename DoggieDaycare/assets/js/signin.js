/**
     * Handles the sign in button press.
     */
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          console.log('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          console.log('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            console.log('Wrong password.');
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }

    function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          console.log('The password is too weak.');
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }

    /**
     * Handles registering callbacks for the auth status.
     *
     * This method registers a listener with firebase.auth().onAuthStateChanged. This listener is called when
     * the user is signed in or out, and that is where we update the UI.
     *
     * When signed in, we also authenticate to the Firebase Realtime Database.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var refreshToken = user.refreshToken;
          var providerData = user.providerData;
          // [START_EXCLUDE silent]
          document.getElementById('quickstart-sign-in-status').textContent = 'You are now Signed In';
          document.getElementById('quickstart-sign-in').textContent = 'No user is logged in';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            photoURL: photoURL,
            isAnonymous: isAnonymous,
            uid: uid,
            refreshToken: refreshToken,
            providerData: providerData
          }, null, '  ');
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE silent]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]

      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
      document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
    }

    window.onload = function() {
      initApp();
    };