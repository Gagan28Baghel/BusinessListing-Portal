// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore,setDoc,doc} from"https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
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

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='app3.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })
/////////////////////////////////////////////////////////////////////////////////////////////
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},

breakpoints:{
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    },
},
});


  // Menu filer
  $("#menu-flters li a").click(function() {
    $("#menu-flters li a").removeClass('active');
    $(this).addClass('active');

    var selectedFilter = $(this).data("filter");
    //  $("#menu-wrapper").fadeTo(100, 0);

    $(".menu-restaurant").fadeOut();

    setTimeout(function() {
      $(selectedFilter).slideDown();
      //$("#menu-wrapper").fadeTo(300, 1);
    }, 300);
  });

  function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}
// Vendor carousel
$('.vendor-carousel').owlCarousel({
loop: true,
margin: 45,
dots: false,
loop: true,
autoplay: true,
smartSpeed: 1000,
responsive: {
    0:{
        items:2
    },
    576:{
        items:4
    },
    768:{
        items:6
    },
    992:{
        items:8
    }
}
});
// Latest-news-carousel
$(".latest-news-carousel").owlCarousel({
autoplay: true,
smartSpeed: 2000,
center: false,
dots: true,
loop: true,
margin: 25,
nav : true,
navText : [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>'
],
responsiveClass: true,
responsive: {
    0:{
        items:1
    },
    576:{
        items:1
    },
    768:{
        items:2
    },
    992:{
        items:3
    },
    1200:{
        items:4
    }
       }
    });
// What's New carousel
$(".whats-carousel").owlCarousel({
autoplay: true,
smartSpeed: 2000,
center: false,
dots: true,
loop: true,
margin: 25,
nav : true,
navText : [
    '<i class="bi bi-arrow-left"></i>',
    '<i class="bi bi-arrow-right"></i>'
],
responsiveClass: true,
responsive: {
    0:{
        items:1
    },
    576:{
        items:1
    },
    768:{
        items:2
    },
    992:{
        items:2
    },
    1200:{
        items:2
    }
}
});



// Modal Video
$(document).ready(function () {
var $videoSrc;
$('.btn-play').click(function () {
    $videoSrc = $(this).data("src");
});
console.log($videoSrc);

$('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
})

$('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
    })
});
    
