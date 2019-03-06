<?php 

function fixBodyText($text){
    //$text = nl2br($text);
    $text = str_replace("\r\n","\n",$text);

    $paragraphs = preg_split("/[\n]{2,}/",$text);
    foreach ($paragraphs as $key => $p) {
        $paragraphs[$key] = "<p>".str_replace("\n","<br>",$paragraphs[$key])."</p><br>";
    }

    $text = implode("", $paragraphs);

    return $text;
}



?>