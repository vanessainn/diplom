// Dialog

document.querySelector('#margherita').addEventListener('click', () => {
  document.querySelector('#dialog-margherita').showModal();    
})

document.querySelector('.close-margherita').addEventListener('click', () => {
  document.querySelector('#dialog-margherita').close();    
})

document.querySelector('#spinaci-ricotta').addEventListener('click', () => {
  document.querySelector('#dialog-spinaci-ricotta').showModal();    
})

document.querySelector('.close-spinaci-ricotta').addEventListener('click', () => {
  document.querySelector('#dialog-spinaci-ricotta').close();    
})

document.querySelector('#prosciutto-funghi').addEventListener('click', () => {
  document.querySelector('#dialog-prosciutto-funghi').showModal();    
})

document.querySelector('.close-prosciutto-funghi').addEventListener('click', () => {
  document.querySelector('#dialog-prosciutto-funghi').close();    
})

document.querySelector('#salame').addEventListener('click', () => {
  document.querySelector('#dialog-salame').showModal();    
})

document.querySelector('.close-salame').addEventListener('click', () => {
  document.querySelector('#dialog-salame').close();    
})

document.querySelector('#quattro-formaggi').addEventListener('click', () => {
  document.querySelector('#dialog-quattro-formaggi').showModal();    
})

document.querySelector('.close-quattro-formaggi').addEventListener('click', () => {
  document.querySelector('#dialog-quattro-formaggi').close();    
})

document.querySelector('#prosciutto-ananas').addEventListener('click', () => {
  document.querySelector('#dialog-prosciutto-ananas').showModal();    
})

document.querySelector('.close-prosciutto-ananas').addEventListener('click', () => {
  document.querySelector('#dialog-prosciutto-ananas').close();    
})

document.querySelector('#tonno-cipolla').addEventListener('click', () => {
  document.querySelector('#dialog-tonno-cipolla').showModal();    
})

document.querySelector('.close-tonno-cipolla').addEventListener('click', () => {
  document.querySelector('#dialog-tonno-cipolla').close();    
})

document.querySelector('#salame-piccante').addEventListener('click', () => {
  document.querySelector('#dialog-salame-piccante').showModal();    
})

document.querySelector('.close-salame-piccante').addEventListener('click', () => {
  document.querySelector('#dialog-salame-piccante').close();    
})

//Tabs

function openInfo(evt, infoName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();