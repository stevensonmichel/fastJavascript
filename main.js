const weatherAPIKey = "6f68435129e34d1798c4ad2d48c10423";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`;

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]

// Menu Section
function menuHandler() {
    document.querySelector("#open-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function() {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

// Greeting Section
function greetingHandler() {
    let greetingText;
    let currentHours = new Date().getHours();

    if (currentHours < 12) {
        greetingText = "Good Morning!";
    } else if (currentHours < 19) {
        greetingText = "Good Afternoon!";
    } else if (currentHours < 24) {
        greetingText = "Good Evening!";
    } else {
        greetingText = "Welcome!";
    }

    const weatherCondition = "sunny";
    const userLocation = "Mumbai";
    let temperature = 35.78;

    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} fahrenheit outside`
    let fahrenheitText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} fahrenheit outside`

    document.querySelector("#greeting").innerHTML = greetingText;
    document.querySelector("p#weather").innerHTML = celsiusText;

    document.querySelector(".weather-group").addEventListener("click", function(e) {
        temp = e.target.id;
        if (temp == "celsius") {
            document.querySelector("p#weather").innerHTML = celsiusText;
        }
        else {
            document.querySelector("p#weather").innerHTML = fahrenheitText;
        }
    });
}

// Converter Section
function celsiusToFahr(temperature) {
    let = fahr = (temperature * 9/5) + 32;
    return fahr;
}

// Clock Section
function clockHandler() {
    setInterval(function() {
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
    }, 1000);
}

// let animals = ["dog", "cat", "cow", "elephant", "lion"]

// for (let a = 0; a < animals.length; a++) {
//     console.log(animals[a]);
// }

// for (let a in animals) {
//     console.log(animals[a]);
// }

// Gallery Section
function galleryHandler() {
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");

    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;

    galleryImages.forEach(function(image, index) {
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;
        thumb.addEventListener("click", function(e) {
            let selectedIndex = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            mainImage.src = galleryImages[selectedIndex].src;
            mainImage.alt = galleryImages[selectedIndex].alt;
            thumbnails.querySelectorAll("img").forEach(function(img) {
                img.dataset.selected = false;
            })
            e.target.dataset.selected = true;
        })
        thumbnails.appendChild(thumb);

    // if (index === 0) {
    //     thumb.dataset.selected = true;
    // }
    // else {
    //     thumb.dataset.selected = false;
    // }
    })
}


/* for (let i in galleryImages) {
    console.log(galleryImages[i]);
}
 */



// Products Section


function populateProducts(productList) {
    let productSection = document.querySelector(".products-area");
    productSection.textContent = "";
    productList.forEach(function(product, index) {
        // Create the html for the individual image
        let productElement = document.createElement("div");
        productElement.classList.add("product-item");
        
        // Create the product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        // Create the product detail section
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create product title, author, price-title, and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;

        let productPriceTitle = document.createElement("p");
        productPriceTitle.classList.add("price-title");
        productPriceTitle.textContent = "Price";

        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$ " + product.price.toFixed(2) : "Free";


        // Append the product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(productPriceTitle);
        productDetails.append(productPrice);

        productElement.append(productImage);
        productElement.append(productDetails);

        productSection.append(productElement)
    });
}



/* <div class="product-item">
    <img src="./assets/products/img1.png" alt="Space Odissey">
    <div class="product-details">
        <h3 class="product-title">Space Odissey</h3>
        <p class="product-author">Marie Anne</p>
        <p class="price-title">Price</p>
        <p class="product-price">$ 35.00</p>
    </div>
</div> */


function productsHandler() {
    
    let freeProducts = products.filter(item => !item.price || item.price <= 0);
    let paidProducts = products.filter(item => item.price > 0);

    populateProducts(products);

    
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length; 
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productsFilter = document.querySelector(".products-filter");
    productsFilter.addEventListener("click", function(e) {
        if (e.target.id === "all") {
            populateProducts(products);
        } else if (e.target.id === "paid") {
            populateProducts(paidProducts);
        } else if (e.target.id === "free") {
            populateProducts(freeProducts);
        }
    })
}


function footerHandler() {
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `© ${currentYear} - All rights reserved`
}

navigator.geolocation.getCurrentPosition(position => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let url = weatherAPIURL
        .replace("{lat}", latitude)
        .replace("{lon}", longitude)
        .replace("{API key}", weatherAPIKey);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // const weatherCondition = data.weather[0].description;
            console.log(data);
        });
})

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let greaterThan4 = numbers.filter(function(item) {
//     return item > 5;
// })

// Page Load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();