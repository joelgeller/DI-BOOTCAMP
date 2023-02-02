// function infoAboutMe() {
//     console.log("my name is Joel Geller, i was born in sydney, australia in 2004.");
//   }
  
//   infoAboutMe();

  // part 2 ------ 
  
//   function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`My name is ${personName}, I am ${personAge} years old, and my favorite color is ${personFavoriteColor}.`);
//   }
  
//   infoAboutPerson("David", 45, "blue");
//   infoAboutPerson("Josh", 12, "yellow");
  
  // part 3

//   function calculateTip() {
//     const check = parseFloat(prompt("What's the check amount?"));
//     let tipPercentage;
    
//     if (check < 50) {
//       tipPercentage = 0.2;
//     } else if (check >= 50 && check <= 200) {
//       tipPercentage = 0.15;
//     } else {
//       tipPercentage = 0.1;
//     }
    
//     const tip = check * tipPercentage;
//     const total = check + tip;
    

//     console.log(`The total check is $${total.toFixed(2)}`);
//   }
  
//   calculateTip();
  
// PART 4 --------------------------------  

// function isDivisible() {
//     let sum = 0;
//     for (let i = 0; i <= 500; i++) {
//       if (i % 23 === 0) {
//         console.log(i);
//         sum += i;
//       }
//     }
//     console.log("Sum : " + sum);
//   }
  
//   isDivisible();

// TASK 4 ===================
  
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// };

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// };

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//   let total = 0;
//   for (let i = 0; i < shoppingList.length; i++) {
//     const item = shoppingList[i];
//     if (item in stock && stock[item] > 0) {
//       total += prices[item];
//       stock[item]--;
//     }
//   }
//   return total;
// }

// console.log(myBill());

// function changeEnough(itemPrice, amountOfChange) {
//     const quarters = amountOfChange[0] * 0.25;
//     const dimes = amountOfChange[1] * 0.10;
//     const nickels = amountOfChange[2] * 0.05;
//     const pennies = amountOfChange[3] * 0.01;
  
//     const totalChange = quarters + dimes + nickels + pennies;
//     return totalChange >= itemPrice;
//   }
  
//   console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
  
function hotelCost() {
    let nights = prompt("How many nights would you like to stay in the hotel?");
    while (isNaN(nights) || !nights) {
      nights = prompt("Please enter a valid number of nights.");
    }
    return nights * 140;
  }
  
  function planeRideCost() {
    let destination = prompt("Where would you like to go?");
    while (!destination || typeof destination !== "string") {
      destination = prompt("Please enter a valid destination.");
    }
  
    switch (destination) {
      case "London":
        return 183;
      case "Paris":
        return 220;
      default:
        return 300;
    }
  }
  
  function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");
    while (isNaN(days) || !days) {
      days = prompt("Please enter a valid number of days.");
    }
  
    let cost = days * 40;
    if (days > 10) {
      cost *= 0.95;
    }
    return cost;
  }
  
  function totalVacationCost() {
    let hotelsCost = hotelCost();
    let planeCost = planeRideCost();
    let carCost = rentalCarCost();
    return carCost + hotelsCost + planeCost;
  }
  
  console.log(`Your total vacation cost is: ${totalVacationCost()}`);
  