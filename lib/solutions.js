function bubbleSort (array){
  // Implement BubbleSort here:
  var array = array.slice();
  for (var i = 0; i < array.length; i++){
    for (var j = array.length; j > 0; j--) {
      if (array[j] < array[j-1]) {
        var tmp = array[j];
        array[j] = array[j-1];
        array[j-1] = tmp;
      }
    }
  }
  return array;
}


function mergeSort (array) {
  // Implement mergeSort here
  if (array.length === 1)  { return array; }

  // More than one element? Divide list into left/right parts
  var mid   = Math.floor(array.length/2);
  var left  = mergeSort(array.slice(0, mid)) || [];
  var right = mergeSort(array.slice(mid, array.length)) || [];

  return merge(left, right);
}
function merge (left, right) {
  // Implement a helper function to merge elements here:
  var result = [];
  var i   = 0;
  var j   = 0;

  // Compare smallest elements of both lists.
  // Add smallest element to merged list until one list is empty
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Append whatever is left over to the end of resultant list.
  // We can assume this new list will be in sorted order.
  return result.concat(left.slice(i)).concat(right.slice(j));
}


function radixSort (array) {
  // define places such that the 4 in 1234 is place 0 and 3 in 1234 is place 1
  var placeToSortBy = 0;

  // find the maximum digits (ie number of iterations necessary)
  var maxDigits = array.reduce(function(max, number){
    var numDigits = String(number).length;
    return max > numDigits ? max : numDigits;
  }, 0);

  // interate through array, returning an array sorted up to current iteration's place
  while (maxDigits !== placeToSortBy) {
    array = sortByPlace(array, placeToSortBy);
    // console.log('Place',placeToSortBy+1+'/'+maxDigits+':',array)
    placeToSortBy++;
  }

  // return completely sorted array
  return array;
}
function sortByPlace (array, placeToSortBy) {
  // sort by digit into buckets
  var buckets = {0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[]};
  // curry to create the iterating function for assigning numbers to buckets
  var assignToBuckets = makeAssignToBuckets(placeToSortBy);
  // assign each number to the appropriate bucket
  array.reduce(assignToBuckets, buckets);
  // concat buckets
  var result = [];
  for (var key in buckets) {
    result = result.concat(buckets[key])
  }
  return result;
}
function makeAssignToBuckets (placeToSortBy) {
  // returns a function that sorts by digit
  return function (buckets, number) {
    var numberAsString = String(number);
    var numberOfDigitsBaseZero = numberAsString.length - 1;
    // determine digit at place in question (if no digit, put in the 0 bucket)
    var digit = numberAsString[numberOfDigitsBaseZero - placeToSortBy] || 0;
    // add number to bucket based on digit
    buckets[digit].push(number);
    return buckets;
  }
}


function quickSort (unsortedArray) {
  var less = [];
  var equal = [];
  var greater = [];
  if (unsortedArray.length > 1) {
    var pivotIndex = Math.floor(Math.random()*unsortedArray.length);
    var pivot = unsortedArray[pivotIndex];
    unsortedArray.forEach(function(number){
      if (number < pivot){ less.push(number); }
      if (number === pivot){ equal.push(number); }
      if (number > pivot){ greater.push(number); }
    })
    less = quickSort(less);
    greater = quickSort(greater);
    var sortedArray = [].concat(less, equal, greater);
  } else {
    var sortedArray = unsortedArray;
  }
  return sortedArray;
};
