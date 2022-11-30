const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Asab",
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "C#",
      "Java",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Brook",
    email: "brook@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Lond",
    email: "lond@lond.com",
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Raul",
    email: "raul@raul.com",
    skills: ["C#", "Java", "SQL"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Jack",
    email: "jack@jack.com",
    skills: [],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  ,
  {
    name: "Logan",
    email: "logan@logan.com",
    skills: ["C#", "Java", "SQL"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
];

front_dev = [];
back_dev = [];
full_dev = [];

front_lang = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"];
back_lang = ["C#", "Java", "SQl", "Python", "Express", "MongoDB", "Node"];
for (let i = 0; i < users.length; i++) {
  front = false;
  back = false;

  try {
    for (let j = 0; j < users[i].skills.length; j++) {
      if (front_lang.includes(users[i].skills[j])) {
        front = true;
      }
      if (back_lang.includes(users[i].skills[j])) {
        back = true;
      }
    }
  } catch {
    continue;
  }

  if (front && back) {
    full_dev.push(users[i].name);
  } else if (front == true && back == false) {
    front_dev.push(users[i].name);
  } else if (front == false && back == true) {
    back_dev.push(users[i].name);
  } else {
    continue;
  }
}

console.log("FullStack Developer:" + full_dev.toString());
console.log("FrontEnd Developer:" + front_dev.toString());
console.log("BackEnd Developer:" + back_dev.toString());
