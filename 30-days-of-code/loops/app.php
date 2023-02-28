<?php



$n = intval(trim(fgets(STDIN)));

/*
    Without nl2br prints:
    2 x 1 = 2
    2 x 2 = 4
    2 x 3 = 6
*/
for ($i = 1; $i <= 10; $i++){
    echo ($n.' x '.$i.' = '.$n * $i.PHP_EOL);
}

/*
    With nl2br prints:
    2 x 1 = 2<br />
    2 x 2 = 4<br />
    2 x 3 = 6<br />

for ($i = 1; $i <= 10; $i++){
    echo nl2br($n.' x '.$i.' = '.$n * $i.PHP_EOL);
}
*/
