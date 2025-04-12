function commander(){
    window.open("commande.html", "_self");
}

function supprimerLigne(element) {
    var ligne = element.parentNode.parentNode; 
    ligne.parentNode.removeChild(ligne); 
}

function subtotal1() {
    let p = document.getElementById("p1").textContent.replace(/[^\d.-]/g, '');
    let q = document.getElementById("qte1").value; 
    let pf1 = document.getElementById("pf1"); 
    let res = Number(p) * Number(q); 
    pf1.innerHTML = res +" DT"; 
    
}

function total(){
    let p1 = document.getElementById("pf1").textContent.replace(/[^\d.-]/g, ''); 
    let p2 = document.getElementById("pf2").textContent.replace(/[^\d.-]/g, ''); 
    let p3 = document.getElementById("pf3").textContent.replace(/[^\d.-]/g, ''); 
    let pf1 = document.getElementById("div"); 
    let res = Number(p1)+Number(p2)+Number(p3); 
    pf1.innerHTML = res +" DT";

}

function subtotal2() {
    let p = document.getElementById("p2").textContent.replace(/[^\d.-]/g, ''); 
    let q = document.getElementById("qte2").value; 
    let pf2 = document.getElementById("pf2"); 
    let res = Number(p) * Number(q); 
    pf2.textContent = res +" DT";
}
function subtotal3() {
    let p = document.getElementById("p3").textContent.replace(/[^\d.-]/g, '');
    let q = document.getElementById("qte3").value; 
    let pf3 = document.getElementById("pf3"); 
    let res = Number(p) * Number(q);
    pf3.textContent = res +" DT"; 
}