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
function mascaraDeTelefone(telefone){
    const textoAtual = telefone.value;
    const isCelular = textoAtual.length === 9;
    let textoAjustado;
        if(isCelular) {
         // faz alguma coisa 
        } else {
         // faz alguma coisa
        }
    telefone.value = textoAjustado;
}