# Sorting
  Bubble, Merge, Quick, Radix

##Quick Sort

  ![quick_sort](https://cloud.githubusercontent.com/assets/2483420/9986983/841b935c-5ff7-11e5-9c6b-2b4589d084d7.gif)

####Complexity

  - Best time: O(n log n)
  - Average time: varies depending on pivots
  - Worst time: O(n^2)

####Approach

  1. if the list has fewer than two elements, return the list because it is sorted
  2. picking random number from the list, called a pivot
  3. iterate through the list of numbers add to listadding each number to a sublist less, equal, or greater based on comparing to the pivot
  4. recurse on the less and greater lists to sort them
  5. combine less, equal, and greater lists in order

####Example:
  ```
  [15 35 21 12] -> pivot 21 -> less:[15 12] equal: [21] greater: [35]
    recurse on less -> pivot 12 -> less:[] equal:[12] greater:[15] -> [12 15]
    recurse on greater -> [35]
  less:[12 15] equal: [21] greater: [35] -> [12 15 21 35]
  ```

##Radix Sort:

  ![radix_sort](https://cloud.githubusercontent.com/assets/2483420/9986697/9d9851d8-5ff4-11e5-86fe-b37aa0642c3f.gif)

####Complexity

  - Best time: O(d n)
  - Average time: O(d n)
  - Worst time: O(d n)

  where d is the number of digits in the longest number (eg for 123, d = 3). When n >> d, this algorithm is _very_ efficient.

####Approach

  1. look at the one's place,
  2. add numbers to buckets that represent each digit (eg 8976 place 0 is 6, so it goes in bucket 6)
  3. combine the buckets in order back into a list
  4. repeat 1-3, looking at the next place until no numbers have that place

####Example
  ```
  [12 35 21 15] -> 1:[21] 2:[12] 5:[35 15]
  1:[21] 2:[12] 5:[35 15] -> [21 12 35 15]
  [21 12 35 15] -> 1:[12 15] 2:[21] 3:[35]
  1:[12 15] 2:[21] 3:[35] -> [12 15 21 35]
  ```
