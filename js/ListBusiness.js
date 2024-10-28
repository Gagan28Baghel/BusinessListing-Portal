 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth, fetchSignInMethodsForEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAhks51iuwIx3yiEpX5L47L_s4VS1a4BrQ",
  authDomain: "login-signup-69a45.firebaseapp.com",
  projectId: "login-signup-69a45",
  storageBucket: "login-signup-69a45.appspot.com",
  messagingSenderId: "372631009207",
  appId: "1:372631009207:web:2a13f863513680060cda32",
  measurementId: "G-6Q9GXSD6D1"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 function goToStep2() {
  const businessName = document.getElementById("business-name").value;
  const pincode = document.getElementById("pincode").value;
  const blockNumber = document.getElementById("block-number").value;
  const streetColony = document.getElementById("street-colony").value;
  const area = document.getElementById("area").value;
  const landmark = document.getElementById("landmark").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Save business details temporarily in session storage
  sessionStorage.setItem('businessName', businessName);
  sessionStorage.setItem('pincode', pincode);
  sessionStorage.setItem('blockNumber', blockNumber);
  sessionStorage.setItem('streetColony', streetColony);
  sessionStorage.setItem('area', area);
  sessionStorage.setItem('landmark', landmark);
  sessionStorage.setItem('city', city);
  sessionStorage.setItem('state', state);

  // Check if the user is signed in and redirect accordingly
  onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in, redirect to the Add Business page
          window.location.href = 'ListPhoto.html';
      } else {
          // No user is signed in, redirect to the signup page
          window.location.href = ''; // Replace with the correct signup page path
      }
  });
}

// Attach the event listener to the button
document.getElementById("nextButton").addEventListener("click", goToStep2);