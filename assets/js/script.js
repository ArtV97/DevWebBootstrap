$(function(){
    $('[data-toggle="popover"]').popover();
    $('#compUsadosModal').modal('show');

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
        let nome = valida_text_box('#nome_cadastro');
        let sexo = valida_sexo_radio_button();
        let email = valida_text_box('#email_cadastro');
        let senha = valida_text_box('#senha_cadastro');
        let senha_confirmar = valida_text_box('#confirmar_senha_cadastro');
        let cep = valida_text_box('#cep_cadastro');
        let cidade = valida_text_box('#cidade_cadastro');
        let estado = valida_combo_box('#estado_cadastro');
        let endereco = valida_text_box('#endereco_cadastro');
        // let complemento = valida_text_box('#complemento_cadastro'); //nao é obrigatório
        
        //fazer um AND com todos os campos
        if(nome && sexo && email && senha && cep && estado && cidade && endereco){
            alert("Criando usuário no BD!");
        }
        else{
            alert("Campos em branco");
        }
    });
})

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