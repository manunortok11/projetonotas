function naourgente() {
    var novanota = document.createElement("li")
    novanota.classList.add("nota")
    novanota.innerText = document.getElementById("nota").value

    var div = document.getElementById("divnaourgente")
    div.appendChild(novanota)
    
}



function urgente() {
    var novanota = document.createElement("li")
    novanota.classList.add("nota")
    novanota.innerText = document.getElementById("nota").value

    var div = document.getElementById("divurgente")
    div.appendChild(novanota)
    
}



function removernaourgente() {
  var div = document.getElementById("divnaourgente")
  var notas = div.getElementsByClassName("nota")
  if (notas.length > 0) {
    div.removeChild(notas[notas.length - 1])
  } else {
    alert("Não há notas para remover")
  }
}

function removerurgente() {
  var div = document.getElementById("divurgente")
  var notas = div.getElementsByClassName("nota")
  if (notas.length > 0) {
    div.removeChild(notas[notas.length - 1])
  } else {
    alert("Não há notas para remover")
  }
}



function apagartudonaourgente(){
    var notas=document.getElementById("divnaourgente")
    notas.innerHTML=""
}



function apagartudourgente(){
    var notas=document.getElementById("divurgente")
    notas.innerHTML=""
}

