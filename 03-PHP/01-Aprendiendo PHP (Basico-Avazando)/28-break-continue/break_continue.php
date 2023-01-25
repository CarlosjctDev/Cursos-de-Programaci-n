<!-- Break sirve para detener un ciclo -->
<?php

$c=1;
while($c<=20){
    echo $c."<br>";
    if($c==10){
        break;
    }
    $c++;
}


$pc=["SD","SSD","GPU","RAM","CPU"];
foreach ($pc as $value) {
    echo "<br> $value";
    if ($value == "GPU"){
        break;
    }
}

echo "<br> ";
foreach ($pc as $value) {
    if ($value == "GPU"){
        ##Continue sirve para pasarse a la siguiente iteracion y omitir todo el codigo que tengamos despues
        continue;
    }
    echo "<br> $value";
}


echo "<br><br> ";
for ($i=1; $i<=10 ; $i++) { 
    if ($i==5){
        continue;
    }
    echo "$i <br>";
}


echo "<br><br> ";
$i=1;
while ($i<=10) { 
    if ($i==5){
        ##SE DEBE INCREMENTAR AQUI POR QUE EL OMITE EL RESTO DEL CODIGO
        $i++;
        continue;
    }
    echo "$i <br>";
    $i++;
}

