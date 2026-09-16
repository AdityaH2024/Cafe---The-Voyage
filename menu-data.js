const SITE_CONFIG = {
  businessName: "Cafe The Voyage",
  shortName: "The Voyage",
  tagline: "A Little Voyage, A Lot of Flavor.",
  founded: "",
  phone: "+91 85969 50267",
  phoneDisplay: "+91 85969 50267",
  email: "",
  address:
    "A-2, Ground Floor, Ashiyana Park, Koregaon Park, North Main Road, Lane 5, Pune, Maharashtra 411001",
  addressShort: "Koregaon Park, Pune",
  openingHours: "",
  mapQuery: "Cafe The Voyage, A-2, Ashiyana Park, Koregaon Park, Pune",
  instagram: "#",
  facebook: "#",
  twitter: "#",
  reserveNote:
    "Demo reservation form — connect your booking system or CRM to receive real reservations.",
};

const MENU_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "breakfast", label: "All Day Breakfast" },
  { key: "toasties", label: "Open Toasties / Tartines" },
  { key: "smoothie", label: "Smoothie Bowls" },
  { key: "panini", label: "Panini Sandwiches" },
  { key: "burgers", label: "Burgers" },
  { key: "pasta", label: "Pasta" },
  { key: "coffee", label: "Coffee & Beverages" },
  { key: "desserts", label: "Desserts" },
];

const MENU_ITEMS = [
  /* ── All Day Breakfast ── */
  {
    id: "french-toast",
    name: "I AM FABULOUS (French Toast with Dates Syrup)",
    category: "breakfast",
    price: "₹345",
    description: "Served with dates Syrup and Cinnamon Dust",
    diet: "veg",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1501959915551-4e8d30928317?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "american-pancakes",
    name: "I AM COMPASSIONATE (Classic American Pancakes)",
    category: "breakfast",
    price: "₹345",
    description: "Served with Maple Syrup and Sugar Dust",
    diet: "veg",
    tags: ["recommended"],
    image:
      "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nutella-crepes",
    name: "I AM NEEDED (Nutella Crepes with Roasted Walnut)",
    category: "breakfast",
    price: "₹405",
    description: "Vanilla Crepes | Nutella | Banana | Roasted Hazelnut chunks",
    diet: "veg",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pesto-crepes",
    name: "I AM MAGICAL (Pesto Mushroom Sauteed Spinach Crepes)",
    category: "breakfast",
    price: "₹405",
    description:
      "Inhouse Pesto | Sauteed herbs Mushroom | Feta Cheese served with inhouse salad and dips",
    diet: "veg",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Open Toasties / Tartines ── */
  {
    id: "avocado-toast",
    name: "I AM APPRECIATED (Avocado Guacamole on Toast)",
    category: "toasties",
    price: "₹655",
    description:
      "Toast | Crushed Avocado | Onion | Tomato | Cilantro | Olive oil feta on top served with Inhouse Salad & Dips",
    diet: "veg",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "salmon-toast",
    name: "I AM SECURE (Smoked Salmon Cream Cheese on Toast)",
    category: "toasties",
    price: "₹785",
    description:
      "Toast | Spread with Cream Cheese | Lettuce | Smoked Salmon dill leaves on top served with inhouse Salad & Dips",
    diet: "nonveg",
    image:
      "https://images.unsplash.com/photo-1593504049359-715560bb9bf4?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Smoothie Bowls ── */
  {
    id: "berry-bowl",
    name: "I AM BRAVE (Berry Nutty Bowl)",
    category: "smoothie",
    price: "₹465",
    description: "Mix Berries | Banana | Yogurt | Fresh fruits and nuts",
    diet: "veg",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Panini Sandwiches ── */
  {
    id: "banh-mi",
    name: "I AM VERSATILE (The Voyage Banh Mi)",
    category: "panini",
    price: "₹505",
    description:
      "Spicy minced chicken patty | Carrot | Cucumber | Tomato | Mint | Coriander sauce served with salad & Fries",
    diet: "nonveg",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "peri-peri-chicken",
    name: "I AM GRACEFUL (Peri Peri Chicken)",
    category: "panini",
    price: "₹535",
    description:
      "Chicken tossed with Peri Peri Sauce | Cucumber | Tomato | Bellpepper served with Salad & Fries",
    diet: "nonveg",
    tags: ["recommended"],
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Burgers ── */
  {
    id: "veg-burger",
    name: "I AM INNOVATIVE (Crunchy Veg and Cheese Burger)",
    category: "burgers",
    price: "₹405",
    description:
      "Inhouse Mix Veg patty | Cheese | Tomato | Onion | Lettuce served with fries",
    diet: "veg",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Pasta ── */
  {
    id: "pink-sauce-pasta",
    name: "Pink Sauce Pasta",
    category: "pasta",
    price: "View full menu",
    description: "Delicious pasta tossed in a creamy pink sauce with herbs.",
    diet: "veg",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Coffee & Beverages ── */
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    price: "View full menu",
    description: "Espresso with steamed milk and a velvety cap of microfoam.",
    diet: "veg",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Desserts ── */
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    category: "desserts",
    price: "View full menu",
    description: "Classic cheesecake topped with a sweet blueberry compote.",
    diet: "veg",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
  },
];

const FEATURED_DISH_IDS = [
  "french-toast",
  "nutella-crepes",
  "banh-mi",
  "peri-peri-chicken",
  "pink-sauce-pasta",
  "blueberry-cheesecake",
];
