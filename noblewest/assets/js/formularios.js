if(document.addEventListener("DOMContentLoaded",function(e){const t=document.querySelector(".btn-dan");t.disabled=!0}),"undefined"!=typeof btn){const btn=documennt.querySelector("button")}else console.log("You are on the server");function changeLiability(){document.getElementById("boton").disabled=!1;const e=document.getElementById("idLiability");e.classList.add("cardActive"),document.getElementById("enlace").href="product-liability",document.getElementById("idPhysical").classList.remove("cardActive"),document.getElementById("idCoverage").classList.remove("cardActive")}function changePhysical(){document.getElementById("boton").disabled=!1;const e=document.getElementById("idPhysical");e.classList.add("cardActive"),document.getElementById("enlace").href="physical",document.getElementById("idLiability").classList.remove("cardActive"),document.getElementById("idCoverage").classList.remove("cardActive")}function changeCoverage(){document.getElementById("boton").disabled=!1;const e=document.getElementById("idCoverage");e.classList.add("cardActive"),document.getElementById("enlace").href="pcoverage",document.getElementById("idLiability").classList.remove("cardActive"),document.getElementById("idPhysical").classList.remove("cardActive")}