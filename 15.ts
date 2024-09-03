const identity = <T>(arg: T): T => {
  return arg;
};

console.log(identity<string>("Hola"));
console.log(identity<number>(10));
