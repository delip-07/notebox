// Selecting pop-up box, popup-overlay
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

// When clicking the "Add Note" button, show pop-up
addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

// Selecting cancel button
var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// Adding the new note
var container = document.querySelector(".container");
var addbook = document.getElementById("add-note");
var booktitleinput = document.getElementById("note-title-input");
var bookdescriptioninput = document.getElementById("note-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();

  // Validate inputs before adding
  if (booktitleinput.value && bookdescriptioninput.value) {
    // Create new note div
    var div = document.createElement("div");
    div.setAttribute("class", "note-container");

    // Insert book details into div
    div.innerHTML = `
            <h2>${booktitleinput.value}</h2>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletenote(event)">Delete</button>
        `;

    // Append new note to container
    container.append(div);

    // Clear form inputs after adding the note
    booktitleinput.value = "";
    bookdescriptioninput.value = "";

    // Hide the pop-up after adding the note
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
  } else {
    alert("Please fill out all fields.");
  }
});

// Delete note function
function deletenote(event) {
  event.target.parentElement.remove();
}
