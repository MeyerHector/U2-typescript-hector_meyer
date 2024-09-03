interface Person {
  firstName: string;
  lastName?: string;
}

const person: Person = {
  firstName: "Héctor",
  lastName: "Meyer",
};

console.log(person);

const personWithoutLastName: Person = {
  firstName: "Hector",
};
console.log(personWithoutLastName);
