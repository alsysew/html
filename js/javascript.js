

    //   alert("Olá seja bem vindo aluno Gama");
    var canal = "Gama Academy";
    var curso = "Curso de Java Script";
    var separador = "  -  ";
    // alert(canal + separador + curso);
    //var nome=prompt ("Entre com o seu nome","Digite aqui o seu nome");
    //alert("Bem vindo "+nome+" a escola Gama Academy");


function funcao1(){
    alert("Meu irmão como você é xarope!!!");
}

function validar(){
    var nome=formulario.nome.value;
    var email=formulario.email.value;
    var senha=formulario.senha.value;

    if(nome ==""){
        alert("Preencha o campo nome");
        formulario.nome.focus();
        return false;
    }

    if(email =="" || email.indexOf('@')==-1){
        alert("Preencha o campo e-mail com um e-mail válido");
        formulario.email.focus();
        return false;
    }

    if(senha =="" || senha.length <= 6){
        alert("Preencha a senha no no mínimo 6 caracteres");
        formulario.email.focus();
        return false;
    }
    alert ("Bem vindo"+nome+" \n Em breve estaremos enviando um e-mail\n")
}
