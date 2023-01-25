<?php

$productos =[
    ["codigo" =>"A001","descripcion"=>"Mouse"],
    ["codigo" =>"A002","descripcion"=>"Teclado"],
    ["codigo" =>"A003","descripcion"=>"Monitor"],
    ["codigo" =>"A004","descripcion"=>"Impresor"]
    
];

foreach($productos as $valor){
    echo $valor["codigo"]."-".$valor["descripcion"]."<br>";
}