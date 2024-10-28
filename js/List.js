import { initializeApp } from 'firebase/app';
import { getAuth, fetchSignInMethodsForEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/Firestore';

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
const fireDB = getFirestore(app);
export{fireDB, auth}

document.addEventListener("DOMContentLoaded", function() {
    function checkUser() {
        const email = document.getElementById("email").value;

        if (!email) {
            alert("Please enter your email.");
            return;
        }

        fetchSignInMethodsForEmail(auth, email)
            .then((signInMethods) => {
                if (signInMethods.length > 0) {
                    // If the user exists, prompt for password and sign in
                    const password = prompt("Enter your password:");
                    if (password) {
                        signInWithEmailAndPassword(auth, email, password)
                            .then(() => {
                                // Redirect to the business listing page
                                window.location.href = 'ListBusiness.html';
                            })
                            .catch((error) => {
                                console.error("Error signing in:", error);
                                alert("Error signing in: " + error.message);
                            });
                    } else {
                        alert("Password is required to sign in.");
                    }
                } else {
                    // If the user does not exist, redirect to the sign-up page
                    alert("No account found with this email. Please sign up.");
                    window.location.href = 'app3.html'; 
                }
            })
            .catch((error) => {
                console.error("Error checking sign-in methods:", error);
                alert("Error checking sign-in methods: " + error.message);
            });
    }

    document.getElementById("startButton").addEventListener("click", checkUser);

    // Fetch and display businesses by category
    function listBusinesses(category) {
        const businessesList = document.getElementById("businessesList");

        const q = query(collection(db, "businesses"), where("category", "==", category));
        getDocs(q).then((querySnapshot) => {
            businessesList.innerHTML = ""; // Clear previous entries
            querySnapshot.forEach((doc) => {
                const business = doc.data();
                const div = document.createElement("div");
                div.className = "col-md-4";
                div.innerHTML = `<h4>${business.name}</h4><p>${business.description}</p>`;
                businessesList.appendChild(div);
            });
        }).catch((error) => {
            console.error("Error fetching businesses:", error);
        });
    }

    // Assuming the category name is passed in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        listBusinesses(category);
    }
});
