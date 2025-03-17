const interval_insert = (myl, interval) => {
    let [start, end] = interval;  
    let result = [];  
    let merged = false;  
  
    for (let [s, e] of myl) {
      if (e < start) {  
        result.push([s, e]);  
      } 
      else if (end < s) {  
        if (!merged) {
          result.push([start, end]);  
          merged = true;
        }
        result.push([s, e]);  
      } 
      else {  
        start = Math.min(start, s);  
        end = Math.max(end, e);  
      }
    }
  
    if (!merged) {
      result.push([start, end]);  
    }
  
    return result;  
  }
  console.log(interval_insert([[0, 5], [6, 8], [9, 12]], [3, 7]));
