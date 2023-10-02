function mys(name = "bdf") {
  return `${name} Morning`;
}
console.log(mys("Karto"));

function mys(...numbers) {
  return `${numbers} Morning`;
}
console.log(mys(100, 200, 300));
