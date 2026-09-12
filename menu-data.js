/* ==========================================================================
   BOHO BOHO CAFE — Site Configuration & Menu Data
   ==========================================================================
   This file is the single source of truth for a client rebrand.
   To turn this into a real client site, edit SITE_CONFIG, then replace
   the contents of MENU_ITEMS / MENU_CATEGORIES / FEATURED_DISH_IDS.

   Every menu item has its OWN `image` property. Do not reintroduce a
   CATEGORY_IMAGES-style lookup — that was the main flaw in the source
   template this was built from, and it causes unrelated dishes to share
   an identical photo.
   ========================================================================== */

/* ---------- Global site configuration ---------- */
const SITE_CONFIG = {
  businessName: "Boho Boho",
  shortName: "Boho",
  tagline: "A little boho, a lot of soul.",
  founded: "",
  phone: "+91 98603 91777",
  phoneDisplay: "+91 98603 91777",
  email: "",
  address: "398, Row house, 1, S Main Rd, Ashok Chakra Society, Meera Nagar, Koregaon Park, Pune, Maharashtra 411001, India",
  addressShort: "Koregaon Park, Pune",
  openingHours: "",
  mapQuery: "398, Row house, 1, S Main Rd, Ashok Chakra Society, Meera Nagar, Koregaon Park, Pune, Maharashtra 411001, India",
  instagram: "#",
  facebook: "#",
  twitter: "#",
  reserveNote:
    "Demo reservation form — connect your booking system or CRM to receive real reservations.",
};

/* ---------- Menu categories ---------- */
const MENU_CATEGORIES = [
  { key: "all",         label: "All" },
  { key: "coffee",      label: "Coffee & Beverages" },
  { key: "breakfast",   label: "Breakfast & Brunch" },
  { key: "salads",      label: "Salads & Healthy Bowls" },
  { key: "pizza",       label: "Pizza" },
  { key: "pasta",       label: "Pasta" },
  { key: "sandwiches",  label: "Sandwiches & Wraps" },
  { key: "desserts",    label: "Desserts" },
];

/* ---------- Menu items ----------
   diet: "veg" | "nonveg" | "both"
   tags: ["popular"] | ["recommended"] | both
   image: a photo of THIS dish specifically — never a category stand-in

   NOTE: This is a sales demo preview. Prices and full ingredient details
   should be confirmed with the client before launch.
------------------------------------------------------------------------- */
const MENU_ITEMS = [

  /* ── Coffee & Beverages ── */
  {
    id: "cold-brew",
    name: "Cold Brew Coffee",
    category: "coffee",
    price: "Menu details to be confirmed.",
    description: "Slow-steeped cold brew, served over ice — smooth and naturally sweet.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    price: "Menu details to be confirmed.",
    description: "Espresso with steamed milk and a velvety cap of microfoam.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fresh-juice",
    name: "Fresh Seasonal Juice",
    category: "coffee",
    price: "Menu details to be confirmed.",
    description: "Pressed to order from seasonal fruits — ask your server for today's blend.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Breakfast & Brunch ── */
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    category: "breakfast",
    price: "Menu details to be confirmed.",
    description: "Smashed avocado on sourdough with chilli flakes and a soft-poached egg.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "eggs-benedict",
    name: "Eggs Benedict",
    category: "breakfast",
    price: "Menu details to be confirmed.",
    description: "Poached eggs on an English muffin with hollandaise and your choice of topping.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pancakes",
    name: "Fluffy Buttermilk Pancakes",
    category: "breakfast",
    price: "Menu details to be confirmed.",
    description: "Stacked high with seasonal compote, whipped cream and maple syrup.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1650134973809-d8c3a2da59ba?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Salads & Healthy Bowls ── */
  {
    id: "falafel-hummus",
    name: "Falafel with Hummus",
    category: "salads",
    price: "Menu details to be confirmed.",
    description: "Crispy falafel served over creamy hummus with fresh pita, olives and herbs.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "greek-salad",
    name: "Greek Garden Salad",
    category: "salads",
    price: "Menu details to be confirmed.",
    description: "Cucumber, tomato, Kalamata olives and feta in a light oregano dressing.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "quinoa-bowl",
    name: "Quinoa Power Bowl",
    category: "salads",
    price: "Menu details to be confirmed.",
    description: "Roasted vegetables, chickpeas and avocado over herbed quinoa.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Pizza ── */
  {
    id: "exotic-pizza",
    name: "Exotic Pizza",
    category: "pizza",
    price: "Menu details to be confirmed.",
    description: "A chef-selected combination of seasonal toppings on a thin, crispy crust.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "margherita",
    name: "Margherita Pizza",
    category: "pizza",
    price: "Menu details to be confirmed.",
    description: "Classic tomato base, fresh mozzarella and fragrant basil on a thin crust.",
    diet: "veg",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Pasta ── */
  {
    id: "creamy-mushroom-pasta",
    name: "Creamy Mushroom Pasta",
    category: "pasta",
    price: "Menu details to be confirmed.",
    description: "Sautéed wild mushrooms in a rich cream sauce tossed with pappardelle and fresh herbs.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pesto-pasta",
    name: "Pesto Pasta",
    category: "pasta",
    price: "Menu details to be confirmed.",
    description: "Al dente pasta tossed in fresh basil pesto with sun-dried tomatoes and pine nuts.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Sandwiches & Wraps ── */
  {
    id: "grilled-veg-wrap",
    name: "Grilled Vegetable Wrap",
    category: "sandwiches",
    price: "Menu details to be confirmed.",
    description: "Chargrilled seasonal vegetables, hummus and fresh greens in a soft flour wrap.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "club-sandwich",
    name: "Classic Club Sandwich",
    category: "sandwiches",
    price: "Menu details to be confirmed.",
    description: "Toasted triple-decker with your choice of filling, served with house fries.",
    diet: "both",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  },

  /* ── Desserts ── */
  {
    id: "brownie",
    name: "Warm Chocolate Brownie",
    category: "desserts",
    price: "Menu details to be confirmed.",
    description: "Rich dark chocolate brownie served warm with a scoop of vanilla ice cream.",
    diet: "veg",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cheesecake",
    name: "New York Cheesecake",
    category: "desserts",
    price: "Menu details to be confirmed.",
    description: "Creamy baked cheesecake on a buttery biscuit base with seasonal berry compote.",
    diet: "veg",
    tags: ["recommended"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
  },
];

/* Homepage featured dishes reference IDs from MENU_ITEMS above,
   so the data never has to be duplicated. */
const FEATURED_DISH_IDS = [
  "falafel-hummus",
  "exotic-pizza",
  "creamy-mushroom-pasta",
  "avocado-toast",
  "cold-brew",
  "brownie",
];
