// alert("What the hell bro!!!")
let accountNumber = "PT46738363"
let sliced = accountNumber.slice(0, 2);
let replaced = accountNumber.replace("P", "B");
console.log(accountNumber + " and " + sliced + " and " + replaced);

document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
})


// var greetingText = ["Good Morning!", "Good Afternoon!", "Good Night!"];

// var time = 89;

// function greetingDisplay() {
//     if (hours > 18) {
//         document.getElementById("greeting").innerHTML = greetingText[3]
//     } 
// }


function celsiusToFahr(temperature) {
    let = fahr = (temperature * 9/5) + 32;
    return fahr;
}


const greetingText = "Good AfterMorning!";
const weatherCondition = "sunny";
const userLocation = "Mumbai";
let temperature = 35.78;


let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} fahrenheit outside`
let fahrenheitText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} fahrenheit outside`

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function(e) {
    console.log(e.target.id)
    temp = e.target.id;
    if (temp == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    }
    else {
        document.querySelector("p#weather").innerHTML = fahrenheitText;
    }
    
});


// new Date().getHours();

// new Date().getMinutes();

// new Date().getSeconds();