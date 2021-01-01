// Add your functions here


function map(source,func) {
  let r = []
  for (let i = 0; i < source.length; i++ ) {
    r.push(func(source[i]))
  }
  return r
}


function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
  

