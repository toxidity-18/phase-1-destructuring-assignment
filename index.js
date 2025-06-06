// learning 
// const doggie = {
//     name: 'Buzz',
//   breed: 'Great Pyrenees',
//   furColor: 'black and white',
//   activityLevel: 'sloth-like',
//   favoriteFood: 'hot dogs'
// }
// const {name,breed} = doggie     // {} around the variable names tell js that it will be pulling values from an object 
// name 
// breed 
// testing it with nested data structures 

const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats:{
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    cheeses:{
      american: 'kraft'
    }
  }
};
const {ham,hotDog}=doggie.favoriteFoods.meats 

// applying destructuring method on arrays 
const dogs = ['Great Pyrenees','Pug','Bull Mastiff']
const [medium , small , giant]= dogs

// String.prototype.split() this will turn the string into an array 
const dogName = 'Sir wood barksalot'
const [title,firstName,lastName] = dogName.split(' ')



const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// Animal sounds (assuming an object or array)
const animalSounds = {
  cow: "moo",
  horse: "neigh",
  sheep: "baa",
  pig: "oink",
  chicken: "cluck"
};


const traditionalAnimalNames = {
  cow: "Bessie",
  sheep: "Dolly",
  pig: "Babe",
  chicken: "Little"
};

const traditionalAnimalColors = {
  cow: "blackAndWhite",
  sheep: "black",
  pig: "pink"
};


const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const missPiggy = {
  name: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { cow: moo, horse: neigh, ...otherSounds } = animalSounds;
const { cow: bessie, sheep: dolly, ...otherNames } = traditionalAnimalNames;
const { cow: blackAndWhite, sheep: black, ...otherColors } = traditionalAnimalColors; 
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors; 
const [r, o, y, g, b, , v] = rainbowColors;
const { indg: indigoFromObj } = { indg: "indigo" };

const { name: muppetName, color, song, job, partner } = missPiggy; 
const { song: song2, song: [, , song4] } = { song: ["Rainbow Connection", "Moving Right Along", "I Hope That Something Better Comes Along"] }; 
const { job: nestedJob, partner: nestedPartner } = missPiggy.partner; 
