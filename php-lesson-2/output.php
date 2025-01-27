<?php
    function htmlElement($tag, $content)
    {
        if (!empty($tag)) {
            
            echo "<$tag>$content</$tag>";
        } else {
            echo "Ошибка: тег не может быть пустым!";
        }
    }

    htmlElement("h1", "Привет, Друг!"); 
    htmlElement("p", "Lorem ipsum dolor sit amet consectetur adipisicing."); 
    htmlElement("div", "Здесь могла бы быть твоя реклама"); 
    ?>