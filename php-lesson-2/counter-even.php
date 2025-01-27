<?php
$numbers = [2,15,16,11,24,47,3,8,101,102];
for ($i = 0; $i < count($numbers); $i++) {

    if ($numbers[$i] % 2 == 0) {
        echo $numbers[$i] . "<br>";
    }
}
?>