/*
  Quick Sort:

  1. if the list has fewer than two elements, return the list because it is sorted
  2. picking random number from the list, called a pivot
  3. iterate through the list of numbers add to listadding each number to a sublist less, equal, or greater based on comparing to the pivot
  4. recurse on the less and greater lists to sort them
  5. combine less, equal, and greater lists in order

  [15 35 21 12] -> pivot 21 -> less:[15 12] equal: [21] greater: [35]
    recurse on less -> pivot 12 -> less:[] equal:[12] greater:[15] -> [12 15]
    recurse on greater -> [35]
  less:[12 15] equal: [21] greater: [35] -> [12 15 21 35]
*/

function quickSort (unsortedArray) {
  // fill in
  return sortedArray;
};
