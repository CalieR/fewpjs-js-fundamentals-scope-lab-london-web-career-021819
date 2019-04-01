const animal = "cat";

function myAnimal() {
  // engine will not look up the chain as animal is declared in this scope
  const animal = "dog";
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

function add2(n) {
  let two = 2;
  return n + two;

  // Feel free to move things around!
}
