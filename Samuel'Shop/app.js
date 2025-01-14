// *****************************CODE POUR LE CARROUSEL*****************************
// Au chargement de la page: appel fction anonyme avec 8img (variable nbr) à la position 0,
// récupération éléments JS (container et boutons g et d), 
// modification largeur container
// création traitement itératif qui va créer les 8img dans des div  (création des div, application d'une class et spécification des 8 images et ajout des div au container principal)
document.body.onload=function(){
    nbr=8;
    p=0;
    container=document.getElementById("container");// stocke une valeur enregistrée pour être utilisée
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(190*nbr)+"px";
    for(i=1; i<=nbr; i++){
        //méthode JavaScript qui permet de récupérer tous les éléments du DOM (Document Object Model)
        document.getElementsByClassName("card");// carte
        div.className="card";
        div.style.backgroundImage="url('img/im"+i+".jpg')";
        container.appendChild(div);
    }
}

// programmation du bouton gauche:au click appel d'une fonction  : quand on clique à gauche on déplace le carrousel vers la gauche, condition d'arret du bouton gauche: quand il est à p0 (position intiiale): quand j 'atteins la valeur -7 je cesse d'animer mon carrousel (condition d'arret) sinon je décrémente de 1(p--)
// animation avec une transition CSS 
g.onclick=function(){
   //Fonction qui sera utilisée lorsque l'utilisateur clique sur le DOM
    if(p==-nbr+1) {
        p=0;
    } else{
        p--;  
    }

    container.style.transform="translate("+p*190+"px)";
    container.style.transition="all 0.5s ease";
}

// programmation bouton droit: j'incrémente p de 1 jusqu'à la condition d'arrêt p-7(p=-nbr+1),
// style CSS pour déplacer le container de 190px à chaque clic, et transition de 0.5s
d.onclick=function(){
    
    if(p==0) {
        p=-nbr+1;
    } else{
        p++;
    }
//La propriété style permet de modifier directement les styles en ligne de l'élément.
    container.style.transform="translate("+p*190+"px)";
    container.style.transition="all 0.5s ease";
}


// ****************************CODE POUR LA POP UP***************************************
 
//creation de la popup
createPopup();

//recuperation des boutons
var b = document.querySelectorAll(".card button");

//on boucle sur chaque bouton
for (let index = 0; index < b.length; index++) {
    //ajout d un id à chaque bouton
    b[index].setAttribute("id", "bouton"+[index]);

    //qd on clique sur le bouton
     b[index].addEventListener('click', ()=>{

                //recuperation du titre (destination voyage),du texte(description voyage) et de l'image (du voyage)de la div contenant le bouton[index]
                var thebouton = document.getElementById("bouton"+[index]);       
                titre=thebouton.parentNode.querySelector('h2').textContent;
                text=thebouton.parentNode.querySelector('.cardContent').textContent;
                img_index=index+1; //numero de limage

                //selection de la popup
                var popup = document.querySelector("#popup"); 
                popup.innerHTML='<img src="./img/img'+img_index+'.jpg" alt="img"></img>'+
                    '<h2>'+titre+'</h2><p>'+text+'</p>';

                //afficher/masquer quand on clique sur le bouton
                if (popup.style.display === 'block') {
                    popup.style.display = 'none';
                } else {
                    popup.style.display = 'block';
                }      

         })
}

// Fonction pour créer la popup
function createPopup() {
//     // Création de l'élément div
     var popup = document.createElement("div");
     popup.setAttribute("id","popup");
     popup.style.display = 'none';
//     // Ajout du contenu HTML de la popup
     popup.innerHTML = "<img><p>Détails du voyage</p>";
    
//     // Style de la popup
     popup.style.position = "fixed";
     popup.style.top = "50%";
     popup.style.left = "50%";
     popup.style.transform = "translate(-50%, -50%)";
     popup.style.backgroundColor = "#fff";
     popup.style.padding = "20px";
     popup.style.border = "1px solid #000";
     popup.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.3)";
    
//     // Ajout de la popup au body de la page
     document.body.appendChild(popup);
}
  

// Fonction pour rétrécir la carte par défaut
function shrinkDefaultCard() {
    document.getElementById('defaultCard').style.transform = 'scale(1)';
  }

  // Fonction pour agrandir la carte survolée et rétrécir les autres
  function enlargeCard(card) {
    // Rétrécir toutes les cartes
    var cards = document.getElementsByClassName('card1');
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.transform = 'scale(1)';
    }
    // Agrandir la carte survolée
    card.style.transform = 'scale(1.2)';
  }

  // Ajouter l'événement de survol pour agrandir la carte
  var cards = document.getElementsByClassName('card1');
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function() {
      enlargeCard(this);
    });
  }