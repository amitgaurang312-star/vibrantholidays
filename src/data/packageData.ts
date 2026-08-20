export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  meals?: string;
  accommodation?: string;
}

export interface PackageData {
  slug: string;
  destination: string;
  packageName: string;
  tagline: string;
  duration: string;
  durationNights: string;
  price: string;
  heroImage: string;
  heroVideo?: string;
  overview: string;
  destinationsCovered: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  hotelCategory: string;
  transportation: string;
  mealPlan: string;
  itinerary: DayItinerary[];
  optionalActivities: string[];
  bestTimeToVisit: string;
  thingsToCarry: string[];
  relatedSlugs: string[];
  type: 'domestic' | 'international';
}

export const packages: PackageData[] = [
// ─── DOMESTIC ───────────────────────────────────────────────────────────────

{
  slug: 'kashmir',
  destination: 'Kashmir',
  packageName: 'Kashmir Valley Splendour',
  tagline: 'Where Heaven Meets Earth',
  duration: '6 Days / 5 Nights',
  durationNights: '5 Nights',
  price: '₹25,000',
  heroImage: "/assets/images/Kashmir-1-1783921070804.jpg",
  heroVideo: "/assets/images/Kashmir-1-1783921070804.jpg",
  type: 'domestic',
  overview:
  'Experience the breathtaking beauty of Kashmir — the crown jewel of India — with this carefully curated 6-day journey covering Srinagar, Sonmarg, Gulmarg, and Pahalgam. From the shimmering expanse of Dal Lake and the golden meadows of Sonmarg to the snow-dusted slopes of Gulmarg and the lush valleys of Pahalgam, this package blends natural grandeur with authentic Kashmiri hospitality. Travel by private vehicle with a dedicated driver-cum-location guide, stay in handpicked hotels and a traditional houseboat, and savour daily Kashmiri meals throughout your stay. Package cost: ₹25,000 (excluding flights) per person.',
  destinationsCovered: ['Srinagar', 'Sonmarg', 'Gulmarg', 'Pahalgam'],
  highlights: [
  'Srinagar local sightseeing on arrival day',
  'Full-day excursion to Sonmarg — Sindh River & Thajiwas Glacier views',
  'Full-day excursion to Gulmarg — meadows, pine forests & Golf Course',
  'Optional Gondola Cable Car Ride at Gulmarg (Phase 1 & 2)',
  'Scenic drive to Pahalgam via Aru Valley, Betaab Valley & Chandanwari',
  'Houseboat stay on Dal Lake or Nagin Lake with Shikara ride',
  'Traditional Kashmiri dinner on the houseboat',
  'Private vehicle with driver-cum-location guide throughout'],

  inclusions: [
  'Accommodation in mentioned hotels or similar (subject to availability)',
  'Hotel The Jamawar, Srinagar (or similar) — Family Quad Room',
  'The Golden Residency, Pahalgam (or similar) — Family Quad Room',
  'Ababeel Houseboats (or similar) — Quad Room',
  'Daily Breakfast & Dinner throughout the trip (MAP basis)',
  'All local transfers and sightseeing by private vehicle (Ertiga)',
  'Driver cum Location Guide',
  'All Toll, Parking, and Driver Charges'],

  exclusions: [
  'Flight tickets to and from Srinagar',
  'All personal expenses (tips, laundry, telephone/fax, alcoholic beverages, camera/video fees at monuments, medical expenses, airport departure tax, etc.)',
  'Entrance fees at all monuments and sightseeing spots',
  'Costs due to itinerary changes caused by flight cancellation, bad weather, ill health, roadblocks, or factors beyond control',
  'Early check-in / late check-out at hotels',
  'Lounge or Baggage Clock Room charges',
  'Entry fees, Temple Darshan Passes, Pooja fees, Horse/Pony/Doli/Helicopter rides, and local activities (charged as per local market rates & availability)',
  'Local Union Vehicles at Sonmarg, Gulmarg & Pahalgam (payable directly on spot)',
  'Gondola Cable Car Ride at Gulmarg — Phase 1 & 2 (online booking required, payable separately)',
  'La Passes, Permits, and extra vehicle running costs (as per local market rates)',
  'Anything not mentioned under Package Inclusions'],

  hotelCategory: 'Standard Hotels & Traditional Houseboat',
  transportation: 'Private Ertiga with Driver cum Location Guide',
  mealPlan: 'MAP (Breakfast + Dinner)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Srinagar — Local Sightseeing',
    description:
    'Arrive at Srinagar airport where our representative will greet you and transfer you to the hotel. After check-in and freshen up, head out for Srinagar local sightseeing. Explore the vibrant city — visit the iconic Dal Lake waterfront, the historic Jama Masjid, the revered Hazratbal Shrine, and the bustling local bazaars where you can browse Kashmiri handicrafts, Pashmina shawls, dried fruits, and the world-famous Kashmiri saffron. Return to the hotel for dinner and overnight stay in Srinagar.',
    meals: 'Dinner',
    accommodation: 'Hotel The Jamawar, Srinagar (or similar)'
  },
  {
    day: 2,
    title: 'Day Excursion to Sonmarg — Meadow of Gold',
    description:
    'After breakfast, set out for a full-day excursion to Sonmarg, famously known as the "Meadow of Gold." Enjoy scenic views of snow-clad mountains and lush valleys en route. Visit the Sindh River and enjoy breathtaking views of the Thajiwas Glacier — a year-round snowfield surrounded by alpine flora and towering peaks. Explore the meadows on foot and soak in the serene mountain atmosphere. Optional: Pony rides or local union vehicles to reach the glacier are available at extra cost, payable directly as per local union rates. Return to Srinagar by evening for dinner and overnight stay.',
    meals: 'Breakfast & Dinner',
    accommodation: 'Hotel The Jamawar, Srinagar (or similar)'
  },
  {
    day: 3,
    title: 'Day Excursion to Gulmarg — The Meadow of Flowers',
    description:
    'After an early breakfast, embark on a full-day trip to Gulmarg, one of Kashmir\'s most popular and picturesque hill resorts. Enjoy leisure walks through snow-covered meadows and dense pine forests. Visit the famous Gulmarg Golf Course — one of the highest golf courses in the world. Optional: The Gondola Cable Car Ride (Phase 1 & 2) offers a spectacular ascent to Kongdori and Apharwat Peak — online booking is required and charges are payable directly. Snow play and pony rides are also available at extra cost as per union rules. Return to Srinagar in the evening for dinner and overnight stay.',
    meals: 'Breakfast & Dinner',
    accommodation: 'Hotel The Jamawar, Srinagar (or similar)'
  },
  {
    day: 4,
    title: 'Srinagar to Pahalgam — The Valley of Shepherds',
    description:
    'After breakfast, check out from the hotel and drive to Pahalgam, the scenic "Valley of Shepherds." En route, visit the famous ABC Valleys — Aru Valley, Betaab Valley, and Chandanwari. These stunning valleys offer lush meadows, crystal-clear streams, and dramatic mountain backdrops perfect for scenic photography and nature walks. Note: Local union vehicles are required to access these valleys and are payable directly on spot. Arrive in Pahalgam, check in to the hotel, and spend the evening at leisure near the beautiful Lidder River. Overnight stay in Pahalgam.',
    meals: 'Breakfast & Dinner',
    accommodation: 'The Golden Residency, Pahalgam (or similar)'
  },
  {
    day: 5,
    title: 'Pahalgam to Srinagar Houseboat — Dal Lake Experience',
    description:
    'After breakfast, check out and transfer to a beautifully decorated traditional houseboat on Dal Lake or Nagin Lake in Srinagar. After check-in, relax and enjoy the calm, serene surroundings with views of floating gardens, lotus beds, and the majestic mountain backdrop. Enjoy a peaceful Shikara ride on the lake, experiencing the unique local life on water — glide past vegetable markets, flower sellers, and colourful houseboats. Spend the evening soaking in the tranquillity of the lake. Savour a traditional Kashmiri-style dinner onboard the houseboat. Overnight stay at the houseboat.',
    meals: 'Breakfast & Dinner',
    accommodation: 'Ababeel Houseboats, Dal/Nagin Lake (or similar)'
  },
  {
    day: 6,
    title: 'Departure — Farewell from Paradise',
    description:
    'Enjoy a leisurely breakfast onboard the houseboat. After check-out, our driver will transfer you to Srinagar Airport for your onward journey. As you depart, carry with you the fragrance of chinar leaves, the echo of Shikara oars on Dal Lake, and memories of Kashmir\'s unparalleled beauty that will call you back again.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Gondola Cable Car Ride at Gulmarg — Phase 1 & Phase 2 (online booking required, payable directly)',
  'Pony rides at Sonmarg to Thajiwas Glacier (payable directly as per local union rates)',
  'Pony rides at Gulmarg meadows (payable directly as per union rules)',
  'Snow play activities at Gulmarg (payable directly)',
  'Local union vehicle to Aru Valley, Betaab Valley & Chandanwari, Pahalgam (payable directly on spot)',
  'Shikara ride extensions on Dal Lake (payable directly)'],

  bestTimeToVisit:
  'March to June for spring blooms and pleasant weather; December to February for snow and skiing in Gulmarg. September to November for clear skies and autumn foliage.',
  thingsToCarry: [
  'Warm layers (fleece jacket, thermal innerwear) even in summer',
  'Waterproof trekking shoes or sturdy walking shoes',
  'Sunscreen SPF 50+ and UV-protection sunglasses',
  'Personal medications and a basic first-aid kit',
  'Valid government-issued photo ID (mandatory for houseboat check-in)',
  'Cash (ATMs are limited in Gulmarg and Pahalgam)',
  'Camera with extra batteries (cold drains batteries fast)',
  'Light rain poncho or compact umbrella'],

  relatedSlugs: ['himachal-pradesh', 'north-east-india']
},

