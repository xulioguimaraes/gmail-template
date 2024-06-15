import { Image } from "react-native";

export const buttonsFilters = [
  { id: "all", name: "All", icon: null },
  {
    id: "choco",
    name: "Choco",
    icon: (
      <Image
        source={require("@/assets/chocolate.png")}
        className="w-[24px] h-[24px]"
      />
    ),
  },
  {
    id: "waffles",
    name: "Waffles",
    icon: (
      <Image
        source={require("@/assets/waffles.png")}
        className="w-[24px] h-[24px]"
      />
    ),
  },
  {
    id: "chips",
    name: "Chips",
    icon: (
      <Image
        source={require("@/assets/snack.png")}
        className="w-[24px] h-[24px]"
      />
    ),
  },
];

export const productList = [
  {
    id: 1,
    name: "Good Source",
    category: "Choco",
    image:
      "https://vegconomist.com/wp-content/uploads/sites/3/GOOD_Source_1_5_BAG_AfternoonFront.png",
    color: "#ffe4e9",
    price: 18,
  },
  {
    id: 2,
    name: "Unreal Muffins",
    category: "Choco",
    image:
      "https://goodrebelvegan.com/cdn/shop/files/coconut_1200x1200.webp?v=1706304313",
    color: "#fff8de",
    price: 28,
  },
  {
    id: 3,
    name: "Twister Chips",
    category: "Chips",
    image:
      "https://www.pranfoods.net/sites/default/files/750-750_0000_twister-chips-tomato-paprica-flavour-25gm-size-3.png",
    color: "#ffcdca",
    price: 34,
  },
  {
    id: 4,
    name: "Regular Nature",
    category: "Chips",
    image:
      "https://marchenuvo.ca/cdn/shop/products/30015417_Ruffles_Regular_200g_0_x700.png?v=1590702460",
    color: "#e6f8ea",
    price: 24,
  },
  {
    id: 5,
    name: "Dark Russet",
    category: "Chips",
    image:
      "https://141395124.cdn6.editmysite.com/uploads/1/4/1/3/141395124/s966840971438136685_p1688_i41_w1423.png",
    color: "#deeefe",
    price: 6,
  },
  {
    id: 6,
    name: "Keto Snack",
    category: "Chips",
    image:
      "https://i5.walmartimages.com/asr/41e0b184-10fc-476c-b366-5a85cc3c6dbd.872c59b97c569de4d2efe1ce1b2f3a95.png?odnHeight=450&odnWidth=450&odnBg=ffffff",
    color: "#f3f0eb",
    price: 35,
  },
  {
    id: 7,
    name: "Smiths Chips",
    category: "Chips",
    image:
      "https://cache-cdn.beta.thirstycamel.com.au/insecure/q:80/rs:auto:0:400:1:0/plain/productimages-production/66ac6ccf-49a6-466a-39f6-a739c2878768",
    color: "#fff1de",
    price: 89,
  },
  {
    id: 8,
    name: "Deep River",
    category: "Chips",
    image:
      "https://deepriversnacks.com/cdn/shop/products/SMO_2oz_LR_1000x.png?v=1678934267",
    color: "#f6e9fb",
    price: 22,
  },
];
