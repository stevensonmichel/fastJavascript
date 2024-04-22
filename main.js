alert("What the hell bro!!!")
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