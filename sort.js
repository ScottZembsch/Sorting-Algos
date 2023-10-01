const sortAccending = (arr) => {
  return arr.sort((a,b) => a - b);
}

const sortDecending = (arr) => {
  return arr.sort((a,b) => b - a);
}

const bubbleSort = arr => {
  let count = arr.length - 1;

  while(count > 0){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i + 1]){
        let temp;
         temp = arr[i+1];
         arr[i+1] = arr[i];
         arr[i] = temp;
      }
    }
    count--;
  }

  return arr;
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let midIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0,midIndex);
  let rightArr = arr.slice(midIndex);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (la, ra) => {
  let sortedArr = [];
  
  while (la.length && ra.length){
    if (la[0] < ra[0]){
      sortedArr.push(la.shift())
    } else {
      sortedArr.push(ra.shift())
    }
  }

  return [...sortedArr, ...la, ...ra]
}

const quickSort = arr => {
  
}






let testArr = [-2,5,2,15,-55,63,99,187,8]

// console.log(sortAccending(testArr))
// console.log(sortDecending(testArr))
// console.log(bubbleSort(testArr))
// console.log(mergeSort(testArr))