var expect = chai.expect;

/*
xdescribe('bubbleSort', function() {
  var array1 = [0,-1,1,5,-5,2,3,7];
  var copyOfArray1 = [0,-1,1,5,-5,2,3,7];
  var sortedArray1 = [-5,-1,0,1,2,3,5,7];

  it('should sort an array of integers', function() {
    bubbleSort(array1).forEach(function(element, index){
      expect(element).to.be(sortedArray1[index]);
    });
  });
  it('should not mutate the original array', function() {
    bubbleSort(array1);
    array1.forEach(function(element, index){
      expect(element).to.be(copyOfArray1[index]);
    });
  });
});

xdescribe('mergeSort', function() {
  var array1 = [0,-1,1,5,-5,2,3,7];
  var copyOfArray1 = [0,-1,1,5,-5,2,3,7];
  var sortedArray1 = [-5,-1,0,1,2,3,5,7];

  it('should sort an array of integers', function() {
    mergeSort(array1).forEach(function(element, index){
      expect(element).to.be(sortedArray1[index]);
    });
  });
  it('should not mutate the original array', function() {
    mergeSort(array1);
    array1.forEach(function(element, index){
      expect(element).to.be(copyOfArray1[index]);
    });
  });
  it('should sort a large array faster than bubbleSort', function(){
    var array = [];
    for(var i=0; i<1e3; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    var bubbleSortResults = timer(bubbleSort, array);
    var mergeSortResults = timer(mergeSort, array);
    mergeSortResults.result.forEach(function(element, index){
      expect(element).to.be(bubbleSortResults.result[index]);
    });
    expect(mergeSortResults.timeElapsed).to.be.below(bubbleSortResults.timeElapsed);
  });
});
*/
describe('quickSort', function() {
  var array, sortedArray;
  beforeEach(function(){
    array = [1234, 4521, 2252, 5103, 10001, 21, 235];
    sortedArray = [21, 235, 1234, 2252, 4521, 5103, 10001];
  });

  it('should sort an array of integers', function() {
    expect(quickSort(array)).to.deep.equal(sortedArray);
  });

  it('works for negative numbers', function(){
    array.push(-3);
    sortedArray.unshift(-3);
    expect(quickSort(array)).to.deep.equal(sortedArray);
  })

  it('works for decimals', function(){
    array.push(7.8);
    sortedArray.unshift(7.8);
    expect(quickSort(array)).to.deep.equal(sortedArray);
  })
});

describe('radixSort', function() {
  var array, sortedArray;
  beforeEach(function(){
    array = [1234, 4521, 2252, 5103, 10001, 21, 235];
    sortedArray = [21, 235, 1234, 2252, 4521, 5103, 10001];
  });

  it('should sort an array of integers', function() {
    expect(radixSort(array)).to.deep.equal(sortedArray);
  });

  xit('works for characters', function(){
    var array = ['bob', 'alice', 'carl', 'thx1138'] ;
    var sortedArray = ['alice', 'bob', 'carl', 'thx1138'] ;
    expect(radixSort(array)).to.deep.equal(sortedArray);
  })

  xit('works for decimals', function(){
    array.push(7.8);
    sortedArray.unshift(7.8);
    expect(radixSort(array)).to.deep.equal(sortedArray);
  })

  xit('works for negative numbers', function(){
    array.push(-3);
    sortedArray.unshift(-3);
    expect(radixSort(array)).to.deep.equal(sortedArray);
  })
});

/*
xdescribe('Extra Credit', function() {
  it('sort non-integer arrays');
  it('write tests to compare sorting speeds for large arrays');
  it('write tests for sorting stability');
  it('implement selectionSort');
  it('implement insertionSort');
});
*/

function timer(sortingAlgorithm, array){
  // copy array;
  var tempArray = array.slice();
  // time the algorithm
  var start = new Date().getTime();
  var result = sortingAlgorithm(tempArray);
  var end = new Date().getTime();
  return {
    timeElapsed : end - start,
    result      : result
  };
};
