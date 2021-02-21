var db = firebase.firestore();

function addEmail(){
    var email = document.getElementById("inputbox").value;
    console.log("i")
    if(email != " "){
        db.collection("newsletter").add({
            email: email,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Your Email was added to the Newsletter!")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
    }
    else {
        alert("Missing Email!")
    }
}    