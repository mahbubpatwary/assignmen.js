


// Feet to meater converter function

function kilometreToMetre (kilometre){

    if (kilometre > 0){
    
        let metre = kilometre * 1000;
        return metre;
    
    } else{
    
       return ('please input a valid number');    
    }
 }

totalMetre = kilometreToMetre(1);

console.log (totalMetre);





// budget calculator function


function budgetCalculator (watch=0, phone=0, laptop=0){        

   if (watch >=0 && phone >=0 && laptop >=0){
    
        const watchPrice  = watch * 50;
        const phonePrice  = phone * 100;
        const laptopPrice = laptop * 500;
    
     const totalPrice = watchPrice + phonePrice + laptopPrice;        
    
        return totalPrice;
    
    
    } else { return ('please input valid quantity')};
    
    
}


let calculatePrice = budgetCalculator(16);

console.log (calculatePrice);







// hotelCost function for calculate hotel cost

function hotelCost (days){
    const day = Math.round(days)
    let totalCost;
    
    if (day < 1){ 
    return ('please input valid day')
    }
    else if (day <= 10){
        
      totalCost = day * 100;
      return totalCost;
        
    } else if (day <= 20){
    
      let withoutPkgCost = 10 * 100;
      let pkg20Day = day - 10;
      let pkg20DayCost = pkg20Day * 80;
      totalCost = withoutPkgCost + pkg20DayCost;
      return totalCost;
    
    } else {
    
        let withoutPkgCost = 10 * 100;
        let pkg20DayCost = 10 * 80;
        let pkg20DayPlus = day - 20;
        let pkg20DayPlusCost = pkg20DayPlus * 50;
        totalCost = withoutPkgCost + pkg20DayCost + pkg20DayPlusCost ;        
        return totalCost;
    }   
}



var totalHotelCost = hotelCost('1.4');

console.log (totalHotelCost);







// megaFriend function for find big name

friends = ["Raju",'Bablu','mama','kalu-lalu','shamim','farbez','robin',]        
       
function megaFriend (name){

    let bigName = '';
    
    for (i=0; i<name.length; i++){
        
      let friend = name[i];   
      if (friend.length > bigName.length){   
           
         bigName = friend;
       }}     
       
    return bigName;
}
   
   
const bigFriend = megaFriend(friends);

      console.log (bigFriend);


















