function valida_vacio() {
  if (document.getElementById("titulo").value == '') {
    document.getElementById("guardar").disabled = true;
  } else {
    document.getElementById("guardar").disabled = false;
  }
}

function valida_vacio_boton(form) {
  
  if (form.titulo.value == "") //comprueba si el campo nombre esta vacío
	{
 		alert ("Campo título no puedes dejarlo vacío");
		form.titulo.focus();  //posicionarse en el campo vacío
		return false;
	}
	else {
    return true;    
  }
}