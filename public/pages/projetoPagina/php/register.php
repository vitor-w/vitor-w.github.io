<?php
    $nome = $_POST["ch_nome"];
    $senha = $_POST["ch_senha"];

    if($nome == "bea" && $senha == "7cf64379eb6f29a4d25c4b6a2df713e4"){
        $retorno["status"] = "OK";
    }else{
        $retorno["status"] = "NOK";
    }

    echo json_encode($retorno);
?>