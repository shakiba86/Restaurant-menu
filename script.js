let pizzaButton = document.getElementById("pizza");
let saladButton = document.getElementById("salad");
let mainCourseButton = document.getElementById("mainCourse");
let soupButton = document.getElementById("soup");
let dessertButton = document.getElementById("dessert");
let drinkButton = document.getElementById("drink");
let selectAllButton = document.getElementById("all");
let itemList = document.querySelector("ul")

let menu = [
    {
        title: "Margaret",
        image: "assets/images/margaret.png",
        price: "8,70 €",
        category: "pizza",
        description: "Homemade pizza dough topped with Italian tomato sauce creamy mozzarella cheese"
    },
    {
        title: "Hawaiian Pizza",
        image: "assets/images/Diavola.jpg",
        price: "8,70 €",
        category: "pizza",
        description: "Hawaiian pizza is the perfect combination of sweet and savoury flavours, with delicious melted mozzarella."
    },
    {
        title: "Mushroom Pizza",
        image: "assets/images/mashroom.jpg",
        price: "9,70 €",
        category: "pizza",
        description: "top of an Italian tomato sauce and mozzarella cheese makes for a tasty succulent pizza the whole family will love."
    },
    {
        title: "Spicy cabbage salad",
        image: "assets/images/Spicy cabbage salad.png",
        price: "5,20 €",
        category: "salad",
        description: "Spicy chinees cabbage salad are a delicious salad which made of cabbage ."
    },
    {
        title: "Korean spicy salad",
        image: "assets/images/Korean spicy salad.png",
        price: "5,50 €",
        category: "salad",
        description: "Spicy Korean kim-chi cabbage salad."
    },
    {
        title: "Cold seaweed",
        image: "assets/images/Cold seaweed.png",
        price: "6,20 €",
        category: "salad",
        description: "Seaweed Wakame salad 180 g"
    },
    {
        title: "Coconut balls",
        image: "assets/images/Coconut balls.png",
        price: "3,90 €",
        category: "dessert",
        description: "A classic chinees summer dessert which made of coconut."
    },
    {
        title: " Fried banana and stomach",
        image: "assets/images/friedbanana.png",
        price: "€5.50",
        category: "dessert",
        description: "Deep fried bananas with honey ."
    },
    {
        title: "Tiramisu rez",
        image: "assets/images/Tiramisu.jpeg",
        price: "€2.79",
        category: "dessert",
        description: "Tiramisu is an Italian dessert made of ladyfinger pastries dipped in coffee."
    },
    {
        title: "Shrimp poke",
        image: "assets/images/Shrimp poke.png",
        price: "8,90 €",
        category: "mainCourse",
        description: "Sushi rice, shrimp, avocado, radish, wakame, edamame, cabbage, sesame, wasabi sauce.. "
    },
    {
        title: "Chicken Poke",
        image: "assets/images/Chicken Poke.png",
        price: "8,50 €",
        category: "mainCourse",
        description: "sushi rice, chicken tempura, radish, wakame, edamame, cabbage, okonomi sauce."
    },
    {
        title: "Salmon Poke",
        image: "assets/images/Salmon Poke.png",
        price: "9,90 €",
        category: "mainCourse",
        description: "sushi rice, salmon, caviar, radish, wakame, edamame, cabbage. ajipon sauce."
    },
    {
        title: "Yamato miso soup",
        image: "assets/images/Yamato soup.png",
        price: "€4.90",
        category: "soup",
        description: "A delicious heart-warming soup that is full of flavour and so easy to make."
    },
    {
        title: "Tom Yum Soup",
        image: "assets/images/Tom Yum Soup.png",
        price: "€4.90",
        category: "soup",
        description: "Shrimp, tomatoes, shimeji mushrooms, fresh chili peppers, fresh coriander."
    },
    {
        title: "Chicken soup with bamboo",
        image: "assets/images/Chicken soup with bamboo.png",
        price: "€3.90",
        category: "soup",
        description: "Chicken, shiitake mushrooms, bamboo shoots, carrots, spring onions.."
    },
    {
        title: "Edamame",
        image: "assets/images/Edamame.png",
        price: "€4.90",
        category: "Appetizer",
        description: "Boiled Edamame with sea salt ."
    },
    {
        title: "Vietnamese pork spring rolls",
        image: "assets/images/Vietnamese pork spring rolls.png",
        price: "€5.50",
        category: "Appetizer",
        description: "Crispy Vietnamese spring rolls with pork stuffing.."
    },
    {
        title: "Five vegetarian pot stickers",
        image: "assets/images/vegetarian pot stickers.png",
        price: "€5.50",
        category: "Appetizer",
        description: "Panfried vegetable dumpling-Gyoza 5 pcs"
    },
    {
        title: "cola",
        image: "assets/images/cola.avif",
        price: "€5.50",
        category: "drink",
        description: "cola"
    },
    {
        title: "Fanta 0.5 l ",
        image: "assets/images/Fanta .avif",
        price: "€2.00",
        category: "drink",
        description: "fanta"
    },
    {
        title: "aloe vera juice",
        image: "assets/images/alovera.avif",
        price: "€2.90",
        category: "drink",
        description: ""
    },
]

