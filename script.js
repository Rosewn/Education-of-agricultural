document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    var personality = document.getElementById("personality").value;
    var gender = document.getElementById("gender").value;
    document.getElementById("form-container").style.display = "none";
    document.getElementById("welcome-container").style.display = "block";
    document.getElementById("content-container").style.display = "block";
    var userWelcomeMessage = document.createElement("h2");
    userWelcomeMessage.textContent = "Welcome, " + name + "!";
    document.getElementById("welcome-container").prepend(userWelcomeMessage);

    var userDetails = document.createElement("p");
    userDetails.textContent = "Age: " + age + ", City: " + city + ", Personality: " + personality + ", Gender: " + gender;
    document.getElementById("welcome-container").append(userDetails);
});
