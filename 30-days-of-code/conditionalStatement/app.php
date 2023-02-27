<?php


$N = intval(trim(fgets(STDIN)));


if (($N % 2) > 0){
    echo ('Weird');
} else if ($N >= 2 && $N <= 5){
    echo ('Not Weird');
} else if ($N >= 6 && $N <= 20){
    echo ('Weird');
}else if ($N > 20){
    echo ('Not Weird');
}