function showMenu(item) {
    let menuItem = document.createElement("li");
    menuItem.classList.add("menu-item");
    menuItem.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    itemList.append(menuItem);
    let foodImage = document.createElement("img");
    foodImage.setAttribute("src", item.image);
    menuItem.append(foodImage);
    let content = document.createElement("div")
    content.classList.add("content");
    menuItem.append(content);
    let foodTitle = document.createElement("h2");
    foodTitle.innerHTML = item.title;
    content.append(foodTitle);
    let foodDesc = document.createElement("p")
    foodDesc.innerHTML = item.description
    content.append(foodDesc);
    let foodPrice = document.createElement("span");
    foodPrice.innerHTML = item.price;
    content.append(foodPrice);
   }

allMenu()

function handleButtonClick(button) {
    [pizzaButton, saladButton, mainCourseButton, soupButton, dessertButton, drinkButton, selectAllButton].forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}

function pizza() {
    handleButtonClick(pizzaButton);
    itemList.innerHTML = ""
    let selectpizza = menu.filter(function (select) {
        return select.category === "pizza"
    })
    selectpizza.map(showMenu)
}
pizzaButton.addEventListener("click", pizza)

function salad() {
    handleButtonClick(saladButton);
    itemList.innerHTML = ""
    let selectsalad = menu.filter(function (select) {
        return select.category === "salad"
    })
    selectsalad.map(showMenu)
}
saladButton.addEventListener("click", salad)

function mainCourse() {
    handleButtonClick(mainCourseButton);
    itemList.innerHTML = ""
    let selectmainCourse = menu.filter(function (select) {
        return select.category === "mainCourse"
    })
    selectmainCourse.map(showMenu)
}
mainCourseButton.addEventListener("click", mainCourse)

function soup() {
    handleButtonClick(soupButton);
    itemList.innerHTML = ""
    let selectsoup = menu.filter(function (select) {
        return select.category === "soup"
    })
    selectsoup.map(showMenu)
}
soupButton.addEventListener("click", soup)

function dessert() {
    handleButtonClick(dessertButton);
    itemList.innerHTML = ""
    let selectdessert = menu.filter(function (select) {
        return select.category === "dessert"
    })
    selectdessert.map(showMenu)
}
dessertButton.addEventListener("click", dessert)

function drink() {
    handleButtonClick(drinkButton);
    itemList.innerHTML = ""
    let selectdrink = menu.filter(function (select) {
        return select.category === "drink"
    })
    selectdrink.map(showMenu)
}
drinkButton.addEventListener("click", drink)

function allMenu() {
    handleButtonClick(selectAllButton);
    itemList.innerHTML = ""
    menu.map(showMenu)
}
selectAllButton.addEventListener("click", allMenu)
