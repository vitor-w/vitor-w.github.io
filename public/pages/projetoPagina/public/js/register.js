$(document).ready(function(){

    $("#bSend").click(function(){
        if(fVerificaCampos()){
            alert("Campos preenchidos!");
            fLocalComunicaServidor();
        } else {
            alert("Por favor, preencha todos os campos!");
        }
        return false;
    });

});

function fLocalComunicaServidor(){
    var senha_hash_md5 = $.MD5($("#password").val());
    var nome = $("#name").val();

    $.ajax({
        type:"POST", 
        dataType:"JSON",
        url:"../../php/register.php",
        data:{ch_nome:nome, ch_senha:senha_hash_md5},
        success: function(retorno){
            if (retorno.status == "OK"){
                alert("Cadastrado!");
                window.location.href = "success/WebGL-Fluid-Simulation-master/index.html";
            } else {
                alert("Não cadastrado!");
            }
        }
    });
}

function fVerificaCampos(){
    var campos = $("#form-inscricao").serializeArray();

    for (let i = 0; i < campos.length; i++){
        if(campos[i].value == "" || campos[i].value == null){
            return false;
        }
    }
    return true;
}

