<?php
function elementHtml($tag, $content, $count = 1) {
    if (!empty($tag)) {
        for ($i = 0; $i < $count; $i++) {
            echo "<$tag>$content</$tag>";
        }
    } else {
        echo "Ошибка: тег не может быть пустым!";
    }
}

elementHtml("p", "Давайте жить дружно:D", 3); // 
elementHtml("div", "Здесь могла бы быть твоя фотография", 2); // 
?>