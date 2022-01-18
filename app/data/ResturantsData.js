const resturantsArray = [
  {
    id: 1,
    nameEN: "Herfy",
    nameArb: "هرفي",
    type: "",
    avalibaleTime: { open: "6:00 am", close: "10:00 pm" },
    image: require("../photos/Herfy_logo.png"),
    menue: {
      mainDish: [
        {
          mealName: "BBQ Chicken Tortilla Combo",
          mealImage: require("../photos/herfyMenu/Combo Chicken Tortilla20009.png"),
          mealPrice: "28.00",
        },
        {
          mealName: "Super Chicken Combo",
          mealImage: require("../photos/herfyMenu/SuperChicken-new-crpd.jpg"),
          mealPrice: "32.00",
        },
        {
          mealName: "Grilled Chicken Combo",
          mealImage: require("../photos/herfyMenu/06-GRILLEDCHICKEN.jpg"),
          mealPrice: "26.00",
        },
      ],
      sideDish: [
        {
          sideDishName: "9 Pieces Tender Chicken ",
          sideDishImage: require("../photos/herfyMenu/9pcs Chicken Tender10017.png"),
          sideDishPrice: "16.00",
        },
        {
          sideDishName: "Nuggets Chicken 6p",
          sideDishImage: require("../photos/herfyMenu/chicken_nugget.png"),
          sideDishPrice: "9.00",
        },
      ],
      desserts: [
        {
          sideDishName: "Cheesecake Strawbarry",
          sideDishImage: require("../photos/herfyMenu/cheesecake strawbary.png"),
          sideDishPrice: "12.00",
        },
        {
          sideDishName: "Apple pie",
          sideDishImage: require("../photos/herfyMenu/Apple Pie.png"),
          sideDishPrice: "5.00",
        },
        {
          sideDishName: "Cheesecake Plain",
          sideDishImage: require("../photos/herfyMenu/Cheese Cake-Plain.png"),
          sideDishPrice: "12.00",
        },
      ],
      drinks: [
        {
          drinkName: "Coca Cola",
          drinkImage: require("../photos/drinks/coca cola.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Fanta Orange",
          drinkImage: require("../photos/drinks/fanta orange.png"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Sprite",
          drinkImage: require("../photos/drinks/sprite.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Water",
          drinkImage: require("../photos/drinks/NOVA-water.png"),
          drinkPrice: "3.00",
        },
      ],
    },
  },
  {
    id: 2,
    nameEN: "Subway",
    nameArb: "صب واي",
    type: "",
    avalibaleTime: { open: "6:00 am", close: "10:00 pm" },
    image: require("../photos/Subway-logo.png"),
    menue: {
      mainDish: [
        {
          mealName: "Steak & Cheese",
          mealImage: require("../photos/subway/subway-steak-and-cheese-image.jpg"),
          mealPrice: "32.90",
        },
        {
          mealName: "Chicken Teriyaki",
          mealImage: require("../photos/subway/teriaki chicken.jpg"),
          mealPrice: "30.00",
        },
        {
          mealName: "Oven Roasted Chicken",
          mealImage: require("../photos/subway/subway-6-inch-oven-roasted-sub.jpg"),
          mealPrice: "32.00",
        },
      ],
      sideDish: [
        {
          sideDishName: "Potato Wedges",
          sideDishImage: require("../photos/subway/potato wedges.jpg"),
          sideDishPrice: "4.00",
        },
        {
          sideDishName: "Lays Chips",
          sideDishImage: require("../photos/subway/Lays-Subway-Teriyaki-.jpg"),
          sideDishPrice: "4.00",
        },
      ],
      desserts: [],
      drinks: [
        {
          drinkName: "Coca Cola",
          drinkImage: require("../photos/drinks/coca cola.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Fanta Orange",
          drinkImage: require("../photos/drinks/fanta orange.png"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Sprite",
          drinkImage: require("../photos/drinks/sprite.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Water",
          drinkImage: require("../photos/drinks/NOVA-water.png"),
          drinkPrice: "3.00",
        },
      ],
    },
  },
  {
    id: 3,
    nameEN: "Hamburgini",
    nameArb: "هامبرقيني",
    type: "",
    avalibaleTime: { open: "12:00 pm", close: "2:00 am" },
    image: require("../photos/hamburgini-logo.png"),
    menue: {
      mainDish: [
        {
          mealName: "وجبة دبل هامبرغيني",
          mealImage: require("../photos/humbrgini/duoble humbrgini meal.png"),
          mealPrice: "36.00",
        },
        {
          mealName: "وجبة سنقل كلاسيك",
          mealImage: require("../photos/humbrgini/Classic-Single.jpg"),
          mealPrice: "30.00",
        },
        {
          mealName: "وجبة دبل تندر",
          mealImage: require("../photos/humbrgini/Double-Tender.jpg"),
          mealPrice: "30.00",
        },
      ],
      sideDish: [
        {
          sideDishName: "جبنة الهلابينو",
          sideDishImage: require("../photos/humbrgini/Jalapeno-cheese-.png"),
          sideDishPrice: "10.00",
        },
        {
          sideDishName: "هامبرغيني تندرز",
          sideDishImage: require("../photos/humbrgini/3Chicken-Tenders-with-1-Sauce-1.png"),
          sideDishPrice: "14.00",
        },
        {
          sideDishName: "بافلو تشكن بايتس",
          sideDishImage: require("../photos/humbrgini/Buffalo_Bites_Foodics_v4.png"),
          sideDishPrice: "16.00",
        },
      ],
      desserts: [],
      drinks: [
        {
          drinkName: "Coca Cola",
          drinkImage: require("../photos/drinks/coca cola.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Fanta Orange",
          drinkImage: require("../photos/drinks/fanta orange.png"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Sprite",
          drinkImage: require("../photos/drinks/sprite.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Water",
          drinkImage: require("../photos/drinks/NOVA-water.png"),
          drinkPrice: "3.00",
        },
      ],
    },
  },
  {
    id: 4,
    nameEN: "Dominos pizza",
    nameArb: "دومينوز بيتزا",
    type: "",
    avalibaleTime: { open: "12:00 pm", close: "1:00 am" },
    image: require("../photos/Dominos_pizza_logo.png"),
    menue: {
      mainDish: [
        {
          mealName: "البيبروني",
          mealImage: require("../photos/dominosPizza/pepproni pizza.jpg"),
          mealPrice: "36.00",
        },
        {
          mealName: "دجاج الباربكيو",
          mealImage: require("../photos/dominosPizza/BBQ Chicken.jpg"),
          mealPrice: "36.00",
        },
        {
          mealName: "دجاج الداينمايت",
          mealImage: require("../photos/dominosPizza/dynmite chicken.jpg"),
          mealPrice: "36.00",
        },
      ],
      sideDish: [
        {
          sideDishName: "ستافت تشيزي بريد الموزاريلا",
          sideDishImage: require("../photos/dominosPizza/mozzarela bread.jpg"),
          sideDishPrice: "16.00",
        },
        {
          sideDishName: "ستافت تشيزي بريد ايطاليانو",
          sideDishImage: require("../photos/dominosPizza/mozzarela bread.jpg"),
          sideDishPrice: "18.00",
        },
        {
          sideDishName: "بطاطس ودجز",
          sideDishImage: require("../photos/dominosPizza/potato wedgez.png"),
          sideDishPrice: "12.00",
        },
      ],
      desserts: [
        {
          sideDishName: "كراونيز",
          sideDishImage: require("../photos/dominosPizza/krawnez.2jpg.jpg"),
          sideDishPrice: "16.00",
        },
        {
          sideDishName: "شوكليت لافا سوفليه",
          sideDishImage: require("../photos/dominosPizza/lavaSoflyh.jpg"),
          sideDishPrice: "20.00",
        },
        {
          sideDishName: "تويست السينامون",
          sideDishImage: require("../photos/dominosPizza/cinamon.jpg"),
          sideDishPrice: "10.00",
        },
      ],
      drinks: [
        {
          drinkName: "Coca Cola",
          drinkImage: require("../photos/drinks/coca cola.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Fanta Orange",
          drinkImage: require("../photos/drinks/fanta orange.png"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Sprite",
          drinkImage: require("../photos/drinks/sprite.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Water",
          drinkImage: require("../photos/drinks/NOVA-water.png"),
          drinkPrice: "3.00",
        },
      ],
    },
  },
  {
    id: 5,
    nameEN: "Burger king",
    nameArb: "برغر كنق",
    type: "",
    avalibaleTime: { open: "12:00 pm", close: "1:00 am" },
    image: require("../photos/Burger-King-Logo.png"),
    menue: {
      mainDish: [
        {
          mealName: "Fiery Chicken Fillet Meal",
          mealImage: require("../photos/burgerKing/Fiery_Chicken_Fillet.jpg"),
          mealPrice: "34.00",
        },
        {
          mealName: "Fiery Chicken Royal Meal",
          mealImage: require("../photos/burgerKing/Fiery_Chicken_Royale_.jpg"),
          mealPrice: "32.00",
        },
        {
          mealName: "Whopper Meal",
          mealImage: require("../photos/burgerKing/whopper meal.png"),
          mealPrice: "32.00",
        },
      ],
      sideDish: [
        {
          sideDishName: "Crispy Chicken Tenders",
          sideDishImage: require("../photos/burgerKing/crispy-chicken-tenders-burger-king-.png"),
          sideDishPrice: "13.00",
        },
        {
          sideDishName: "Mozzarella Sticks",
          sideDishImage: require("../photos/burgerKing/Mozzarela sticks.png"),
          sideDishPrice: "14.00",
        },
        {
          sideDishName: "Chicken Fries",
          sideDishImage: require("../photos/burgerKing/chicken fries.jpg"),
          sideDishPrice: "18.00",
        },
      ],
      desserts: [],
      drinks: [
        {
          drinkName: "Coca Cola",
          drinkImage: require("../photos/drinks/coca cola.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Fanta Orange",
          drinkImage: require("../photos/drinks/fanta orange.png"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Sprite",
          drinkImage: require("../photos/drinks/sprite.jpg"),
          drinkPrice: "5.00",
        },
        {
          drinkName: "Water",
          drinkImage: require("../photos/drinks/NOVA-water.png"),
          drinkPrice: "3.00",
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
