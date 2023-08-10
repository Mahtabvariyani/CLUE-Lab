
//Suspects

let mrGreen = {
  name: "Jacob Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image: "https://images.app.goo.gl/VwiJWfneNpLKtkMB6",
  color: "green ",
};

let drOrchid = {
  name: "Doctor Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "https://images.app.goo.gl/LHsDadZ9xM5ZTHN99",
  color: "white",
};

let profPlum = {
  name: "Victor Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image: "https://images.app.goo.gl/3B88sdKYW2F13Uzi9",
  color: "purple",
};

let missScarlet = {
  name: "Kasandra Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://images.app.goo.gl/LoBZyKkSNPQ3ET1F9",
  color: "red",
};

let mrsPeacock = {
  name: "Eleanor Peacock",
  occupation: "Socialité",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://images.app.goo.gl/5V3EecVTv17vXmBx6",
  color: "blue",
};

let mrMustard = {
  name: "Jack Mustard",
  occupation: "Retired Football player",
  age: 62,
  description:
    "He is a former football player who tries to get by on his former glory",
  image: "https://images.app.goo.gl/kNJD2A1e1rJVUmE6A",
  color: "yellow",
};

// ### Weapons

let rope = {
  name: "rope",
  weight: 10,
};

let knife = {
  name: "knife",
  weight: 8,
};

let candlestick = {
  name: "candlestick",
  weight: 2,
};

let dumbbell = {
  name: "dumbbell",
  weight: 30,
};

let poison = {
  name: "poison",
  weight: 2,
};

let axe = {
  name: "axe",
  weight: 15,
};

let bat = {
  name: "bat",
  weight: 13,
};

let trophy = {
  name: "trophy",
  weight: 25,
};

let pistol = {
  name: "pistol",
  weight: 20,
};

// ### Rooms

let diningRoom = {
  name: "Dining Room",
};
let conservatory = {
  name: "Conservatory",
};
let kitchen = {
  name: "Kitchen",
};
let study = {
  name: "Study",
};
let library = {
  name: "Library",
};
let billiardRoom = {
  name: "Billiard Room",
};
let lounge = {
  name: "Lounge",
};
let ballroom = {
  name: "Ballroom",
};
let hall = {
  name: "Hall",
};
let spa = {
  name: "Spa",
};
let livingRoom = {
  name: "Living Room",
};
let observatory = {
  name: "Observatory",
};
let theater = {
  name: "Theater",
};
let guestHouse = {
  name: "Guest House",
};
let patio = {
  name: "Patio",
};

let suspectsArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
];

let weaponsArray = [
  pistol,
  trophy,
  bat,
  poison,
  knife,
  dumbbell,
  candlestick,
  rope,
];

let roomsArray = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  livingRoom,
  ballroom,
  theater,
  hall,
  spa,
  patio,
  guestHouse,
  observatory,
  lounge,
];

function pickMystery() {
  let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
  let Weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  let room = roomsArray[Math.floor(Math.random() * roomsArray.length)];
  return { suspect, Weapon, room };
}
let mystery = pickMystery();
/* let mystery=pickMystery()
 */

showArray(suspectsArray);
showArray(weaponsArray);
showArray(roomsArray);

function showArray(arr) {
  arr.forEach(function (eachItem) {
    document.body.innerHTML += `<li>${eachItem.name}</li>`;
  });
}
document.querySelector("button").onclick = guess;
function guess() {
  console.log("guess");
  console.log(mystery.suspect.name, mystery.Weapon.name, mystery.room.name);
  let guessSuspect = document.querySelector("#suspect").value;
  let guessWeapon = document.querySelector("#weapon").value;
  let guessRoom = document.querySelector("#room").value;
  console.log(guessSuspect, guessWeapon, guessRoom);
  if (
    guessSuspect === mystery.suspect.name &&
    guessWeapon === mystery.Weapon.name &&
    guessRoom === mystery.room.name
  ) {
    alert("You Guessed right");
  } else {
    alert("You Wrong,YOu LOse!!!!! ");
    alert(
      mystery.suspect.name +
        "Killed My Body" +
        "with the" +
        mystery.Weapon.name +
        "in the " +
        mystery.room.name
    );
  }
  document.body.innerHTML = `<img src=${mystery.suspect.image} />`;
}
