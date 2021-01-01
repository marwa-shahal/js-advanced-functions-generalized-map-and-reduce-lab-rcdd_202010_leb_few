// Add your functions here


function map(source,func) {
  let r = []
  for (let i = 0; i < source.length; i++ ) {
    r.push(func(source[i]))
  }
  return r
}


function reduce(arr,callB,starter){
  let start= (starter)? starter:arr[0];
  for (let i=0; i<arr.length;i++){
  start=callB(arr[i],start)
}
  return start
}
  

