/*
  Radix Sort:

  1. look at the one's place,
  2. add numbers to buckets that represent each digit (eg 8976 place 0 is 6, so it goes in bucket 6)
  3. combine the buckets in order back into a list
  4. repeat 1-3, looking at the next place until no numbers have that place

  [12 35 21 15] -> 1:[21] 2:[12] 5:[35 15]
  1:[21] 2:[12] 5:[35 15] -> [21 12 35 15]
  [21 12 35 15] -> 1:[12 15] 2:[21] 3:[35]
  1:[12 15] 2:[21] 3:[35] -> [12 15 21 35]
*/


function radixSort (unsortedArray) {
  // fill in
  return sortedArray;
};
