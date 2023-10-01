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

// building around the pivot
function quickSort(array) {
  if(array.length <= 1) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

//ASK ABOUT LINE 70 SPREAD OPPERATOR MAKING CODE WORK*****WONT WORK WITHOUT SPREAD *** LINE 71
const selectionSort = (arr, start = 0) => {
  
  if (start >= arr.length) return arr;
  // if (start >= arr.length) return [...arr];

  let min = arr[start];
  let minIndex;
  let temp;

  for (let i = start + 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i]
      minIndex = i;
    }
  }

  temp = arr[start];
  arr[start] = min
  arr[minIndex] = temp;

  return selectionSort(arr, ++start)
}


let testArr = [-2,5,3,15,-55,63,99,187,8]

// console.log(sortAccending(testArr))
// console.log(sortDecending(testArr))
// console.log(bubbleSort(testArr))
// console.log(mergeSort(testArr))
// console.log(quickSort(testArr))
console.log(selectionSort(testArr))

