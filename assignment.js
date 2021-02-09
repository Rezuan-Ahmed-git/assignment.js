// https://github.com/Rezuan-Ahmed-git/assignment.js

// (1) kilometer To Meter start
function kilometerToMeter(km) {
    let numToMeter = km * 1000;
    if (km < 0) {
        console.log("Error Input!");
    }
    else {
        return numToMeter;
    }

}

let distance = kilometerToMeter(0);
console.log(distance);
// (1) kilometer To Meter End



// (2) Budget Calculator start
function budgetCalculator(watch, phone, laptop) {
    let calculateWatch = watch * 50;
    let calculatePhone = phone * 100;
    let calculateLaptop = laptop * 500;
    let totalCost = calculateWatch + calculatePhone + calculateLaptop;
    return totalCost; 
}

let yourTotalCost = budgetCalculator(10, 5, 1);
console.log(yourTotalCost);
// (2) Budget Calculator End



// (3) Hotel Cost start
function hotelCost(days) {
    // For 0 or less days 
    if (days <= 0) {
        return "Error Input";
    }// For 10 days 
    else if (days <= 10) {
        let firstTenDays = days * 100;
        return firstTenDays;
    }// For 20 days 
    else if (days <= 20) {
        let firstTenDays = 10 * 100;
        let remainingDaysSecondPart = days - 10;
        let secondTenDays = remainingDaysSecondPart * 80;
        let totalCostForSecondTen = firstTenDays + secondTenDays;
        return totalCostForSecondTen;
    }// For 21 + days
    else {
        let firstTenDays = 10 * 100;
        let secondTenDays = 10 * 80;
        let remainingDaysThirdPart = days - 20;
        let thirdDays = remainingDaysThirdPart * 50;
        let totalCostForThirdPart = firstTenDays + secondTenDays + thirdDays;
        return totalCostForThirdPart;
    }    
}

let istayed = hotelCost(19);
console.log(istayed);
// (3) Hotel Cost End



// (4) Mega Friend start
function megaFriend(friendList) {
    let bigName = friendList[0];
    for(let i = 0; i < friendList.length; i++) {
        let element = friendList[i];
        if(element.length > bigName.length) {
            bigName = element;
        }
        
    }
    return bigName;   
}

let nameList = ["Ridwan", "Ahmed", "Shourav", "Mohammad", "Yasinnnnnnnnnnnnnnnn", "Rakib"];
console.log(megaFriend(nameList));

// (4) Mega Friend End