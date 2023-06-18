var prezzototale = 0;
var priceCPU =0;
var priceGPU =0;
var priceSM =0;
var priceCPC =0;
var priceRAM =0;
var priceHD =0;

function addCPU(element) {
  var prezzoCPU = parseFloat(element.getAttribute('data-pprezzo'));
  document.getElementById("nCPU").textContent = element.getAttribute('data-pnome');
  document.getElementById("pCPU").textContent = prezzoCPU.toFixed(2) + "€";

  priceCPU = prezzoCPU;
  prezzototale =  0;
  prezzototale += prezzoCPU;
    let cpu_id = element.getAttribute("data-pid");
    console.log(element.getAttribute("data-pid"));
   document.getElementById("selectedCpuId").value = cpu_id;

  calculateTotal();

}

function addGPU(element) {
  var prezzoGPU = parseFloat(element.getAttribute('data-gprezzo'));
  document.getElementById("nGPU").textContent = element.getAttribute('data-gnome');
  document.getElementById("pGPU").textContent = prezzoGPU.toFixed(2) + "€";
  prezzototale -= parseFloat(document.getElementById("pGPU").textContent);
  prezzototale += prezzoGPU;
  priceGPU = prezzoGPU;
    let gpu_id = element.getAttribute("data-gid");
    console.log(element.getAttribute("data-gid"));
    document.getElementById("selectedGpuId").value = gpu_id;
   calculateTotal();
}

function addSCHEDAMADRE(element) {
  var prezzoSM = parseFloat(element.getAttribute('data-smprezzo'));
  document.getElementById("nSM").textContent = element.getAttribute('data-smnome');
  document.getElementById("pSM").textContent = prezzoSM.toFixed(2) + "€";
  prezzototale -= parseFloat(document.getElementById("pSM").textContent);
  prezzototale += prezzoSM;
  priceSM = prezzoSM;

  let schedamadre_id = element.getAttribute("data-smid");
  document.getElementById("selectedSchedamadreId").value = schedamadre_id;
  calculateTotal();


}

function addCASEPC(element) {
  var prezzoCASE = parseFloat(element.getAttribute('data-cpcprezzo'));
  document.getElementById("nCASE").textContent = element.getAttribute('data-cpcnome');
  document.getElementById("pCASE").textContent = prezzoCASE.toFixed(2) + "€";
  prezzototale -= parseFloat(document.getElementById("pCASE").textContent);
  prezzototale += prezzoCASE;
    let casepc_id = element.getAttribute("data-cpcid");
  document.getElementById("selectedCasepcId").value = casepc_id;


  priceCPC = prezzoCASE;

   calculateTotal();
}

function addRAM(element) {
  var prezzoRAM = parseFloat(element.getAttribute('data-ramprezzo'));
  document.getElementById("nRAM").textContent = element.getAttribute('data-ramnome');
  document.getElementById("pRAM").textContent = prezzoRAM.toFixed(2) + "€";
  prezzototale -= parseFloat(document.getElementById("pRAM").textContent);
  prezzototale += prezzoRAM;
    let ram_id = element.getAttribute("data-ramid");
    document.getElementById("selectedRamId").value = ram_id;

  priceRAM = prezzoRAM;

   calculateTotal();
}

function addHARDDISK(element) {
  var prezzoHD = parseFloat(element.getAttribute('data-hdprezzo'));
  document.getElementById("nHD").textContent = element.getAttribute('data-hdnome');
  document.getElementById("pHD").textContent = prezzoHD.toFixed(2) + "€";
  prezzototale -= parseFloat(document.getElementById("pHD").textContent);
  prezzototale += prezzoHD;
  let harddisk_id = element.getAttribute("data-hdid");
  document.getElementById("selectedHarddisk").value = harddisk_id;
  priceHD = prezzoHD;

   calculateTotal();
}

function calculateTotal() {

  prezzototale = priceCPU + priceGPU + priceSM + priceCPC + priceRAM + priceHD;
  document.getElementById("TOTAL").textContent =  prezzototale.toFixed(2);
  console.log(priceCPU + priceGPU + priceSM + priceCPC + priceRAM + priceHD)
  console.log(document.getElementById("TOTAL").textContent);
}


function rimuoviComponente(element, componente)
{
    var rigaComponente = element.closest('tr'); //ottenere la riga corrispondente al componente
    var prezzoComponente = parseFloat(rigaComponente.querySelector('td:last-child').textContent); //ottenre il prezzo del componente

    prezzototale -= prezzoComponente;

    document.getElementById("TOTAL").textContent = prezzototale.toFixed(2);

    switch(componente)
    {
        case "CPU":
            rigaComponente.querySelector('#nCPU').textContent = '---';
            rigaComponente.querySelector('#pCPU').textContent = '---';

            priceCPU = 0;
            calculateTotal();
        break;

        case "GPU":
             rigaComponente.querySelector('#nGPU').textContent = '---';
             rigaComponente.querySelector('#pGPU').textContent = '---';

             priceGPU = 0;
             calculateTotal();
         break;

         case "SM":
             rigaComponente.querySelector('#nSM').textContent = '---';
             rigaComponente.querySelector('#pSM').textContent = '---';

             priceSM = 0;
             calculateTotal();
         break;

         case "CASE":
             rigaComponente.querySelector('#nCASE').textContent = '---';
             rigaComponente.querySelector('#pCASE').textContent = '---';

             priceCPC = 0;
             calculateTotal();
         break;

         case "RAM":
             rigaComponente.querySelector('#nRAM').textContent = '---';
             rigaComponente.querySelector('#pRAM').textContent = '---';

             priceRAM = 0;
             calculateTotal();
         break;

         case "HDD":
           rigaComponente.querySelector('#nHD').textContent = '---';
           rigaComponente.querySelector('#pHD').textContent = '---';

           priceHD = 0;
           calculateTotal();
         break;
    }
}




 /*document.getElementById("modalNewItemGPU").onclick = function()
{
	document.getElementById("modal-addGPU").style.display = "block";
	console.log(hello)

} */

document.getElementById("closeAddGPU").onclick = function()
{
	document.getElementById("modal-addGPU").style.display = "none";
}

document.getElementById("closeModGPU").onclick = function()
{
	document.getElementById("modal-modGPU").style.display = "none";
}

window.onclick = function(event)
{
	if(event.target == document.getElementById("modal-modGPU"))
	{
		document.getElementById("modal-modGPU").style.display = "none";
	}

	if(event.target == document.getElementById("modal-addGPU"))
	{
		document.getElementById("modal-addGPU").style.display = "none";
	}
}
































