let arr = [,9,10,11,12,1,2,3,4,5,6,7,8];



function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) { 
      for (let j = 0; j < n - i - 1; j++) { 
        if (arr[j] > arr[j+1]) {
          // swapping elements
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }

  console.log(`Before Sorting the array`, arr.join(' '));
  bubbleSort(arr);
  console.log(`After Sorting the array`, arr.join(' '));



