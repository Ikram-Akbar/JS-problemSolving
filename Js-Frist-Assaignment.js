// 1st problem ..
// seerToMon convert..
 
function seerToMon (seer){
  if(seer < 0){
      alert("input a valid number")
  }
  else{
    let convertSeer = seer/40;
    return convertSeer;
  }
}
let seerToMonConvert = seerToMon(400);
// console.log(seerToMonConvert);

// ======================================================


// 2nd problem
// totalSales

function totalSales (shirtQuantity, pantQuantity, shoeQuantity){
let totalPrize = (shirtQuantity*100)+(pantQuantity*200)+(shoeQuantity*500);
return totalPrize;
}

const totalCost = totalSales( 1, 1,1);
// console.log(totalCost);

// ============================================================

// 3rd problem
// deliveryCost



function deliveryCost(numberOfTshirt){
    const firstHundredTshirt = 100;
    const secondHundredTshirt = 80;
    const restTshirtCharge = 50;

    // function validation

    if(numberOfTshirt < 1){
        return "Please, Select a valid number";
    }
    if(numberOfTshirt <= 100){
        const cost = numberOfTshirt * firstHundredTshirt;
        return cost;
    }
    else if(numberOfTshirt <= 200){
        const firstHundred = 100 * firstHundredTshirt;
        const restTshirt = numberOfTshirt - 100;
        const secondHundred = restTshirt * secondHundredTshirt;
        const total = firstHundred + secondHundred;
        return total;

    }
    else{
        const firstHundred = 100 * firstHundredTshirt;
        const secondHundred = 100 * secondHundredTshirt;
        const restTshirt = numberOfTshirt - 200;
        const lastTshirt = restTshirt * restTshirtCharge;
        const total = firstHundred + secondHundred + lastTshirt;
        return total;
    }
}
const totalValue = deliveryCost(2);
// console.log(totalValue);


// ==================================



// 4th problem
// perfectFriend


const friendsName = ['priyaaa', 'muktaa','urmii', 'ria', 'labiba', 'adiba', 'pathan', 'Tio', 'Lato'];

function perfectFriend(friend){
    for(people of friend){
        if(people.length == 5){
            return people;
        }
        
    }
}

const bestu = perfectFriend(friendsName);
// console.log(bestu);







// ============================================




