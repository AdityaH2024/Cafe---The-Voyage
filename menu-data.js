/* ==========================================================================
   EMBER & BEAN — Site Configuration & Menu Data
   ==========================================================================
   This file is the single source of truth for a client rebrand.
   To turn this into a real client site, edit SITE_CONFIG, then replace
   the contents of MENU_ITEMS / MENU_CATEGORIES / FEATURED_DISH_IDS.

   Every menu item has its OWN `image` property. Do not reintroduce a
   CATEGORY_IMAGES-style lookup — that was the main flaw in the source
   template this was built from, and it causes unrelated dishes (e.g. a
   rice bowl and a bowl of ramen) to display an identical photo.
   ========================================================================== */

/* ---------- Global site configuration ---------- */
const SITE_CONFIG = {
  businessName: "Ember & Bean",
  shortName: "E&B",
  tagline: "Coffee, kitchen & good company",
  founded: "2018",
  phone: "+91 98200 11223",
  phoneDisplay: "+91 98200 11223",
  email: "hello@emberandbean.co",
  address: "21 Riverside Road, Kothrud, Pune",
  addressShort: "Riverside Road, Pune",
  openingHours: "8:00 AM – 11:00 PM, daily",
  mapQuery: "Riverside Road, Kothrud, Pune",
  instagram: "#",
  facebook: "#",
  twitter: "#",
  reserveNote:
    "Demo reservation form — connect your booking system or CRM to receive real reservations.",
};

/* ---------- Menu categories ---------- */
const MENU_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "coffee", label: "Coffee" },
  { key: "breakfast", label: "Breakfast & Brunch" },
  { key: "salads", label: "Salads" },
  { key: "sandwiches", label: "Sandwiches" },
  { key: "pizza", label: "Pizza" },
  { key: "pasta", label: "Pasta" },
  { key: "burgers", label: "Burgers" },
  { key: "asian", label: "Asian Bowls" },
  { key: "desserts", label: "Desserts" },
];