{
  slug: 'kerala',
  destination: 'Kerala',
  packageName: 'Kerala 5 Nights Escape',
  tagline: "Drift Through God's Own Country",
  duration: '6 Days / 5 Nights',
  durationNights: '5 Nights',
  price: '₹23,999',
  heroImage: "/assets/images/637933301001779994PPmjMG-1783921259193.jpg",
  heroVideo: "/assets/images/637933301001779994PPmjMG-1783921259193.jpg",
  type: 'domestic',
  overview:
  'Experience the lush beauty of Kerala — God\'s Own Country — with this carefully curated 6-day journey covering Kochi, Munnar, Thekkady, and Alleppey. From the colonial heritage of Fort Kochi and the misty tea gardens of Munnar to the wildlife-rich Periyar sanctuary in Thekkady and the serene backwaters of Alleppey, this package blends natural grandeur with authentic Kerala hospitality. Travel by private AC vehicle, stay in handpicked 3-star hotels and a deluxe houseboat, and savour daily Kerala meals throughout your stay. Package cost: ₹23,999 per person (excluding flights) for 2 adults.',
  destinationsCovered: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey (Alappuzha)'],
  highlights: [
  'Fort Kochi heritage walk — Chinese Fishing Nets, St. Francis Church & Paradesi Synagogue',
  'Scenic drive to Munnar via Valara & Cheeyapara Waterfalls and Tea Gardens',
  'Full-day Munnar sightseeing — Mattupetty Dam, Echo Point, Eravikulam National Park & Tea Museum',
  'Periyar Wildlife Sanctuary boat ride — spot elephants, deer & exotic birds',
  'Spice plantation tour in Thekkady',
  'Kathakali performance in Thekkady',
  'Overnight stay on a Deluxe Houseboat in Alleppey backwaters',
  'Optional Shikara ride and sunset views at Alleppey'],

  inclusions: [
  'Accommodation in mentioned hotels or similar (subject to availability)',
  'Broad Bean or similar, Cochin — 1 Night, Deluxe Room (Breakfast + Dinner)',
  'Pine Tree Munnar or similar, Munnar — 2 Nights, Red Pine Room (Breakfast + Dinner)',
  'Periyar Meadows or similar, Thekkady — 1 Night, Deluxe Room (Breakfast + Dinner)',
  'Deluxe Houseboat, Alleppey — 1 Night, Deluxe Room (Breakfast + Lunch + Dinner)',
  'Daily Buffet or Fixed Menu meals as per meal plan',
  'AC Vehicle for all transfers throughout the trip',
  'All Toll, Tax, Parking, Driver Bata, and Fuel Costs'],

  exclusions: [
  'Any meals other than those mentioned in the itinerary',
  'Flight tickets / Train tickets to and from Kerala',
  'Any transportation not mentioned in the itinerary',
  'Entrance fees to all sightseeing spots and boating charges',
  'Any personal expenses (tips, laundry, telephone, alcoholic beverages, etc.)',
  'Rooms at Munnar and Thekkady are Non-AC',
  'Optional activities: Elephant ride, bamboo rafting, jeep safari, nature walk, jungle patrol, trekking, and Ayurveda massages in Thekkady (payable directly)'],

  hotelCategory: '3-Star Hotels & Deluxe Houseboat',
  transportation: 'Private AC Vehicle',
  mealPlan: 'MAP (Breakfast + Dinner) | Full Board on Houseboat',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Cochin — Heritage Sightseeing',
    description:
    'Arrive at Cochin and meet our driver for a warm welcome. Transfer to your hotel for check-in and freshen up. Head out for Kochi local sightseeing — explore the iconic Chinese Fishing Nets silhouetted against the Arabian Sea, visit St. Francis Church (one of the oldest European churches in India), the Gothic-style Santa Cruz Basilica, the historic Mattancherry Palace (Dutch Palace) with its stunning Kerala murals, and the vibrant Jew Town with the Paradesi Synagogue. Stroll through the colonial streets of Fort Kochi and soak in the unique blend of Portuguese, Dutch, and British heritage. Return to the hotel for dinner and overnight stay in Cochin.',
    meals: 'Dinner',
    accommodation: 'Broad Bean or similar, Cochin'
  },
  {
    day: 2,
    title: 'Cochin to Munnar — Into the Misty Mountains',
    description:
    'After breakfast, check out and drive approximately 140 km to Munnar — a picturesque hill station nestled at 6,000 ft in the Western Ghats, taking around 4 hours via the scenic Neriyamangalam Forest route. En route, stop at the stunning Valara Waterfalls and Cheeyapara Waterfalls — perfect spots for photography and a refreshing break. Pass through lush tea gardens that carpet the hillsides in vivid green. Arrive in Munnar, check in to the resort, and spend the evening at leisure enjoying the cool mountain air and misty valley views. Overnight stay in Munnar.',
    meals: 'Breakfast & Dinner',
    accommodation: 'Pine Tree Munnar or similar, Munnar'
  },
  {
    day: 3,
    title: 'Munnar Full Day Sightseeing — Peaks, Parks & Plantations',
    description:
    'After breakfast, embark on a full-day sightseeing tour of Munnar. Visit the scenic Photo Point for panoramic valley views, the fascinating Jungle Honey Bee Nest, and the beautiful Mattupetty Dam with optional boating on the reservoir. Continue to the Elephant Arrival Spot and the famous Echo Point where the hills create a natural acoustic phenomenon. Return to Munnar city for lunch (on your own). In the afternoon, visit the KDHP Tea Museum to understand the rich history of tea cultivation in these hills. Head to Anaimudi View and Rajamala — South India\'s highest peak at 8,841 ft (2,695 m) — and explore the Eravikulam National Park, home to the endangered Nilgiri Tahr. Visit the colourful Blossom Park and the Pothamedu View (Sunset Point) for breathtaking sunset vistas. Explore cardamom, coffee, and pepper plantations. Return to the hotel for dinner and overnight stay in Munnar.',
    meals: 'Breakfast & Dinner',
    accommodation: 'Pine Tree Munnar or similar, Munnar'
  },
  {
    day: 4,
    title: 'Munnar to Thekkady — Wildlife & Spice Country',
    description:
    'After breakfast, check out and drive to Thekkady — the gateway to the Periyar Wildlife Sanctuary. Upon arrival, visit the Periyar Wildlife Sanctuary, one of India\'s finest wildlife reserves, where you can spot wild elephants, wild boar, deer, and if lucky, tigers on a scenic boat ride across the Periyar Lake. Explore a spice plantation tour and discover the rich variety of spices — cardamom, pepper, cinnamon, and cloves — that have made Kerala famous for centuries. In the evening, enjoy a traditional Kathakali performance — Kerala\'s classical martial arts and dance-drama. Optional activities available at extra cost: elephant ride, bamboo rafting, jeep safari, natural walk, jungle patrol, trekking, and Ayurveda massages. Check in to the hotel for dinner and overnight stay in Thekkady.',
    meals: 'Breakfast & Dinner',
    accommodation: 'Periyar Meadows or similar, Thekkady'
  },
  {
    day: 5,
    title: 'Thekkady to Alleppey — Houseboat Backwater Experience',
    description:
    'After breakfast, check out and drive to Alappuzha (Alleppey) — the "Venice of the East." Check in to your beautifully crafted Deluxe Houseboat — a traditional Kerala kettuvallam with furnished bedrooms, a sit-out deck, and a fully equipped kitchen. Cast off into the labyrinthine network of backwater canals, lagoons, and lakes, gliding past paddy fields, coconut groves, and timeless village life. Enjoy all three meals onboard prepared by your personal chef. Optional: take a peaceful Shikara ride on the backwaters and enjoy stunning sunset views over the water. Spend the evening soaking in the tranquillity of the backwaters. Overnight stay on the Deluxe Houseboat in Alleppey.',
    meals: 'Breakfast, Lunch & Dinner (onboard)',
    accommodation: 'Deluxe Houseboat, Alleppey'
  },
  {
    day: 6,
    title: 'Departure — Farewell from God\'s Own Country',
    description:
    'Wake up to the gentle sounds of the backwaters and enjoy a final breakfast onboard the houseboat. After check-out, our driver will transfer you to Cochin Airport or Railway Station for your onward journey. As you depart, carry with you the fragrance of spice gardens, the echo of Kathakali drums, and the serene memory of Kerala\'s backwaters that will call you back again.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Elephant ride in Thekkady (payable directly)',
  'Bamboo rafting on Periyar Lake (payable directly)',
  'Jeep safari in Periyar Wildlife Sanctuary (payable directly)',
  'Nature walk and jungle patrol in Thekkady (payable directly)',
  'Trekking in Thekkady forests (payable directly)',
  'Ayurveda massage in Thekkady (payable directly)',
  'Shikara ride on Alleppey backwaters (payable directly)',
  'Boating at Mattupetty Dam, Munnar (payable directly)'],

  bestTimeToVisit:
  'September to March for pleasant weather and clear skies. October–November is ideal for backwaters. Munnar is magical during the monsoon (June–August) for those who enjoy misty landscapes, though travel may be affected by heavy rains.',
  thingsToCarry: [
  'Light cotton clothing (Kerala is warm and humid)',
  'Waterproof sandals or flip-flops for houseboat',
  'Light jacket or shawl for Munnar evenings (can get cool)',
  'Sunscreen SPF 50+ and insect repellent',
  'Modest clothing for church and temple visits',
  'Personal medications and motion sickness tablets (for winding mountain roads)',
  'Camera with waterproof cover',
  'Cash for entrance fees, optional activities, and local markets'],

  relatedSlugs: ['goa', 'kashmir', 'north-east-india']
},

{
  slug: 'goa',
  destination: 'Goa',
  packageName: 'Golden Shores Coastal Escape',
  tagline: 'Sun, Spice & Serenity',
  duration: '4 Days / 3 Nights',
  durationNights: '3 Nights',
  price: '₹12,000',
  heroImage: "/assets/images/goa-1-1783921400551.jpg",
  heroVideo: "/assets/images/goa-1-1783921400551.jpg",
  type: 'domestic',
  overview:
  'Goa is India\'s most beloved coastal playground — a sun-drenched paradise where Portuguese colonial heritage meets vibrant beach culture, where spice-laden cuisine mingles with fresh seafood, and where every sunset feels like a celebration. The Golden Shores Coastal Escape is a perfectly paced 4-day journey through both North and South Goa, covering the most iconic beaches, historic churches, spice plantations, and waterfront markets. Whether you\'re seeking adventure, relaxation, or cultural exploration, this package delivers an authentic Goan experience.',
  destinationsCovered: ['North Goa', 'South Goa', 'Old Goa', 'Panjim'],
  highlights: [
  'Dudhsagar Waterfall excursion through the Western Ghats',
  'Old Goa UNESCO World Heritage churches tour',
  'North Goa beach trail — Baga, Calangute, Anjuna, Vagator',
  'Spice plantation tour with traditional Goan lunch',
  'Sunset cruise on the Mandovi River',
  'Panjim heritage walk through Latin Quarter (Fontainhas)',
  'Water sports at Baga Beach — parasailing, jet ski, banana boat'],

  inclusions: [
  'Accommodation for 3 nights in North Goa (3-star beach resort)',
  'Daily breakfast',
  'Goa airport/railway station pick-up and drop',
  'North Goa sightseeing by private vehicle (half day)',
  'South Goa and Old Goa sightseeing by private vehicle (full day)',
  'Dudhsagar Waterfall jeep safari (shared)',
  'Sunset cruise on Mandovi River',
  'Spice plantation tour with lunch',
  'All applicable taxes'],

  exclusions: [
  'Airfare / train fare to and from Goa',
  'Water sports (on direct payment, approx. ₹800–₹2,500/activity)',
  'Lunch and dinner (except spice plantation lunch)',
  'Personal expenses, tips, and shopping',
  'Travel insurance',
  'Casino entry (if interested)'],

  hotelCategory: '3-Star Beach Resort',
  transportation: 'Private AC Vehicle + Shared Jeep Safari for Dudhsagar',
  mealPlan: 'Breakfast Only (CP)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Goa — Beaches & Bazaars',
    description:
    'Arrive at Goa International Airport (Dabolim) or Madgaon Railway Station and transfer to your North Goa beach resort. After check-in and freshening up, head to the iconic Baga Beach for your first taste of Goa\'s legendary beach culture. Rent a sun lounger, dip your toes in the warm Arabian Sea, and watch the beach come alive with activity. As the afternoon progresses, explore the Calangute Market for beach wear, souvenirs, and local trinkets. In the evening, stroll along the Baga-Calangute promenade lined with shacks serving fresh seafood, cold beer, and live music. Dinner at a beachfront shack — try the prawn balchão, fish recheado, and bebinca dessert.',
    meals: 'Breakfast',
    accommodation: '3-Star Beach Resort, North Goa'
  },
  {
    day: 2,
    title: 'North Goa Beach Trail & Sunset Cruise',
    description:
    'After breakfast, embark on a North Goa beach trail. Start at Anjuna Beach, famous for its Wednesday flea market (if visiting on Wednesday) and dramatic laterite rock formations. Continue to Vagator Beach and the iconic Chapora Fort — the "Dil Chahta Hai" fort — for panoramic views of the Arabian Sea and the Chapora River estuary. Visit Morjim Beach, a nesting ground for Olive Ridley sea turtles, and the relatively quieter Ashwem Beach for a peaceful afternoon swim. In the evening, board a traditional wooden vessel for a 1.5-hour sunset cruise on the Mandovi River, complete with Goan folk music, dance performances, and a welcome drink. Return to the resort for dinner at leisure.',
    meals: 'Breakfast',
    accommodation: '3-Star Beach Resort, North Goa'
  },
  {
    day: 3,
    title: 'Old Goa, Spice Plantation & South Goa',
    description:
    'After breakfast, drive to Old Goa — a UNESCO World Heritage Site and the former capital of Portuguese India. Visit the magnificent Basilica of Bom Jesus, which houses the mortal remains of St. Francis Xavier, and the Se Cathedral, one of the largest churches in Asia. Explore the Archaeological Museum and the Church of St. Cajetan. Continue to a traditional Goan spice plantation for a guided tour through nutmeg, cardamom, pepper, and vanilla groves. Enjoy a traditional Goan lunch served on banana leaves. In the afternoon, explore South Goa\'s pristine beaches — Colva, Benaulim, and Palolem — which are quieter and more scenic than their northern counterparts. Return via Panjim\'s Latin Quarter (Fontainhas) for a heritage walk through colourful Portuguese-era houses.',
    meals: 'Breakfast & Lunch (spice plantation)',
    accommodation: '3-Star Beach Resort, North Goa'
  },
  {
    day: 4,
    title: 'Dudhsagar Waterfall & Departure',
    description:
    'Rise early for the most adventurous day of your Goa trip — the Dudhsagar Waterfall excursion. Board a shared jeep at the Mollem National Park checkpoint for a thrilling off-road drive through the dense Western Ghats forest. Arrive at the base of Dudhsagar Falls — one of India\'s tallest waterfalls at 310 metres — where the milky-white cascade thunders into a turquoise pool. Take a refreshing dip in the natural pool (seasonal). Return to the resort for a quick lunch and check-out. Transfer to the airport or railway station for your onward journey, carrying with you the golden warmth of Goa\'s sun and the taste of its spiced sea breeze.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Parasailing at Baga Beach (₹800/person)',
  'Jet skiing at Calangute (₹600/10 min)',
  'Scuba diving at Grande Island (₹3,500/person)',
  'Casino night at a floating casino on Mandovi River',
  'Yoga and meditation session at Arambol Beach',
  'Cooking class — Goan fish curry and sorpotel'],

  bestTimeToVisit:
  'November to February for perfect beach weather, clear skies, and festive atmosphere. October and March are shoulder months with fewer crowds. Avoid June–September (monsoon season) as beaches are rough and many shacks close.',
  thingsToCarry: [
  'Light cotton and linen clothing',
  'Swimwear and beach cover-ups',
  'Waterproof sandals and flip-flops',
  'Sunscreen SPF 50+ and after-sun lotion',
  'Insect repellent for evening beach walks',
  'Cash for beach shacks and local markets',
  'Waterproof bag for Dudhsagar excursion'],

  relatedSlugs: ['kerala', 'kashmir', 'himachal-pradesh']
},

