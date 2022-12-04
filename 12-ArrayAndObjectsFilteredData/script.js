let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// Birinci Task
function startT(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name[0] == "t") array2.push(array[i]);
  }
  console.log(array2);
}
startT(arr);
// Ikinci Task
function startEndT(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].name[0] == "t" &&
      array[i].name[array[i].name.length - 1] == "t"
    ) {
      counter++;
    }
  }
  console.log("Say: " + counter);
}
startEndT(arr);
// Ucuncu Task
function keySum(array) {
  for (let i = 0; i < array.length; i++) {
    let sum;
    if (
      array[i].name[0] == "t" &&
      array[i].name[array[i].name.length - 1] == "t"
    ) {
    }
  }
}
