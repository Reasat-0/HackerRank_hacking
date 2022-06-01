function rotateLeft(d, arr) {
    // Write your code here
    
    return arr.concat(arr.splice(0,d))
}