{
  slug: 'himachal-pradesh',
  destination: 'Himachal Pradesh',
  packageName: 'Alpine Peaks & Valley Dreams',
  tagline: 'Where Mountains Tell Stories',
  duration: '6 Days / 5 Nights',
  durationNights: '5 Nights',
  price: '₹16,000',
  heroImage: "/assets/images/top-tourist-attractions-mob-banner-1783921461174.webp",
  heroVideo: "/assets/images/landscape-nature-forest-wilderness-walking-mountain-419714-pxhere.com-2-1783921461192.jpg",
  type: 'domestic',
  overview:
  'Himachal Pradesh is a land of dramatic contrasts — where colonial hill stations give way to snow-capped Himalayan passes, where apple orchards border ancient Buddhist monasteries, and where every valley holds a new adventure. The Alpine Peaks & Valley Dreams package takes you through the best of Shimla, Manali, and the Kullu Valley over 6 immersive days. From the colonial charm of Shimla\'s Mall Road to the adrenaline rush of Rohtang Pass, this journey is a perfect blend of culture, nature, and mountain magic.',
  destinationsCovered: ['Shimla', 'Kufri', 'Manali', 'Solang Valley', 'Rohtang Pass', 'Kullu'],
  highlights: [
  'Rohtang Pass snow excursion (subject to permit availability)',
  'Solang Valley adventure sports — zorbing, paragliding, skiing',
  'Hadimba Devi Temple and Old Manali exploration',
  'Shimla heritage walk — Mall Road, Christ Church, Jakhu Temple',
  'Kufri snow activities and Himalayan Nature Park',
  'Kullu River rafting on the Beas River',
  'Vashisht hot springs and ancient temple visit'],

  inclusions: [
  'Accommodation for 5 nights (2N Shimla + 3N Manali)',
  'Daily breakfast and dinner',
  'All transfers by private non-AC vehicle (Shimla–Manali–Shimla)',
  'Shimla railway station/bus stand pick-up and drop',
  'Shimla local sightseeing by private vehicle',
  'Manali local sightseeing by private vehicle',
  'Solang Valley visit',
  'Rohtang Pass permit charges (if open)',
  'All applicable taxes'],

  exclusions: [
  'Airfare / train fare to and from Shimla or Chandigarh',
  'Adventure sports charges at Solang Valley',
  'Rohtang Pass snow activities (on direct payment)',
  'Lunch at restaurants',
  'Personal expenses and tips',
  'Travel insurance',
  'Kullu River rafting (on direct payment, ₹600–₹1,200)'],

  hotelCategory: '3-Star Hotels',
  transportation: 'Private Non-AC Tempo Traveller / Innova',
  mealPlan: 'MAP (Breakfast + Dinner)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Shimla — Queen of Hill Stations',
    description:
    'Arrive at Shimla Railway Station or Chandigarh Airport and transfer to Shimla (2,205 m). The journey from Chandigarh to Shimla (120 km) is itself a highlight — the famous Kalka-Shimla toy train route (UNESCO World Heritage) winds through 102 tunnels and 864 bridges. Check in to your hotel on or near Mall Road. In the evening, take a leisurely stroll along the iconic Mall Road — Shimla\'s colonial-era promenade lined with Victorian architecture, boutique shops, and bustling cafés. Visit the neo-Gothic Christ Church, one of the oldest churches in North India, and the Gaiety Theatre. Dinner at a restaurant on Mall Road.',
    meals: 'Dinner',
    accommodation: '3-Star Hotel, Shimla'
  },
  {
    day: 2,
    title: 'Shimla Sightseeing — Colonial Charm & Mountain Views',
    description:
    'After breakfast, explore Shimla\'s most iconic landmarks. Begin with Jakhu Temple (2,455 m), dedicated to Lord Hanuman, reached by a 2 km trek through dense rhododendron forests — the resident monkeys are both entertaining and mischievous. Visit the Viceregal Lodge (now Rashtrapati Niwas), a stunning Tudor-style mansion that once served as the summer residence of British India\'s Viceroy. Explore the State Museum for Himachali art and artefacts. In the afternoon, drive to Kufri (2,600 m), a small hill station 16 km from Shimla, for snow activities (seasonal) and a visit to the Himalayan Nature Park, home to snow leopards, Himalayan bears, and musk deer. Return to Shimla for dinner.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Shimla'
  },
  {
    day: 3,
    title: 'Shimla to Manali — The Great Himalayan Drive',
    description:
    'After breakfast, check out and begin the spectacular 270 km drive to Manali — one of India\'s most scenic road journeys. The route follows the Beas River through the Kullu Valley, passing through Mandi (the "Varanasi of the Hills"), Pandoh Dam, and the apple-orchard-lined Kullu Valley. Stop at Kullu for a quick visit to the Raghunath Temple and the famous Kullu shawl emporiums. Arrive in Manali (2,050 m) by evening. Check in to your hotel and take a short walk through the Old Manali bazaar — a bohemian enclave of cafés, craft shops, and budget guesthouses popular with backpackers. Dinner at the hotel.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Manali'
  },
  {
    day: 4,
    title: 'Manali Local Sightseeing — Temples, Springs & Forests',
    description:
    'After breakfast, explore Manali\'s cultural and natural highlights. Begin with the ancient Hadimba Devi Temple (1553 AD), a unique pagoda-style wooden temple set amidst a cedar forest — the goddess Hadimba is the patron deity of the Kullu royal family. Visit the Manu Temple, dedicated to the sage Manu who is believed to have meditated here after the great flood. Explore the Tibetan Monastery and the colourful Tibetan Market for handcrafted jewellery, thangka paintings, and Tibetan artefacts. In the afternoon, drive to Vashisht village for a dip in the natural sulphur hot springs — believed to have therapeutic properties — and visit the ancient Vashisht Temple. Evening at leisure in Old Manali.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Manali'
  },
  {
    day: 5,
    title: 'Rohtang Pass & Solang Valley — Snow & Adventure',
    description:
    'The most exhilarating day of your Himachal journey. Drive to Rohtang Pass (3,978 m) — the gateway to Lahaul and Spiti — for a snow experience at 13,050 ft. The pass is open from May to October (subject to weather and permit availability). Enjoy snow activities — sledging, snowball fights, and photography against a backdrop of glaciers and high-altitude peaks. On the return, stop at Solang Valley (2,480 m), Manali\'s adventure hub, for optional activities including zorbing (rolling downhill in a transparent sphere), paragliding, skiing (winter), and ATV rides. The valley itself is a stunning alpine meadow with views of the Beas Kund glacier. Return to Manali for a celebratory dinner.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Manali'
  },
  {
    day: 6,
    title: 'Manali to Shimla — Farewell to the Mountains',
    description:
    'After breakfast, check out and begin the return drive to Shimla for your onward journey. En route, stop at the Kullu Valley viewpoints and the Pandoh Dam for a final look at the Beas River. If time permits, visit the Bijli Mahadev Temple near Kullu — a 360-step climb rewarded with panoramic valley views. Arrive at Shimla or Chandigarh for your departure. As you leave the mountains behind, you carry with you the crisp mountain air, the warmth of apple orchards, and the memory of snow-capped peaks that touched the sky.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Paragliding at Solang Valley (₹2,500/person)',
  'River rafting on Beas River, Kullu (₹600–₹1,200)',
  'Zorbing at Solang Valley (₹500/person)',
  'Camping under the stars near Manali',
  'Mountain biking on Manali trails',
  'Spiti Valley extension (2 additional days)'],

  bestTimeToVisit:
  'March to June for pleasant weather and Rohtang Pass access. October–November for clear skies and autumn colours. December–February for snow lovers and skiing at Solang Valley.',
  thingsToCarry: [
  'Heavy woolens and down jacket (Rohtang Pass is extremely cold)',
  'Waterproof trekking boots',
  'Sunscreen SPF 50+ and lip balm',
  'Altitude sickness medication (Diamox) — consult doctor',
  'Valid ID for Rohtang Pass permit',
  'Cash (limited ATMs beyond Manali)',
  'Warm gloves, woollen cap, and thermal innerwear'],

  relatedSlugs: ['kashmir', 'north-east-india']
},

{
  slug: 'north-east-india',
  destination: 'North East India',
  packageName: 'Seven Sisters Wilderness Trail',
  tagline: 'Untamed, Unexplored, Unforgettable',
  duration: '7 Days / 6 Nights',
  durationNights: '6 Nights',
  price: '₹20,000',
  heroImage: "/assets/images/637763055824686983YZ3CT8-1783921618740.jpg",
  heroVideo: "https://images.unsplash.com/photo-1585210812897-754cb694cc35",
  type: 'domestic',
  overview:
  'The North East of India is the country\'s best-kept secret — a region of extraordinary biodiversity, ancient tribal cultures, living root bridges, and landscapes that seem to belong to another world. The Seven Sisters Wilderness Trail takes you through three of the most captivating states: Meghalaya (the "Abode of Clouds"), Assam (land of tea and one-horned rhinos), and Sikkim (the Himalayan kingdom). This 7-day journey is for the curious traveller who seeks authenticity over luxury, and wonder over comfort.',
  destinationsCovered: ['Guwahati', 'Kaziranga', 'Shillong', 'Cherrapunji', 'Gangtok', 'Pelling'],
  highlights: [
  'Kaziranga National Park jeep safari — one-horned rhino and elephant sightings',
  'Living Root Bridges trek in Cherrapunji (Sohra)',
  'Nohkalikai Falls — India\'s tallest plunge waterfall',
  'Gangtok cable car ride with Kanchenjunga views',
  'Rumtek Monastery — one of the most important Buddhist monasteries in India',
  'Pelling — Kanchenjunga panorama and Pemayangtse Monastery',
  'Shillong — Scotland of the East, Ward\'s Lake and Don Bosco Museum'],

  inclusions: [
  'Accommodation for 6 nights (1N Guwahati + 1N Kaziranga + 2N Shillong + 2N Gangtok)',
  'Daily breakfast and dinner',
  'All transfers by private vehicle',
  'Guwahati airport pick-up and drop',
  'Kaziranga jeep safari (1 round)',
  'Cherrapunji day trip from Shillong',
  'Gangtok cable car ticket',
  'Inner Line Permit for Sikkim (arranged by us)',
  'All applicable taxes'],

  exclusions: [
  'Airfare / train fare to and from Guwahati',
  'Kaziranga elephant safari (on direct payment)',
  'Living Root Bridge trek guide charges',
  'Lunch at restaurants',
  'Personal expenses and tips',
  'Travel insurance',
  'Pelling day trip (optional add-on)'],

  hotelCategory: '3-Star Hotels',
  transportation: 'Private AC Vehicle',
  mealPlan: 'MAP (Breakfast + Dinner)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Guwahati — Gateway to the North East',
    description:
    'Arrive at Lokpriya Gopinath Bordoloi International Airport, Guwahati — the gateway to North East India. Transfer to your hotel. Guwahati, situated on the banks of the mighty Brahmaputra River, is the largest city in the region and a melting pot of cultures. In the afternoon, visit the Kamakhya Temple — one of the most important Shakti Peethas in India — perched atop the Nilachal Hill with panoramic views of the Brahmaputra. Take a sunset cruise on the Brahmaputra River, watching the golden light play on the world\'s widest river. Dinner at a restaurant serving authentic Assamese cuisine — try the masor tenga (sour fish curry) and pitha (rice cakes).',
    meals: 'Dinner',
    accommodation: '3-Star Hotel, Guwahati'
  },
  {
    day: 2,
    title: 'Guwahati to Kaziranga — Rhino Country',
    description:
    'After breakfast, drive approximately 215 km to Kaziranga National Park — a UNESCO World Heritage Site and the last stronghold of the Indian one-horned rhinoceros. Check in to your jungle resort on the park boundary. In the afternoon, embark on a jeep safari through the Central Range of Kaziranga — the most wildlife-rich zone of the park. Kaziranga is home to the world\'s largest population of one-horned rhinos (over 2,600), as well as wild elephants, water buffaloes, swamp deer, and tigers. The park\'s tall elephant grass, wetlands, and forests create a dramatic backdrop for wildlife photography. Return to the resort for dinner and an evening wildlife presentation.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Resort, Kaziranga'
  },
  {
    day: 3,
    title: 'Kaziranga to Shillong — Scotland of the East',
    description:
    'After an early morning elephant safari (optional, on direct payment) and breakfast, drive approximately 250 km to Shillong — the capital of Meghalaya and one of India\'s most charming hill stations. The drive through the Meghalaya plateau offers stunning views of rolling hills, pine forests, and cascading waterfalls. Check in to your hotel and explore Shillong\'s highlights: Ward\'s Lake (a picturesque artificial lake in the heart of the city), the Don Bosco Museum (one of Asia\'s finest cultural museums with 7 floors of North East Indian heritage), and the vibrant Police Bazaar for local shopping. Dinner at a restaurant serving Khasi cuisine — try jadoh (rice and pork) and tungrymbai (fermented soybean).',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Shillong'
  },
  {
    day: 4,
    title: 'Cherrapunji — Land of Living Bridges & Waterfalls',
    description:
    'After breakfast, drive 54 km to Cherrapunji (Sohra) — one of the wettest places on Earth and home to some of Meghalaya\'s most extraordinary natural wonders. Visit the Nohkalikai Falls — India\'s tallest plunge waterfall at 340 metres — where the water plunges into a turquoise pool surrounded by dense forest. Explore the Mawsmai Cave, a fascinating limestone cave with stalactites and stalagmites. The highlight of the day is the trek to the Double Decker Living Root Bridge — a UNESCO-nominated wonder where the Khasi people have trained the roots of rubber fig trees over centuries to form natural bridges across streams. The trek is moderately challenging (3–4 hours round trip) but profoundly rewarding. Return to Shillong for dinner.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Shillong'
  },
  {
    day: 5,
    title: 'Shillong to Gangtok — The Himalayan Kingdom',
    description:
    'After breakfast, drive to Bagdogra Airport or NJP Railway Station (approximately 4 hours) and fly/drive to Gangtok — the capital of Sikkim. Alternatively, drive directly from Shillong to Gangtok (approximately 8 hours via Siliguri). Check in to your hotel and take a cable car ride over the city for aerial views of Gangtok and, on clear days, the majestic Kanchenjunga (8,586 m) — the world\'s third highest peak. Visit the Enchey Monastery, a 200-year-old Nyingma monastery perched on a hilltop. Explore MG Marg — Gangtok\'s pedestrianised main street lined with cafés, craft shops, and restaurants. Dinner at a restaurant serving Sikkimese cuisine — try thukpa, momos, and gundruk.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Gangtok'
  },
  {
    day: 6,
    title: 'Gangtok Sightseeing — Monasteries & Mountain Views',
    description:
    'After breakfast, explore Gangtok\'s cultural and spiritual highlights. Visit Rumtek Monastery — one of the most significant Kagyu Buddhist monasteries in the world, housing sacred relics and thangka paintings. Continue to the Namgyal Institute of Tibetology, a premier research centre for Tibetan and Buddhist studies with a fascinating museum. Visit the Flower Exhibition Centre (seasonal) and the Do-Drul Chorten Stupa — one of the most important stupas in Sikkim. In the afternoon, drive to Tsomgo Lake (3,753 m) — a glacial lake 38 km from Gangtok, sacred to the local Sikkimese people, with yak rides available on the lakeshore. Return to Gangtok for a farewell dinner.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Gangtok'
  },
  {
    day: 7,
    title: 'Departure — Carrying the North East in Your Soul',
    description:
    'After breakfast, check out and transfer to Bagdogra Airport or NJP Railway Station for your onward journey. If time permits, visit the Sikkim Government Craft Centre for last-minute shopping — handwoven carpets, thangka paintings, and traditional Sikkimese jewellery make wonderful souvenirs. As you depart, you carry with you the fragrance of cardamom forests, the sound of Buddhist chants, the sight of living root bridges, and the memory of a region that exists in a world of its own.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Kaziranga elephant safari (₹1,200/person)',
  'Pelling day trip — Kanchenjunga panorama and Pemayangtse Monastery',
  'Trekking to Dzongri (Sikkim) — 5-day extension',
  'River rafting on Teesta River, Sikkim',
  'Homestay experience in a Khasi village, Meghalaya',
  'Ziro Valley, Arunachal Pradesh extension'],

  bestTimeToVisit:
  'October to April for clear skies and wildlife viewing. March–April for rhododendron blooms in Sikkim. Avoid June–September (heavy monsoon, landslides, and park closures).',
  thingsToCarry: [
  'Valid government ID (mandatory for Inner Line Permit)',
  'Warm layers for Sikkim and high-altitude areas',
  'Waterproof jacket and rain gear',
  'Trekking shoes for Living Root Bridge trek',
  'Insect repellent',
  'Cash (limited ATMs in remote areas)',
  'Camera with extra memory cards'],

  relatedSlugs: ['kashmir', 'himachal-pradesh', 'north-east-india']
},

