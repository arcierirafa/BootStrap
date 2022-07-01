function validarFormulario (){
	let nome= document.getElementById ("nome-completo").value
	let email= document.getElementById ("email").value
	let telefone= document.getElementById ("inputFone").value
	let estado= document.getElementById ("estado").value
	let cidade= document.getElementById ("city").value
	let contato= document.getElementById ("motivo-contato").value
	let caixaTexto= document.getElementById ("caixaTexto").value

	if(nome == ""){
		alert("Preencha o campo do nome:")
	}
	if(email == ""){
		alert("Preencha o campo do email:")
		}
	if(telefone == "" || telefone.length <8){
		alert("Preencha o campo do telefone:")
		}
	if(estado == ""){
		alert("Preencha o campo do estado:")
	}
	if(cidade == ""){
		alert("Preencha o campo da cidade:")
	}
	if(contato == ""){
		alert("Preencha o campo do contato:")
	}
	if(caixaTexto == ""){
		alert("Preencha o campo da caixa de texto")
	}
	console.log (nome)
	console.log (email)
	console.log (telefone)
	console.log (estado)
	console.log (cidade)
	console.log (contato)
	console.log (caixaTexto)

}
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('inputFone').onkeyup = function(){
		mascara( this, mtel );
	}
}

 