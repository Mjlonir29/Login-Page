document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    

    
    
    if (username === "admin" && password === "1234") {
        message.style.color = "lime";
        message.innerText = "Login Successful!";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect after login
        }, 2000);
    } else {
        
        message.style.color = "red";
        message.innerText = "Invalid Credentials!";
    }
});


const wavePath = document.getElementById("wave-path");
const waveValues = [
    "M0,160L60,140C120,120,240,90,360,110C480,130,600,200,720,220C840,240,960,210,1080,180C1200,150,1320,100,1380,80L1440,60V320H0Z",
    "M0,140L80,160C160,180,320,220,480,210C640,200,800,140,960,120C1120,100,1280,140,1360,160L1440,180V320H0Z"
];

let index = 0;
setInterval(() => {
    wavePath.setAttribute("d", waveValues[index]);
    index = (index + 1) % waveValues.length;
}, 2000);
