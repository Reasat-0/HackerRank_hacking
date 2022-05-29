function reverseArray(a) {
    // Write your code here
    // let n = a.length();
    let new_arr = [];
    for(var r = a.length; r > 0; r--){
        new_arr.push(a[r-1])
    }
    
    return new_arr;

}
