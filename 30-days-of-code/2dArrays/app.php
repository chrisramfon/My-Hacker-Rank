<?php

$db = array();

for($i = 0; $i <= 3; $i++){
    for($j = 0; $j <= 3; $j++){
        
        $sum = 0;
        
        $sum += $arr[$i][$j];
        $sum += $arr[$i][$j + 1];
        $sum += $arr[$i][$j + 2];
        $sum += $arr[$i + 1][$j + 1];
        $sum += $arr[$i + 2][$j];
        $sum += $arr[$i + 2][$j + 1];
        $sum += $arr[$i + 2][$j + 2];
           
        array_push($db, $sum);
    }
}

echo (max($db));