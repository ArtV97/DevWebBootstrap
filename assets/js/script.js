$(function(){
    $('[data-toggle="popover"]').popover();
    $('#compUsadosModal').modal('show');
    show_like_dislike();

    $('#botao_login').click(function(){
        let email = valida_text_box('#email_login');
        let senha = valida_text_box('#senha_login');
        if(email && senha){
            alert("Acessando BD para login!");
        }
        else{
            alert("Campos em branco");
        }
    });

    $('#botao_cadastrar').click(function(){
        let form;
        let nome = valida_text_box('#nome_cadastro');
        let sexo = valida_sexo_radio_button();
        let email = valida_text_box('#email_cadastro');
        let senha = valida_text_box('#senha_cadastro');
        let senha_confirmar = confirma_senha('#senha_cadastro', '#confirmar_senha_cadastro');
        let cep = valida_text_box('#cep_cadastro');
        let cidade = valida_text_box('#cidade_cadastro');
        let estado = valida_combo_box('#estado_cadastro');
        let endereco = valida_text_box('#endereco_cadastro');
        let interesses = valida_check_box('.interesses');
        // let complemento = valida_text_box('#complemento_cadastro'); //nao é obrigatório
        
        //fazer um AND com todos os campos
        if(nome && sexo && email && senha && senha_confirmar && cep && estado && cidade && endereco && interesses){
            alert("Criando usuário no BD!");
        }
        else{
            alert("Campos em branco");
        }
    });

    $('#btn-like').click(function(){
        let like = $('#like');
        let dislike = $('#dislike');

        like.data('like', like.data('like') + 1);
        if(document.getElementById('btn-dislike').disabled){
            dislike.data('dislike', dislike.data('dislike') - 1);
        }
        $('#btn-like').attr("disabled", true)
        $('#btn-dislike').attr("disabled", false)
        show_like_dislike();
    });

    $('#btn-dislike').click(function(){
        let like = $('#like');
        let dislike = $('#dislike');

        dislike.data('dislike', dislike.data('dislike') + 1);
        if(document.getElementById('btn-like').disabled){
            like.data('like', like.data('like') - 1);
        }
        $('#btn-dislike').attr("disabled", true)
        $('#btn-like').attr("disabled", false)
        show_like_dislike();
    });
})

function show_like_dislike(){
    $('#like').text($('#like').data('like'));
    $('#dislike').text($('#dislike').data('dislike'));
}

function valida_text_box(param){
    let id_text_box = $(param);
    
    if(id_text_box.val() == ''){
        id_text_box.addClass("is-invalid");
        id_text_box.removeClass("is-valid");
        return false;
    }
    else{
        id_text_box.addClass("is-valid");
        id_text_box.removeClass("is-invalid");
        return true;
    }
}

function confirma_senha(id_senha, id_confirma_senha){
    let senha = $(id_senha);
    let confirma_senha = $(id_confirma_senha);
    if(senha.val() != confirma_senha.val()){
        confirma_senha.addClass("is-invalid");
        confirma_senha.removeClass("is-valid");
        return false;
    }
    else if(confirma_senha.val() != ''){
        confirma_senha.removeClass("is-invalid");
        confirma_senha.addClass("is-valid");
        return true;
    }
}

function valida_sexo_radio_button(){
    let sexo_masc = $('#sexo-masc');
    let sexo_fem = $('#sexo-fem');
    let botoes = $("input[name='sexo']:checked");

    if(botoes.length === 0){
        sexo_masc.addClass("is-invalid");
        sexo_masc.removeClass("is-valid");
        sexo_fem.addClass("is-invalid");
        sexo_fem.removeClass("is-valid");
        $('#sexo-feedback').addClass("d-block");
        return false;
    }
    else{
        sexo_masc.addClass("is-valid");
        sexo_masc.removeClass("is-invalid");
        sexo_fem.addClass("is-valid");
        sexo_fem.removeClass("is-invalid");
        $('#sexo-feedback').removeClass("d-block");
        return true;
    }
}

function valida_combo_box(param){
    let id_combo_box = $(param);
    if(id_combo_box.val() == ''){
        id_combo_box.addClass("is-invalid");
        id_combo_box.removeClass("is-valid");
        return false;
    }
    else{
        id_combo_box.addClass("is-valid");
        id_combo_box.removeClass("is-invalid");
        return true;
    }
}

function valida_check_box(param){
    let id_check_box = $(`input${param}`);
    if($(`input${param}:checked`).length === 0){
        $.each(id_check_box, function(index, value){
            $(`#${value.id}`).addClass("is-invalid");
            $(`#${value.id}`).removeClass("is-valid");
        });
        return false;
    }
    else{
        $.each(id_check_box, function(index, value){
            $(`#${value.id}`).removeClass("is-invalid");
            $(`#${value.id}`).addClass("is-valid");
        });
        return true;
    }
}
