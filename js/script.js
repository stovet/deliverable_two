let petsName = prompt("What is your pets name?");

let happiness = 0;
let energy = 0;

for(let i = 0; i < 6; i++){
   let task = prompt("feed, pet, or walk?");
   if( task === "pet"){
       happiness += 1;
   } else if(task === "feed"){
       energy +=2
   } else if(task === "walk"){
       if(energy === 0){
           prompt("Not enough energy to enjoy a walk")
       } else {
       happiness+=2;
       energy -=1;
       }
   }
}
console.log(`${petsName} has ${happiness} happiness and ${energy} energy.`)



// pet = +1 happiness
// feed = +2 energy
// walk = +2 happiness, -1 energy