
 function writeCards(array,eventName){
     let thankYouCards = [];
      for ( let i = 0;i<array.length;i++){
      thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
     }
  return thankYouCards
 }

 function countDown(number){
     while(number > 0){
         console.log(number)
         number --
         
     }
     console.log(number);
 }
 