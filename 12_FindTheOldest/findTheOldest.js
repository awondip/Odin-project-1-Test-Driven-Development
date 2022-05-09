const findTheOldest = function(people) {
   
//       //Finding the oldest person

//       // Use reduce method to reduce the array by comparing current age with previous age


//   return people.reduce((oldest, currentPerson) => {

//     // oldestAge gets the age of the oldest person's year of death and birth

//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

//     // currentAge gets the age of the current person's year of death and birth

//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

//     // return name if current age is older than the oldest age, else return current oldest age

//     return oldestAge < currentAge ? currentPerson : oldest;
//   });

// };

  
// const getAge = function(birth, death) {
//     if (!death) {
//    death = new Date().getFullYear(); // return current year using Date()
//    }
//    return death - birth; // else just return age using death minus birth

        let peopleNameAndAge = {"name":"0","age":0};
     
        for(let i=0; i<people.length; i++){
            
          
            if(people[i].yearOfBirth){
              if(people[i].yearOfDeath){
                
                if (peopleNameAndAge["age"] < people[i].yearOfDeath - people[i].yearOfBirth){
                  peopleNameAndAge["age"] = people[i].yearOfDeath - people[i].yearOfBirth
                  peopleNameAndAge["name"]= people[i].name
                }
                
               
               
                
              }else{
                let TodayYear = new Date().getFullYear();
               

                if (peopleNameAndAge["age"] < TodayYear - people[i].yearOfBirth){
                  peopleNameAndAge["age"] = TodayYear - people[i].yearOfBirth
                  peopleNameAndAge["name"]= people[i].name
                  
                }
                
              }
            }else{ 
              console.log("no year of birth")
            }
           
        }
     return peopleNameAndAge
        
               
};



// Do not edit below this line
module.exports = findTheOldest;

