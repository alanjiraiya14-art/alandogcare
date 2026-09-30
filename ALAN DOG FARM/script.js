// SEARCH FUNCTION
document.getElementById("searchInput").addEventListener("keyup", function () {

    let searchValue = this.value.toLowerCase();

    let dogs = document.querySelectorAll(".dog-card");

    dogs.forEach(function (dog) {

        let dogName = dog.querySelector("h2").textContent.toLowerCase();

        if (dogName.includes(searchValue)) {
            dog.style.display = "block";
        } else {
            dog.style.display = "none";
        }

    });

});


// VIEW DETAILS FUNCTION
function viewDetails(name, age, gender, price, location, image) {

    document.getElementById("detailsName").textContent = name;
    document.getElementById("detailsAge").textContent = age;
    document.getElementById("detailsGender").textContent = gender;
    document.getElementById("detailsPrice").textContent = price;
    document.getElementById("detailsLocation").textContent = location;
    document.getElementById("detailsImage").src = image;

    document.getElementById("detailsBox").style.display = "flex";
}


// CLOSE DETAILS
function closeDetails() {

    document.getElementById("detailsBox").style.display = "none";

}


// CONTACT OWNER
function contactOwner() {

    window.location.href = "tel:6380303570";

}