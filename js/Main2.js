const firebaseConfig = {
    apiKey: "AIzaSyBhfqw8o26OOLrylEVxE6PGQIV5DT4iVhs",
    authDomain: "smartcity-24ece.firebaseapp.com",
    databaseURL: "https://smartcity-24ece-default-rtdb.firebaseio.com",
    projectId: "smartcity-24ece",
    storageBucket: "smartcity-24ece.appspot.com",
    messagingSenderId: "396333959871",
    appId: "1:396333959871:web:78746be5e68c40c959d40a",
    measurementId: "G-SCNZSW61SD"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
   
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phone = getElementVal("phone");
  var msgContent = getElementVal("msgContent");
  var queryPurpose = getElementVal("queryPurpose");


  saveMessages(name, emailid, phone, msgContent, queryPurpose);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phone,msgContent,queryPurpose) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phone: phone,
    msgContent: msgContent,
    queryPurpose: queryPurpose,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};