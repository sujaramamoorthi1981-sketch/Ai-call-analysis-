// LOGIN
function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("loginMessage");

    if (email === "" || password === "") {

        message.innerText = "Please enter email and password.";
        message.style.color = "red";

        return;
    }

    if (password.length < 4) {

        message.innerText = "Password must contain at least 4 characters.";
        message.style.color = "red";

        return;
    }

    // Login successful
    localStorage.setItem("loggedIn", "true");

    window.location.href = "index.html";
}


// LOGOUT
function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";
}


// FILE NAME
function showFileName() {

    let file = document.getElementById("audioFile").files[0];
    let fileName = document.getElementById("fileName");

    if (file) {

        fileName.innerText = "Selected File: " + file.name;
        fileName.style.color = "#6d28d9";

    } else {

        fileName.innerText = "";

    }
}


// ANALYZE CALL
function analyzeCall() {

    let file = document.getElementById("audioFile").files[0];

    if (!file) {

        alert("Please upload an audio file first.");
        return;

    }

    document.getElementById("loading").style.display = "block";

    setTimeout(function () {

        document.getElementById("loading").style.display = "none";

        document.getElementById("emotion").innerText = "Happy 😊";

        document.getElementById("sentiment").innerText = "Positive";

        document.getElementById("score").innerText = "87%";

        document.getElementById("duration").innerText = "04:32";


        document.getElementById("transcript").innerText =
        `Customer: Hello, I need help with my order.

Support: Sure! I will check your order details.

Customer: My order has not arrived yet.

Support: I checked the status. Your order will arrive tomorrow.

Customer: Okay, thank you for the quick help.

Support: You're welcome. Have a great day!`;


        document.getElementById("summary").innerText =
        "The customer contacted the support team regarding a delayed order. " +
        "The support agent checked the order status and provided the expected delivery date. " +
        "The customer was satisfied with the response and the issue was resolved.";


        document.getElementById("keyPoints").innerHTML = `
            <li>Customer requested help with an order.</li>
            <li>Support agent responded quickly.</li>
            <li>Order delivery status was explained.</li>
            <li>Customer was satisfied.</li>
            <li>Overall conversation was positive.</li>
        `;

    }, 2000);
}


// RESET
function resetAnalysis() {

    document.getElementById("audioFile").value = "";

    document.getElementById("fileName").innerText = "";

    document.getElementById("emotion").innerText = "--";

    document.getElementById("sentiment").innerText = "--";

    document.getElementById("score").innerText = "--";

    document.getElementById("duration").innerText = "--";

    document.getElementById("transcript").innerHTML =
        "Upload a call and click <b>Analyze Call</b> to view transcript.";

    document.getElementById("summary").innerText =
        "AI-generated summary will appear here.";

    document.getElementById("keyPoints").innerHTML =
        "<li>Call analysis results will appear here.</li>";
}


// COPY TRANSCRIPT
function copyTranscript() {

    let transcript =
        document.getElementById("transcript").innerText;

    navigator.clipboard.writeText(transcript);

    alert("Transcript copied!");
}
