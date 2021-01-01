// Add your functions here


function map(source,func) {
  let r = []
  for (let i = 0; i < source.length; i++ ) {
    r.push(func(source[i]))
  }
  return r
}


function reduce(arr,callB,starter){
  let start= (!starter)? arr[0]:starter;
  for (let i=0; i<arr.length;i++){
  start=callB(arr[i],start)
}
  return start
}
  

