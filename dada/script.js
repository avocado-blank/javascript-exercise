// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const marksBMI = marksWeight / marksHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// if (marksBMI > johnBMI) {
//     console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})!`);
// }


// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const dolphinAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// if (dolphinAverageScore > koalasAverageScore) {
//     console.log("Team Dolphiins Win!");
// } else if (dolphinAverageScore === koalasAverageScore) {
//     console.log("Draw!");
// } else {
//     console.log("Team Koalas Win!");
// }

// const day = 'monday';

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if ( day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturaday' || day === 'sunday' ) {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(bill);
// console.log(tip);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Competition
// const calcAverage =  (firstScore,secondScore,thirdScore)=> {
//     return (firstScore + secondScore + thirdScore) / 3;
// } 

// let dolphinAverageScore = calcAverage(85,54,41);
// let koalasAverageScore = calcAverage(23,34,27);

// const checkWinner = function (avgDolphins , avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins Win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas Win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No Teams Win.....`);
//     }
// }

// checkWinner(dolphinAverageScore,koalasAverageScore);

// dolphinAverageScore = calcAverage(44,23,71);
// koalasAverageScore = calcAverage(85,54,41);

// checkWinner (dolphinAverageScore,koalasAverageScore);


// const clacTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bill = [125,555,44];
// const tips = [clacTip(bill[0]),clacTip(bill[1]),clacTip(bill[2])];
// const total = [bill[0] + tips[0] , bill[1] + tips[1] , bill[2] + tips[2] ];
// console.log(total); 

//  const markMiller = {
//      firstName : 'Mark',
//      mass : 50,
//      height : 1.69,
//      calcBMI : function () {
//          return this.mass / this.height ** 2;
//      }
//  };
 
//  const johnSmith = {
//     firstName : 'John',
//     mass : 92,
//     height : 1.95,
//     calcBMI : function () {
//         return this.mass / this.height ** 2;
//     }
// };

// console.log(`${markMiller.firstName}'s BMI (${markMiller.calcBMI()}) is ${markMiller.calcBMI() > johnSmith.calcBMI() ? "higher" : "lower"} than ${johnSmith.firstName}'s (${johnSmith.calcBMI()})`);

// const clacTip = function (bill) {
//         return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     }
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
// let tips = [];
// let total = [];

// for (let i = 0 ; i < bills.length ; i++) {
//     const tip = clacTip(bills[i]);
//     tips.push(tip);
//     total.push(tip + bills[i]);
// }
//  console.log(tips,total);

//  const calcAverage = function(arr) {
//      let sum = 0;
//      for (i = 0; i < arr.length; i++) {
//          sum += arr[i];    
//      }
//      return sum / arr.length;
//  }
//  console.log(calcAverage([2,3,4]));
//  console.log(calcAverage(tips));
//  console.log(calcAverage(total));