// ─── INTERNATIONAL ──────────────────────────────────────────────────────────

{
  slug: 'dubai',
  destination: 'Dubai',
  packageName: 'Arabian Grandeur Experience',
  tagline: 'Where Tradition Meets Tomorrow',
  duration: '5 Days / 4 Nights',
  durationNights: '4 Nights',
  price: '₹55,000',
  heroImage: "/assets/images/attractions-1-1783921731905.jpg",
  heroVideo: "/assets/images/30.124.1-DTCM-Madinat-Jumeirah-Image-by-Dubai-Tourism-1783921705111.webp",
  type: 'international',
  overview:
  'Dubai is a city that rewrites the rules of possibility — where the world\'s tallest building pierces the clouds, where ski slopes exist inside a shopping mall, and where ancient souks sit in the shadow of futuristic skyscrapers. The Arabian Grandeur Experience is a 5-day journey through the many faces of this extraordinary emirate: the golden dunes of the desert, the glittering skyline of Downtown Dubai, the historic lanes of Al Fahidi, and the pristine shores of Jumeirah Beach. This package delivers the complete Dubai experience — from the sublime to the spectacular.',
  destinationsCovered: ['Downtown Dubai', 'Deira', 'Jumeirah', 'Dubai Desert', 'Dubai Marina'],
  highlights: [
  'Burj Khalifa At the Top (124th floor) — world\'s highest observation deck',
  'Desert Safari with dune bashing, camel ride, and BBQ dinner',
  'Dubai Frame — the world\'s largest picture frame',
  'Dubai Creek Abra (traditional boat) ride and Gold/Spice Souk',
  'Palm Jumeirah and Atlantis The Palm drive-by',
  'Dubai Mall and Dubai Fountain show',
  'Dhow Cruise dinner on Dubai Creek'],

  inclusions: [
  'Accommodation for 4 nights in a 4-star hotel, Dubai',
  'Daily breakfast',
  'Dubai airport pick-up and drop by private vehicle',
  'Burj Khalifa At the Top (124th floor) tickets',
  'Desert Safari with dune bashing, camel ride, henna, and BBQ dinner',
  'Dhow Cruise dinner on Dubai Creek',
  'Dubai city tour by private vehicle (half day)',
  'Dubai Frame entry ticket',
  'All applicable taxes and service charges'],

  exclusions: [
  'International airfare (India to Dubai return)',
  'UAE Tourist Visa charges (approx. ₹5,500–₹7,000)',
  'Burj Khalifa At the Top Sky (148th floor) — upgrade cost',
  'Lunch at restaurants',
  'Personal expenses, shopping, and tips',
  'Travel insurance',
  'Any activity not mentioned in inclusions'],

  hotelCategory: '4-Star Hotel',
  transportation: 'Private AC Vehicle',
  mealPlan: 'Breakfast Only (CP)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Dubai — City of Gold',
    description:
    'Arrive at Dubai International Airport — one of the world\'s busiest airports — and be greeted by your Vibrant Holidays representative. Transfer to your 4-star hotel in the heart of Dubai. After check-in and freshening up, head to the iconic Dubai Mall — the world\'s largest shopping mall by total area, housing over 1,200 stores, an Olympic-size ice rink, an indoor aquarium, and a dinosaur skeleton. As evening falls, witness the spectacular Dubai Fountain Show — the world\'s largest choreographed fountain system — set against the backdrop of the illuminated Burj Khalifa. Dinner at your choice of restaurant in the Dubai Mall food court or the surrounding Downtown Dubai promenade.',
    meals: 'Breakfast',
    accommodation: '4-Star Hotel, Dubai'
  },
  {
    day: 2,
    title: 'Burj Khalifa & Downtown Dubai — Touching the Sky',
    description:
    'After breakfast, begin the day with the crown jewel of Dubai — the Burj Khalifa (828 m), the world\'s tallest building. Ascend to the At the Top observation deck on the 124th floor for a 360-degree panorama of Dubai\'s skyline, the Arabian Gulf, and the desert beyond. The view at sunrise is particularly breathtaking. Continue to the Dubai Frame — a 150-metre-tall picture frame structure that offers views of old Dubai on one side and modern Dubai on the other, with a glass-floored sky bridge connecting the two towers. In the afternoon, explore the Dubai Design District (D3) and the futuristic Museum of the Future — a torus-shaped building inscribed with Arabic calligraphy, housing immersive exhibitions about humanity\'s future. Dinner at a rooftop restaurant in Downtown Dubai.',
    meals: 'Breakfast',
    accommodation: '4-Star Hotel, Dubai'
  },
  {
    day: 3,
    title: 'Old Dubai & Dhow Cruise — Heritage & Waterways',
    description:
    'After breakfast, step back in time with a visit to Old Dubai. Cross the Dubai Creek on a traditional Abra (wooden water taxi) to reach Deira — the historic trading heart of the city. Explore the Gold Souk, where over 300 jewellery shops display an estimated 10 tonnes of gold at any given time. Continue to the Spice Souk, where the air is thick with the fragrance of saffron, frankincense, cardamom, and dried roses. Visit the Al Fahidi Historical Neighbourhood — a beautifully preserved district of wind-tower architecture, art galleries, and the Dubai Museum. In the evening, board a traditional wooden Dhow for a 2-hour dinner cruise on Dubai Creek, gliding past the illuminated skyline while enjoying a buffet of Arabic and international cuisine with live entertainment.',
    meals: 'Breakfast & Dinner (Dhow Cruise)',
    accommodation: '4-Star Hotel, Dubai'
  },
  {
    day: 4,
    title: 'Desert Safari — Dunes, Camels & Starlit BBQ',
    description:
    'After a leisurely breakfast, spend the morning at leisure — perhaps a visit to the Jumeirah Mosque (the only mosque in Dubai open to non-Muslim visitors), a stroll along Jumeirah Beach, or shopping at the Mall of the Emirates (home to Ski Dubai, the indoor ski slope). In the afternoon, embark on the quintessential Dubai experience — the Desert Safari. Board a 4WD vehicle for a thrilling dune bashing session across the red sand dunes of the Dubai Desert Conservation Reserve. Arrive at a traditional Bedouin camp for a magical evening: camel riding, sandboarding, henna painting, and falconry demonstrations. As the stars emerge over the desert, enjoy a lavish BBQ dinner under the open sky with belly dancing and Tanoura (whirling dervish) performances.',
    meals: 'Breakfast & Dinner (Desert Camp)',
    accommodation: '4-Star Hotel, Dubai'
  },
  {
    day: 5,
    title: 'Palm Jumeirah & Departure',
    description:
    'After breakfast, check out and embark on a final drive along the iconic Palm Jumeirah — the world\'s largest man-made island, shaped like a palm tree and visible from space. Drive along the Palm Trunk and Fronds, passing the Atlantis The Palm resort and the Aquaventure Waterpark. Stop at the Palm Jumeirah Boardwalk for a final panoramic view of the Dubai skyline across the water. Visit the Dubai Marina — a stunning artificial canal city with a 3.5 km waterfront promenade lined with restaurants, yachts, and skyscrapers. Transfer to Dubai International Airport for your departure flight, carrying with you the golden glow of Arabian hospitality.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Burj Khalifa At the Top Sky (148th floor) upgrade (AED 100 extra)',
  'Ski Dubai at Mall of the Emirates (AED 200/person)',
  'Dubai Aquarium and Underwater Zoo (AED 100/person)',
  'Hot air balloon over the Dubai Desert (AED 900/person)',
  'Yacht charter in Dubai Marina (AED 500/hour)',
  'Helicopter tour over Palm Jumeirah (AED 700/person)'],

  bestTimeToVisit:
  'November to March for pleasant weather (20–28°C). Avoid May–September (extreme heat, 40–48°C). Dubai Shopping Festival (January) and Dubai Food Festival (February) are excellent times to visit.',
  thingsToCarry: [
  'Sunscreen SPF 50+ and UV-protection sunglasses',
  'Light, breathable clothing (cotton/linen)',
  'Modest clothing for mosque visits (shoulders and knees covered)',
  'Comfortable walking shoes',
  'Valid passport (minimum 6 months validity)',
  'UAE Tourist Visa (arranged before departure)',
  'International travel insurance',
  'Credit/debit card (widely accepted)'],

  relatedSlugs: ['thailand', 'singapore', 'maldives']
},

