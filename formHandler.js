    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js'
    import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'

    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFO53LDD--BrnuDbREU_ayJa5UdUhcejQ",
    authDomain: "projzal-b53a0.firebaseapp.com",
    databaseURL: "https://projzal-b53a0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projzal-b53a0",
    storageBucket: "projzal-b53a0.appspot.com",
    messagingSenderId: "800908949534",
    appId: "1:800908949534:web:7e5f27411ba0ab4426560f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


 document.getElementById('contactForm').addEventListener('submit', submitForm);

 function submitForm(e){
    e.preventDefault();

    let name = getElementVal('name');
    let email = getElementVal('email');
    let phoneNumber = getElementVal('phoneNumber');
    let messageContent = getElementVal('messageContent');

    try {
        const docRef = addDoc(collection(db, "ContactFormMessages"), {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          messageContent: messageContent
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      document.querySelector('[sendformbutton]').remove();
      document.querySelector('.test').classList.toggle('active');

      let formInputs = document.querySelectorAll('.inputBox *')
      formInputs.forEach(element => {
        element.disabled = true;
      });

    console.log(name, email, phoneNumber, messageContent);
 }

 const getElementVal = (id) => {
    return document.getElementById(id).value;
 }