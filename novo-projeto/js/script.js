function validarFormulario(){
	let nome= document.getElementById("nome-completo").value
	let email= document.getElementById("email").value
	let telefone= document.getElementById("inputFone").value
	let estado= document.getElementById("estado").value
	let cidade= document.getElementById("city").value
	let contato= document.getElementById("motivo-contato").value
	let caixaTexto= document.getElementById ("caixaTexto").value
	let name1= document.getElementById("input-name1").value
	let name2= document.getElementById("input-name2").value
	let alerta= document.getElementById("alert")
	
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
	if(name1 == ""){
		alerta.style.display= ""
			
	}
	console.log (name1)
	

}
function validarCadastro(){
	let name1= document.getElementById("input-name1").value
	let name2= document.getElementById("input-name2").value
	let alerta= document.getElementById("alert")
	
	if(name1 == ""){
		alerta.style.display= ""
		console.log(alerta) 		
	}
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

	