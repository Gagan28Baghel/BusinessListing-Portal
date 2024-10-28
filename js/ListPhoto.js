// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth, fetchSignInMethodsForEmail, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

function addBusiness() {
    const user = firebase.auth().currentUser;
    const businessName = sessionStorage.getItem('businessName');
    const pincode = sessionStorage.getItem('pincode');
    const blockNumber = sessionStorage.getItem('blockNumber');
    const streetColony = sessionStorage.getItem('streetColony');
    const area = sessionStorage.getItem('area');
    const landmark = sessionStorage.getItem('landmark');
    const city = sessionStorage.getItem('city');
    const state = sessionStorage.getItem('state');
    const businessCategory = document.getElementById("business-category").value;
    const files = document.getElementById("business-photo").files;

    const businessRef = db.collection("businesses").doc();
    const promises = [];

    // Uploading photos
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const storageRef = storage.ref(`businesses/${businessRef.id}/${file.name}`);
        const uploadTask = storageRef.put(file);
        promises.push(uploadTask);
    }

    Promise.all(promises)
        .then(() => {
            return businessRef.set({
                name: businessName,
                pincode: pincode,
                blockNumber: blockNumber,
                streetColony: streetColony,
                area: area,
                landmark: landmark,
                city: city,
                state: state,
                category: businessCategory,
                userId: user.uid
            });
        })
        .then(() => {
            console.log("Business added successfully!");
            // Redirect to the business listings page or show a success message
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("Error adding business:", error);
        });
}
