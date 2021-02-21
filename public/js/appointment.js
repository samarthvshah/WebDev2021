var firebaseConfig = {
apiKey: "AIzaSyDi_V2ho1-oNusU_3cDStqBRra84SoQpr4",
authDomain: "webdev2021-965d8.firebaseapp.com",
projectId: "webdev2021-965d8",
storageBucket: "webdev2021-965d8.appspot.com",
messagingSenderId: "979942163797",
appId: "1:979942163797:web:2f4b96315370f279bc9bdc",
measurementId: "G-PF3FL3VHK0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Initialize and add the map
function initMap() {
// The location of Uluru
const cupertino = { lat: 37.3230, lng: -122.0322 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: cupertino,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
    position: cupertino,
    map: map,
});
}

db.collection("bookings").add({
    first: "Raj",
    last: "Raghulan",
    email: "rajraghulan@gmail.com",
    phoneNumber: "408-833-3466",
    date:  "4-20-2021",
    time: "14:00",
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});;

    