{
  slug: 'thailand',
  destination: 'Thailand',
  packageName: 'Siam Splendour Discovery',
  tagline: 'Temples, Tides & Thai Smiles',
  duration: '6 Days / 5 Nights',
  durationNights: '5 Nights',
  price: '₹45,000',
  heroImage: "/assets/images/a117dab1-3750-4235-88b8-d61d854f1a22-1783922016191.jpg",
  heroVideo: "/assets/images/a117dab1-3750-4235-88b8-d61d854f1a22-1783922016191.jpg",
  type: 'international',
  overview:
  'Thailand is a country that captures the heart effortlessly — with its gilded temples, turquoise islands, fragrant street food, and the warmest smiles in Southeast Asia. The Siam Splendour Discovery is a 6-day journey through the best of Thailand: the cultural grandeur of Bangkok, the island paradise of Phuket, and the emerald waters of Phi Phi Island. This package balances cultural immersion with beach relaxation, giving you a complete Thai experience that will leave you longing to return.',
  destinationsCovered: ['Bangkok', 'Pattaya', 'Phuket', 'Phi Phi Island', 'Krabi'],
  highlights: [
  'Grand Palace and Wat Phra Kaew (Temple of the Emerald Buddha)',
  'Phi Phi Island speedboat tour — Maya Bay, Viking Cave',
  'Coral Island (Koh Larn) snorkelling from Pattaya',
  'Floating Market visit — Damnoen Saduak or Amphawa',
  'Elephant sanctuary ethical experience near Chiang Mai',
  'Patong Beach nightlife and Bangla Road',
  'Phang Nga Bay James Bond Island tour'],

  inclusions: [
  'Accommodation for 5 nights (2N Bangkok + 1N Pattaya + 2N Phuket)',
  'Daily breakfast',
  'Bangkok airport pick-up and drop',
  'Bangkok city tour by private vehicle',
  'Pattaya Coral Island tour (shared speedboat)',
  'Phi Phi Island tour from Phuket (shared speedboat)',
  'All inter-city transfers by private AC vehicle or domestic flight',
  'All applicable taxes'],

  exclusions: [
  'International airfare (India to Bangkok return)',
  'Thailand Tourist Visa on Arrival (approx. ₹2,000)',
  'Grand Palace entry fee (THB 500)',
  'Lunch and dinner',
  'Personal expenses, shopping, and tips',
  'Travel insurance',
  'Optional activities'],

  hotelCategory: '3-Star Hotels',
  transportation: 'Private AC Vehicle + Shared Speedboat',
  mealPlan: 'Breakfast Only (CP)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Bangkok — City of Angels',
    description:
    'Arrive at Suvarnabhumi International Airport, Bangkok, and transfer to your hotel in the city centre. Bangkok — the "City of Angels" — is a sensory explosion of golden temples, chaotic traffic, aromatic street food, and neon-lit nightlife. After freshening up, take a tuk-tuk ride through the old city to Khao San Road — the legendary backpacker hub — for your first taste of Thai street food: pad thai, mango sticky rice, and fresh coconut water. In the evening, take a Chao Phraya River dinner cruise for a magical view of Bangkok\'s illuminated temples and skyline from the water. Overnight in Bangkok.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Bangkok'
  },
  {
    day: 2,
    title: 'Bangkok Cultural Tour — Temples & Palaces',
    description:
    'After breakfast, embark on a full-day cultural tour of Bangkok\'s most iconic landmarks. Begin with the Grand Palace — a dazzling complex of gilded spires, intricate mosaics, and ornate pavilions that served as the official residence of the Thai King for 150 years. Within the palace complex, visit Wat Phra Kaew (Temple of the Emerald Buddha) — Thailand\'s most sacred temple, housing a 66 cm jade Buddha image. Continue to Wat Pho, home to the magnificent 46-metre Reclining Buddha covered in gold leaf. Take a short boat ride across the Chao Phraya to Wat Arun (Temple of Dawn) — its distinctive Khmer-style prang (tower) encrusted with colourful porcelain fragments is one of Bangkok\'s most recognisable landmarks. In the afternoon, visit the Damnoen Saduak Floating Market for a colourful boat ride through canal-side vendors selling tropical fruits, flowers, and Thai snacks.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Bangkok'
  },
  {
    day: 3,
    title: 'Bangkok to Pattaya — Coral Island Paradise',
    description:
    'After breakfast, drive approximately 150 km to Pattaya — Thailand\'s most famous beach resort city on the Gulf of Thailand. Check in to your hotel and head to the pier for a speedboat trip to Koh Larn (Coral Island) — a small island 7.5 km offshore with crystal-clear turquoise waters and vibrant coral reefs. Enjoy snorkelling, swimming, and sunbathing on the island\'s pristine beaches. Return to Pattaya in the afternoon and explore the Walking Street — Pattaya\'s famous entertainment strip that comes alive after dark with restaurants, bars, and live music venues. Visit the Sanctuary of Truth — a magnificent all-wood temple and sculpture hall under construction since 1981, a testament to Thai craftsmanship.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Pattaya'
  },
  {
    day: 4,
    title: 'Pattaya to Phuket — Pearl of the Andaman',
    description:
    'After breakfast, transfer to Bangkok Airport for a domestic flight to Phuket — Thailand\'s largest island and the jewel of the Andaman Sea. Arrive in Phuket and transfer to your beachside hotel in Patong or Kata Beach. Spend the afternoon at leisure on Patong Beach — the most vibrant beach in Phuket, with a wide range of water sports, beach clubs, and restaurants. In the evening, explore the Patong Night Market for Thai street food and souvenirs. Visit Bangla Road — Phuket\'s most famous entertainment street — for a lively evening of live music, street performances, and Thai cuisine.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Phuket'
  },
  {
    day: 5,
    title: 'Phi Phi Island Tour — Emerald Waters & Sea Caves',
    description:
    'After breakfast, board a speedboat for the most spectacular day of your Thailand journey — the Phi Phi Island tour. The Phi Phi archipelago, made famous by the film "The Beach," comprises six islands of extraordinary beauty. Visit Maya Bay — the iconic crescent-shaped bay with turquoise waters and towering limestone cliffs. Snorkel at Loh Samah Bay and Pileh Lagoon — a hidden emerald lagoon enclosed by sheer limestone walls. Explore Viking Cave, where swiftlets build their nests (used in bird\'s nest soup). Swim at Monkey Beach, where cheeky macaques come down to greet visitors. Return to Phuket in the late afternoon for a sunset dinner at a beachfront restaurant.',
    meals: 'Breakfast & Lunch (onboard)',
    accommodation: '3-Star Hotel, Phuket'
  },
  {
    day: 6,
    title: 'Phuket Departure — Until We Meet Again, Thailand',
    description:
    'After breakfast, check out and spend the morning at leisure — perhaps a final swim at Kata Beach, a Thai massage at a local spa, or shopping at the Phuket Weekend Market (Naka Market) for handicrafts, clothing, and local produce. Transfer to Phuket International Airport for your departure flight. As you leave, you carry with you the golden glow of Thai temples, the turquoise memory of Phi Phi\'s waters, and the warmth of the Thai smile that welcomed you at every turn.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Elephant sanctuary ethical experience (THB 2,500/person)',
  'Phang Nga Bay James Bond Island tour (THB 1,800/person)',
  'Thai cooking class in Bangkok (THB 1,200/person)',
  'Muay Thai boxing match tickets (THB 1,000–₹2,000)',
  'Scuba diving at Similan Islands (THB 4,500/person)',
  'Chiang Mai extension — 2 additional days'],

  bestTimeToVisit:
  'November to April for the best weather across Thailand. Phuket and the Andaman coast are best from November to April. Bangkok is pleasant year-round. Avoid May–October (monsoon season) for beach destinations.',
  thingsToCarry: [
  'Light, breathable clothing',
  'Modest clothing for temple visits (shoulders and knees covered)',
  'Swimwear and beach cover-ups',
  'Sunscreen SPF 50+ and insect repellent',
  'Waterproof sandals',
  'Valid passport (minimum 6 months validity)',
  'Small backpack for island day trips',
  'Cash in Thai Baht (THB)'],

  relatedSlugs: ['bali', 'vietnam', 'singapore']
},

{
  slug: 'bali',
  destination: 'Bali',
  packageName: 'Island of the Gods Immersion',
  tagline: 'Sacred Temples & Tropical Bliss',
  duration: '6 Days / 5 Nights',
  durationNights: '5 Nights',
  price: '₹48,000',
  heroImage: "/assets/images/wp2601482-1783922188620.jpg",
  type: 'international',
  overview:
  'Bali is more than a destination — it is a state of mind. The Island of the Gods Immersion is a 6-day journey through the many dimensions of this extraordinary Indonesian island: the spiritual heart of Ubud with its rice terraces and healing temples, the surf culture and beach clubs of Seminyak, and the dramatic clifftop temples of Uluwatu. This package is designed for travellers who seek beauty in every form — natural, spiritual, culinary, and artistic.',
  destinationsCovered: ['Ubud', 'Kintamani', 'Seminyak', 'Uluwatu', 'Nusa Dua'],
  highlights: [
  'Tegallalang Rice Terraces — UNESCO-recognised subak irrigation system',
  'Uluwatu Temple sunset Kecak fire dance performance',
  'Mount Batur sunrise trek (1,717 m)',
  'Ubud Monkey Forest and Royal Palace',
  'Tanah Lot Temple — iconic sea temple at sunset',
  'Seminyak Beach clubs and Bali swing',
  'Traditional Balinese cooking class in Ubud'],

  inclusions: [
  'Accommodation for 5 nights (3N Ubud + 2N Seminyak)',
  'Daily breakfast',
  'Bali airport pick-up and drop',
  'Ubud sightseeing by private vehicle',
  'Kintamani volcano and Tegallalang tour',
  'Uluwatu Temple and Kecak dance evening tour',
  'Tanah Lot sunset tour',
  'All applicable taxes'],

  exclusions: [
  'International airfare (India to Bali return)',
  'Indonesia Tourist Visa on Arrival (USD 35)',
  'Mount Batur sunrise trek guide (USD 35/person)',
  'Lunch and dinner',
  'Personal expenses, shopping, and tips',
  'Travel insurance',
  'Bali swing (IDR 350,000/person)'],

  hotelCategory: '3-Star Hotels & Boutique Villas',
  transportation: 'Private AC Vehicle',
  mealPlan: 'Breakfast Only (CP)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Bali — Island Welcome',
    description:
    'Arrive at Ngurah Rai International Airport, Denpasar, and transfer to your boutique villa in Ubud — Bali\'s cultural and spiritual heartland. The 1.5-hour drive from the airport takes you through rice paddies, temple-lined roads, and traditional villages. Check in and spend the afternoon exploring Ubud\'s vibrant art market and the Ubud Royal Palace (Puri Saren Agung) — a beautifully preserved royal compound where traditional Legong dance performances are held in the evenings. Stroll through the Ubud Art Market for handcrafted batik, silver jewellery, and wooden sculptures. Dinner at a restaurant overlooking the rice fields — try nasi goreng, babi guling, and fresh tropical fruit.',
    meals: 'Breakfast',
    accommodation: '3-Star Boutique Villa, Ubud'
  },
  {
    day: 2,
    title: 'Ubud Cultural Immersion — Temples & Rice Terraces',
    description:
    'After breakfast, begin a full day of cultural exploration around Ubud. Visit the Sacred Monkey Forest Sanctuary — a natural forest reserve and Hindu temple complex inhabited by over 700 long-tailed macaques. Continue to the Tegallalang Rice Terraces — a UNESCO-recognised landscape of cascading rice paddies sculpted by the ancient subak irrigation system. The terraces are most photogenic in the morning light. Visit the Goa Gajah (Elephant Cave) — an 11th-century archaeological site with a carved cave entrance and bathing pools. In the afternoon, take a traditional Balinese cooking class — learn to prepare dishes like satay lilit, lawar, and black rice pudding using fresh ingredients from a local market.',
    meals: 'Breakfast & Lunch (cooking class)',
    accommodation: '3-Star Boutique Villa, Ubud'
  },
  {
    day: 3,
    title: 'Mount Batur & Kintamani — Volcanic Sunrise',
    description:
    'Rise at 2 AM for the Mount Batur sunrise trek — one of Bali\'s most rewarding experiences. The 2-hour ascent through volcanic terrain brings you to the summit (1,717 m) just as the sun rises over the caldera lake and the distant peak of Mount Agung. Cook eggs in the volcanic steam vents for a unique breakfast at the summit. Descend and drive to the Kintamani viewpoint for panoramic views of the Batur caldera and Lake Batur. Visit the Tirta Empul Temple — a sacred water temple where Balinese Hindus perform purification rituals in the holy spring pools. Return to Ubud for a well-deserved afternoon rest.',
    meals: 'Breakfast',
    accommodation: '3-Star Boutique Villa, Ubud'
  },
  {
    day: 4,
    title: 'Ubud to Seminyak — Beach & Sunset Vibes',
    description:
    'After breakfast, check out and drive to Seminyak — Bali\'s most stylish beach destination, known for its designer boutiques, beach clubs, and world-class restaurants. En route, stop at the Tanah Lot Temple — one of Bali\'s most iconic landmarks, a Hindu sea temple perched on a rocky outcrop in the Indian Ocean, best visited at sunset when the silhouette against the golden sky is magical. Check in to your Seminyak hotel and spend the evening at Seminyak Beach — watch the legendary Bali sunset from a beach club, sipping a Bintang beer or fresh coconut. Dinner at one of Seminyak\'s acclaimed restaurants — Potato Head, Ku De Ta, or Merah Putih.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Seminyak'
  },
  {
    day: 5,
    title: 'Uluwatu — Clifftop Temple & Kecak Fire Dance',
    description:
    'After breakfast, drive to the Uluwatu Peninsula — the southernmost tip of Bali, where dramatic limestone cliffs plunge 70 metres into the Indian Ocean. Visit the Uluwatu Temple (Pura Luhur Uluwatu) — one of Bali\'s six key temples, perched on the cliff edge with sweeping ocean views. Explore the Uluwatu surf beach and the famous Single Fin beach club for lunch (own cost). In the late afternoon, return to the temple for the Kecak Fire Dance — a mesmerising performance of 70 bare-chested men chanting "cak" in rhythmic unison, re-enacting scenes from the Ramayana against a backdrop of the setting sun over the ocean. Return to Seminyak for a farewell dinner.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Seminyak'
  },
  {
    day: 6,
    title: 'Departure — Bali\'s Blessing Stays With You',
    description:
    'After breakfast, check out and spend the morning at leisure — a final swim at Seminyak Beach, a Balinese massage at a local spa, or last-minute shopping at Seminyak Square for batik clothing, silver jewellery, and Balinese art. Transfer to Ngurah Rai International Airport for your departure flight. As you leave the Island of the Gods, you carry with you the fragrance of frangipani, the echo of gamelan music, and the profound peace of a land where spirituality permeates every moment.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Bali swing at Tegallalang (IDR 350,000/person)',
  'White-water rafting on Ayung River (IDR 350,000/person)',
  'Nusa Penida island day trip (IDR 450,000/person)',
  'Balinese traditional massage (IDR 150,000/hour)',
  'Surfing lessons at Kuta Beach (IDR 250,000/person)',
  'Lembongan Island snorkelling trip'],

  bestTimeToVisit:
  'April to October (dry season) for the best beach weather and outdoor activities. July–August is peak season with higher prices. November–March (wet season) is lush and green with fewer crowds and lower prices.',
  thingsToCarry: [
  'Light, breathable clothing',
  'Sarong and sash (required for temple visits — often provided)',
  'Swimwear and beach cover-ups',
  'Sunscreen SPF 50+ and insect repellent',
  'Comfortable walking shoes for temple visits',
  'Valid passport (minimum 6 months validity)',
  'Cash in Indonesian Rupiah (IDR)',
  'Small backpack for day trips'],

  relatedSlugs: ['thailand', 'vietnam', 'maldives']
},

