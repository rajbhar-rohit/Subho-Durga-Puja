export interface Pandal {
  id: string;
  name: string;
  area: string;
  city?: string;
  district: string;
  state?: string;
  lat: number;
  lng: number;
}

// NOTE: This is a small sample of long-running, well-known Puja
// committees, meant as a starting point — not a complete or verified
// current directory. Coordinates are approximate. Puja committees,
// themes, and even locations can change year to year, so treat this as
// a template: replace or extend it with your own curated, up-to-date list.
export const PANDALS: Pandal[] = [
  {
    "id": "cr-park-mela-ground",
    "name": "CR Park Mela Ground",
    "area": "Chittaranjan Park",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.5382,
    "lng": 77.2531
  },
  {
    "id": "cr-park-b-block",
    "name": "CR Park B Block",
    "area": "Chittaranjan Park",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.539,
    "lng": 77.2538
  },
  {
    "id": "cr-park-cooperative",
    "name": "CR Park Cooperative",
    "area": "Chittaranjan Park",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.5372,
    "lng": 77.255
  },
  {
    "id": "cr-park-kali-mandir",
    "name": "CR Park Kali Mandir",
    "area": "Chittaranjan Park",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.5388,
    "lng": 77.2518
  },
  {
    "id": "cr-park-pocket-40",
    "name": "CR Park Pocket 40",
    "area": "Chittaranjan Park",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.541,
    "lng": 77.2548
  },
  {
    "id": "matri-mandir",
    "name": "Matri Mandir",
    "area": "Safdarjung Enclave",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.5621,
    "lng": 77.1928
  },
  {
    "id": "minto-road-puja-samity",
    "name": "Minto Road Puja Samity",
    "area": "Minto Road",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.6441,
    "lng": 77.214
  },
  {
    "id": "delhi-kali-bari",
    "name": "Delhi Kali Bari",
    "area": "Mandir Marg",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.6332,
    "lng": 77.2025
  },
  {
    "id": "aram-bagh-durga-puja",
    "name": "Aram Bagh Durga Puja",
    "area": "Aram Bagh",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.6462,
    "lng": 77.2065
  },
  {
    "id": "kashmere-gate-durga-puja",
    "name": "Kashmere Gate Durga Puja",
    "area": "Civil Lines",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.6664,
    "lng": 77.2244
  },
  {
    "id": "mayur-vihar-kali-bari",
    "name": "Mayur Vihar Kali Bari",
    "area": "Mayur Vihar",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.6057,
    "lng": 77.292
  },
  {
    "id": "gk2-durgotsab",
    "name": "GK2 Durgotsab",
    "area": "Greater Kailash II",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.531,
    "lng": 77.2432
  },
  {
    "id": "lajpat-nagar-durga-puja",
    "name": "Lajpat Nagar Durga Puja",
    "area": "Lajpat Nagar",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.568,
    "lng": 77.243
  },
  {
    "id": "pandara-road-sarbojanin",
    "name": "Pandara Road Sarbojanin",
    "area": "Pandara Road",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.6065,
    "lng": 77.2275
  },
  {
    "id": "timarpur-civil-lines-puja",
    "name": "Timarpur Civil Lines Puja",
    "area": "Timarpur",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.706,
    "lng": 77.2215
  },
  {
    "id": "saket-durga-puja",
    "name": "Saket Durga Puja",
    "area": "Saket",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.5245,
    "lng": 77.215
  },
  {
    "id": "cr-park-d-block",
    "name": "CR Park D Block",
    "area": "Chittaranjan Park",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.539,
    "lng": 77.257
  },
  {
    "id": "cr-park-pocket-52",
    "name": "CR Park Pocket 52",
    "area": "Chittaranjan Park",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.541,
    "lng": 77.25
  },
  {
    "id": "greater-kailash-i-puja",
    "name": "Greater Kailash I Puja",
    "area": "Greater Kailash I",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.554,
    "lng": 77.238
  },
  {
    "id": "lajpat-nagar-bengali-puja",
    "name": "Lajpat Nagar Bengali Puja",
    "area": "Lajpat Nagar",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.568,
    "lng": 77.239
  },
  {
    "id": "sushant-lok-durga-puja",
    "name": "Sushant Lok Durga Puja",
    "area": "Gurugram",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.468,
    "lng": 77.081
  },
  {
    "id": "arambagh-puja",
    "name": "Arambagh Puja",
    "area": "Aram Bagh",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.646,
    "lng": 77.207
  },
  {
    "id": "naya-delhi-sarbojanin",
    "name": "Naya Delhi Sarbojanin",
    "area": "Pandara Road",
    "city": "Delhi",
    "district": "Delhi",
    "state": "Delhi",
    "lat": 28.606,
    "lng": 77.228
  },
  {
    "id": "north-bombay-sarbojanin",
    "name": "North Bombay Sarbojanin",
    "area": "Santacruz/Juhu",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.088,
    "lng": 72.835
  },
  {
    "id": "bombay-durgabari-samiti",
    "name": "Bombay Durgabari Samiti",
    "area": "Babulnath",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 18.9585,
    "lng": 72.8075
  },
  {
    "id": "bengal-club-durgotsav",
    "name": "Bengal Club Durgotsav",
    "area": "Shivaji Park",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.0275,
    "lng": 72.839
  },
  {
    "id": "lokhandwala-durgotsav",
    "name": "Lokhandwala Durgotsav",
    "area": "Andheri West",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.1405,
    "lng": 72.825
  },
  {
    "id": "powai-bengali-association",
    "name": "Powai Bengali Association",
    "area": "Powai",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.1197,
    "lng": 72.905
  },
  {
    "id": "navi-mumbai-bengali-association",
    "name": "Navi Mumbai Bengali Association",
    "area": "Vashi",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.076,
    "lng": 73.0
  },
  {
    "id": "borivali-bengali-association",
    "name": "Borivali Bengali Association",
    "area": "Borivali",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.229,
    "lng": 72.857
  },
  {
    "id": "andheri-bengali-association",
    "name": "Andheri Bengali Association",
    "area": "Andheri",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.119,
    "lng": 72.846
  },
  {
    "id": "bandra-durga-puja",
    "name": "Bandra Durga Puja",
    "area": "Bandra",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.06,
    "lng": 72.836
  },
  {
    "id": "thakur-village-durga-puja",
    "name": "Thakur Village Durga Puja",
    "area": "Kandivali East",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.209,
    "lng": 72.872
  },
  {
    "id": "chembur-bengali-association",
    "name": "Chembur Bengali Association",
    "area": "Chembur",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.055,
    "lng": 72.9
  },
  {
    "id": "khar-bengali-association",
    "name": "Khar Bengali Association",
    "area": "Khar",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.068,
    "lng": 72.838
  },
  {
    "id": "vile-parle-bengali-puja",
    "name": "Vile Parle Bengali Puja",
    "area": "Vile Parle",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.099,
    "lng": 72.844
  },
  {
    "id": "mulund-bengali-association",
    "name": "Mulund Bengali Association",
    "area": "Mulund",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.173,
    "lng": 72.956
  },
  {
    "id": "thane-bengali-association",
    "name": "Thane Bengali Association",
    "area": "Thane",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.218,
    "lng": 72.978
  },
  {
    "id": "dombivli-bengali-association",
    "name": "Dombivli Bengali Association",
    "area": "Dombivli",
    "city": "Mumbai",
    "district": "Mumbai",
    "state": "Maharashtra",
    "lat": 19.21,
    "lng": 73.087
  },
  {
    "id": "rt-nagar-socio-cultural-trust",
    "name": "RT Nagar Socio Cultural Trust",
    "area": "Palace Grounds",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 13.0045,
    "lng": 77.5895
  },
  {
    "id": "bss-durga-puja",
    "name": "BSS Durga Puja",
    "area": "Hoodi",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.993,
    "lng": 77.715
  },
  {
    "id": "kolaj-durga-puja",
    "name": "KOLAJ Durga Puja",
    "area": "Koramangala",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.934,
    "lng": 77.62
  },
  {
    "id": "sarathi-socio-cultural-trust",
    "name": "Sarathi Socio Cultural Trust",
    "area": "Koramangala",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.9315,
    "lng": 77.624
  },
  {
    "id": "aikatan-durga-puja",
    "name": "Aikatan Durga Puja",
    "area": "Rajarajeshwari Nagar",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.9125,
    "lng": 77.5185
  },
  {
    "id": "barsha-durga-puja-ground",
    "name": "BARSHA Durga Puja Ground",
    "area": "HSR Extension",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.9085,
    "lng": 77.665
  },
  {
    "id": "binb-durgotsav",
    "name": "BinB Durgotsav",
    "area": "Bannerghatta Road",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.9235,
    "lng": 77.6
  },
  {
    "id": "bdpc-bengaluru-durga-puja",
    "name": "BDPC Bengaluru Durga Puja",
    "area": "Palace Grounds",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 13.0055,
    "lng": 77.588
  },
  {
    "id": "rgbcf-durga-puja",
    "name": "RGBCF Durga Puja",
    "area": "Rayasandra",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.876,
    "lng": 77.676
  },
  {
    "id": "jbca-durga-puja",
    "name": "JBCA Durga Puja",
    "area": "KR Puram",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 13.004,
    "lng": 77.678
  },
  {
    "id": "whitefield-bengali-association",
    "name": "Whitefield Bengali Association",
    "area": "Whitefield",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.9698,
    "lng": 77.75
  },
  {
    "id": "electronic-city-bengali-association",
    "name": "Electronic City Bengali Association",
    "area": "Electronic City",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.844,
    "lng": 77.66
  },
  {
    "id": "bengaluru-bengali-association",
    "name": "Bengaluru Bengali Association",
    "area": "Indiranagar",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.978,
    "lng": 77.64
  },
  {
    "id": "whitefield-sarbojanin-puja",
    "name": "Whitefield Sarbojanin Puja",
    "area": "Whitefield",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.97,
    "lng": 77.75
  },
  {
    "id": "koramangala-sarbojanin",
    "name": "Koramangala Sarbojanin",
    "area": "Koramangala",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.935,
    "lng": 77.625
  },
  {
    "id": "electronic-city-puja",
    "name": "Electronic City Puja",
    "area": "Electronic City",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 12.844,
    "lng": 77.66
  },
  {
    "id": "yelahanka-bengali-puja",
    "name": "Yelahanka Bengali Puja",
    "area": "Yelahanka",
    "city": "Bengaluru",
    "district": "Bengaluru",
    "state": "Karnataka",
    "lat": 13.1,
    "lng": 77.596
  },
  {
    "id": "balu-bazar-durga-puja",
    "name": "Balu Bazar Durga Puja",
    "area": "Balu Bazar",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.4625,
    "lng": 85.882
  },
  {
    "id": "mangalabag-durga-puja",
    "name": "Mangalabag Durga Puja",
    "area": "Mangalabag",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.467,
    "lng": 85.879
  },
  {
    "id": "khannagar-durga-puja",
    "name": "Khannagar Durga Puja",
    "area": "Khannagar",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.476,
    "lng": 85.8805
  },
  {
    "id": "choudhury-bazar-durga-puja",
    "name": "Choudhury Bazar Durga Puja",
    "area": "Choudhury Bazar",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.464,
    "lng": 85.879
  },
  {
    "id": "sheikh-bazar-durga-puja",
    "name": "Sheikh Bazar Durga Puja",
    "area": "Sheikh Bazar",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.4665,
    "lng": 85.8755
  },
  {
    "id": "dargha-bazar-durga-puja",
    "name": "Dargha Bazar Durga Puja",
    "area": "Dargha Bazar",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.4675,
    "lng": 85.874
  },
  {
    "id": "ranihat-durga-puja",
    "name": "Ranihat Durga Puja",
    "area": "Ranihat",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.478,
    "lng": 85.889
  },
  {
    "id": "haripur-dolamundai-puja",
    "name": "Haripur Dolamundai Puja",
    "area": "Dolamundai",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.46,
    "lng": 85.8845
  },
  {
    "id": "college-square-puja",
    "name": "College Square Puja",
    "area": "College Square",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.473,
    "lng": 85.885
  },
  {
    "id": "jobra-durga-puja",
    "name": "Jobra Durga Puja",
    "area": "Jobra",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.487,
    "lng": 85.87
  },
  {
    "id": "badambadi-durga-puja",
    "name": "Badambadi Durga Puja",
    "area": "Badambadi",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.465,
    "lng": 85.879
  },
  {
    "id": "buxi-bazaar-puja",
    "name": "Buxi Bazaar Puja",
    "area": "Buxi Bazaar",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.465,
    "lng": 85.88
  },
  {
    "id": "pithapur-durga-puja",
    "name": "Pithapur Durga Puja",
    "area": "Pithapur",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.47,
    "lng": 85.886
  },
  {
    "id": "chhatrabazar-puja",
    "name": "Chhatrabazar Puja",
    "area": "Chhatrabazar",
    "city": "Cuttack",
    "district": "Cuttack",
    "state": "Odisha",
    "lat": 20.47,
    "lng": 85.878
  },
  {
    "id": "sreebhumi-sporting-club",
    "name": "Sreebhumi Sporting Club",
    "area": "Lake Town",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.603,
    "lng": 88.4005
  },
  {
    "id": "bagbazar-sarbojanin",
    "name": "Bagbazar Sarbojanin",
    "area": "Bagbazar",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.6035,
    "lng": 88.369
  },
  {
    "id": "ekdalia-evergreen",
    "name": "Ekdalia Evergreen",
    "area": "Ballygunge",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.519,
    "lng": 88.365
  },
  {
    "id": "college-square",
    "name": "College Square",
    "area": "College Street",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.574,
    "lng": 88.3615
  },
  {
    "id": "maddox-square",
    "name": "Maddox Square",
    "area": "Ballygunge",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.531,
    "lng": 88.365
  },
  {
    "id": "santosh-mitra-square",
    "name": "Santosh Mitra Square",
    "area": "Bowbazar",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.566,
    "lng": 88.36
  },
  {
    "id": "deshapriya-park",
    "name": "Deshapriya Park",
    "area": "Ballygunge",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.516,
    "lng": 88.3525
  },
  {
    "id": "chetla-agrani",
    "name": "Chetla Agrani",
    "area": "Chetla",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.507,
    "lng": 88.334
  },
  {
    "id": "tridhara-sammilani",
    "name": "Tridhara Sammilani",
    "area": "Ballygunge",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.518,
    "lng": 88.368
  },
  {
    "id": "tala-prattay",
    "name": "Tala Prattay",
    "area": "Tala",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.61,
    "lng": 88.381
  },
  {
    "id": "jagat-mukherjee-park",
    "name": "Jagat Mukherjee Park",
    "area": "Shobhabazar",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.597,
    "lng": 88.365
  },
  {
    "id": "bosepukur-sitala-mandir",
    "name": "Bosepukur Sitala Mandir",
    "area": "Kasba",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.516,
    "lng": 88.388
  },
  {
    "id": "suruchi-sangha",
    "name": "Suruchi Sangha",
    "area": "New Alipore",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.502,
    "lng": 88.326
  },
  {
    "id": "mohammad-ali-park",
    "name": "Mohammad Ali Park",
    "area": "Central Kolkata",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.577,
    "lng": 88.357
  },
  {
    "id": "kumartuli-park",
    "name": "Kumartuli Park",
    "area": "Kumartuli",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.598,
    "lng": 88.361
  },
  {
    "id": "naktala-udayan-sangha",
    "name": "Naktala Udayan Sangha",
    "area": "Naktala",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.475,
    "lng": 88.369
  },
  {
    "id": "hindustan-park",
    "name": "Hindustan Park",
    "area": "Gariahat",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.52,
    "lng": 88.367
  },
  {
    "id": "samaj-sebi-sangha",
    "name": "Samaj Sebi Sangha",
    "area": "Lake Gardens",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.507,
    "lng": 88.357
  },
  {
    "id": "mudiali-club",
    "name": "Mudiali Club",
    "area": "Mudiali",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.5,
    "lng": 88.341
  },
  {
    "id": "jodhpur-park",
    "name": "Jodhpur Park",
    "area": "Jodhpur Park",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.498,
    "lng": 88.368
  },
  {
    "id": "behala-nutan-sangha",
    "name": "Behala Nutan Sangha",
    "area": "Behala",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.49,
    "lng": 88.316
  },
  {
    "id": "barisha-club",
    "name": "Barisha Club",
    "area": "Barisha",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.474,
    "lng": 88.317
  },
  {
    "id": "dum-dum-park-tarun-sangha",
    "name": "Dum Dum Park Tarun Sangha",
    "area": "Dum Dum Park",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.62,
    "lng": 88.401
  },
  {
    "id": "kashi-bose-lane",
    "name": "Kashi Bose Lane",
    "area": "North Kolkata",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.595,
    "lng": 88.369
  },
  {
    "id": "hati-bagan-sarbojanin",
    "name": "Hati Bagan Sarbojanin",
    "area": "Hati Bagan",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.594,
    "lng": 88.374
  },
  {
    "id": "manicktala-chaltabagan",
    "name": "Manicktala Chaltabagan",
    "area": "Manicktala",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.589,
    "lng": 88.39
  },
  {
    "id": "kankurgachi-yubak-brinda",
    "name": "Kankurgachi Yubak Brinda",
    "area": "Kankurgachi",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.589,
    "lng": 88.395
  },
  {
    "id": "kestopur-pragati-sangha",
    "name": "Kestopur Pragati Sangha",
    "area": "Kestopur",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.6,
    "lng": 88.43
  },
  {
    "id": "dum-dum-park-bharat-chakra",
    "name": "Dum Dum Park Bharat Chakra",
    "area": "Dum Dum Park",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.615,
    "lng": 88.402
  },
  {
    "id": "salt-lake-fd-block",
    "name": "Salt Lake FD Block",
    "area": "Salt Lake",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.594,
    "lng": 88.409
  },
  {
    "id": "salt-lake-bj-block",
    "name": "Salt Lake BJ Block",
    "area": "Salt Lake",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.596,
    "lng": 88.41
  },
  {
    "id": "salt-lake-ak-block",
    "name": "Salt Lake AK Block",
    "area": "Salt Lake",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.582,
    "lng": 88.41
  },
  {
    "id": "alipore-66-pally",
    "name": "Alipore 66 Pally",
    "area": "Alipore",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.521,
    "lng": 88.333
  },
  {
    "id": "ballygunge-cultural",
    "name": "Ballygunge Cultural",
    "area": "Ballygunge",
    "city": "Kolkata",
    "district": "Kolkata",
    "state": "West Bengal",
    "lat": 22.526,
    "lng": 88.369
  },
  {
    "id": "hyderabad-bengali-samiti",
    "name": "Hyderabad Bengali Samiti",
    "area": "Begumpet",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.444,
    "lng": 78.468
  },
  {
    "id": "secunderabad-bengali-association",
    "name": "Secunderabad Bengali Association",
    "area": "Secunderabad",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.439,
    "lng": 78.498
  },
  {
    "id": "bengali-cultural-association",
    "name": "Bengali Cultural Association",
    "area": "Himayatnagar",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.401,
    "lng": 78.489
  },
  {
    "id": "ramakrishna-math-durga-puja",
    "name": "Ramakrishna Math Durga Puja",
    "area": "Domalguda",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.41,
    "lng": 78.477
  },
  {
    "id": "begumpet-durga-puja",
    "name": "Begumpet Durga Puja",
    "area": "Begumpet",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.444,
    "lng": 78.468
  },
  {
    "id": "kachiguda-durga-puja",
    "name": "Kachiguda Durga Puja",
    "area": "Kachiguda",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.389,
    "lng": 78.5
  },
  {
    "id": "sainikpuri-durga-puja",
    "name": "Sainikpuri Durga Puja",
    "area": "Sainikpuri",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.485,
    "lng": 78.57
  },
  {
    "id": "kondapur-bengali-association",
    "name": "Kondapur Bengali Association",
    "area": "Kondapur",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.463,
    "lng": 78.363
  },
  {
    "id": "kukatpally-bengali-puja",
    "name": "Kukatpally Bengali Puja",
    "area": "Kukatpally",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.494,
    "lng": 78.399
  },
  {
    "id": "banjara-hills-bengali-puja",
    "name": "Banjara Hills Bengali Puja",
    "area": "Banjara Hills",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.415,
    "lng": 78.434
  },
  {
    "id": "miyapur-durga-puja",
    "name": "Miyapur Durga Puja",
    "area": "Miyapur",
    "city": "Hyderabad",
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.496,
    "lng": 78.356
  },
  {
    "id": "chennai-kali-bari",
    "name": "Chennai Kali Bari",
    "area": "T Nagar",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 13.041,
    "lng": 80.233
  },
  {
    "id": "bengali-association-chennai",
    "name": "Bengali Association Chennai",
    "area": "Adyar",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 13.006,
    "lng": 80.257
  },
  {
    "id": "dakshina-bharatha-bengali-puja",
    "name": "Dakshina Bharatha Bengali Puja",
    "area": "T Nagar",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 13.0415,
    "lng": 80.23
  },
  {
    "id": "besant-nagar-bengali-puja",
    "name": "Besant Nagar Bengali Puja",
    "area": "Besant Nagar",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 13.0,
    "lng": 80.268
  },
  {
    "id": "anna-nagar-durga-puja",
    "name": "Anna Nagar Durga Puja",
    "area": "Anna Nagar",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 13.085,
    "lng": 80.21
  },
  {
    "id": "velachery-bengali-puja",
    "name": "Velachery Bengali Puja",
    "area": "Velachery",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 12.981,
    "lng": 80.218
  },
  {
    "id": "nanganallur-bengali-puja",
    "name": "Nanganallur Bengali Puja",
    "area": "Nanganallur",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 12.981,
    "lng": 80.185
  },
  {
    "id": "omr-bengali-association",
    "name": "OMR Bengali Association",
    "area": "Sholinganallur",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 12.901,
    "lng": 80.227
  },
  {
    "id": "tambaram-durga-puja",
    "name": "Tambaram Durga Puja",
    "area": "Tambaram",
    "city": "Chennai",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "lat": 12.924,
    "lng": 80.1
  },
  {
    "id": "ramakrishna-math-durga-puja-2",
    "name": "Ramakrishna Math Durga Puja",
    "area": "Nirala Nagar",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.881,
    "lng": 80.945
  },
  {
    "id": "bengali-club-durga-puja",
    "name": "Bengali Club Durga Puja",
    "area": "Hazratganj",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.85,
    "lng": 80.948
  },
  {
    "id": "lucknow-kali-bari",
    "name": "Lucknow Kali Bari",
    "area": "Hazratganj",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.854,
    "lng": 80.948
  },
  {
    "id": "aliganj-durga-puja",
    "name": "Aliganj Durga Puja",
    "area": "Aliganj",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.888,
    "lng": 80.944
  },
  {
    "id": "gomti-nagar-durga-puja",
    "name": "Gomti Nagar Durga Puja",
    "area": "Gomti Nagar",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.85,
    "lng": 81.0
  },
  {
    "id": "mahanagar-durga-puja",
    "name": "Mahanagar Durga Puja",
    "area": "Mahanagar",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.88,
    "lng": 80.968
  },
  {
    "id": "gomti-nagar-bengali-puja",
    "name": "Gomti Nagar Bengali Puja",
    "area": "Gomti Nagar",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.85,
    "lng": 81.0
  },
  {
    "id": "alambagh-durga-puja",
    "name": "Alambagh Durga Puja",
    "area": "Alambagh",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.81,
    "lng": 80.916
  },
  {
    "id": "indira-nagar-durga-puja",
    "name": "Indira Nagar Durga Puja",
    "area": "Indira Nagar",
    "city": "Lucknow",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.883,
    "lng": 80.995
  },
  {
    "id": "patna-kali-bari",
    "name": "Patna Kali Bari",
    "area": "Bankipore",
    "city": "Patna",
    "district": "Patna",
    "state": "Bihar",
    "lat": 25.61,
    "lng": 85.13
  },
  {
    "id": "bengali-akhara-durga-puja",
    "name": "Bengali Akhara Durga Puja",
    "area": "Bankipore",
    "city": "Patna",
    "district": "Patna",
    "state": "Bihar",
    "lat": 25.61,
    "lng": 85.125
  },
  {
    "id": "kadamkuan-durga-puja",
    "name": "Kadamkuan Durga Puja",
    "area": "Kadamkuan",
    "city": "Patna",
    "district": "Patna",
    "state": "Bihar",
    "lat": 25.606,
    "lng": 85.13
  },
  {
    "id": "patliputra-durga-puja",
    "name": "Patliputra Durga Puja",
    "area": "Patliputra Colony",
    "city": "Patna",
    "district": "Patna",
    "state": "Bihar",
    "lat": 25.62,
    "lng": 85.085
  },
  {
    "id": "boring-road-durga-puja",
    "name": "Boring Road Durga Puja",
    "area": "Boring Road",
    "city": "Patna",
    "district": "Patna",
    "state": "Bihar",
    "lat": 25.62,
    "lng": 85.105
  },
  {
    "id": "beldih-kali-bari",
    "name": "Beldih Kali Bari",
    "area": "Beldih",
    "city": "Jamshedpur",
    "district": "Jamshedpur",
    "state": "Jharkhand",
    "lat": 22.805,
    "lng": 86.19
  },
  {
    "id": "sonari-durga-puja",
    "name": "Sonari Durga Puja",
    "area": "Sonari",
    "city": "Jamshedpur",
    "district": "Jamshedpur",
    "state": "Jharkhand",
    "lat": 22.813,
    "lng": 86.165
  },
  {
    "id": "telco-durga-puja",
    "name": "Telco Durga Puja",
    "area": "Telco",
    "city": "Jamshedpur",
    "district": "Jamshedpur",
    "state": "Jharkhand",
    "lat": 22.75,
    "lng": 86.22
  },
  {
    "id": "sakchi-durga-puja",
    "name": "Sakchi Durga Puja",
    "area": "Sakchi",
    "city": "Jamshedpur",
    "district": "Jamshedpur",
    "state": "Jharkhand",
    "lat": 22.804,
    "lng": 86.202
  },
  {
    "id": "kadma-durga-puja",
    "name": "Kadma Durga Puja",
    "area": "Kadma",
    "city": "Jamshedpur",
    "district": "Jamshedpur",
    "state": "Jharkhand",
    "lat": 22.808,
    "lng": 86.174
  },
  {
    "id": "agrico-durga-puja",
    "name": "Agrico Durga Puja",
    "area": "Agrico",
    "city": "Jamshedpur",
    "district": "Jamshedpur",
    "state": "Jharkhand",
    "lat": 22.785,
    "lng": 86.22
  },
  {
    "id": "harmu-durga-puja",
    "name": "Harmu Durga Puja",
    "area": "Harmu",
    "city": "Ranchi",
    "district": "Ranchi",
    "state": "Jharkhand",
    "lat": 23.372,
    "lng": 85.327
  },
  {
    "id": "bariatu-durga-puja",
    "name": "Bariatu Durga Puja",
    "area": "Bariatu",
    "city": "Ranchi",
    "district": "Ranchi",
    "state": "Jharkhand",
    "lat": 23.381,
    "lng": 85.34
  },
  {
    "id": "doranda-durga-puja",
    "name": "Doranda Durga Puja",
    "area": "Doranda",
    "city": "Ranchi",
    "district": "Ranchi",
    "state": "Jharkhand",
    "lat": 23.334,
    "lng": 85.315
  },
  {
    "id": "morabadi-durga-puja",
    "name": "Morabadi Durga Puja",
    "area": "Morabadi",
    "city": "Ranchi",
    "district": "Ranchi",
    "state": "Jharkhand",
    "lat": 23.407,
    "lng": 85.333
  },
  {
    "id": "dhurwa-durga-puja",
    "name": "Dhurwa Durga Puja",
    "area": "Dhurwa",
    "city": "Ranchi",
    "district": "Ranchi",
    "state": "Jharkhand",
    "lat": 23.3,
    "lng": 85.287
  },
  {
    "id": "ulubari-durga-puja",
    "name": "Ulubari Durga Puja",
    "area": "Ulubari",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.167,
    "lng": 91.745
  },
  {
    "id": "beltola-durga-puja",
    "name": "Beltola Durga Puja",
    "area": "Beltola",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.132,
    "lng": 91.806
  },
  {
    "id": "pandu-durga-puja",
    "name": "Pandu Durga Puja",
    "area": "Pandu",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.145,
    "lng": 91.674
  },
  {
    "id": "silpukhuri-durga-puja",
    "name": "Silpukhuri Durga Puja",
    "area": "Silpukhuri",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.19,
    "lng": 91.761
  },
  {
    "id": "noonmati-durga-puja",
    "name": "Noonmati Durga Puja",
    "area": "Noonmati",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.186,
    "lng": 91.765
  },
  {
    "id": "chandmari-durga-puja",
    "name": "Chandmari Durga Puja",
    "area": "Chandmari",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.19,
    "lng": 91.775
  },
  {
    "id": "zoo-road-durga-puja",
    "name": "Zoo Road Durga Puja",
    "area": "Zoo Road",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.161,
    "lng": 91.79
  },
  {
    "id": "bharalumukh-durga-puja",
    "name": "Bharalumukh Durga Puja",
    "area": "Bharalumukh",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.17,
    "lng": 91.7
  },
  {
    "id": "ganeshguri-durga-puja",
    "name": "Ganeshguri Durga Puja",
    "area": "Ganeshguri",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.145,
    "lng": 91.788
  },
  {
    "id": "dispur-durga-puja",
    "name": "Dispur Durga Puja",
    "area": "Dispur",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.144,
    "lng": 91.789
  },
  {
    "id": "hatigaon-durga-puja",
    "name": "Hatigaon Durga Puja",
    "area": "Hatigaon",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.126,
    "lng": 91.782
  },
  {
    "id": "maligaon-durga-puja",
    "name": "Maligaon Durga Puja",
    "area": "Maligaon",
    "city": "Guwahati",
    "district": "Guwahati",
    "state": "Assam",
    "lat": 26.159,
    "lng": 91.694
  },
  {
    "id": "banamalipur-durga-puja",
    "name": "Banamalipur Durga Puja",
    "area": "Banamalipur",
    "city": "Agartala",
    "district": "Agartala",
    "state": "Tripura",
    "lat": 23.829,
    "lng": 91.28
  },
  {
    "id": "battala-durga-puja",
    "name": "Battala Durga Puja",
    "area": "Battala",
    "city": "Agartala",
    "district": "Agartala",
    "state": "Tripura",
    "lat": 23.831,
    "lng": 91.286
  },
  {
    "id": "lake-chowmuhani-durga-puja",
    "name": "Lake Chowmuhani Durga Puja",
    "area": "Lake Chowmuhani",
    "city": "Agartala",
    "district": "Agartala",
    "state": "Tripura",
    "lat": 23.833,
    "lng": 91.279
  },
  {
    "id": "melarmath-durga-puja",
    "name": "Melarmath Durga Puja",
    "area": "Melarmath",
    "city": "Agartala",
    "district": "Agartala",
    "state": "Tripura",
    "lat": 23.836,
    "lng": 91.28
  },
  {
    "id": "dhaleswar-durga-puja",
    "name": "Dhaleswar Durga Puja",
    "area": "Dhaleswar",
    "city": "Agartala",
    "district": "Agartala",
    "state": "Tripura",
    "lat": 23.851,
    "lng": 91.292
  },
  {
    "id": "ramnagar-durga-puja",
    "name": "Ramnagar Durga Puja",
    "area": "Ramnagar",
    "city": "Agartala",
    "district": "Agartala",
    "state": "Tripura",
    "lat": 23.84,
    "lng": 91.27
  },
  {
    "id": "jogendranagar-durga-puja",
    "name": "Jogendranagar Durga Puja",
    "area": "Jogendranagar",
    "city": "Agartala",
    "district": "Agartala",
    "state": "Tripura",
    "lat": 23.845,
    "lng": 91.33
  },
  {
    "id": "durga-bari-association",
    "name": "Durga Bari Association",
    "area": "Bani Park",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.922,
    "lng": 75.792
  },
  {
    "id": "probashi-bengali-cultural-society",
    "name": "Probashi Bengali Cultural Society",
    "area": "C-Scheme",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.912,
    "lng": 75.798
  },
  {
    "id": "murlipura-sarbojanin",
    "name": "Murlipura Sarbojanin",
    "area": "Murlipura",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.959,
    "lng": 75.779
  },
  {
    "id": "agrani-puja-mahotsav",
    "name": "Agrani Puja Mahotsav",
    "area": "Murlipura",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.958,
    "lng": 75.779
  },
  {
    "id": "nabapallab-durga-puja",
    "name": "Nabapallab Durga Puja",
    "area": "Dadi Ka Phatak",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.974,
    "lng": 75.768
  },
  {
    "id": "jaipur-kali-bari",
    "name": "Jaipur Kali Bari",
    "area": "Malviya Nagar",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.85,
    "lng": 75.814
  },
  {
    "id": "jagatpura-durga-puja",
    "name": "Jagatpura Durga Puja",
    "area": "Jagatpura",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.842,
    "lng": 75.85
  },
  {
    "id": "sdm-park-durga-puja",
    "name": "SDM Park Durga Puja",
    "area": "Raja Park",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.9,
    "lng": 75.821
  },
  {
    "id": "vaishali-nagar-durga-puja",
    "name": "Vaishali Nagar Durga Puja",
    "area": "Vaishali Nagar",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.913,
    "lng": 75.743
  },
  {
    "id": "kanota-bagh-durga-puja",
    "name": "Kanota Bagh Durga Puja",
    "area": "Kanota Bagh",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.896,
    "lng": 75.815
  },
  {
    "id": "pratap-nagar-durga-puja",
    "name": "Pratap Nagar Durga Puja",
    "area": "Pratap Nagar",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.827,
    "lng": 75.794
  },
  {
    "id": "murlipura-nabapallab",
    "name": "Murlipura Nabapallab",
    "area": "Murlipura",
    "city": "Jaipur",
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.974,
    "lng": 75.768
  },
  {
    "id": "bikaner-bengali-sangthan",
    "name": "Bikaner Bengali Sangthan",
    "area": "Rani Bazar",
    "city": "Bikaner",
    "district": "Bikaner",
    "state": "Rajasthan",
    "lat": 28.014,
    "lng": 73.309
  },
  {
    "id": "bengali-association-durga-puja",
    "name": "Bengali Association Durga Puja",
    "area": "Bikaner Town",
    "city": "Bikaner",
    "district": "Bikaner",
    "state": "Rajasthan",
    "lat": 28.015,
    "lng": 73.31
  },
  {
    "id": "rocky-club",
    "name": "Rocky Club",
    "area": "Cooch Behar Town",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.327,
    "lng": 89.448
  },
  {
    "id": "maitri-sangha",
    "name": "Maitri Sangha",
    "area": "Cooch Behar Town",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.326,
    "lng": 89.443
  },
  {
    "id": "newtown-club",
    "name": "Newtown Club",
    "area": "New Town",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.337,
    "lng": 89.448
  },
  {
    "id": "bharat-club",
    "name": "Bharat Club",
    "area": "Siliguri Road",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.325,
    "lng": 89.451
  },
  {
    "id": "puratan-post-office-para",
    "name": "Puratan Post Office Para",
    "area": "Puratan Post Office Para",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.326,
    "lng": 89.443
  },
  {
    "id": "sri-sri-durgabari",
    "name": "Sri Sri Durgabari",
    "area": "Subhash Pally",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.335,
    "lng": 89.452
  },
  {
    "id": "debibari-barodevi",
    "name": "Debibari Barodevi",
    "area": "Debibari",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.325,
    "lng": 89.451
  },
  {
    "id": "baburhat-durga-puja",
    "name": "Baburhat Durga Puja",
    "area": "Baburhat",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.294,
    "lng": 89.445
  },
  {
    "id": "dinhata-gosani-road",
    "name": "Dinhata Gosani Road",
    "area": "Gosani Road",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.137,
    "lng": 89.467
  },
  {
    "id": "dinhata-sahid-corner",
    "name": "Dinhata Sahid Corner",
    "area": "Dinhata",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.135,
    "lng": 89.469
  },
  {
    "id": "dinhata-madan-mahan-bari",
    "name": "Dinhata Madan Mahan Bari",
    "area": "Dinhata",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.134,
    "lng": 89.47
  },
  {
    "id": "burimata-ban-durga-puja",
    "name": "Burimata Ban Durga Puja",
    "area": "Putimari",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.16,
    "lng": 89.44
  },
  {
    "id": "mathabhanga-venus-square-club",
    "name": "Mathabhanga Venus Square Club",
    "area": "Mathabhanga",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.342,
    "lng": 89.216
  },
  {
    "id": "pachagarh-durga-puja",
    "name": "Pachagarh Durga Puja",
    "area": "Pachagarh",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.35,
    "lng": 89.205
  },
  {
    "id": "mathabhanga-office-para",
    "name": "Mathabhanga Office Para",
    "area": "Dakshin Para",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.342,
    "lng": 89.216
  },
  {
    "id": "nishiganj-club",
    "name": "Nishiganj Club",
    "area": "Nishiganj",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.316850651113334,
    "lng": 89.29673703752772
  },
  {
    "id": "mathabhanga-bazar-durga-puja",
    "name": "Mathabhanga Bazar Durga Puja",
    "area": "Mathabhanga Bazar",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.341,
    "lng": 89.216
  },
  {
    "id": "mathabhanga-college-para",
    "name": "Mathabhanga College Para",
    "area": "College Para",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.345,
    "lng": 89.219
  },
  {
    "id": "mathabhanga-station-para",
    "name": "Mathabhanga Station Para",
    "area": "Station Para",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.339,
    "lng": 89.213
  },
  {
    "id": "dinhata-station-para",
    "name": "Dinhata Station Para",
    "area": "Station Para",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.136,
    "lng": 89.469
  },
  {
    "id": "dinhata-charak-math",
    "name": "Dinhata Charak Math",
    "area": "Charak Math",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.134,
    "lng": 89.465
  },
  {
    "id": "nishiganj-sarbojanin",
    "name": "Nishiganj Sarbojanin",
    "area": "Nishiganj",
    "city": "Cooch Behar",
    "district": "Cooch Behar",
    "state": "West Bengal",
    "lat": 26.317,
    "lng": 89.297
  },
  {
    "id": "bengali-association-durga-puja-2",
    "name": "Bengali Association Durga Puja",
    "area": "Saheed Nagar",
    "city": "Bhubaneswar",
    "district": "Bhubaneswar",
    "state": "Odisha",
    "lat": 20.3,
    "lng": 85.85
  },
  {
    "id": "baramunda-durga-puja",
    "name": "Baramunda Durga Puja",
    "area": "Baramunda",
    "city": "Bhubaneswar",
    "district": "Bhubaneswar",
    "state": "Odisha",
    "lat": 20.258,
    "lng": 85.799
  },
  {
    "id": "unit-9-durga-puja",
    "name": "Unit 9 Durga Puja",
    "area": "Unit 9",
    "city": "Bhubaneswar",
    "district": "Bhubaneswar",
    "state": "Odisha",
    "lat": 20.286,
    "lng": 85.829
  },
  {
    "id": "rasulgarh-durga-puja",
    "name": "Rasulgarh Durga Puja",
    "area": "Rasulgarh",
    "city": "Bhubaneswar",
    "district": "Bhubaneswar",
    "state": "Odisha",
    "lat": 20.298,
    "lng": 85.868
  },
  {
    "id": "nayapalli-durga-puja",
    "name": "Nayapalli Durga Puja",
    "area": "Nayapalli",
    "city": "Bhubaneswar",
    "district": "Bhubaneswar",
    "state": "Odisha",
    "lat": 20.29,
    "lng": 85.809
  },
  {
    "id": "bengali-association-durga-puja-3",
    "name": "Bengali Association Durga Puja",
    "area": "Civil Lines",
    "city": "Raipur",
    "district": "Raipur",
    "state": "Chhattisgarh",
    "lat": 21.238,
    "lng": 81.64
  },
  {
    "id": "shankar-nagar-durga-puja",
    "name": "Shankar Nagar Durga Puja",
    "area": "Shankar Nagar",
    "city": "Raipur",
    "district": "Raipur",
    "state": "Chhattisgarh",
    "lat": 21.258,
    "lng": 81.665
  },
  {
    "id": "civil-lines-durga-puja",
    "name": "Civil Lines Durga Puja",
    "area": "Civil Lines",
    "city": "Raipur",
    "district": "Raipur",
    "state": "Chhattisgarh",
    "lat": 21.238,
    "lng": 81.64
  },
  {
    "id": "tatibandh-durga-puja",
    "name": "Tatibandh Durga Puja",
    "area": "Tatibandh",
    "city": "Raipur",
    "district": "Raipur",
    "state": "Chhattisgarh",
    "lat": 21.254,
    "lng": 81.59
  },
  {
    "id": "bengali-association-bhopal",
    "name": "Bengali Association Bhopal",
    "area": "TT Nagar",
    "city": "Bhopal",
    "district": "Bhopal",
    "state": "Madhya Pradesh",
    "lat": 23.234,
    "lng": 77.434
  },
  {
    "id": "tt-nagar-durga-puja",
    "name": "TT Nagar Durga Puja",
    "area": "TT Nagar",
    "city": "Bhopal",
    "district": "Bhopal",
    "state": "Madhya Pradesh",
    "lat": 23.234,
    "lng": 77.434
  },
  {
    "id": "shahpura-durga-puja",
    "name": "Shahpura Durga Puja",
    "area": "Shahpura",
    "city": "Bhopal",
    "district": "Bhopal",
    "state": "Madhya Pradesh",
    "lat": 23.205,
    "lng": 77.48
  },
  {
    "id": "arera-colony-durga-puja",
    "name": "Arera Colony Durga Puja",
    "area": "Arera Colony",
    "city": "Bhopal",
    "district": "Bhopal",
    "state": "Madhya Pradesh",
    "lat": 23.205,
    "lng": 77.445
  },
  {
    "id": "bengali-association-indore",
    "name": "Bengali Association Indore",
    "area": "Vijay Nagar",
    "city": "Indore",
    "district": "Indore",
    "state": "Madhya Pradesh",
    "lat": 22.753,
    "lng": 75.893
  },
  {
    "id": "bengali-club-durga-puja-2",
    "name": "Bengali Club Durga Puja",
    "area": "Palasia",
    "city": "Indore",
    "district": "Indore",
    "state": "Madhya Pradesh",
    "lat": 22.724,
    "lng": 75.883
  },
  {
    "id": "rau-durga-puja",
    "name": "Rau Durga Puja",
    "area": "Rau",
    "city": "Indore",
    "district": "Indore",
    "state": "Madhya Pradesh",
    "lat": 22.631,
    "lng": 75.805
  },
  {
    "id": "bengali-library-durga-puja",
    "name": "Bengali Library Durga Puja",
    "area": "Race Course",
    "city": "Dehradun",
    "district": "Dehradun",
    "state": "Uttarakhand",
    "lat": 30.315,
    "lng": 78.039
  },
  {
    "id": "dehradun-kali-bari",
    "name": "Dehradun Kali Bari",
    "area": "Dalanwala",
    "city": "Dehradun",
    "district": "Dehradun",
    "state": "Uttarakhand",
    "lat": 30.332,
    "lng": 78.071
  },
  {
    "id": "race-course-durga-puja",
    "name": "Race Course Durga Puja",
    "area": "Race Course",
    "city": "Dehradun",
    "district": "Dehradun",
    "state": "Uttarakhand",
    "lat": 30.315,
    "lng": 78.039
  },
  {
    "id": "dalanwala-durga-puja",
    "name": "Dalanwala Durga Puja",
    "area": "Dalanwala",
    "city": "Dehradun",
    "district": "Dehradun",
    "state": "Uttarakhand",
    "lat": 30.33,
    "lng": 78.07
  },
  {
    "id": "pune-bengali-association",
    "name": "Pune Bengali Association",
    "area": "Aundh",
    "city": "Pune",
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.56,
    "lng": 73.807
  },
  {
    "id": "pune-durga-puja",
    "name": "Pune Durga Puja",
    "area": "Kothrud",
    "city": "Pune",
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.507,
    "lng": 73.807
  },
  {
    "id": "bengali-cultural-association-pune",
    "name": "Bengali Cultural Association Pune",
    "area": "Viman Nagar",
    "city": "Pune",
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.567,
    "lng": 73.914
  },
  {
    "id": "koregaon-park-durga-puja",
    "name": "Koregaon Park Durga Puja",
    "area": "Koregaon Park",
    "city": "Pune",
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.536,
    "lng": 73.895
  },
  {
    "id": "hadapsar-durga-puja",
    "name": "Hadapsar Durga Puja",
    "area": "Hadapsar",
    "city": "Pune",
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.508,
    "lng": 73.926
  },
  {
    "id": "baner-bengali-puja",
    "name": "Baner Bengali Puja",
    "area": "Baner",
    "city": "Pune",
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.56,
    "lng": 73.787
  },
  {
    "id": "wakad-bengali-puja",
    "name": "Wakad Bengali Puja",
    "area": "Wakad",
    "city": "Pune",
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.598,
    "lng": 73.764
  },
  {
    "id": "ahmedabad-bengali-association",
    "name": "Ahmedabad Bengali Association",
    "area": "Vastrapur",
    "city": "Ahmedabad",
    "district": "Ahmedabad",
    "state": "Gujarat",
    "lat": 23.04,
    "lng": 72.529
  },
  {
    "id": "bengali-association-durga-puja-4",
    "name": "Bengali Association Durga Puja",
    "area": "Satellite",
    "city": "Ahmedabad",
    "district": "Ahmedabad",
    "state": "Gujarat",
    "lat": 23.03,
    "lng": 72.51
  },
  {
    "id": "navrangpura-durga-puja",
    "name": "Navrangpura Durga Puja",
    "area": "Navrangpura",
    "city": "Ahmedabad",
    "district": "Ahmedabad",
    "state": "Gujarat",
    "lat": 23.037,
    "lng": 72.561
  },
  {
    "id": "surat-bengali-association",
    "name": "Surat Bengali Association",
    "area": "Adajan",
    "city": "Surat",
    "district": "Surat",
    "state": "Gujarat",
    "lat": 21.196,
    "lng": 72.793
  },
  {
    "id": "bengali-cultural-association-surat",
    "name": "Bengali Cultural Association Surat",
    "area": "Vesu",
    "city": "Surat",
    "district": "Surat",
    "state": "Gujarat",
    "lat": 21.145,
    "lng": 72.778
  },
  {
    "id": "chandigarh-bengali-association",
    "name": "Chandigarh Bengali Association",
    "area": "Sector 35",
    "city": "Chandigarh",
    "district": "Chandigarh",
    "state": "Chandigarh",
    "lat": 30.726,
    "lng": 76.754
  },
  {
    "id": "durga-puja-sector-20",
    "name": "Durga Puja Sector 20",
    "area": "Sector 20",
    "city": "Chandigarh",
    "district": "Chandigarh",
    "state": "Chandigarh",
    "lat": 30.735,
    "lng": 76.79
  },
  {
    "id": "panchkula-bengali-association",
    "name": "Panchkula Bengali Association",
    "area": "Sector 5 Panchkula",
    "city": "Chandigarh",
    "district": "Chandigarh",
    "state": "Chandigarh",
    "lat": 30.694,
    "lng": 76.85
  },
  {
    "id": "bengali-association-goa-durga-puja",
    "name": "Bengali Association Goa Durga Puja",
    "area": "Panaji",
    "city": "Goa",
    "district": "Goa",
    "state": "Goa",
    "lat": 15.49,
    "lng": 73.827
  },
  {
    "id": "bengal-club-goa-puja",
    "name": "Bengal Club Goa Puja",
    "area": "Vasco da Gama",
    "city": "Goa",
    "district": "Goa",
    "state": "Goa",
    "lat": 15.399,
    "lng": 73.811
  },
    { id: 'nishiganj-madan-mohan-bari', name: 'Nishiganj Madan Mohan Bari', area: 'Nishiganj', district: 'Cooch Behar', lat: 26.31929268068131, lng: 89.29765377199872 },
  { id: 'nishiganj-police-outpost', name: 'Nishiganj Police Outpost', area: 'Nishiganj', district: 'Cooch Behar', lat: 26.315803813789735, lng: 89.30594941808513 },
];