/* ---------- Menu items ----------
   diet: "veg" | "nonveg" | "both"
   tags: ["popular"] | ["recommended"] | both
   image: a photo of THIS dish specifically — never a category stand-in
------------------------------------------------------------------------- */
const MENU_ITEMS = [
  /* Coffee */
  {
    id: "espresso",
    name: "Espresso",
    category: "coffee",
    price: "₹140",
    description: "A concentrated shot pulled fresh to order, rich crema on top.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1720214931419-7cb11ee42c59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    price: "₹190",
    description: "Espresso, steamed milk and a generous cap of microfoam, hand-poured.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cold-brew",
    name: "House Cold Brew",
    category: "coffee",
    price: "₹210",
    description: "Steeped for eighteen hours, served over ice with a splash of cream.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },

  /* Breakfast & Brunch */
  {
    id: "farmhouse-eggs",
    name: "Farmhouse Eggs",
    category: "breakfast",
    price: "₹280",
    description: "Two eggs your way, sourdough toast, roasted tomato and herb butter.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "avocado-toast",
    name: "Avocado & Chilli Toast",
    category: "breakfast",
    price: "₹310",
    description: "Smashed avocado, chilli flakes, feta and a poached egg on grain toast.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "belgian-waffle",
    name: "Belgian Waffle",
    category: "breakfast",
    price: "₹300",
    description: "Warm and crisp, finished with maple syrup and seasonal fruit.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1562376552-0d160dcb1a3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "blueberry-pancakes",
    name: "Blueberry Pancakes",
    category: "breakfast",
    price: "₹320",
    description: "Buttermilk pancakes stacked high with blueberries and warm syrup.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1650134973809-d8c3a2da59ba?auto=format&fit=crop&w=800&q=80",
  },

  /* Salads */
  {
    id: "greek-garden-salad",
    name: "Greek Garden Salad",
    category: "salads",
    price: "₹260",
    description: "Cucumber, tomato, olives and feta tossed in oregano vinaigrette.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "roast-pumpkin-salad",
    name: "Roasted Pumpkin & Feta Salad",
    category: "salads",
    price: "₹290",
    description: "Roasted pumpkin, rocket, toasted seeds and whipped feta.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80&sat=-10",
  },

  /* Sandwiches */
  {
    id: "club-sandwich",
    name: "Grilled Club Sandwich",
    category: "sandwiches",
    price: "₹300",
    description: "Triple-stacked with grilled chicken, egg, lettuce and smoked mayo.",
    diet: "nonveg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "veg-panini",
    name: "Herb-Roasted Veg Panini",
    category: "sandwiches",
    price: "₹260",
    description: "Grilled seasonal vegetables and melted cheese on herb focaccia.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80&sat=-15",
  },

  /* Pizza */
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    category: "pizza",
    price: "₹340",
    description: "Wood-fired, San Marzano tomato, fresh mozzarella and basil.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "veg-supreme-pizza",
    name: "Wood-Fired Veg Supreme",
    category: "pizza",
    price: "₹390",
    description: "Bell pepper, onion, olive, mushroom and mozzarella on a charred crust.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80&sat=-10",
  },

  /* Pasta */
  {
    id: "alfredo-pasta",
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    price: "₹350",
    description: "Fettuccine in a silky parmesan cream sauce with cracked pepper.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "arrabbiata-pasta",
    name: "Penne Arrabbiata",
    category: "pasta",
    price: "₹330",
    description: "Penne in a fiery tomato and garlic sauce, finished with basil.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80&sat=-10",
  },

  /* Burgers */
  {
    id: "classic-cheese-burger",
    name: "Classic Cheese Burger",
    category: "burgers",
    price: "₹360",
    description: "Grilled patty, cheddar, pickles and house sauce on a brioche bun.",
    diet: "nonveg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smoky-bbq-burger",
    name: "Smoky BBQ Burger",
    category: "burgers",
    price: "₹390",
    description: "Double patty, smoked cheddar, crispy onions and BBQ glaze.",
    diet: "nonveg",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80&sat=-10",
  },

  /* Asian Bowls */
  {
    id: "bibimbap",
    name: "Bibimbap",
    category: "asian",
    price: "₹360",
    description: "Steamed rice with julienned vegetables, gochujang and a fried egg.",
    diet: "both",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "toppuki",
    name: "Toppuki Rice Cakes",
    category: "asian",
    price: "₹330",
    description: "Chewy rice cakes tossed in a sweet-spicy gochujang sauce.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1585032226651-759a372437d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "shoyu-ramen",
    name: "Shoyu Ramen",
    category: "asian",
    price: "₹380",
    description: "Soy-based broth, soft egg, scallion and toasted nori.",
    diet: "nonveg",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "korean-fried-rice-bowl",
    name: "Korean Fried Rice Bowl",
    category: "asian",
    price: "₹340",
    description: "Kimchi fried rice with sesame, spring onion and a crisp egg.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=800&q=80",
  },

  /* Desserts */
  {
    id: "molten-chocolate-cake",
    name: "Molten Chocolate Cake",
    category: "desserts",
    price: "₹250",
    description: "Warm chocolate cake with a liquid centre, vanilla ice cream.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "chocolate-waffle-sundae",
    name: "Belgian Chocolate Waffle Sundae",
    category: "desserts",
    price: "₹280",
    description: "Warm waffle, chocolate sauce, whipped cream and toasted almonds.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80",
  },
];

/* Homepage featured dishes reference IDs from MENU_ITEMS above,
   so the data never has to be duplicated. */
const FEATURED_DISH_IDS = [
  "bibimbap",
  "belgian-waffle",
  "veg-supreme-pizza",
  "smoky-bbq-burger",
  "toppuki",
  "molten-chocolate-cake",
];
