function dynamicArray(n, queries) {
    // Write your code here
    var latstAnswer = 0;
    var arr = []
    var ans_arr = []
    
    for(var i=0 ; i<n; i++){
        arr.push([])
    }
    for(var j = 0; j < queries.length; j++){
        let p = queries[j][0],
            x= queries[j][1],
            y = queries[j][2],
            idx = ( x ^ latstAnswer ) % n;
        if(p === 1 ){
            arr[idx].push(y)
        }
        else if(p === 2){
            latstAnswer = arr[idx][y%arr[idx].length]
            ans_arr.push(latstAnswer)
        }
    }
    return ans_arr;

}
