// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var image = document.getElementById("modalImage");

var body = document.getElementById("portfolio");

// When the user clicks on the button, open the modal
function openModal(link) {
    image.src = link;
    body.className = "modal-open";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    body.className = "";
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    body.className = "";
    modal.style.display = "none";
  }
}