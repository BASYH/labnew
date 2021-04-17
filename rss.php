<?php


   $tek=$_GET["tek"];
	$url = "http://lenta.ru/rss/"; // Адрес до RSS-ленты

   $rss = simplexml_load_file($url);       //Интерпретирует XML-файл в объект
   //цикл для обхода всей RSS ленты
   $schiotchik=0;
   foreach ($rss->channel->item as $item) {
       $schiotchik++;
       echo ("<section>");
       echo '<div class="title-rss">'.$item->title.'</div>';       //выводим на печать заголовок статьи
       echo '<div>'.$item->description.'</div>'; 
       echo "<img src=\"". (string)$item->enclosure['url'][0]. "\" class='rss-img'>";

       echo("</section>");
       if($schiotchik==$tek)break;
   }

?>