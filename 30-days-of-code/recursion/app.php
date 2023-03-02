function factorial($n) {
    // Write your code here
    
    return $n > 1 ? $n * factorial($n - 1) : $n;
}