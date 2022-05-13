
const firebase = require("firebase");


 const config = {

    apiKey: "AIzaSyCHNycnDFAI9YoAmVBEyT9F10t585EzWK4",
  
    authDomain: "ultratechgenius.firebaseapp.com",
  
    databaseURL: "https://ultratechgenius.firebaseio.com",
  
    projectId: "ultratechgenius",
  
    storageBucket: "ultratechgenius.appspot.com",
  
    messagingSenderId: "55654899824",
  
    appId: "1:55654899824:web:5b3a7fe6484fbbb9a494b5",
  
    measurementId: "G-KXREG7KC8B"
  
  }

  const firebaseApp = firebase.initializeApp(config)
  const firestore = firebaseApp.firestore()

  module.exports={firebaseApp, firestore  }
//   const firestore = app.firestore()
//   const storage = app.storage()

  
//   module.exports ={app, firestore, storage }




