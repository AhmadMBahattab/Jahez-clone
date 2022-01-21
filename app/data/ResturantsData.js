const resturantsArray = [
  {
    id: 1,
    nameEN: "Herfy",
    nameArb: "هرفي",
    type: "",
    location: {
      latitude: 24.4216146,
      longitude: 46.6417285,
    },
    avalibaleTime: { open: "6:00 am", close: "10:00 pm" },
    image: require("../photos/Herfy_logo.png"),
    menue: {
      mainDish: [
        {
          name: "BBQ Chicken Tortilla Combo",
          image: require("../photos/herfyMenu/Combo-Chicken-Tortilla20009.png"),
          price: "28.00",
        },
        {
          name: "Super Chicken Combo",
          image: require("../photos/herfyMenu/SuperChicken-new-crpd.jpg"),
          price: "32.00",
        },
        {
          name: "Grilled Chicken Combo",
          image: require("../photos/herfyMenu/06-GRILLEDCHICKEN.jpg"),
          price: "26.00",
        },
      ],
      sideDish: [
        {
          name: "9 Pieces Tender Chicken ",
          image: require("../photos/herfyMenu/9pcs-Chicken-Tender10017.png"),
          price: "16.00",
        },
        {
          name: "Nuggets Chicken 6p",
          image: require("../photos/herfyMenu/chicken_nugget.png"),
          price: "9.00",
        },
      ],
      desserts: [
        {
          name: "Cheesecake Strawbarry",
          image: require("../photos/herfyMenu/cheesecake-strawbary.png"),
          price: "12.00",
        },
        {
          name: "Apple pie",
          image: require("../photos/herfyMenu/Apple-Pie.png"),
          price: "5.00",
        },
        {
          name: "Cheesecake Plain",
          image: require("../photos/herfyMenu/Cheese-Cake-Plain.png"),
          price: "12.00",
        },
      ],
      drinks: [
        {
          name: "Coca Cola",
          image: require("../photos/drinks/coca-cola.jpg"),
          price: "5.00",
        },
        {
          name: "Fanta Orange",
          image: require("../photos/drinks/fanta-orange.png"),
          price: "5.00",
        },
        {
          name: "Sprite",
          image: require("../photos/drinks/sprite.jpg"),
          price: "5.00",
        },
        {
          name: "Water",
          image: require("../photos/drinks/NOVA-water.png"),
          price: "3.00",
        },
      ],
    },
  },
  {
    id: 2,
    nameEN: "Subway",
    nameArb: "صب واي",
    type: "",
    location: {
      latitude: 24.7836146,
      longitude: 46.6417285,
    },
    avalibaleTime: { open: "6:00 am", close: "10:00 pm" },
    image: require("../photos/Subway-logo.png"),
    menue: {
      mainDish: [
        {
          name: "Steak & Cheese",
          image: require("../photos/subway/subway-steak-and-cheese-image.jpg"),
          price: "32.90",
        },
        {
          name: "Chicken Teriyaki",
          image: require("../photos/subway/teriaki-chicken.jpg"),
          price: "30.00",
        },
        {
          name: "Oven Roasted Chicken",
          image: require("../photos/subway/subway-6-inch-oven-roasted-sub.jpg"),
          price: "32.00",
        },
      ],
      sideDish: [
        {
          name: "Potato Wedges",
          image: require("../photos/subway/potato-wedges.jpg"),
          price: "4.00",
        },
        {
          name: "Lays Chips",
          image: require("../photos/subway/Lays-Subway-Teriyaki-.jpg"),
          price: "4.00",
        },
      ],
      desserts: [],
      drinks: [
        {
          name: "Coca Cola",
          image: require("../photos/drinks/coca-cola.jpg"),
          price: "5.00",
        },
        {
          name: "Fanta Orange",
          image: require("../photos/drinks/fanta-orange.png"),
          price: "5.00",
        },
        {
          name: "Sprite",
          image: require("../photos/drinks/sprite.jpg"),
          price: "5.00",
        },
        {
          name: "Water",
          image: require("../photos/drinks/NOVA-water.png"),
          price: "3.00",
        },
      ],
    },
  },
  {
    id: 3,
    nameEN: "Hamburgini",
    nameArb: "هامبرقيني",
    type: "",
    location: {
      latitude: 24.7213146,
      longitude: 46.6737285,
    },
    avalibaleTime: { open: "12:00 pm", close: "2:00 am" },
    image: require("../photos/hamburgini-logo.png"),
    menue: {
      mainDish: [
        {
          name: "وجبة دبل هامبرغيني",
          image: require("../photos/humbrgini/duoble-humbrgini-meal.png"),
          price: "36.00",
        },
        {
          name: "وجبة سنقل كلاسيك",
          image: require("../photos/humbrgini/Classic-Single.jpg"),
          mealPrice: "30.00",
        },
        {
          name: "وجبة دبل تندر",
          image: require("../photos/humbrgini/Double-Tender.jpg"),
          mealPrice: "30.00",
        },
      ],
      sideDish: [
        {
          name: "جبنة الهلابينو",
          image: require("../photos/humbrgini/Jalapeno-cheese-.png"),
          price: "10.00",
        },
        {
          name: "هامبرغيني تندرز",
          image: require("../photos/humbrgini/3Chicken-Tenders-with-1-Sauce-1.png"),
          price: "14.00",
        },
        {
          name: "بافلو تشكن بايتس",
          image: require("../photos/humbrgini/Buffalo_Bites_Foodics_v4.png"),
          price: "16.00",
        },
      ],
      desserts: [],
      drinks: [
        {
          name: "Coca Cola",
          image: require("../photos/drinks/coca-cola.jpg"),
          price: "5.00",
        },
        {
          name: "Fanta Orange",
          image: require("../photos/drinks/fanta-orange.png"),
          price: "5.00",
        },
        {
          name: "Sprite",
          image: require("../photos/drinks/sprite.jpg"),
          price: "5.00",
        },
        {
          name: "Water",
          image: require("../photos/drinks/NOVA-water.png"),
          price: "3.00",
        },
      ],
    },
  },
  {
    id: 4,
    nameEN: "Dominos pizza",
    nameArb: "دومينوز بيتزا",
    type: "",
    location: {
      latitude: 24.6216146,
      longitude: 46.6317285,
    },
    avalibaleTime: { open: "12:00 pm", close: "1:00 am" },
    image: require("../photos/Dominos_pizza_logo.png"),
    menue: {
      mainDish: [
        {
          name: "البيبروني",
          image: require("../photos/dominosPizza/pepproni-pizza.jpg"),
          price: "36.00",
        },
        {
          name: "دجاج الباربكيو",
          image: require("../photos/dominosPizza/BBQ-Chicken.jpg"),
          price: "36.00",
        },
        {
          name: "دجاج الداينمايت",
          image: require("../photos/dominosPizza/dynmite-chicken.jpg"),
          price: "36.00",
        },
      ],
      sideDish: [
        {
          name: "ستافت تشيزي بريد الموزاريلا",
          image: require("../photos/dominosPizza/mozzarela-bread.jpg"),
          price: "16.00",
        },
        {
          name: "ستافت تشيزي بريد ايطاليانو",
          image: require("../photos/dominosPizza/mozzarela-bread.jpg"),
          price: "18.00",
        },
        {
          name: "بطاطس ودجز",
          image: require("../photos/dominosPizza/potato-wedgez.png"),
          price: "12.00",
        },
      ],
      desserts: [
        {
          name: "كراونيز",
          image: require("../photos/dominosPizza/krawnez.2jpg.jpg"),
          price: "16.00",
        },
        {
          name: "شوكليت لافا سوفليه",
          image: require("../photos/dominosPizza/lavaSoflyh.jpg"),
          price: "20.00",
        },
        {
          name: "تويست السينامون",
          image: require("../photos/dominosPizza/cinamon.jpg"),
          price: "10.00",
        },
      ],
      drinks: [
        {
          name: "Coca Cola",
          image: require("../photos/drinks/coca-cola.jpg"),
          price: "5.00",
        },
        {
          name: "Fanta Orange",
          image: require("../photos/drinks/fanta-orange.png"),
          price: "5.00",
        },
        {
          name: "Sprite",
          image: require("../photos/drinks/sprite.jpg"),
          price: "5.00",
        },
        {
          name: "Water",
          image: require("../photos/drinks/NOVA-water.png"),
          price: "3.00",
        },
      ],
    },
  },
  {
    id: 5,
    nameEN: "Burger king",
    nameArb: "برغر كنق",
    type: "",
    location: {
      latitude: 24.7213146,
      longitude: 46.6917285,
    },
    avalibaleTime: { open: "12:00 pm", close: "1:00 am" },
    image: require("../photos/Burger-King-Logo.png"),
    menue: {
      mainDish: [
        {
          name: "Fiery Chicken Fillet Meal",
          image: require("../photos/burgerKing/Fiery_Chicken_Fillet.jpg"),
          price: "34.00",
        },
        {
          name: "Fiery Chicken Royal Meal",
          image: require("../photos/burgerKing/Fiery_Chicken_Royale_.jpg"),
          price: "32.00",
        },
        {
          name: "Whopper Meal",
          image: require("../photos/burgerKing/whopper-meal.png"),
          price: "32.00",
        },
      ],
      sideDish: [
        {
          name: "Crispy Chicken Tenders",
          image: require("../photos/burgerKing/crispy-chicken-tenders-burger-king-.png"),
          price: "13.00",
        },
        {
          name: "Mozzarella Sticks",
          image: require("../photos/burgerKing/Mozzarela-sticks.png"),
          price: "14.00",
        },
        {
          name: "Chicken Fries",
          image: require("../photos/burgerKing/chicken-fries.jpg"),
          price: "18.00",
        },
      ],
      desserts: [],
      drinks: [
        {
          name: "Coca Cola",
          image: require("../photos/drinks/coca-cola.jpg"),
          price: "5.00",
        },
        {
          name: "Fanta Orange",
          image: require("../photos/drinks/fanta-orange.png"),
          price: "5.00",
        },
        {
          name: "Sprite",
          image: require("../photos/drinks/sprite.jpg"),
          price: "5.00",
        },
        {
          name: "Water",
          image: require("../photos/drinks/NOVA-water.png"),
          price: "3.00",
        },
      ],
    },
  },
];

const getResturants = () => {
  return resturantsArray;
};

export default {
  getResturants,
};
