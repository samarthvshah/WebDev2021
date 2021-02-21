
var db = firebase.firestore();
function addBooking(){
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("phoneNumber").value;
    var time = document.getElementById("time").value;
    var date = document.getElementById("datePicker").value;
    if(firstName != " "){
        if(lastName != " "){
            if(email != " "){
                if(phoneNumber != " "){
                        if(time != " "){
                            if(date != " "){
                                db.collection("bookings").add({
                                    firstName: firstName,
                                    lastName: lastName,
                                    email: email,
                                    phoneNumber: number,
                                    time:time,
                                    date: date 
                                })
                                .then((docRef) => {
                                    alert("Booking Made!");
                                })
                                .catch((error) => {
                                    alert("Error adding document: ", error);
                                });;

                            }
                            else {
                                alert("Missing Date!")
                            }
                        }
                        else {
                            alert("Missing Time!")
                        }
                }
                else {
                    alert("Missing Phone Number!")
                }
            }
            else {
                alert("Missing Email!")
            }
        }
        else {
            alert("Missing Last Name!")
        }
    }
    else {
        alert("Missing First Name!")
    }
}

    