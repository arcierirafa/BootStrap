function validarFormulario(){
	let nome= document.getElementById("nome-completo").value
	let email= document.getElementById("email").value
	let telefone= document.getElementById("inputFone").value
	let estado= document.getElementById("estado").value
	let cidade= document.getElementById("city").value
	let contato= document.getElementById("motivo-contato").value
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
}
function validarCadastro(){
	let name1= document.getElementById("input-name1").value
	let name2= document.getElementById("input-name2").value
	let email= document.getElementById("input-email").value
	let senha= document.getElementById("input-senha").value
	let caixa= document.getElementById("invalidCheck2").checked
	let alerta= document.getElementById("alert")
	let alertaSucesso= document.getElementById("alerta-sucesso")
	
	if(name1 == ""|| name2 == "" || email == "" || senha == "" || caixa == false){
		alerta.style.display= ""
		
	} else {
		alertaSucesso.style.display=""
	
	}
}
function ocultarAlerta(){
	document.getElementById("alert").style.display= "none"
	document.getElementById("alerta-sucesso").style.display= "none"
}

function mostrarOcultarSenha(){
	var senha=document.getElementById("input-senha")
	
	if(senha.type =="password"){
		senha.type=text
	}else{
		senha.type="password"
}
}	