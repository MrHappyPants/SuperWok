var SuperWok_SampleData = SuperWok_SampleData || {};

SuperWok_SampleData.load = function () {


   var orderTypeTakeAway = new SuperWokDatabase.ORDER_TYPE_CATEGORY({
        ORDER_TYPE_CATEGORY_ID:"TEXT",
        ORDER_TYPE_CATEGORY_CODE:"TEXT",
        ORDER_TYPE_CATEGORY_NAME:"TakeAway",
        EXPIRED:"TEXT"
    });
    var orderTypeCollection = new SuperWokDatabase.ORDER_TYPE_CATEGORY({
        ORDER_TYPE_CATEGORY_ID:"TEXT",
        ORDER_TYPE_CATEGORY_CODE:"TEXT",
        ORDER_TYPE_CATEGORY_NAME:"Collection",
        EXPIRED:"TEXT"
    });
    var orderTypeDelivery = new SuperWokDatabase.ORDER_TYPE_CATEGORY({
        ORDER_TYPE_CATEGORY_ID:"TEXT",
        ORDER_TYPE_CATEGORY_CODE:"TEXT",
        ORDER_TYPE_CATEGORY_NAME:"Delivery",
        EXPIRED:"TEXT"
    });
    persistence.add(orderTypeTakeAway);
    persistence.add(orderTypeCollection);
    persistence.add(orderTypeDelivery);


    var orderStatusOpen = new SuperWokDatabase.ORDER_STATUS({
        ORDER_STATUS_ID:"TEXT",
        ORDER_STATUS_CODE:"TEXT",
        ORDER_STATUS_NAME:"Open",
        EXPIRED:"TEXT"
    });
    var orderStatusOrderd = new SuperWokDatabase.ORDER_STATUS({
        ORDER_STATUS_ID:"TEXT",
        ORDER_STATUS_CODE:"TEXT",
        ORDER_STATUS_NAME:"Orderd",
        EXPIRED:"TEXT"
    });
    var orderStatusFinished = new SuperWokDatabase.ORDER_STATUS({
        ORDER_STATUS_ID:"TEXT",
        ORDER_STATUS_CODE:"TEXT",
        ORDER_STATUS_NAME:"Finished",
        EXPIRED:"TEXT"
    });
    var orderStatusCancelled = new SuperWokDatabase.ORDER_STATUS({
        ORDER_STATUS_ID:"TEXT",
        ORDER_STATUS_CODE:"TEXT",
        ORDER_STATUS_NAME:"Cancelled",
        EXPIRED:"TEXT"
    });

    persistence.add(orderStatusOpen);
    persistence.add(orderStatusOrderd);
    persistence.add(orderStatusFinished);
    persistence.add(orderStatusCancelled);
    var payStatusPaid = new SuperWokDatabase.PAY_STATUS({
        PAY_STATUS_ID:"TEXT",
        PAY_STATUS_CODE:"TEXT",
        PAY_STATUS_NAME:"Paid",
        EXPIRED:"TEXT"
    });
    var payStatusUnpaid = new SuperWokDatabase.PAY_STATUS({
        PAY_STATUS_ID:"TEXT",
        PAY_STATUS_CODE:"TEXT",
        PAY_STATUS_NAME:"Unpaid",
        EXPIRED:"TEXT"
    });
    persistence.add(payStatusPaid);
    persistence.add(payStatusUnpaid);


   var specialStarters = new SuperWokDatabase.ITEM_CATEGORY({
       ITEM_CATEGORY_ID:"TEXT",
       ITEM_CATEGORY_SORT_CODE:"TEXT",
       ITEM_CATEGORY_NAME:"Special Starters",
       ITEM_CATEGORY_FULL_DESCRIPTION:"Special Starters",
       EXPIRED:"NO"

   });
    var specialMainCourse = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Special Main Course",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Special Main Course",
        EXPIRED:"NO"

    });
    var starters = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Starters",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Starters",
        EXPIRED:"NO"

    });
    var soups = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Soups",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Soups",
        EXPIRED:"NO"

    });
    var chickenDishes= new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Chicken Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Chicken Dishes",
        EXPIRED:"NO"

    });
    var beefDishes = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Beef Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Beef Dishes",
        EXPIRED:"NO"

    });
    var kingPrawnDishes = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"King Prawn Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"King Prawn Dishes",
        EXPIRED:"NO"

    });
    var roastDuckDishes = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Roast Duck Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Roast Duck Dishes",
        EXPIRED:"NO"

    });
    var roastPorkDishes = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Roast Pork Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Roast Pork Dishes",
        EXPIRED:"NO"

    });
    var vegetableDishes = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Vegetable Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Vegetable Dishes",
        EXPIRED:"NO"

    });
    var friedRiceDishes = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Fried Rice Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Fried Rice Dishes",
        EXPIRED:"NO"

    });
    var chowMeinDishes = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Chow Mein Dishes",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Chow Mein Dishes",
        EXPIRED:"NO"

    });
    var friedCharKuehTeow = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Fried Char Kueh Teow",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Fried Char Kueh Teow",
        EXPIRED:"NO"

    });
    var extraPoritions = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Extra Portions",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Extra Portions",
        EXPIRED:"NO"

    });
    var snackBox = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Snack Box",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Snack Box",
        EXPIRED:"NO"

    });
    var softDrink = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Soft Drink",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Soft Drink",
        EXPIRED:"NO"

    });
    var mealDeals = new SuperWokDatabase.ITEM_CATEGORY({
        ITEM_CATEGORY_ID:"TEXT",
        ITEM_CATEGORY_SORT_CODE:"TEXT",
        ITEM_CATEGORY_NAME:"Happy Meal Deals",
        ITEM_CATEGORY_FULL_DESCRIPTION:"Meal Deals",
        EXPIRED:"NO"

    });

    persistence.add(specialStarters);
    persistence.add(specialMainCourse);
    persistence.add(starters);
    persistence.add(soups);
    persistence.add(chickenDishes);
    persistence.add(beefDishes);
    persistence.add(kingPrawnDishes);
    persistence.add(roastDuckDishes);
    persistence.add(roastPorkDishes);
    persistence.add(vegetableDishes);
    persistence.add(friedRiceDishes);
    persistence.add(chowMeinDishes);
    persistence.add(friedCharKuehTeow);
    persistence.add(extraPoritions);
    persistence.add(snackBox);
    persistence.add(softDrink);
    persistence.add(mealDeals);

    var crispyPrawnsWithSuperWok = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S1",
        ITEM_NAME:"Crispy Prawns With SuperWok Special Sauces",
        ITEM_PRICE:5.80,
        ITEM_FULL_DESCRIPTION:"Crispy Prawns With SuperWok Special Sauces(6)",
        EXPIRED:"NO"

    });
    var crispyBreastChickenWithSuperWok = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S2",
        ITEM_NAME:"Crispy Breast Chicken With SuperWok Chilli Sauce",
        ITEM_PRICE:5.20,
        ITEM_FULL_DESCRIPTION:"Crispy Breast Chicken With SuperWok Chilli Sauce",
        EXPIRED:"NO"

    });
    var saltAndPepperSquid = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S3",
        ITEM_NAME:"Salt & Pepper Squid",
        ITEM_PRICE:4.80,
        ITEM_FULL_DESCRIPTION:"Salt & Pepper Squid",
        EXPIRED:"NO"

    });
    var prawnCocktails = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S4",
        ITEM_NAME:"Prawn Cocktails",
        ITEM_PRICE:4.80,
        ITEM_FULL_DESCRIPTION:"Prawn Cocktails",
        EXPIRED:"NO"

    });

    persistence.add(crispyPrawnsWithSuperWok);
    persistence.add(crispyBreastChickenWithSuperWok);
    persistence.add(saltAndPepperSquid);
    persistence.add(prawnCocktails);

    specialStarters.ITEM_ITEM_CATEGORY_ID.add(crispyPrawnsWithSuperWok);
    specialStarters.ITEM_ITEM_CATEGORY_ID.add(crispyBreastChickenWithSuperWok);
    specialStarters.ITEM_ITEM_CATEGORY_ID.add(saltAndPepperSquid);
    specialStarters.ITEM_ITEM_CATEGORY_ID.add(prawnCocktails);

    var superWokCrispyDuck = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S5",
        ITEM_NAME:"Super Wok Crispy Duck",
        ITEM_PRICE:10.50,
        ITEM_FULL_DESCRIPTION:"Super Wok Crispy Duck(Served with lemon grass sauce)",
        EXPIRED:"NO"
    });
    var superWokSpecialStyleHomeMadeCurry1 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S6",
        ITEM_NAME:"Super Wok Special Style Homemade Curry(Chicken Or Beef)",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"Super Wok Special Style Homemade Curry(Chicken Or Beef",
        EXPIRED:"NO"
    });
    var superWokSpecialStyleHomeMadeCurry2 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S6",
        ITEM_NAME:"Super Wok Special Style Homemade Curry(KingPrawn Or House Special)",
        ITEM_PRICE:8.80,
        ITEM_FULL_DESCRIPTION:"Super Wok Special Style Homemade Curry(KingPrawn Or House Special)",
        EXPIRED:"NO"
    });
    var broccoliWithGingerRedChilliSauce1 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S7",
        ITEM_NAME:"Broccoli With Ginger Red Chilli Sauce(Chicken Or Beef)",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"Broccoli With Ginger Red Chilli Sauce(Chicken Or Beef)",
        EXPIRED:"NO"
    });
    var broccoliWithGingerRedChilliSauce2 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S7",
        ITEM_NAME:"Broccoli With Ginger Red Chilli Sauce(King Prawn Or House Special)",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"Broccoli With Ginger Red Chilli Sauce(King Prawn Or House Special)",
        EXPIRED:"NO"
    });
    var crispyShreddedChickenOrBeefWithHotHoneySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S8",
        ITEM_NAME:"Crispy Shredded Chicken Or Beef With Hot Honey Sauce",
        ITEM_PRICE:7.80,
        ITEM_FULL_DESCRIPTION:"Crispy Shredded Chicken Or Beef With Hot Honey Sauce",
        EXPIRED:"NO"
    });
    var superWokCurryFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S9",
        ITEM_NAME:"SuperWok Curry Fried Rice",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"SuperWok Curry Fried Rice(Chicken,Shrimps,Cattots,Broccoli,Fried Tofu & Bean Sprouts)",
        EXPIRED:"NO"
    });
    var superWokCurryFriedChowMein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S10",
        ITEM_NAME:"SuperWok Curry Fried Chow Mein",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"SuperWok Curry Fried Chow Mein(Chicken,Shrimps,Cattots,Broccoli,Fried Tofu & Bean Sprouts)",
        EXPIRED:"NO"
    });
    var saltAndPepperSquidMainSize = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"S11",
        ITEM_NAME:"Salt & Pepper Squid Main Size",
        ITEM_PRICE:8.80,
        ITEM_FULL_DESCRIPTION:"Salt & Pepper Squid Main Size",
        EXPIRED:"NO"
    });

    persistence.add(superWokCrispyDuck);
    persistence.add(superWokSpecialStyleHomeMadeCurry1);
    persistence.add(superWokSpecialStyleHomeMadeCurry2);
    persistence.add(broccoliWithGingerRedChilliSauce1);
    persistence.add(broccoliWithGingerRedChilliSauce2);
    persistence.add(crispyShreddedChickenOrBeefWithHotHoneySauce);
    persistence.add(superWokCurryFriedRice);
    persistence.add(superWokCurryFriedChowMein);
    persistence.add(saltAndPepperSquidMainSize);

    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(superWokCrispyDuck);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(superWokSpecialStyleHomeMadeCurry1);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(superWokSpecialStyleHomeMadeCurry2);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(broccoliWithGingerRedChilliSauce1);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(broccoliWithGingerRedChilliSauce2);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(crispyShreddedChickenOrBeefWithHotHoneySauce);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(superWokCurryFriedRice);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(superWokCurryFriedChowMein);
    specialMainCourse.ITEM_ITEM_CATEGORY_ID.add(saltAndPepperSquidMainSize);


    var springRollsWithSweetChilliSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"1",
        ITEM_NAME:"Spring Rolls With Sweet Chilli Sauce",
        ITEM_PRICE:3.30,
        ITEM_FULL_DESCRIPTION:"Spring Rolls With Sweet Chilli Sauce(Meat Or Vegetabls)",
        EXPIRED:"NO"
    });
    var spareRibsWithSauces = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"2",
        ITEM_NAME:"Spare Ribs",
        ITEM_PRICE:5.80,
        ITEM_FULL_DESCRIPTION:"Spare Ribs With Choice Of BBQ,Cantonese,Honey,Sweet&Sour,dry Salt&pepper or hot chilli",
        EXPIRED:"NO"
    });
    var chickenWings = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"3",
        ITEM_NAME:"Chicken Wings",
        ITEM_PRICE:4.50,
        ITEM_FULL_DESCRIPTION:"Chicken Wings(6) with Choice Of BBQ,Honey,Salt&pepper or hot chilli",
        EXPIRED:"NO"
    });
    var crispyWontonWithSweetSourSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"4",
        ITEM_NAME:"Crispy Wonton With Sweet&Sour",
        ITEM_PRICE:4.50,
        ITEM_FULL_DESCRIPTION:"Crispy Wonton With Sweet&Sour",
        EXPIRED:"NO"
    });
    var skeweredChickenWithSataySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"5",
        ITEM_NAME:"Skewered Chicken With Satay Sauce",
        ITEM_PRICE:4.80,
        ITEM_FULL_DESCRIPTION:"Skewered Chicken With Satay Sauce(3)",
        EXPIRED:"NO"
    });
    var sesamePrawnToast = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"6",
        ITEM_NAME:"Sesame Prawn Toast",
        ITEM_PRICE:4.80,
        ITEM_FULL_DESCRIPTION:"Sesame Prawn Toast",
        EXPIRED:"NO"
    });
    var saltAndPepperCrispyPrawn = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"7",
        ITEM_NAME:"Salt & Pepper Crispy Prawn",
        ITEM_PRICE:4.80,
        ITEM_FULL_DESCRIPTION:"Salt & Pepper Crispy Prawn(6)",
        EXPIRED:"NO"
    });
    var shreddedChickenWithSaltAndPepper = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"8",
        ITEM_NAME:"Shredded Chicken With Salt & Pepper",
        ITEM_PRICE:5.20,
        ITEM_FULL_DESCRIPTION:"Shredded Chicken With Salt & Pepper",
        EXPIRED:"NO"
    });
    var platterFor2 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"9",
        ITEM_NAME:"Platter For 2",
        ITEM_PRICE:11.9,
        ITEM_FULL_DESCRIPTION:"Platter for 2 ( 2spring rolls,1 prawntoast,4 chicken wings,2 spare ribs,2 skewered chicken staty, 4 crispy wonton)",
        EXPIRED:"NO"
    });
    var yukSong1 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"10",
        ITEM_NAME:"Yuk Sung for 1",
        ITEM_PRICE:5.80,
        ITEM_FULL_DESCRIPTION:"Yuk Sung (Choice of chicken or pork)",
        EXPIRED:"NO"
    });
    var yukSong2 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"10",
        ITEM_NAME:"Yuk Sung for 2",
        ITEM_PRICE:9.80,
        ITEM_FULL_DESCRIPTION:"Yuk Sung (Choice of chicken or pork)",
        EXPIRED:"NO"
    });
    var aromaticDuck1 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"11",
        ITEM_NAME:"Aromatic Duck 1/4",
        ITEM_PRICE:9.50,
        ITEM_FULL_DESCRIPTION:"Aromatic Duck(with veg,pancake & sauce)",
        EXPIRED:"NO"
    });
    var aromaticDuck2 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"11",
        ITEM_NAME:"Aromatic Duck 1/2",
        ITEM_PRICE:17.50,
        ITEM_FULL_DESCRIPTION:"Aromatic Duck(with veg,pancake & sauce)",
        EXPIRED:"NO"
    });



    starters.ITEM_ITEM_CATEGORY_ID.add(springRollsWithSweetChilliSauce);
    starters.ITEM_ITEM_CATEGORY_ID.add(spareRibsWithSauces);
    starters.ITEM_ITEM_CATEGORY_ID.add(chickenWings);
    starters.ITEM_ITEM_CATEGORY_ID.add(crispyWontonWithSweetSourSauce);
    starters.ITEM_ITEM_CATEGORY_ID.add(skeweredChickenWithSataySauce);
    starters.ITEM_ITEM_CATEGORY_ID.add(sesamePrawnToast);
    starters.ITEM_ITEM_CATEGORY_ID.add(saltAndPepperCrispyPrawn);
    starters.ITEM_ITEM_CATEGORY_ID.add(shreddedChickenWithSaltAndPepper);
    starters.ITEM_ITEM_CATEGORY_ID.add(platterFor2);
    starters.ITEM_ITEM_CATEGORY_ID.add(yukSong1);
    starters.ITEM_ITEM_CATEGORY_ID.add(yukSong2);
    starters.ITEM_ITEM_CATEGORY_ID.add(aromaticDuck1);
    starters.ITEM_ITEM_CATEGORY_ID.add(aromaticDuck2);


    var chickenSweetcornSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"12",
        ITEM_NAME:"Chicken SweetCorn",
        ITEM_PRICE:3.00,
        ITEM_FULL_DESCRIPTION:"Chicken SweetCorn",
        EXPIRED:"NO"
    });
    var chickenMushroomSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"13",
        ITEM_NAME:"Chicken Mushroom",
        ITEM_PRICE:3.00,
        ITEM_FULL_DESCRIPTION:"Chicken Mushroom",
        EXPIRED:"NO"
    });
    var chickenNoodleSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"14",
        ITEM_NAME:"Chicken Noodle",
        ITEM_PRICE:3.00,
        ITEM_FULL_DESCRIPTION:"Chicken Noodle",
        EXPIRED:"NO"
    });
    var crabMeatSweetcornSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"15",
        ITEM_NAME:"Crab meat Sweetcorn Soup",
        ITEM_PRICE:3.50,
        ITEM_FULL_DESCRIPTION:"Crab meat Sweetcorn Soup",
        EXPIRED:"NO"
    });
    var vegetableSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"16",
        ITEM_NAME:"Vegetable Soup",
        ITEM_PRICE:3.00,
        ITEM_FULL_DESCRIPTION:"Vegetable Soup",
        EXPIRED:"NO"
    });
    var hotAndSourSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"17",
        ITEM_NAME:"Hot & Sour Soup",
        ITEM_PRICE:3.50,
        ITEM_FULL_DESCRIPTION:"Hot & Sour Soup",
        EXPIRED:"NO"
    });
    var tomYumSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"18",
        ITEM_NAME:"Tom Yum Soup",
        ITEM_PRICE:3.50,
        ITEM_FULL_DESCRIPTION:"Tom Yum Soup",
        EXPIRED:"NO"
    });
    var wonTonSoup = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"19",
        ITEM_NAME:"Won Ton Soup",
        ITEM_PRICE:4.00,
        ITEM_FULL_DESCRIPTION:"Won Ton Soup",
        EXPIRED:"NO"
    });

    persistence.add(chickenSweetcornSoup);
    persistence.add(chickenMushroomSoup);
    persistence.add(chickenNoodleSoup);
    persistence.add(crabMeatSweetcornSoup);
    persistence.add(vegetableSoup);
    persistence.add(hotAndSourSoup);
    persistence.add(tomYumSoup);
    persistence.add(wonTonSoup);

    soups.ITEM_ITEM_CATEGORY_ID.add(chickenSweetcornSoup);
    soups.ITEM_ITEM_CATEGORY_ID.add(chickenMushroomSoup);
    soups.ITEM_ITEM_CATEGORY_ID.add(chickenNoodleSoup);
    soups.ITEM_ITEM_CATEGORY_ID.add(crabMeatSweetcornSoup);
    soups.ITEM_ITEM_CATEGORY_ID.add(vegetableSoup);
    soups.ITEM_ITEM_CATEGORY_ID.add(hotAndSourSoup);
    soups.ITEM_ITEM_CATEGORY_ID.add(tomYumSoup);
    soups.ITEM_ITEM_CATEGORY_ID.add(wonTonSoup);

    var filletOfChickenWithCurrySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"20",
        ITEM_NAME:"Chicken With Curry Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"Fillet Of Chicken With Curry Sauce",
        EXPIRED:"NO"
    });
    var sweetAndSourChickenHongKongStyle = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"21",
        ITEM_NAME:"Sweet & Sour Chicken Hong Kong Style",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithChilliGarlicSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"22",
        ITEM_NAME:"Chicken With Chilli Galic",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenChopSuey = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"23",
        ITEM_NAME:"Chicken Chop Suey",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenMushroom = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"24",
        ITEM_NAME:"Chicken Mushroom",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithCashewNuts = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"25",
        ITEM_NAME:"Chicken With Cashew Nuts",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithPineapple = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"26",
        ITEM_NAME:"Chicken With Pineapple",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithGingerAndSpringOnion = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"27",
        ITEM_NAME:"Chicken With Ginger & Spring Onion",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithKongpoSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"28",
        ITEM_NAME:"Chicken With Kongpo Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithCantoneseSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"29",
        ITEM_NAME:"Chicken With Cantonese Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithBlackBeanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"30",
        ITEM_NAME:"Chicken Black Bean Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithBlackPepper = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"31",
        ITEM_NAME:"Chicken With Black Pepper",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithSataySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"32",
        ITEM_NAME:"Chicken With Satay Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var filletOfChickenWithSzechuanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"33",
        ITEM_NAME:"Chicken With Szechuan Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var crispyChickenWithChoiceOfSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"34",
        ITEM_NAME:"Crispy Chicken With Choice Of Sauce",
        ITEM_PRICE:7.80,
        ITEM_FULL_DESCRIPTION:"Crispy Chicken With Choice Of Sauce( Lemon,Orange,Satay,hot&HOney Or Cantonese)",
        EXPIRED:"NO"
    });
    var chickenBallsAndSeparateCurrySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"35",
        ITEM_NAME:"Chicken Balls + Curry Sauce",
        ITEM_PRICE:7.20,
        ITEM_FULL_DESCRIPTION:"Chicken Balls & separate Curry Sauce(8)",
        EXPIRED:"NO"
    });


    persistence.add(filletOfChickenWithCurrySauce);
    persistence.add(sweetAndSourChickenHongKongStyle);
    persistence.add(filletOfChickenWithChilliGarlicSauce);
    persistence.add(filletOfChickenChopSuey);
    persistence.add(filletOfChickenMushroom);
    persistence.add(filletOfChickenWithCashewNuts);
    persistence.add(filletOfChickenWithPineapple);
    persistence.add(filletOfChickenWithGingerAndSpringOnion);
    persistence.add(filletOfChickenWithKongpoSauce);
    persistence.add(filletOfChickenWithCantoneseSauce);
    persistence.add(filletOfChickenWithBlackBeanSauce);
    persistence.add(filletOfChickenWithBlackPepper);
    persistence.add(filletOfChickenWithSataySauce);
    persistence.add(filletOfChickenWithSzechuanSauce);
    persistence.add(crispyChickenWithChoiceOfSauce);
    persistence.add(chickenBallsAndSeparateCurrySauce);







    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithCurrySauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(sweetAndSourChickenHongKongStyle);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithChilliGarlicSauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenChopSuey);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenMushroom);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithCashewNuts);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithPineapple);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithGingerAndSpringOnion);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithKongpoSauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithCantoneseSauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithBlackBeanSauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithBlackPepper);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithSataySauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(filletOfChickenWithSzechuanSauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(crispyChickenWithChoiceOfSauce);
    chickenDishes.ITEM_ITEM_CATEGORY_ID.add(chickenBallsAndSeparateCurrySauce);



    var beefWithCurrySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"36",
        ITEM_NAME:"Beef With Curry Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithChilliGarlicSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"37",
        ITEM_NAME:"Beef With Chilli Garlic Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefChopSuey = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"38",
        ITEM_NAME:"Beef With Chop Suey",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithMushroom = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"39",
        ITEM_NAME:"Beef With Mushroom",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithCashewNuts = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"40",
        ITEM_NAME:"Beef With Cashew Nuts",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithPineapple = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"41",
        ITEM_NAME:"Beef With Pineapple",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithGingerAndSpringOnion = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"42",
        ITEM_NAME:"Beef With Ginger And Spring Onion",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithKongpoSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"43",
        ITEM_NAME:"Beef With Kongpo Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithCantoneseSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"44",
        ITEM_NAME:"Beef With Cantonese Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithBlackBeanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"45",
        ITEM_NAME:"Beef With Black Bean Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithBlackPepper = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"46",
        ITEM_NAME:"Beef With Black Pepper",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithSataySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"47",
        ITEM_NAME:"Beef With Satay Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefWithSzechuanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"48",
        ITEM_NAME:"Beef With Szechuan Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });



    persistence.add(beefWithCurrySauce);
    persistence.add(beefWithChilliGarlicSauce);
    persistence.add(beefChopSuey);
    persistence.add(beefWithMushroom);
    persistence.add(beefWithCashewNuts);
    persistence.add(beefWithPineapple);
    persistence.add(beefWithGingerAndSpringOnion);
    persistence.add(beefWithKongpoSauce);
    persistence.add(beefWithCantoneseSauce);
    persistence.add(beefWithBlackBeanSauce);
    persistence.add(beefWithBlackPepper);
    persistence.add(beefWithSataySauce);
    persistence.add(beefWithSzechuanSauce);

    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithBlackPepper);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithCurrySauce);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithChilliGarlicSauce);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefChopSuey);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithMushroom);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithCashewNuts);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithPineapple);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithGingerAndSpringOnion);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithKongpoSauce);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithCantoneseSauce);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithBlackBeanSauce);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithBlackBeanSauce);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithSataySauce);
    beefDishes.ITEM_ITEM_CATEGORY_ID.add(beefWithSzechuanSauce);

    var kingPrawnWithCurrySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"49",
        ITEM_NAME:"King Prawn With Curry Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var sweetAndSourKingPrawn = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"50",
        ITEM_NAME:"Sweet & Sour King Prawn Hong Kong Style",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithChilliGalic = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"51",
        ITEM_NAME:"King Prawn With Chilli Garlic Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithChopSuey = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"52",
        ITEM_NAME:"King Prawn With Chop Suey",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithMushroom = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"53",
        ITEM_NAME:"King Prawn With Mushroom",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithCashewNuts = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"54",
        ITEM_NAME:"King Prawn With Cashew Nuts",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithPineapple = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"55",
        ITEM_NAME:"King Prawn With Pineapple",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithGingerAndSpringOnion = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"56",
        ITEM_NAME:"King Prawn With Ginger & Spring Onion",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithKongpoSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"57",
        ITEM_NAME:"King Prawn With Kongpo Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithCantoneseSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"58",
        ITEM_NAME:"King Prawn With Cantonese Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithBlackBeanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"59",
        ITEM_NAME:"King Prawn With BlackBean Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithBlackPepperSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"60",
        ITEM_NAME:"King Prawn With Black Pepper Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithSataySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"61",
        ITEM_NAME:"King Prawn With Satay Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnWithSzechuanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"62",
        ITEM_NAME:"King Prawn With Szechuan Sauce",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });



    persistence.add(kingPrawnWithCurrySauce);
    persistence.add(sweetAndSourKingPrawn);
    persistence.add(kingPrawnWithChilliGalic);
    persistence.add(kingPrawnWithChopSuey);
    persistence.add(kingPrawnWithMushroom);
    persistence.add(kingPrawnWithCashewNuts);
    persistence.add(kingPrawnWithPineapple);
    persistence.add(kingPrawnWithGingerAndSpringOnion);
    persistence.add(kingPrawnWithKongpoSauce);
    persistence.add(kingPrawnWithCantoneseSauce);
    persistence.add(kingPrawnWithBlackBeanSauce);
    persistence.add(kingPrawnWithBlackPepperSauce);
    persistence.add(kingPrawnWithSataySauce);
    persistence.add(kingPrawnWithSzechuanSauce);


    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithCurrySauce);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(sweetAndSourKingPrawn);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithChilliGalic);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithChopSuey);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithMushroom);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithCashewNuts);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithPineapple);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithGingerAndSpringOnion);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithKongpoSauce);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithCantoneseSauce);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithBlackBeanSauce);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithBlackPepperSauce);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithSataySauce);
    kingPrawnDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnWithSzechuanSauce);



    var roastDuckCantoneseStyle = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"63",
        ITEM_NAME:"Roast Duck Cantonese Style",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastDuckWithBlackBeanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"64",
        ITEM_NAME:"Roast Duck With Black Bean Sauce",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastDuckWithBlackPepperSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"65",
        ITEM_NAME:"Roast Duck With Black Pepper",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastDuckPlumSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"66",
        ITEM_NAME:"Roast Duck Plum Sauce",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastDuckWithOrangeSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"67",
        ITEM_NAME:"Roast Duck With Orange Sauce",
        ITEM_PRICE:8.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });



    persistence.add(roastDuckCantoneseStyle);
    persistence.add(roastDuckWithBlackBeanSauce);
    persistence.add(roastDuckWithBlackPepperSauce);
    persistence.add(roastDuckPlumSauce);
    persistence.add(roastDuckWithOrangeSauce);

    roastDuckDishes.ITEM_ITEM_CATEGORY_ID.add(roastDuckCantoneseStyle);
    roastDuckDishes.ITEM_ITEM_CATEGORY_ID.add(roastDuckWithBlackBeanSauce);
    roastDuckDishes.ITEM_ITEM_CATEGORY_ID.add(roastDuckWithBlackPepperSauce);
    roastDuckDishes.ITEM_ITEM_CATEGORY_ID.add(roastDuckPlumSauce);
    roastDuckDishes.ITEM_ITEM_CATEGORY_ID.add(roastDuckWithOrangeSauce);



    var roastPorkWithCurrySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"68",
        ITEM_NAME:"Roast Pork With Curry Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var sweetAndSourPorkHongkongStyle = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"69",
        ITEM_NAME:"Sweet & Sour Port",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithChilliGarlicSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"70",
        ITEM_NAME:"Roast Pork With Chilli Garlic Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWitChopSuey = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"71",
        ITEM_NAME:"Roast Pork With Chop Suey",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithMushroom = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"72",
        ITEM_NAME:"Roast Pork With Mushroom",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithCashewNuts = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"73",
        ITEM_NAME:"Roast Pork With Cashe Nuts",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithPineapple = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"74",
        ITEM_NAME:"Roast Pork With Pineapple",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithGingerAndSpringOnion = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"75",
        ITEM_NAME:"Roast Pork With Ginger & Spring Onion",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithKongpoSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"76",
        ITEM_NAME:"Roast Pork With Kongpo Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithCantoneseSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"77",
        ITEM_NAME:"Roast Pork With Cantonese Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithBlackBeanSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"78",
        ITEM_NAME:"Roast Pork With Black Bean Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithBlackPepper = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"79",
        ITEM_NAME:"Roast Pork With Black Pepper",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithSataySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"80",
        ITEM_NAME:"Roast Pork With Satay Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var roastPorkWithSzechaunSauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"81",
        ITEM_NAME:"Roast Pork With Szechaun Sauce",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });



    persistence.add(roastPorkWithCurrySauce);
    persistence.add(roastPorkWithKongpoSauce);
    persistence.add(sweetAndSourPorkHongkongStyle);
    persistence.add(roastPorkWithChilliGarlicSauce);
    persistence.add(roastPorkWitChopSuey);
    persistence.add(roastPorkWithMushroom);
    persistence.add(roastPorkWithCashewNuts);
    persistence.add(roastPorkWithPineapple);
    persistence.add(roastPorkWithGingerAndSpringOnion);
    persistence.add(roastPorkWithCantoneseSauce);
    persistence.add(roastPorkWithBlackBeanSauce);
    persistence.add(roastPorkWithBlackPepper);
    persistence.add(roastPorkWithSataySauce);
    persistence.add(roastPorkWithSzechaunSauce);

    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithCurrySauce);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithKongpoSauce);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(sweetAndSourPorkHongkongStyle);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithChilliGarlicSauce);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWitChopSuey);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithMushroom);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithCashewNuts);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithPineapple);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithGingerAndSpringOnion);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithCantoneseSauce);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithBlackBeanSauce);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithBlackPepper);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithSataySauce);
    roastPorkDishes.ITEM_ITEM_CATEGORY_ID.add(roastPorkWithSzechaunSauce);


    var mixedVegetables = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"82",
        ITEM_NAME:"Mixed Vegetables & Tofu",
        ITEM_PRICE:6.50,
        ITEM_FULL_DESCRIPTION:"Mixed Vegetables & Touf with satay,Black Bean,Chop Suey,Black Pepper,Kongpo,Szechuan or Oyster Sauce",
        EXPIRED:"NO"
    });

    persistence.add(mixedVegetables);

    vegetableDishes.ITEM_ITEM_CATEGORY_ID.add(mixedVegetables);

    var houseSpecialFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"83",
        ITEM_NAME:"House Special Fired Rice",
        ITEM_PRICE:7.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"84",
        ITEM_NAME:"King Prawn Fired Rice",
        ITEM_PRICE:7.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var chickenFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"85",
        ITEM_NAME:"Chicken Fired Rice",
        ITEM_PRICE:7.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"86",
        ITEM_NAME:"Beef Fired Rice",
        ITEM_PRICE:7.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var yungChowFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"87",
        ITEM_NAME:"Yung chow Fired Rice",
        ITEM_PRICE:7.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var singaporeFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"88",
        ITEM_NAME:"Singapore Fired Rice",
        ITEM_PRICE:7.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var vegetableFriedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"89",
        ITEM_NAME:"Vegetable Fired Rice",
        ITEM_PRICE:6.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });



    persistence.add(houseSpecialFriedRice);
    persistence.add(kingPrawnFriedRice);
    persistence.add(chickenFriedRice);
    persistence.add(beefFriedRice);
    persistence.add(yungChowFriedRice);
    persistence.add(singaporeFriedRice);
    persistence.add(vegetableFriedRice);

    friedRiceDishes.ITEM_ITEM_CATEGORY_ID.add(houseSpecialFriedRice);
    friedRiceDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnFriedRice);
    friedRiceDishes.ITEM_ITEM_CATEGORY_ID.add(chickenFriedRice);
    friedRiceDishes.ITEM_ITEM_CATEGORY_ID.add(beefFriedRice);
    friedRiceDishes.ITEM_ITEM_CATEGORY_ID.add(yungChowFriedRice);
    friedRiceDishes.ITEM_ITEM_CATEGORY_ID.add(singaporeFriedRice);
    friedRiceDishes.ITEM_ITEM_CATEGORY_ID.add(vegetableFriedRice);

    var houseSpecialChowmein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"90",
        ITEM_NAME:"House Special Chow Mein",
        ITEM_PRICE:8.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnChowMein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"91",
        ITEM_NAME:"King Prawn Chow Mein",
        ITEM_PRICE:8.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var chickenChowMein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"92",
        ITEM_NAME:"Chicken Chow Mein",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefChowmein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"93",
        ITEM_NAME:"Beef Chow Mein",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var yungChowChowmein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"94",
        ITEM_NAME:"Yung Chow Chow Mein",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var singaporeChowmein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"95",
        ITEM_NAME:"Singapore Chow Mein",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var vegetableChowmein = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"96",
        ITEM_NAME:"Vegetable Chow Mein",
        ITEM_PRICE:6.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });

    persistence.add(houseSpecialChowmein);
    persistence.add(kingPrawnChowMein);
    persistence.add(chickenChowMein);
    persistence.add(beefChowmein);
    persistence.add(yungChowChowmein);
    persistence.add(singaporeChowmein);
    persistence.add(vegetableChowmein);

    chowMeinDishes.ITEM_ITEM_CATEGORY_ID.add(houseSpecialChowmein);
    chowMeinDishes.ITEM_ITEM_CATEGORY_ID.add(kingPrawnChowMein);
    chowMeinDishes.ITEM_ITEM_CATEGORY_ID.add(chickenChowMein);
    chowMeinDishes.ITEM_ITEM_CATEGORY_ID.add(beefChowmein);
    chowMeinDishes.ITEM_ITEM_CATEGORY_ID.add(yungChowChowmein);
    chowMeinDishes.ITEM_ITEM_CATEGORY_ID.add(singaporeChowmein);
    chowMeinDishes.ITEM_ITEM_CATEGORY_ID.add(vegetableChowmein);


    var specialCharKuehTeow = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"97",
        ITEM_NAME:"Special Char Kueh Teow",
        ITEM_PRICE:8.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var kingPrawnCharKuehTeow = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"98",
        ITEM_NAME:"King Prawn Char Kueh Teow",
        ITEM_PRICE:8.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var chickenCharKuehTeow = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"99",
        ITEM_NAME:"Chicken Char Kueh Teow",
        ITEM_PRICE:8.20,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var beefCharKuehTeow = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"100",
        ITEM_NAME:"Beef Char Kueh Teow",
        ITEM_PRICE:8.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });

    persistence.add(specialCharKuehTeow);
    persistence.add(kingPrawnCharKuehTeow);
    persistence.add(chickenCharKuehTeow);
    persistence.add(beefCharKuehTeow);

    friedCharKuehTeow.ITEM_ITEM_CATEGORY_ID.add(specialCharKuehTeow);
    friedCharKuehTeow.ITEM_ITEM_CATEGORY_ID.add(kingPrawnCharKuehTeow);
    friedCharKuehTeow.ITEM_ITEM_CATEGORY_ID.add(chickenCharKuehTeow);
    friedCharKuehTeow.ITEM_ITEM_CATEGORY_ID.add(beefCharKuehTeow);


    var boiledRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"101",
        ITEM_NAME:"Boild Rice",
        ITEM_PRICE:1.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var friedRice = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"102",
        ITEM_NAME:"Fried Rice",
        ITEM_PRICE:2.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var friedNoodls = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"103",
        ITEM_NAME:"Fired Noodles",
        ITEM_PRICE:3.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var chips = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"104",
        ITEM_NAME:"Chips",
        ITEM_PRICE:1.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var prawnCrackers = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"105",
        ITEM_NAME:"Prawn Crackers",
        ITEM_PRICE:1.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var friedBeanSprout = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"106",
        ITEM_NAME:"Fired Bean Sprout",
        ITEM_PRICE:2.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var friedVegetables = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"107",
        ITEM_NAME:"Fried Vegetables",
        ITEM_PRICE:3.80,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var friedOnions = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"108",
        ITEM_NAME:"Boild Rice",
        ITEM_PRICE:2.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var friedMushrooms = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"109",
        ITEM_NAME:"Fried Mushrooms",
        ITEM_PRICE:4.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var chickenBalls = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"110",
        ITEM_NAME:"Chicken Balls",
        ITEM_PRICE:4.80,
        ITEM_FULL_DESCRIPTION:"Chicken Balls(8)",
        EXPIRED:"NO"
    });
    var fourInOne = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"111",
        ITEM_NAME:"4 In 1",
        ITEM_PRICE:5.80,
        ITEM_FULL_DESCRIPTION:"Chips,Fried Rice Chicken Or Beef With Curry Sauce",
        EXPIRED:"NO"
    });
    var threeInOne = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"112",
        ITEM_NAME:"3 IN 1",
        ITEM_PRICE:4.20,
        ITEM_FULL_DESCRIPTION:"Chips Fired Rice With Curry Sauce",
        EXPIRED:"NO"
    });
    var twoInOne = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"113",
        ITEM_NAME:"2 In 1",
        ITEM_PRICE:1.80,
        ITEM_FULL_DESCRIPTION:"Chips Or Rice With Curry Sauce",
        EXPIRED:"NO"
    });
    var anySauce = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"114",
        ITEM_NAME:"Any Sauce",
        ITEM_PRICE:1.50,
        ITEM_FULL_DESCRIPTION:"Any Sauce",
        EXPIRED:"NO"
    });

    persistence.add(boiledRice);
    persistence.add(friedRice);
    persistence.add(friedNoodls);
    persistence.add(chips);
    persistence.add(prawnCrackers);
    persistence.add(friedBeanSprout);
    persistence.add(friedVegetables);
    persistence.add(friedOnions);
    persistence.add(friedMushrooms);
    persistence.add(chickenBalls);
    persistence.add(fourInOne);
    persistence.add(threeInOne);
    persistence.add(twoInOne);
    persistence.add(anySauce);

    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(boiledRice);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(friedRice);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(friedNoodls);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(chips);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(prawnCrackers);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(friedBeanSprout);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(friedVegetables);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(friedOnions);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(friedMushrooms);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(chickenBalls);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(fourInOne);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(threeInOne);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(twoInOne);
    extraPoritions.ITEM_ITEM_CATEGORY_ID.add(anySauce);

    var snackBoxIn = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"115",
        ITEM_NAME:"Snack Box",
        ITEM_PRICE:7.50,
        ITEM_FULL_DESCRIPTION:"Chicken Balls(2),Spring Roll(1),Won Tons(2), Chicken Wings(2)&Chips.(Choice Of Sweet & Sour Or Curry Sauce)",
        EXPIRED:"NO"
    });


    persistence.add(snackBox);

    snackBox.ITEM_ITEM_CATEGORY_ID.add(snackBoxIn);

    var cokeBig = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"116",
        ITEM_NAME:"Coke 1.25",
        ITEM_PRICE:2.5,
        ITEM_FULL_DESCRIPTION:"",
        ITEM_CHINESE_NAME:"可乐",
        EXPIRED:"NO"
    });
    var dietCokeBig = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"117",
        ITEM_NAME:"Diet Coke 1.25",
        ITEM_PRICE:2.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var sevenUpBig = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"118",
        ITEM_NAME:"7 Up 1.25",
        ITEM_PRICE:2.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var dietSevenUpBig = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"119",
        ITEM_NAME:"Diat 7 Up 1.25",
        ITEM_PRICE:2.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var fantaBig = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"120",
        ITEM_NAME:"Fanta 1.25",
        ITEM_PRICE:2.50,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });

    var coke = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"121",
        ITEM_NAME:"Coke",
        ITEM_PRICE:1.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var dietCoke = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"122",
        ITEM_NAME:"Diat Coke",
        ITEM_PRICE:1.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var sevenUp = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"123",
        ITEM_NAME:"7 Up",
        ITEM_PRICE:1.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var dietSevenUp = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"124",
        ITEM_NAME:"Diat 7 Up",
        ITEM_PRICE:1.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });
    var fanta = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"125",
        ITEM_NAME:"Fanta",
        ITEM_PRICE:1.00,
        ITEM_FULL_DESCRIPTION:"",
        EXPIRED:"NO"
    });


    persistence.add(coke);
    persistence.add(cokeBig);
    persistence.add(dietCoke);
    persistence.add(dietCokeBig);
    persistence.add(sevenUp);
    persistence.add(sevenUpBig);
    persistence.add(dietSevenUp);
    persistence.add(dietSevenUpBig);
    persistence.add(fanta);
    persistence.add(fantaBig);

    softDrink.ITEM_ITEM_CATEGORY_ID.add(coke);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(cokeBig);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(dietCoke);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(dietCokeBig);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(sevenUp);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(sevenUpBig);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(dietSevenUp);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(dietSevenUpBig);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(fanta);
    softDrink.ITEM_ITEM_CATEGORY_ID.add(fantaBig);

    var happy1 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"H1",
        ITEM_NAME:"Happy Meal 1",
        ITEM_PRICE:10.95,
        ITEM_FULL_DESCRIPTION:"Spring ROll(1),Seasame Prawn Toast,Fried WonTon(4)$ Sweet Sour Sauce,Chicken,Beef Or Pork In any Dishes,Chips,Fried Rice Or Boild Rice,A Free Can",
        EXPIRED:"NO"
    });
    var happy2 = new SuperWokDatabase.ITEM({
        ITEM_ID:"TEXT",
        ITEM_CODE:"H2",
        ITEM_NAME:"Happy Meal 2",
        ITEM_PRICE:10.95,
        ITEM_FULL_DESCRIPTION:"Startes(2) Choose 2 Starters Forom NO S1 -S4 & 1 -8, Main Course(2) Choose 2 Main Course From King Prawn,Chicken, Beef Or Roast Pork in Menu,Fired Rice & Chips,2 Free Cans",
        EXPIRED:"NO"
    });
    persistence.add(happy1);
    persistence.add(happy2);

    mealDeals.ITEM_ITEM_CATEGORY_ID.add(happy1);
    mealDeals.ITEM_ITEM_CATEGORY_ID.add(happy2);

