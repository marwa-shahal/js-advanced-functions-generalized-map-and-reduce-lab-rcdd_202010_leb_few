// Add your functions here


function map(source,func) {
  let r = []
  for (let i = 0; i < source.length; i++ ) {
    let sr=source[i]
    r.push(func(sr))
  }
  return r
}


function reduce(s,acc){
  

