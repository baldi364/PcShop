

function modifyPc(element)
{
	document.getElementById("modal-mod").style.display = "block",
	
	document.getElementById("modId").value = element.getAttribute('data-id');
	document.getElementById("modNome").value = element.getAttribute('data-nome');
	document.getElementById("modTipo").value = element.getAttribute('data-tipo');
	console.log(document.getElementById("modTipo").value)
	console.log(element.getAttribute('data-nome'));
	console.log(element.getAttribute('data-tipo'));
	console.log(element.getAttribute('data-processore'));
	console.log(element.getAttribute('data-gpu'));
	console.log(element.getAttribute('data-schedaMadre'));
	console.log(element.getAttribute('data-casePc'));
	document.getElementById("modProcessore").value = element.getAttribute('data-processore');
	document.getElementById("modGpu").value = element.getAttribute('data-gpu');
	document.getElementById("modSchedaMadre").value = element.getAttribute('data-schedaMadre');
	document.getElementById("modCasePc").value = element.getAttribute('data-casePc');
	document.getElementById("modScontato").value = element.getAttribute('data-percentualeSconto') == 1 ? 0 : element.getAttribute('data-percentualeSconto') * 100;
	document.getElementById("modRam").value = element.getAttribute('data-ram');
    document.getElementById("modHardDisk").value = element.getAttribute('data-hardDisk');

 	
}

function darkTheme()
{
  var element = document.body;
  element.classList.toggle("dark-mode");
  console.log("Test dark-mode");
}

  function addToCart(button) {
    var quantityInput = button.parentNode.querySelector(".quantity");
    var quantity = parseInt(quantityInput.value);
    var pcId = button.getAttribute("data-id");
    // Effettua qui l'azione per aggiungere al carrello il PC con l'ID specificato e la quantità selezionata
    console.log("Aggiungi al carrello: PC ID=" + pcId + ", Quantità=" + quantity);
  }



