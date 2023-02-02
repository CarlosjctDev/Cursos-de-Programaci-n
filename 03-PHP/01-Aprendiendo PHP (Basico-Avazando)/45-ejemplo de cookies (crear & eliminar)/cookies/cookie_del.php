<!-- Cookies en php
    Son un mecanismo por el que se almacenan datos en el navegador para monitorizar
    o identificar a los usuarios que vuelvan al sitio web.En otras palabras
    podemos decir que las cookies son pequeños archivos donde almacenamos datos,
    estos archivos se almacenan en el navegador del cliente.

    Las cookies se deben de crear antes del Doctype, ya que han de ser
    generadas antes de que el navegador procese el codigo HTML.

    No es recomendable poner datos sensible del cliente.

    Ejemplo de uso de cookies: preferencias de idioma,seguimiento de anuncios etc.
-->

<?php
    //si le colocamos (+) al time la creamos y si le colocamos(-) la borramos
    setcookie("Idioma","es",time()-60*60*24*365,"/","localhost",false,true);