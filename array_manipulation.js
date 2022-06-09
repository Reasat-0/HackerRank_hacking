function arrayManipulation(n, queries) {
    // Write your code here
    var output_array = new Array(parseInt(n,10))
        output_array.fill(0)
        
        
    
    for(var i= 0; i < queries.length; i++){
        let a = queries[i][0],
            b = queries[i][1],
            
            k = queries[i][2]
            
        for(var r=a-1; r <=b-1; r++){
            output_array[r] = output_array[r] + k
        }
    }
    return Math.max.apply(null, output_array);

}