<?php

function distance($a, $b)
{
    echo PHP_EOL;

    if ( strlen($a) != strlen($b) ) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }

    $hamming = 0;

    for ($letter = 0; $letter < strlen($a); $letter++) {
        if ($a[$letter] != $b[$letter]) {
            $hamming++;
        }
    }

    return $hamming;
}
