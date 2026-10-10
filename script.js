// ===============================
// SEARCH BUTTON
// ===============================

const searchButton = document.querySelector(".search-btn");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        alert("Travel search is coming soon! ✈️");

    });

}


// ===============================
// AI TRAVEL BUTTON
// ===============================

const aiButton = document.querySelector(".ai-button");

if (aiButton) {

    aiButton.addEventListener("click", function () {

        alert(
            "Our AI Travel Assistant will help you find your perfect trip! ✨"
        );

    });

}


// ===============================
// BOOKING POPUP
// ===============================

function openBooking() {

    const popup = document.getElementById("bookingPopup");

    if (popup) {
        popup.classList.add("active");
    }

}


function closeBooking() {

    const popup = document.getElementById("bookingPopup");

    if (popup) {
        popup.classList.remove("active");
    }

}


// ===============================
// BOOKING FORM
// ===============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your booking request has been received. ✈️🌴"
        );

        bookingForm.reset();

        closeBooking();

    });

}