//
//    var testOrder = new SuperWokDatabase.ORDER_DATA({
//
//
//        ORDER_ID:"1234",
//        ORDER_TIME:1350301986,
//        ORDER_FINISHED:"N",
//        ORDER_PAIED:"N",
//        TODAY_ID:1,
//        NO_OF_ORDERED_ITEM:"TEXT",
//        ORDER_TOTAL_PRICE:"NUMERIC",
//        EXPIRED:"NO"
//
//
//
//    });
//    persistence.add(testOrder);
//    orderTypeTakeAway.ORDER_ORDER_TYPE_CATEGORY_ID.add(testOrder);
//    orderStatusOpen.ORDER_ORDER_STATUS_ID.add(testOrder);
//    payStatusUnpaid.ORDER_PAY_STATUS_ID.add(testOrder);
//
//
//
//   var orderedItem1 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"001",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//    var orderedItem2 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"002",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//    var orderedItem3 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"003",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//    var orderedItem4 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"004",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//    var orderedItem5 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"005",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//    var orderedItem6 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"006",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//    var orderedItem7 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"007",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//    var orderedItem8 = new  SuperWokDatabase.ORDERED_ITEM({
//        ORDERED_ITEM_ID:"008",
//        ORDERED_ITEM_TIME:"INT",
//        ORDERED_ITEM_QUANTITY:"1",
//        ORDERED_ITEM_MODIFY_DETAILS:"TEXT",
//        EXPIRED:"TEXT"
//    });
//
//    persistence.add(orderedItem1);
//    persistence.add(orderedItem2);
//    persistence.add(orderedItem3);
//    persistence.add(orderedItem4);
//
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem1);
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem2);
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem3);
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem4);
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem5);
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem6);
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem7);
//    testOrder.ORDERED_ITEM_ITEM_ID.add(orderedItem8);
//
//    chickenBalls.ORDERED_ITEM_ITEM_ID.add(orderedItem1);
//    coke.ORDERED_ITEM_ITEM_ID.add(orderedItem2);
//    dietCokeBig.ORDERED_ITEM_ITEM_ID.add(orderedItem3);
//    beefChopSuey.ORDERED_ITEM_ITEM_ID.add(orderedItem4);
//    chickenChowMein.ORDERED_ITEM_ITEM_ID.add(orderedItem5);
//    prawnCocktails.ORDERED_ITEM_ITEM_ID.add(orderedItem6);
//    fanta.ORDERED_ITEM_ITEM_ID.add(orderedItem7);
//    houseSpecialFriedRice.ORDERED_ITEM_ITEM_ID.add(orderedItem8);
//
//
//    var zhe = new SuperWokDatabase.CUSTOMER_DETAILS({
//        CUSTOMER_ID:"TEXT",
//        NAME:"TEXT",
//        FIRST_NAME:"TEXT",
//        FAMILY_NAME:"TEXT",
//        PHONE_NUMBER:0870975288,
//        DELIVERY_CHARGE:2.30,
//        ADDRESS_ONE:"1 CrossAvenue Dun Laoghaire",
//        ADDRESS_TWO:"TEXT",
//        ADDRESS_THREE:"TEXT",
//        NO_OF_ORDER:"INT",
//        JOIN_TIME:"INT",
//        LAST_ORDERED_TIME:"INT",
//        PAGE_REFERENCE : "TEXT",
//        EXPIRED:"TEXT"
//    });
//    persistence.add(zhe);
//    zhe.CUSTOMER_DETAIL_ID_ORDERED_DATA.add(testOrder);


    persistence.flush();


}