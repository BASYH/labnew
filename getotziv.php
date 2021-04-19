<?php
$schiotchik=0;
$xml = simplexml_load_file("otziv.xml");
$cn = count($xml->otziv);
        for($i = 0; $i <= $cn; $i++){
          $schiotchik++;
          echo("<br>");
          echo("<section class='otz'>");
       echo "Имя: ".$xml->otziv[$i]->name . "<br>";
       echo "Почта: ".$xml->otziv[$i]->email . "<br>";
       echo "Отзыв: ".$xml->otziv[$i]->otz . "<br>";
       echo("</section>");
       if($schiotchik==$cn)break;
        }

?>