const recipes = {
  pizza: {
    title: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt"
    ],
    steps: [
      "Preheat the oven to 475°F (245°C).",
      "Spread tomato sauce over the dough.",
      "Add sliced mozzarella on top.",
      "Bake for 10-15 minutes until crust is golden.",
      "Top with fresh basil and drizzle with olive oil."
    ]
  },
  salad: {
    title: "Fresh Green Salad",
    ingredients: [
      "Romaine lettuce",
      "Cucumbers",
      "Cherry tomatoes",
      "Red onions",
      "Lemon juice",
      "Olive oil",
      "Salt & pepper"
    ],
    steps: [
      "Chop lettuce, cucumbers, and onions.",
      "Mix in a large bowl with tomatoes.",
      "Whisk lemon juice, olive oil, salt, and pepper.",
      "Toss the salad with dressing and serve chilled."
    ]
  },
  pasta: {
    title: "Creamy Alfredo Pasta",
    ingredients: [
      "Fettuccine pasta",
      "Butter",
      "Heavy cream",
      "Parmesan cheese",
      "Garlic",
      "Salt & pepper"
    ],
    steps: [
      "Cook pasta until al dente.",
      "Melt butter and sauté garlic.",
      "Add cream and simmer.",
      "Stir in grated Parmesan until smooth.",
      "Mix with pasta and season to taste."
    ]
  },


  burger: {
  title: "Juicy Beef Burger",
  ingredients: [
    "Ground beef patty",
    "Burger buns",
    "Cheddar cheese",
    "Lettuce",
    "Tomato",
    "Onion slices",
    "Ketchup & mustard"
  ],
  steps: [
    "Grill the beef patty until fully cooked.",
    "Toast the burger buns lightly.",
    "Assemble with lettuce, tomato, onion, and cheese.",
    "Add condiments to taste.",
    "Serve hot."
  ]

},

fries: {
  title: "Crispy French Fries",
  ingredients: [
    "Potatoes",
    "Salt",
    "Oil for frying",
    "Optional: paprika, garlic powder"
  ],
  steps: [
    "Peel and cut potatoes into thin strips.",
    "Soak in water for 30 minutes, then pat dry.",
    "Deep fry until golden brown and crispy.",
    "Drain excess oil and season with salt.",
    "Serve with ketchup or dip."
  ]
},

icecream: {
  title: "Vanilla Ice Cream",
  ingredients: [
    "Heavy cream",
    "Whole milk",
    "Sugar",
    "Vanilla extract",
    "Ice cream maker (optional)"
  ],
  steps: [
    "Mix cream, milk, sugar, and vanilla.",
    "Churn in an ice cream maker or freeze with stirring.",
    "Freeze for 4-6 hours until set.",
    "Scoop and serve chilled."
  ]
},
};

function viewRecipe(id) {
  const recipe = recipes[id];
  const modal = document.getElementById("modal");
  const container = document.getElementById("recipe-details");

  container.innerHTML = `
    <h2>${recipe.title}</h2>
    <h3>Ingredients:</h3>
    <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
    <h3>Steps:</h3>
    <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
  `;

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}


const searchInput = document.getElementById("searchBar");

searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchText) || description.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

function toggleFavorite(elem) {
  elem.classList.toggle("active");
  elem.textContent = elem.classList.contains("active") ? "❤️" : "♡";
}