{
  slug: 'vietnam',
  destination: 'Vietnam',
  packageName: 'Indochine Heritage Voyage',
  tagline: 'Ancient Kingdoms & Emerald Bays',
  duration: '7 Days / 6 Nights',
  durationNights: '6 Nights',
  price: '₹52,000',
  heroImage: "/assets/images/900x600_vietnam_hoi_an_phuc_kien_pink_building-1783922368562.jpg",
  heroVideo: "/assets/images/900x600_vietnam_hoi_an_phuc_kien_pink_building-1783922368562.jpg",
  type: 'international',
  overview:
  'Vietnam is a country of extraordinary contrasts — where ancient imperial cities stand alongside French colonial architecture, where emerald limestone karsts rise from jade-green bays, and where the aroma of pho and fresh herbs fills every street corner. The Indochine Heritage Voyage is a 7-day north-to-south journey through Vietnam\'s most iconic destinations: the chaotic energy of Hanoi, the ethereal beauty of Ha Long Bay, the lantern-lit streets of Hoi An, and the vibrant modernity of Ho Chi Minh City.',
  destinationsCovered: ['Hanoi', 'Ha Long Bay', 'Hue', 'Hoi An', 'Ho Chi Minh City'],
  highlights: [
  'Ha Long Bay overnight cruise — limestone karsts and emerald waters',
  'Hoi An Ancient Town lantern festival (UNESCO World Heritage)',
  'Hue Imperial Citadel and royal tombs',
  'Cu Chi Tunnels — underground wartime network near Ho Chi Minh City',
  'Hanoi Old Quarter cyclo tour and street food walk',
  'Mekong Delta boat trip through floating markets',
  'Cooking class in Hoi An — Vietnamese cuisine'],

  inclusions: [
  'Accommodation for 6 nights (2N Hanoi + 1N Ha Long Bay cruise + 1N Hue + 1N Hoi An + 1N Ho Chi Minh City)',
  'Daily breakfast',
  'Ha Long Bay overnight cruise with all meals',
  'Hanoi airport pick-up and Ho Chi Minh City drop',
  'All inter-city transfers by domestic flights or private vehicle',
  'Hanoi Old Quarter cyclo tour',
  'Hue city tour by private vehicle',
  'Hoi An Ancient Town guided walk',
  'Cu Chi Tunnels tour',
  'All applicable taxes'],

  exclusions: [
  'International airfare (India to Hanoi / Ho Chi Minh City return)',
  'Vietnam e-Visa (approx. ₹2,500)',
  'Lunch and dinner (except Ha Long Bay cruise)',
  'Personal expenses, shopping, and tips',
  'Travel insurance',
  'Optional activities'],

  hotelCategory: '3-Star Hotels & Boutique Cruise',
  transportation: 'Private AC Vehicle + Domestic Flights',
  mealPlan: 'Breakfast Only (CP) + Full Board on Ha Long Bay Cruise',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Hanoi — The Ancient Capital',
    description:
    'Arrive at Noi Bai International Airport, Hanoi, and transfer to your hotel in the Old Quarter. Hanoi, Vietnam\'s capital for over 1,000 years, is a city where French colonial boulevards meet ancient pagodas and chaotic motorbike traffic. After freshening up, explore the Hoan Kiem Lake and the iconic red Huc Bridge leading to the Ngoc Son Temple on a small island in the lake. In the evening, take a cyclo (three-wheeled bicycle rickshaw) tour through the 36 streets of the Old Quarter — each street historically specialised in a different trade. Join a street food walking tour: try bun cha (grilled pork noodles), banh mi, egg coffee, and fresh spring rolls at local eateries.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Hanoi'
  },
  {
    day: 2,
    title: 'Hanoi Sightseeing — Temples, Mausoleums & Museums',
    description:
    'After breakfast, explore Hanoi\'s most significant cultural landmarks. Visit the Ho Chi Minh Mausoleum complex — the final resting place of Vietnam\'s revolutionary leader, surrounded by the Presidential Palace, Ho Chi Minh\'s stilt house, and the One Pillar Pagoda (a unique 11th-century lotus-shaped temple built on a single stone pillar). Continue to the Temple of Literature (Van Mieu) — Vietnam\'s first university, founded in 1070, with beautiful courtyards and stone steles bearing the names of doctoral graduates. Visit the Vietnam Museum of Ethnology for a fascinating overview of Vietnam\'s 54 ethnic groups. In the afternoon, explore the French Quarter\'s elegant colonial architecture and the Hoa Lo Prison Museum (the "Hanoi Hilton").',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Hanoi'
  },
  {
    day: 3,
    title: 'Ha Long Bay Cruise — Emerald Waters & Limestone Karsts',
    description:
    'After breakfast, transfer to Ha Long Bay (170 km, approximately 3.5 hours). Board your overnight cruise vessel — a traditional wooden junk boat — and set sail into one of the world\'s most spectacular seascapes. Ha Long Bay, a UNESCO World Heritage Site, contains nearly 2,000 limestone islands and islets rising dramatically from the emerald-green waters of the Gulf of Tonkin. Cruise through the bay, stopping to explore Sung Sot Cave (Surprise Cave) — the largest and most impressive cave in Ha Long Bay, with cathedral-like chambers of stalactites and stalagmites. Kayak through hidden lagoons and floating fishing villages. As the sun sets over the karsts, enjoy a seafood dinner onboard with fresh squid, prawns, and clams caught that day.',
    meals: 'Breakfast, Lunch & Dinner (onboard)',
    accommodation: 'Overnight Cruise, Ha Long Bay'
  },
  {
    day: 4,
    title: 'Ha Long Bay to Hue — Imperial City',
    description:
    'Rise early for a sunrise tai chi session on the cruise deck, followed by breakfast. Disembark and transfer to Hanoi Airport for a domestic flight to Da Nang, then drive 1 hour to Hue — Vietnam\'s former imperial capital and a UNESCO World Heritage Site. Check in and visit the Imperial Citadel (Dai Noi) — a 10 km² walled complex modelled on Beijing\'s Forbidden City, housing the Forbidden Purple City (royal residence), nine dynastic urns, and the Flag Tower. In the afternoon, visit the Thien Mu Pagoda — a seven-storey octagonal tower on the banks of the Perfume River, one of Vietnam\'s most iconic landmarks. Dinner at a restaurant serving Hue royal cuisine — bun bo Hue, banh khoai, and com hen.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Hue'
  },
  {
    day: 5,
    title: 'Hue to Hoi An — The Lantern City',
    description:
    'After breakfast, drive approximately 120 km to Hoi An via the spectacular Hai Van Pass — a mountain pass offering panoramic views of Da Nang Bay and the South China Sea. Stop at the Marble Mountains — five marble and limestone hills containing caves, tunnels, and Buddhist sanctuaries. Arrive in Hoi An — a perfectly preserved 15th-century trading port and UNESCO World Heritage Site. Check in and explore the Ancient Town on foot: the iconic Japanese Covered Bridge (1593), the Phuc Kien Assembly Hall, the Old House of Tan Ky, and the colourful lantern-lit streets. In the evening, join a lantern-making workshop and release your handmade lantern into the Thu Bon River — a magical Hoi An tradition.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Hoi An'
  },
  {
    day: 6,
    title: 'Hoi An to Ho Chi Minh City — The Dynamic South',
    description:
    'After breakfast, take a morning cooking class in Hoi An — visit the local market with your chef, select fresh ingredients, and learn to prepare classic Vietnamese dishes including pho, fresh spring rolls, and Vietnamese crepes. Transfer to Da Nang Airport for a domestic flight to Ho Chi Minh City (Saigon) — Vietnam\'s largest city and economic powerhouse. Check in and explore the city\'s French colonial landmarks: the Notre-Dame Cathedral Basilica of Saigon, the Central Post Office (designed by Gustave Eiffel), and the Reunification Palace. In the evening, explore the Ben Thanh Market for street food and souvenirs, and the vibrant Bui Vien Walking Street for nightlife.',
    meals: 'Breakfast & Lunch (cooking class)',
    accommodation: '3-Star Hotel, Ho Chi Minh City'
  },
  {
    day: 7,
    title: 'Cu Chi Tunnels & Departure',
    description:
    'After breakfast, drive 70 km to the Cu Chi Tunnels — an extraordinary underground network of over 250 km of tunnels used by Viet Cong guerrillas during the Vietnam War. Crawl through the narrow tunnels, see the ingenious booby traps, and understand the remarkable resilience of the Vietnamese people. Return to Ho Chi Minh City for a final lunch of Vietnamese cuisine. Transfer to Tan Son Nhat International Airport for your departure flight. As you leave Vietnam, you carry with you the taste of pho, the glow of Hoi An lanterns, and the profound beauty of a country that has transformed itself from the ashes of war into one of Asia\'s most vibrant destinations.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Mekong Delta day trip from Ho Chi Minh City',
  'Motorbiking tour of Hanoi Old Quarter',
  'Sapa trekking extension (2 additional days)',
  'Hoi An bicycle tour through rice paddies',
  'Vietnamese cooking class in Hanoi',
  'Phong Nha caves extension from Hue'],

  bestTimeToVisit:
  'February to April for the best weather across all regions. November–January is good for the south. May–October is monsoon season (varies by region — north is wet in summer, south in autumn).',
  thingsToCarry: [
  'Light, breathable clothing',
  'Modest clothing for temple and pagoda visits',
  'Comfortable walking shoes',
  'Sunscreen and insect repellent',
  'Valid passport (minimum 6 months validity)',
  'Vietnam e-Visa (apply online before departure)',
  'Cash in Vietnamese Dong (VND)',
  'Small backpack for day trips'],

  relatedSlugs: ['thailand', 'bali', 'singapore']
},

{
  slug: 'singapore',
  destination: 'Singapore',
  packageName: 'Lion City Luxury Sojourn',
  tagline: 'Where Cultures Converge in Splendour',
  duration: '4 Days / 3 Nights',
  durationNights: '3 Nights',
  price: '₹58,000',
  heroImage: "/assets/images/P8300753-1783922618646.webp",
  heroVideo: "/assets/images/P8300753-1783922618646.webp",
  type: 'international',
  overview:
  'Singapore is the world\'s most efficient city-state — a gleaming metropolis where futuristic architecture meets colonial heritage, where hawker centres serve Michelin-starred street food, and where a tropical rainforest exists in the heart of the city. The Lion City Luxury Sojourn is a 4-day immersion into Singapore\'s many worlds: the iconic Marina Bay waterfront, the lush Gardens by the Bay, the multicultural neighbourhoods of Chinatown and Little India, and the resort paradise of Sentosa Island.',
  destinationsCovered: ['Marina Bay', 'Orchard Road', 'Sentosa Island', 'Chinatown', 'Little India'],
  highlights: [
  'Gardens by the Bay — Supertree Grove and Cloud Forest Dome',
  'Marina Bay Sands SkyPark Observation Deck',
  'Sentosa Island — Universal Studios Singapore',
  'Singapore Zoo or Night Safari',
  'Chinatown and Little India heritage walks',
  'Clarke Quay riverside dining and nightlife',
  'Singapore Cable Car from Mount Faber to Sentosa'],

  inclusions: [
  'Accommodation for 3 nights in a 4-star hotel, Singapore',
  'Daily breakfast',
  'Singapore Changi Airport pick-up and drop',
  'Gardens by the Bay (Flower Dome + Cloud Forest) tickets',
  'Marina Bay Sands SkyPark Observation Deck ticket',
  'Sentosa Island cable car ticket',
  'Singapore city tour by private vehicle (half day)',
  'All applicable taxes'],

  exclusions: [
  'International airfare (India to Singapore return)',
  'Singapore Tourist Visa (if applicable)',
  'Universal Studios Singapore tickets (SGD 83/person)',
  'Singapore Zoo / Night Safari tickets',
  'Lunch and dinner',
  'Personal expenses, shopping, and tips',
  'Travel insurance'],

  hotelCategory: '4-Star Hotel',
  transportation: 'Private AC Vehicle + MRT (Metro)',
  mealPlan: 'Breakfast Only (CP)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Singapore — The Lion City Welcomes You',
    description:
    'Arrive at Singapore Changi Airport — consistently rated the world\'s best airport, with its indoor waterfall, butterfly garden, and the spectacular Jewel Changi shopping complex. Transfer to your 4-star hotel in the Marina Bay area. After freshening up, take a stroll along the Marina Bay waterfront promenade — the iconic skyline of Marina Bay Sands, the Esplanade (Theatres on the Bay), and the Merlion statue are all within walking distance. In the evening, visit Gardens by the Bay for the spectacular Garden Rhapsody light and sound show at the Supertree Grove — 18-storey tree-like structures that come alive with music and light after dark. Dinner at the Satay by the Bay hawker centre for authentic Singaporean satay.',
    meals: 'Breakfast',
    accommodation: '4-Star Hotel, Marina Bay'
  },
  {
    day: 2,
    title: 'Marina Bay & Gardens by the Bay — Icons of Singapore',
    description:
    'After breakfast, begin the day at Gardens by the Bay — Singapore\'s most visited attraction. Explore the Cloud Forest Dome, a 35-metre indoor mountain shrouded in mist and covered in tropical plants, and the Flower Dome, the world\'s largest glass greenhouse housing plants from five Mediterranean-climate regions. Ascend the Marina Bay Sands SkyPark Observation Deck (57th floor) for a 360-degree panorama of Singapore\'s skyline, the Strait of Johor, and the Indonesian islands. In the afternoon, explore the Civic District — the colonial heart of Singapore — visiting the National Museum, the Asian Civilisations Museum, and the Padang. In the evening, take a bumboat (river taxi) along the Singapore River from Clarke Quay to Boat Quay for dinner at a riverside restaurant.',
    meals: 'Breakfast',
    accommodation: '4-Star Hotel, Marina Bay'
  },
  {
    day: 3,
    title: 'Sentosa Island & Cultural Neighbourhoods',
    description:
    'After breakfast, take the Singapore Cable Car from Mount Faber to Sentosa Island — a 4 km² resort island connected to the mainland by a causeway. Spend the morning at Universal Studios Singapore — Southeast Asia\'s only Universal Studios theme park, with 28 rides and attractions across 7 themed zones including Hollywood, New York, Sci-Fi City, Ancient Egypt, The Lost World, Far Far Away, and Madagascar. In the afternoon, explore Sentosa\'s beaches — Palawan Beach (the southernmost point of continental Asia), Siloso Beach, and Tanjong Beach. Return to the mainland and explore Chinatown for dinner — the Maxwell Food Centre is a legendary hawker centre where you can try Hainanese chicken rice, char kway teow, and laksa.',
    meals: 'Breakfast',
    accommodation: '4-Star Hotel, Marina Bay'
  },
  {
    day: 4,
    title: 'Little India, Orchard Road & Departure',
    description:
    'After breakfast, check out and explore Little India — Singapore\'s most vibrant and colourful neighbourhood, centred around Serangoon Road. Visit the Sri Veeramakaliamman Temple, the Tekka Centre wet market, and the colourful shophouses of Kampong Glam (the Malay Quarter), including the golden-domed Sultan Mosque. Continue to Orchard Road — Singapore\'s famous 2.2 km shopping boulevard lined with luxury malls, department stores, and international brands. Enjoy a final lunch at a hawker centre (own cost) before transferring to Changi Airport for your departure flight. Singapore\'s efficiency means even the airport farewell is a pleasure.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Universal Studios Singapore (SGD 83/person)',
  'Singapore Zoo (SGD 48/person)',
  'Night Safari (SGD 55/person)',
  'S.E.A. Aquarium on Sentosa (SGD 41/person)',
  'Singapore Flyer (giant observation wheel, SGD 33/person)',
  'Jurong Bird Park (SGD 30/person)'],

  bestTimeToVisit:
  'Singapore is a year-round destination with a tropical climate (26–32°C). February–April is slightly drier. Avoid November–January (northeast monsoon, heavier rain). Chinese New Year (January/February) is a spectacular time to visit.',
  thingsToCarry: [
  'Light, breathable clothing (Singapore is hot and humid)',
  'Compact umbrella or rain poncho (sudden showers are common)',
  'Comfortable walking shoes',
  'Sunscreen SPF 50+',
  'Valid passport (minimum 6 months validity)',
  'Credit/debit card (widely accepted)',
  'Cash in Singapore Dollars (SGD)'],

  relatedSlugs: ['singapore-malaysia', 'dubai', 'thailand']
},

