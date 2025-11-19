const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a",
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579",
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Skyline Apartment in Singapore",
    description:
      "Stay above the clouds in this high-rise apartment with breathtaking city skyline views.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    price: 2700,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Enjoy peace and quiet in this traditional countryside farmhouse surrounded by green fields.",
    image: "https://images.unsplash.com/photo-1505692794403-35f7b40f33d7",
    price: 1300,
    location: "Provence",
    country: "France",
  },
  {
    title: "Urban Studio in Seoul",
    description:
      "Compact and stylish studio apartment located in the bustling streets of Seoul.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    price: 1400,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Luxury Riad in Marrakech",
    description:
      "Experience Moroccan hospitality in this luxury riad with traditional design and a private courtyard.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 2100,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Island Hut in the Philippines",
    description:
      "Stay in a bamboo hut right on the beach for a simple and authentic island experience.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8d4a2b26e",
    price: 700,
    location: "Palawan",
    country: "Philippines",
  },
  {
    title: "Alpine Chalet in Austria",
    description:
      "Cosy chalet in the Austrian Alps perfect for skiing, hiking, and mountain views.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    price: 2500,
    location: "Innsbruck",
    country: "Austria",
  },
  {
    title: "City Apartment in Berlin",
    description:
      "Modern apartment located in the heart of Berlin with easy access to attractions.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    price: 1500,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Rainforest Lodge in Brazil",
    description:
      "Stay deep inside the Amazon rainforest in a wooden eco-lodge surrounded by wildlife.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    price: 2300,
    location: "Amazonas",
    country: "Brazil",
  },
  {
    title: "Chic Apartment in Barcelona",
    description:
      "Stylish apartment located near the famous Sagrada Familia in Barcelona.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 1900,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Desert Camp in Jordan",
    description:
      "Spend the night under the stars in a traditional Bedouin tent in Wadi Rum desert.",
    image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc88",
    price: 900,
    location: "Wadi Rum",
    country: "Jordan",
  },
  {
    title: "Countryside Inn in Ireland",
    description:
      "Warm and cozy countryside inn with a fireplace and hearty meals.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266",
    price: 1200,
    location: "Galway",
    country: "Ireland",
  },
  {
    title: "Sky Villa in Hong Kong",
    description:
      "Luxury sky villa with breathtaking harbor views in the heart of Hong Kong.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    price: 3500,
    location: "Hong Kong",
    country: "China",
  },
  {
    title: "Cave House in Cappadocia",
    description:
      "Unique cave house carved into the rocks of Cappadocia, offering a magical stay.",
    image: "https://images.unsplash.com/photo-1470123808288-1e59739b1b9b",
    price: 2000,
    location: "Cappadocia",
    country: "Turkey",
  },
  {
    title: "Luxury Igloo in Finland",
    description:
      "Stay in a glass igloo and watch the Northern Lights dance above you.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078",
    price: 4000,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Lake House in Sweden",
    description:
      "Peaceful lake house surrounded by pine forests in rural Sweden.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    price: 1700,
    location: "Stockholm Archipelago",
    country: "Sweden",
  },
  {
    title: "Historic Ryokan in Kyoto",
    description:
      "Traditional Japanese ryokan offering tatami rooms, hot springs, and tea ceremonies.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    price: 2200,
    location: "Kyoto",
    country: "Japan",
  }
];

module.exports = { data: sampleListings };