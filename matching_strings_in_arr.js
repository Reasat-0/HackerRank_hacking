function matchingStrings(strings, queries) {
    // Write your code here
    let count_arr = []
    for(var i=0 ; i < queries.length; i++){
        var count = 0;
        for(var j=0 ; j < strings.length; j++){
            if(queries[i] === strings[j]){
                count++
            }
        }
        count_arr.push(count)
    }
    return count_arr;
}