{
  slug: 'singapore-malaysia',
  destination: 'Singapore–Malaysia',
  packageName: 'Twin Kingdoms Grand Tour',
  tagline: 'Two Nations, One Unforgettable Journey',
  duration: '7 Days / 6 Nights',
  durationNights: '6 Nights',
  price: '₹65,000',
  heroImage: "/assets/images/4-days-in-malaysia-1725351164-785X440-1783922727576.jpg",
  heroVideo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6a04c9f-1773131007599.png",
  type: 'international',
  overview:
  'The Twin Kingdoms Grand Tour combines the best of two extraordinary Southeast Asian nations in one seamless 7-day journey. Begin in Singapore — the gleaming Lion City of futuristic architecture and world-class food — then cross the causeway into Malaysia for the colonial grandeur of Kuala Lumpur, the island paradise of Langkawi, and the UNESCO-listed heritage city of Penang. This package is designed for travellers who want maximum diversity: two countries, multiple cities, and a lifetime of memories.',
  destinationsCovered: ['Singapore', 'Kuala Lumpur', 'Genting Highlands', 'Langkawi', 'Penang'],
  highlights: [
  'Petronas Twin Towers observation deck — world\'s tallest twin towers',
  'Langkawi Cable Car to Mat Cincang Peak (708 m)',
  'Penang George Town heritage walk — UNESCO World Heritage',
  'Batu Caves — 272-step climb to a Hindu temple inside a limestone cave',
  'Singapore Gardens by the Bay and Marina Bay Sands SkyPark',
  'Genting Highlands — Malaysia\'s mountain resort and theme park',
  'Langkawi Island hopping — Dayang Bunting, Beras Basah'],

  inclusions: [
  'Accommodation for 6 nights (2N Singapore + 2N Kuala Lumpur + 1N Langkawi + 1N Penang)',
  'Daily breakfast',
  'Singapore Changi Airport pick-up',
  'Penang Airport drop',
  'All inter-city transfers by private vehicle or domestic flight',
  'Gardens by the Bay tickets (Singapore)',
  'Petronas Twin Towers observation deck ticket',
  'Batu Caves visit',
  'Langkawi Cable Car ticket',
  'All applicable taxes'],

  exclusions: [
  'International airfare',
  'Singapore and Malaysia Tourist Visas (if applicable)',
  'Genting Highlands theme park tickets',
  'Lunch and dinner',
  'Personal expenses, shopping, and tips',
  'Travel insurance'],

  hotelCategory: '3-Star to 4-Star Hotels',
  transportation: 'Private AC Vehicle + Domestic Flights',
  mealPlan: 'Breakfast Only (CP)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Singapore — Gateway to Southeast Asia',
    description:
    'Arrive at Singapore Changi Airport and transfer to your hotel. Spend the afternoon exploring the iconic Marina Bay waterfront — the Merlion statue, the Esplanade, and the spectacular view of Marina Bay Sands. In the evening, visit Gardens by the Bay for the Garden Rhapsody light show at the Supertree Grove. Dinner at the Clarke Quay riverside dining precinct — choose from Singaporean, Chinese, Indian, or international cuisine.',
    meals: 'Breakfast',
    accommodation: '4-Star Hotel, Singapore'
  },
  {
    day: 2,
    title: 'Singapore Highlights — Sentosa & Cultural Quarters',
    description:
    'After breakfast, take the Singapore Cable Car to Sentosa Island for a morning of fun at Universal Studios Singapore (own cost) or the beaches. In the afternoon, explore Chinatown and Little India — Singapore\'s most atmospheric neighbourhoods. Visit the Sri Mariamman Temple (Singapore\'s oldest Hindu temple), the Buddha Tooth Relic Temple, and the colourful shophouses of Kampong Glam. Dinner at a hawker centre — try chicken rice, laksa, and chilli crab.',
    meals: 'Breakfast',
    accommodation: '4-Star Hotel, Singapore'
  },
  {
    day: 3,
    title: 'Singapore to Kuala Lumpur — The Malaysian Capital',
    description:
    'After breakfast, transfer to Woodlands Checkpoint and cross into Malaysia by private vehicle (approximately 5 hours to Kuala Lumpur). Arrive in KL and check in to your hotel. In the afternoon, visit the iconic Petronas Twin Towers — the world\'s tallest twin towers at 452 metres — and ascend to the observation deck on the 86th floor for panoramic city views. Explore the KLCC Park and the Suria KLCC shopping mall at the base of the towers. In the evening, visit Jalan Alor — KL\'s most famous street food destination — for a feast of Malaysian Chinese cuisine: char kway teow, BBQ chicken wings, and durian.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Kuala Lumpur'
  },
  {
    day: 4,
    title: 'Kuala Lumpur Sightseeing — Caves, Mosques & Markets',
    description:
    'After breakfast, drive to Batu Caves (13 km north of KL) — a series of limestone caves and cave temples dedicated to the Hindu deity Murugan. Climb the 272 rainbow-coloured steps to the main Temple Cave, guarded by a 42.7-metre golden statue of Lord Murugan — one of the tallest statues in the world. Return to KL and visit the National Mosque (Masjid Negara) and the Sultan Abdul Samad Building — a stunning Moorish-Gothic colonial building facing Merdeka Square. Explore Petaling Street (Chinatown) for bargain shopping and street food. In the afternoon, drive to Genting Highlands (2,000 m) for a cable car ride and the cool mountain air.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Kuala Lumpur'
  },
  {
    day: 5,
    title: 'Kuala Lumpur to Langkawi — Island Paradise',
    description:
    'After breakfast, transfer to KL International Airport for a domestic flight to Langkawi — Malaysia\'s most celebrated island destination, a duty-free archipelago of 99 islands in the Andaman Sea. Check in to your beachside resort. In the afternoon, take the Langkawi Cable Car to the summit of Mount Mat Cincang (708 m) — the second oldest rainforest in the world — for panoramic views of the island, the Andaman Sea, and the Thai islands on the horizon. Walk across the Langkawi Sky Bridge — a curved pedestrian bridge suspended 100 metres above the rainforest canopy. Sunset at Pantai Cenang Beach — Langkawi\'s most popular beach strip.',
    meals: 'Breakfast',
    accommodation: '3-Star Resort, Langkawi'
  },
  {
    day: 6,
    title: 'Langkawi Island Hopping & Transfer to Penang',
    description:
    'After breakfast, embark on a Langkawi island hopping tour by speedboat. Visit Dayang Bunting (Island of the Pregnant Maiden) — a freshwater lake inside a limestone island, surrounded by jungle and inhabited by monkeys. Snorkel at Pulau Beras Basah (Rice Grain Island) — a tiny island with crystal-clear waters and a white sand beach. Visit the Eagle Square (Dataran Lang) — a 12-metre sculpture of the Brahminy Kite eagle, the symbol of Langkawi. In the afternoon, take a ferry to Penang (approximately 2.5 hours) and check in to your hotel in George Town.',
    meals: 'Breakfast',
    accommodation: '3-Star Hotel, Penang'
  },
  {
    day: 7,
    title: 'Penang Heritage Walk & Departure',
    description:
    'After breakfast, explore George Town — a UNESCO World Heritage Site and one of Southeast Asia\'s most vibrant cultural cities. Walk through the historic core, admiring the colonial architecture, Chinese clan houses, Hindu temples, mosques, and street art murals that make Penang unique. Visit the Khoo Kongsi — a magnificent Chinese clan temple with ornate carvings and paintings. Explore the Penang Hill funicular railway for panoramic island views. Penang is also Malaysia\'s food capital — try char kway teow, assam laksa, nasi kandar, and cendol at the famous hawker stalls. Transfer to Penang International Airport for your departure flight.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Universal Studios Singapore (SGD 83/person)',
  'Genting Highlands theme park (MYR 150/person)',
  'Langkawi mangrove kayaking tour',
  'Penang cooking class — Nyonya cuisine',
  'Cameron Highlands tea plantation visit',
  'Tioman Island snorkelling extension'],

  bestTimeToVisit:
  'December to February for the best weather across both countries. March–May is also excellent. Avoid November (northeast monsoon affects east coast Malaysia). Singapore is pleasant year-round.',
  thingsToCarry: [
  'Light, breathable clothing',
  'Modest clothing for mosque visits',
  'Swimwear for Langkawi beaches',
  'Comfortable walking shoes',
  'Valid passport (minimum 6 months validity)',
  'Cash in Singapore Dollars (SGD) and Malaysian Ringgit (MYR)',
  'Compact umbrella'],

  relatedSlugs: ['singapore', 'thailand', 'bali']
},

