function optimizeIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < intervals.length - 1; i++) {

      if (intervals[i][1] >= intervals[i + 1][0]) {
        intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1])
        intervals.splice(i + 1, 1)
        i--
      }
    }
  
    return intervals
}
console.log(optimizeIntervals([[5, 8], [2, 7], [3, 4]])); //[[2, 8]]

//console.log(optimizeIntervals([[1, 3], [8, 10], [2, 6]]));// [[1, 6], [8, 10]]

//console.log(optimwizeIntervals([[3, 4], [1, 2], [5, 6]]));// [[1, 2], [3, 4], [5, 6]]