{
  slug: 'sri-lanka',
  destination: 'Sri Lanka',
  packageName: 'Pearl of the Indian Ocean Trail',
  tagline: 'Ancient Kingdoms & Emerald Highlands',
  duration: '6 Days / 5 Nights',
  durationNights: '5 Nights',
  price: '₹38,000',
  heroImage: "/assets/images/360_F_364951258_xLzCW41kr5AV7OXdVv49ufv6u0XL3nqq-1783923172216.png",
  type: 'international',
  overview:
  'Sri Lanka — the teardrop-shaped island at the southern tip of India — is one of Asia\'s most rewarding travel destinations. The Pearl of the Indian Ocean Trail is a 6-day journey through the island\'s extraordinary diversity: the ancient rock fortress of Sigiriya, the sacred city of Kandy, the misty tea highlands of Ella, and the pristine beaches of the south coast. This package packs an extraordinary amount of history, culture, wildlife, and natural beauty into six days, making it one of the most value-packed international packages in our portfolio.',
  destinationsCovered: ['Colombo', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Mirissa'],
  highlights: [
  'Sigiriya Rock Fortress — UNESCO World Heritage, 5th-century citadel',
  'Dambulla Cave Temple — 2,000-year-old Buddhist cave complex',
  'Kandy Esala Perahera (if visiting in July–August) and Temple of the Tooth',
  'Ella Rock trek and Nine Arch Bridge',
  'Nuwara Eliya tea plantation and factory tour',
  'Mirissa Beach whale watching (November–April)',
  'Yala National Park leopard safari'],

  inclusions: [
  'Accommodation for 5 nights (1N Sigiriya + 1N Kandy + 1N Nuwara Eliya + 1N Ella + 1N Mirissa)',
  'Daily breakfast and dinner',
  'Colombo airport pick-up and drop',
  'All transfers by private AC vehicle',
  'Sigiriya Rock Fortress entry ticket',
  'Dambulla Cave Temple entry',
  'Kandy Temple of the Tooth entry',
  'Tea factory tour in Nuwara Eliya',
  'Experienced local guide throughout',
  'All applicable taxes'],

  exclusions: [
  'International airfare (India to Colombo return)',
  'Sri Lanka ETA (Electronic Travel Authorisation, approx. ₹1,500)',
  'Yala National Park jeep safari (on direct payment)',
  'Whale watching at Mirissa (on direct payment)',
  'Lunch at restaurants',
  'Personal expenses and tips',
  'Travel insurance'],

  hotelCategory: '3-Star Hotels & Boutique Guesthouses',
  transportation: 'Private AC Vehicle',
  mealPlan: 'MAP (Breakfast + Dinner)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Colombo — Pearl of the Indian Ocean',
    description:
    'Arrive at Bandaranaike International Airport, Colombo, and transfer directly to Sigiriya (approximately 4 hours). En route, stop at Dambulla Cave Temple — a UNESCO World Heritage Site comprising five cave temples carved into a massive granite outcrop, housing 153 Buddha statues and 2,100 sq metres of ancient murals dating back to the 1st century BC. Continue to Sigiriya and check in to your hotel. In the evening, explore the village around Sigiriya Rock and enjoy a traditional Sri Lankan dinner — rice and curry with coconut sambol, dhal, and papadum.',
    meals: 'Dinner',
    accommodation: '3-Star Hotel, Sigiriya'
  },
  {
    day: 2,
    title: 'Sigiriya Rock Fortress — The Lion\'s Rock',
    description:
    'Rise early for the ascent of Sigiriya Rock Fortress — one of the most extraordinary archaeological sites in Asia. The 200-metre granite monolith was transformed by King Kashyapa in the 5th century AD into a fortified palace complex. Climb the 1,200 steps to the summit, passing the famous Sigiriya Frescoes (ancient paintings of celestial maidens), the Mirror Wall (covered in 8th-century graffiti poetry), and the Lion\'s Paw terrace. At the summit, explore the ruins of the royal palace with panoramic views of the surrounding jungle and reservoirs. Descend and visit the water gardens and boulder gardens at the base. In the afternoon, visit a local spice garden for a demonstration of Sri Lanka\'s famous spices — cinnamon, cardamom, pepper, and cloves.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Sigiriya'
  },
  {
    day: 3,
    title: 'Sigiriya to Kandy — The Sacred City',
    description:
    'After breakfast, drive approximately 90 km to Kandy — Sri Lanka\'s cultural capital and the last kingdom of the ancient kings. Check in and visit the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) — the most sacred Buddhist temple in Sri Lanka, housing a tooth relic of the Buddha. The evening puja (offering ceremony) at the temple is a deeply moving experience. Explore the Kandy Lake and the surrounding streets. Visit the Royal Botanical Gardens at Peradeniya (6 km from Kandy) — 147 acres of manicured gardens with over 4,000 species of plants, including a spectacular avenue of royal palms. Dinner and overnight in Kandy.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Kandy'
  },
  {
    day: 4,
    title: 'Kandy to Nuwara Eliya — Tea Country',
    description:
    'After breakfast, drive approximately 75 km to Nuwara Eliya (1,868 m) — Sri Lanka\'s highest town, known as "Little England" for its colonial bungalows, manicured gardens, and cool climate. The drive through the central highlands is one of Sri Lanka\'s most scenic journeys, passing through tea estates, waterfalls, and misty mountain passes. Visit a working tea estate and factory for a guided tour of the tea-making process — from plucking to withering, rolling, fermenting, and drying. Taste freshly brewed Ceylon tea in the factory\'s tasting room. Explore Nuwara Eliya town — the colonial post office, the Grand Hotel, and the Victoria Park. Dinner and overnight in Nuwara Eliya.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Hotel, Nuwara Eliya'
  },
  {
    day: 5,
    title: 'Nuwara Eliya to Ella — Nine Arches & Mountain Trains',
    description:
    'After breakfast, board the famous Kandy-Ella train (the most scenic railway journey in Sri Lanka) or drive approximately 60 km to Ella — a small hill town surrounded by tea estates and dramatic mountain scenery. Check in and hike to the Nine Arch Bridge — a stunning colonial-era viaduct built entirely of brick and stone, best photographed when a train crosses it against the backdrop of green tea hills. In the afternoon, trek to Ella Rock (3 hours round trip) for panoramic views of the Ella Gap — a dramatic valley that opens towards the southern coast. Visit Little Adam\'s Peak for a shorter but equally rewarding sunset hike.',
    meals: 'Breakfast & Dinner',
    accommodation: '3-Star Guesthouse, Ella'
  },
  {
    day: 6,
    title: 'Ella to Mirissa & Departure',
    description:
    'After breakfast, drive approximately 150 km to Mirissa — Sri Lanka\'s most beautiful beach destination on the south coast. Mirissa\'s crescent-shaped bay with its golden sand, turquoise water, and coconut palms is picture-perfect. If visiting between November and April, join a whale watching boat trip — the waters off Mirissa are one of the best places in the world to see blue whales, sperm whales, and spinner dolphins. Spend the afternoon on the beach before driving to Colombo (approximately 3 hours) for your departure flight. Sri Lanka will stay with you long after you leave — in the taste of its cinnamon, the echo of its temple bells, and the warmth of its people.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Yala National Park leopard safari (LKR 15,000/person)',
  'Whale watching at Mirissa (LKR 5,000/person)',
  'White-water rafting on Kelani River, Kitulgala',
  'Horton Plains National Park and World\'s End trek',
  'Colombo city tour (half day)',
  'Surfing at Arugam Bay (east coast)'],

  bestTimeToVisit:
  'December to March for the west and south coasts (Mirissa, Colombo). April to September for the east coast. The Cultural Triangle (Sigiriya, Kandy) is pleasant year-round. Avoid May–June (southwest monsoon) for the south coast.',
  thingsToCarry: [
  'Light cotton clothing',
  'Warm layer for Nuwara Eliya and Ella (cool evenings)',
  'Comfortable trekking shoes for Sigiriya and Ella Rock',
  'Sunscreen and insect repellent',
  'Modest clothing for temple visits (shoulders and knees covered)',
  'Valid passport (minimum 6 months validity)',
  'Sri Lanka ETA (apply online before departure)',
  'Cash in Sri Lankan Rupees (LKR)'],

  relatedSlugs: ['maldives', 'bali', 'thailand']
},

{
  slug: 'maldives',
  destination: 'Maldives',
  packageName: 'Azure Atoll Luxury Retreat',
  tagline: 'Heaven on Water, Paradise on Earth',
  duration: '4 Days / 3 Nights',
  durationNights: '3 Nights',
  price: '₹75,000',
  heroImage: "https://images.unsplash.com/photo-1633281873696-e0cc216127e0",
  heroVideo: "https://images.unsplash.com/photo-1633281873696-e0cc216127e0",
  type: 'international',
  overview:
  'The Maldives is the world\'s ultimate tropical escape — a nation of 1,200 coral islands scattered across the Indian Ocean like turquoise jewels, where the water is so clear you can see the coral from your overwater bungalow, where bioluminescent plankton light up the beach at night, and where the only sounds are the lapping of waves and the call of seabirds. The Azure Atoll Luxury Retreat is a 4-day immersion into this paradise: a private island resort, overwater bungalow experience, world-class snorkelling and diving, and the most spectacular sunsets on the planet.',
  destinationsCovered: ['Malé', 'North Malé Atoll', 'South Malé Atoll'],
  highlights: [
  'Overwater bungalow experience with direct lagoon access',
  'House reef snorkelling — sea turtles, manta rays, reef sharks',
  'Sunset dolphin cruise in the Indian Ocean',
  'Sandbank picnic on a deserted white sand island',
  'Bioluminescent beach walk at night',
  'Scuba diving at world-class dive sites'],

  inclusions: [
  'Accommodation for 3 nights in a 4-star island resort (beach villa or water bungalow)',
  'Daily breakfast and dinner (MAP)',
  'Malé airport speedboat/seaplane transfer to resort',
  'Sunset dolphin cruise (1.5 hours)',
  'Sandbank excursion with snorkelling',
  'House reef snorkelling equipment',
  'Welcome drink and fruit basket on arrival',
  'All applicable taxes and service charges'],

  exclusions: [
  'International airfare (India to Malé return)',
  'Maldives Tourist Visa (free on arrival for Indian passport holders)',
  'Scuba diving (on direct payment, USD 80–120/dive)',
  'Lunch at resort restaurants',
  'Personal expenses, spa treatments, and tips',
  'Travel insurance',
  'Water sports (jet ski, parasailing, windsurfing)'],

  hotelCategory: '4-Star Island Resort',
  transportation: 'Speedboat / Seaplane Transfer',
  mealPlan: 'MAP (Breakfast + Dinner)',
  itinerary: [
  {
    day: 1,
    title: 'Arrival in Malé — Welcome to Paradise',
    description:
    'Arrive at Velana International Airport, Malé — the world\'s most geographically dispersed country. Be greeted by your resort representative and board a speedboat or seaplane for the transfer to your island resort. The seaplane transfer itself is one of the most spectacular experiences in travel — flying low over the atolls, you see the extraordinary geometry of coral reefs, turquoise lagoons, and tiny white sand islands from above. Arrive at your resort and check in to your beach villa or overwater bungalow. Spend the afternoon at leisure — snorkelling on the house reef, swimming in the lagoon, or simply lying in a hammock over the water. Welcome dinner at the resort\'s main restaurant.',
    meals: 'Dinner',
    accommodation: '4-Star Island Resort, Maldives'
  },
  {
    day: 2,
    title: 'House Reef Snorkelling & Sandbank Picnic',
    description:
    'After breakfast, don your snorkelling gear and explore the resort\'s house reef — a living coral garden teeming with marine life. The Maldives is home to over 1,000 species of fish, 200 species of coral, and 5 species of sea turtle. Snorkel alongside green and hawksbill turtles, blacktip reef sharks, moray eels, and schools of colourful reef fish. In the afternoon, board a dhoni (traditional Maldivian boat) for a sandbank excursion — a deserted white sand island barely above sea level, surrounded by nothing but turquoise water and sky. Enjoy a private picnic on the sandbank with fresh tropical fruits, sandwiches, and cold drinks. Swim and snorkel around the sandbank before returning to the resort for sunset.',
    meals: 'Breakfast & Dinner',
    accommodation: '4-Star Island Resort, Maldives'
  },
  {
    day: 3,
    title: 'Dolphin Cruise, Scuba Diving & Bioluminescent Night',
    description:
    'After breakfast, spend the morning on an optional scuba diving excursion to one of the Maldives\' world-class dive sites — drift dives with manta rays, wall dives alongside whale sharks, and vibrant coral gardens. Non-divers can enjoy a glass-bottom boat tour or a guided snorkelling trip to a nearby reef. In the afternoon, relax at the resort\'s infinity pool or indulge in a traditional Maldivian massage at the spa. As evening falls, embark on a sunset dolphin cruise — the waters around the Maldives are home to large pods of spinner dolphins that leap and spin alongside the boat in the golden evening light. After dinner, walk along the beach in the dark to witness one of nature\'s most magical phenomena — bioluminescent plankton lighting up the shoreline with an ethereal blue glow with every wave and footstep.',
    meals: 'Breakfast & Dinner',
    accommodation: '4-Star Island Resort, Maldives'
  },
  {
    day: 4,
    title: 'Final Morning in Paradise & Departure',
    description:
    'Enjoy a final breakfast at the resort — perhaps on your overwater bungalow deck as the morning sun turns the lagoon from silver to turquoise. Spend the last morning snorkelling, swimming, or simply sitting on the jetty watching the fish below. Check out and board your speedboat or seaplane for the transfer back to Malé International Airport. As you fly over the atolls one last time, you understand why the Maldives is called heaven on earth — and why everyone who visits vows to return.',
    meals: 'Breakfast',
    accommodation: 'Departure'
  }],

  optionalActivities: [
  'Scuba diving (USD 80–120/dive)',
  'Parasailing (USD 60/person)',
  'Jet skiing (USD 50/30 min)',
  'Windsurfing lessons (USD 40/hour)',
  'Underwater restaurant dinner (USD 150–200/person)',
  'Fishing trip at sunset (USD 40/person)'],

  bestTimeToVisit:
  'November to April (dry season) for the best visibility, calm seas, and ideal snorkelling/diving conditions. May–October (wet season) brings more rain but fewer crowds and lower prices. The Maldives is a year-round destination.',
  thingsToCarry: [
  'Light, breathable clothing and swimwear',
  'Reef-safe sunscreen (regular sunscreen damages coral)',
  'UV-protection rash guard for snorkelling',
  'Waterproof sandals',
  'Underwater camera or GoPro',
  'Valid passport (minimum 6 months validity)',
  'Cash in USD (widely accepted) or credit card',
  'Seasickness medication if prone to motion sickness'],

  relatedSlugs: ['dubai', 'sri-lanka', 'bali']
}];


export function getPackageBySlug(slug: string): PackageData | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getRelatedPackages(slugs: string[]): PackageData[] {
  return slugs.map((s) => packages.find((p) => p.slug === s)).filter(Boolean) as PackageData[];
}